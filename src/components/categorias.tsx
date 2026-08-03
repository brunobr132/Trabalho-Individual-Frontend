
interface CategoriaProps {
    name: string;
    imageSrc: string;
}


export default function Categorias( {name, imageSrc}: CategoriaProps) {
    return(
        <div className="flex flex-col items-center justify-center  cursor-pointer group">
           <img src={imageSrc} alt={name} className="w-[50px] h-[50px] rounded-full" />
           <span className="text-[14px] text-secondary text-center leading-tight">{name}</span>
        </div>
    )
}
