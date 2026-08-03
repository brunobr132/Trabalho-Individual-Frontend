interface DestaqueProps {
    name: string;
    imageSrc: string;
    preco: string;
}


export default function Destaque( {name, imageSrc, preco}: DestaqueProps) {
    return(
        <div className="flex flex-col items-start cursor-pointer group">
           <img src={imageSrc} alt={name} className="" />
           <span className="text-[14px] text-secondary text-left">{name}</span>
           <span className="text-[14px] text-secondary text-bold text-left">{preco}</span>
        </div>
    )
}