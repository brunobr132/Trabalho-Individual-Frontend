import React from "react"
import { ArrowLeft } from 'lucide-react';
import { LoginForm } from "../components/ui/loginForm";
import { NavLink } from "react-router-dom";

export default function Login(){
    
    return(
    <div className="flex min-h-svh w-full  p-6 md:p-10">
        <header className="">
            <NavLink to="/" className="block p-5 text-secondary hover:text-secondary/80">
                <ArrowLeft/> 
            </NavLink>
        </header>

      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
    )

}