'use client';

import { useRouter } from "next/navigation";

interface ButtonPrimaryProps {
    title: string;
    size?: 'sm' | 'md' | 'lg';
    color?: string;
    onClick?: string;
    customHover?: string;
    typeButton?: 'submit' | 'reset' | 'button';
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({color, title, size, customHover, onClick="#" ,typeButton}) => {
    let router = useRouter();
    return (
        <button onClick={()=>{router.push(onClick)}} className={` rounded font-semibold text-customWhite transition-all flex justify-center px-6 py-4 h-14 ${color==="transparent"?"bg-transparent border-2  border-tertiary":`${color}`} items-center  ${size=='lg'?" w-80":size=="md"?" w-60":" w-40"} hover:${customHover} `} type={typeButton}>
            {title}
        </button>
    );
};


export default ButtonPrimary;