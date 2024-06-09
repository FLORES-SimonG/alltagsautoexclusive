

interface ButtonPrimaryProps {
    title: string;
    size?: 'sm' | 'md' | 'lg';
    color?: 'transparent' | 'secondary';
    onClick?: () => void;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({color, title, size, onClick }) => {
    return (
        <button className={` rounded font-semibold text-customWhite flex justify-center px-6 py-4 h-14 ${color=="transparent"?"bg-transparent border-2  border-tertiary":"bg-secondary"} items-center ${size=='lg'?" w-80":size=="md"?" w-60":" w-40"}`} onClick={onClick}>
            {title}
        </button>
    );
};


export default ButtonPrimary;