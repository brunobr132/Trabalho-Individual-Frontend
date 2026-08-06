interface MaisVendidosProps {
    name: string;
    imageSrc: string;
    preco: string;
    
}


export default function MaisVendidos( {name, imageSrc, preco}: MaisVendidosProps) {
    return(
        <div className="flex flex-col items-start cursor-pointer group">
               <img src={imageSrc} alt={name} className="mb-4 w-auto max-w-[100px] h-auto object-cover rounded-[8px]" />
           <span className="text-[13.25px] text-secondary text-left">{name}</span>
           <span className="text-[14px] text-secondary text-bold text-left">{preco}</span>
        </div>
    )
}