import { useEffect, useState } from 'react'
import type { CharacterType } from '../Types/character';
import { Link } from 'react-router';

const Characters = () => {
        /* Peticion get para obtener characters */
    const [characterStatus, setCharacter] = useState<CharacterType[]>([]);

    const getCharacters = () => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => {
                console.log(data.results);
                setCharacter(data.results);
            });
    }
    /* Ejecutamos peticion solo una vez al renderizar el componente por primera vez. */
    useEffect(()=>{
        getCharacters();
    }, []);

    return (
        <>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                {characterStatus.map(character => (
                    <Link to={`/characters/${character.id}`}>
                        <div key={character.id}>
                            <div className='relative'>
                                <img className='' key={character.id} src={character.image}  />
                                <div className='absolute inset-y-0 right-8 md:right-16 rotate-37 md:rotate-33 '>
                                    <div className=' bg-white/80 p-1 md:p-2 '>
                                        <h2 className='text-xs md:text-sm font-semibold tracking-widest max-w-[80px]'>{character.name}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Characters;