interface ParaVoceProps {
    name: string;
    imageSrc: string;
    preco: string;
}


export default function ParaVoce( {name, imageSrc, preco}: ParaVoceProps) {
    return(
        <div className="flex flex-col items-start">
            <div className="">
               <img src={imageSrc} alt={name} className="mb-4 w-[200px] max-w-[100px] h-auto object-cover rounded-[8px]" />
            </div>
           <span className="text-[13.25px] text-secondary text-left">{name}</span>
           <span className="text-[14px] text-secondary text-bold text-left">{preco}</span>
        </div>
    )
}