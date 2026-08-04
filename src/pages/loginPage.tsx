import React from "react"
import { ArrowLeft } from 'lucide-react';
import { LoginForm } from "../components/ui/loginForm";
import { NavLink } from "react-router-dom";

export default function Login(){
    
    return(
    <div className="flex  flex-col gap-2   ">
        <header className="h-[60px] p-5 items-center flex relative border-0 border-b-2 border-[#B9B9B9] bg-transparent  outline-none focus:ring-0">
            <NavLink to="/" className="  text-secondary hover:text-secondary/80">
                <ArrowLeft/> 
            </NavLink>

            <span className="text-[24px] ml-auto mr-auto   ">Entrar</span>

        </header>

      <div className="p-4 md:p-10">
        <LoginForm />
      </div>
    </div>
    )

}