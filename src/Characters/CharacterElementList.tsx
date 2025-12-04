import type React from "react";
import { DynamicIcon } from 'lucide-react/dynamic';
import { LocateFixedIcon, HomeIcon ,PersonStandingIcon, FishSymbolIcon } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Props {
    icon : 'location'|'gender'|'specie'|'origin';
    children : React.ReactNode;
    title : string;
}

export default function CharacterElementList({children, icon, title}:Props){

    const getIcon = () : LucideIcon =>  {
        switch(icon){
            case 'location' :
                return LocateFixedIcon;
            case 'gender' :
                return PersonStandingIcon;
            case 'origin' :
                return HomeIcon;
            case 'specie' :
                return FishSymbolIcon;
        }
    }

    const Icon = getIcon();

    return (
        <div className="flex gap-2" title="Localización">
            <Icon/>
            {children}
        </div>
    )
}