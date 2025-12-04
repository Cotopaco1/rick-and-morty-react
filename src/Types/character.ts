type Character = {
    image : string;
    id : number;
    created : string;
    gender : string;
    location : {
        url : string;
        name : string;
    }
    episode : [];
    name : string;
    origin : {};
    species : string;
    status : 'alive'|'dead'|'unknown';
    type : string;
    url : string;
    
}

export type CharacterType = Character;