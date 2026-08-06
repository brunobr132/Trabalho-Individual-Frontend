import { NavLink } from "react-router-dom";
import RegisterForm from "../components/cadastroForm"
import { ArrowLeft, } from "lucide-react";





export default function Cadastro(){
    return (
    <div className="flex font-montserrat flex-col gap-2   ">
        <header className="h-[60px] p-5 items-center flex relative border-0 border-b-2 border-[#B9B9B9] bg-transparent  outline-none focus:ring-0">
            <NavLink to="/" className="  text-secondary hover:text-secondary/80">
                <ArrowLeft/> 
            </NavLink>

            <span className="text-[24px] ml-auto mr-auto">Cadastrar-se</span>

        </header>

      <div className="p-4 md:p-10">
        <RegisterForm />
      </div>
    </div>
  )
}