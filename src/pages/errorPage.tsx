import { ArrowLeft } from "lucide-react";
import { NavLink } from "react-router-dom";
// @import url('https://fonts.googleapis.com/css2?family=Russo+One:ital,wght@0,400&display=swap');
import Erro from "../assets/Errorimg.png"

export default function Error(){
    return(

        <div className="bg-white p-20 h-screen">
            <div className=" mt-[160px]  flex flex-col ml-auto justify-center text-center">
                <h1 className=" font-russo  text-[32px]">Opsss...</h1>
                <img src={Erro} className=" w-[280px] h-[208px] gap-5" />
                <span className=" font-montserrat text-[16pxs] text-secondary">Infelizmente, parece que não encontramos o produto desejado.</span>
            </div>
            
        <NavLink to="/Home" className="  mt-[170px]  rounded-full bg-[#d9d9d9] flex ml-auto justify-end h-[40px] w-[40px] items-center  p-2 text-secondary hover:text-secondary/80">
                <ArrowLeft/> 
        </NavLink>
        </div>

    )
}