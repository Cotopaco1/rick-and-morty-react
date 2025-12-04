import { useParams } from "react-router";
import { useEffect, useState } from 'react'
import type { CharacterType } from "../Types/character";
import HeartIcon from "../assets/heart.svg";
import DeadIcon from "../assets/dead.svg";
import QuestionMarkIcon from "../assets/question-mark.svg";
import CharacterElementList from "./CharacterElementList";

export default function CharacterShow() {

    let { id } = useParams();
    const [characterStatus, setCharacter] = useState<CharacterType | null>(null);
    const [loading, setLoading] = useState(true);

    const getCharacter = (id: number) => {
        setLoading(true);
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setCharacter(data);
            }).finally(() => setLoading(false));
    }
    const getStatusIcon = (status: 'alive' | 'dead' | 'unknown') => {
        console.log(status);
        switch (status.toLowerCase()) {
            case 'alive':
                return HeartIcon;
            case 'dead':
                return DeadIcon;
            case 'unknown':
                return QuestionMarkIcon;
        }
    }

    useEffect(function () {
        if (id) getCharacter(Number(id));

    }, []);

    if (loading || !characterStatus) return <div>Cargando....</div>;
    return (
        <div className="flex flex-col md:flex-row gap-4">
            {/* Imagen */}
            <div className="w-full md:max-w-[600px]">
                <img className="w-full" src={characterStatus?.image} alt="imagen" />
            </div>
            {/* Data */}
            <div className="flex flex-col gap-4 bg-secondary text-secondary-foreground py-4 px-2 flex-1 ">
                <h1 className="">{characterStatus?.name}</h1>
                <div className="flex flex-col gap-4 ">
                    <p>Estado : <img title={characterStatus.status} className="inline" width="30" src={getStatusIcon(characterStatus.status)} alt="" /></p>
                    <CharacterElementList icon="location" title="Localización" >{characterStatus.location.name}</CharacterElementList>
                    <CharacterElementList icon="gender" title="Genero" >{characterStatus.gender}</CharacterElementList>
                    <CharacterElementList icon="specie" title="Especie" >{characterStatus.species}</CharacterElementList>
                </div>
            </div>
        </div>
    )
}