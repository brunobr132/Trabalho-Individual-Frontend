import { ArrowLeft } from "lucide-react";
import { NavLink } from "react-router-dom";



export default function Cadastro(){
    return(
        <header className="h-[60px] p-5 items-center flex relative border-0 border-b-2 border-[#B9B9B9] bg-transparent  outline-none focus:ring-0">
            <NavLink to="/loginPage" className="  text-secondary hover:text-secondary/80">
                <ArrowLeft/> 
            </NavLink>

            <span className="text-[24px] ml-auto mr-auto   ">Entrar</span>

        </header>
    )
}