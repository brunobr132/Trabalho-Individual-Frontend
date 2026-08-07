import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useState, type ChangeEvent } from 'react';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"

import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react";
import { Eye, EyeOff } from "lucide-react";
import { Lock } from 'lucide-react';
import logo from "../assets/homePage/logo.png"
import IconG from "../assets/iconG.png"
import IconF from "../assets/iconF.png"
import { NavLink } from "react-router-dom";



export function LoginForm({
  className,
  ...props 
}: React.ComponentProps<"div">) {

  const [showSenha, setShowSenha] = useState<boolean>(false);
  const [senha, setSenha] = useState<string>('');


  const togglePasswordVisibility = () => {
    setShowSenha(!showSenha);
  }

  return (
    <div className={cn("flex flex-col   ", className)} {...props}>

          <form>
            <FieldGroup>
                <img src={logo} className=" ml-12 h-[250px] w-[250px] " />
              <Field className="ml-4"  >
                
                <div className="relative">

                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                    <Mail className="h-5 w-5 text-black" aria-hidden="true" />
                  </div>
                  

                  <Input 
                    id="email"
                    type="email"
                    className="pl-5 border-0 border-b-2 bg-none border-[#B9B9B9]" 
                    placeholder="Digite Seu Email"
                  />

                  </div>
              </Field>

              <Field className="  ml-4" >

                
                
                <div className="relative">

                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                      <Lock className="h-5 w-5 text-black" aria-hidden="true" />
                  </div>

                  <Input 
                    id="password" 
                    type={showSenha ? "text" : "password"}
                    value={senha}
                    className="pl-5 border-0 border-b-2 bg-none border-[#B9B9B9]" 
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setSenha(e.target.value)}
                    placeholder="**********" 

                    />

                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="relative cursor-pointer  text-gray-600 hover:text-black focus:outline-none"
                      tabIndex={-1}
                    >
                      {showSenha ? <EyeOff size={20}  /> : <Eye size={20}  />}
                    </button>

                  
                </div>
              </Field>
                  <a
                    href="#"
                    className=" text-right  inline-block text-sm underline-offset-4 underline"
                  >
                    Esqueci minha senha
                  </a>
              <Field >
                <NavLink to="/Home"  className=" flex text-center pl-21">
                  <Button variant="outline" className="cursor-pointer p-2.5 text-[14px] bg-secondary text-white rounded-full py-3 px-6 h-[48px] w-[188px]" type="button"  >Entrar</Button>
                </NavLink>
                
                <div  className="pl-[38px]  flex flex-row gap-[20px]">
                  
                  <div className="  p-5 border-0 border-t-2 border-black">
                    <Button variant="outline" className="cursor-pointer bg-secondary rounded-full h-17 w-17 flex items-center justify-center "  size="icon">
                      <img src={IconF} className=" h-[24px] " />
                    </Button>
                  </div>

                  <text>ou</text>

                  <div className=" p-5 border-0 border-t-2 border-black">
                    <Button  variant="outline" className=" bg-secondary cursor-pointer rounded-full h-17 w-17 flex items-center justify-center">
                      <img src={IconG} className=" h-[24px] " />
                    </Button>
                  </div>
                  
                </div>
                
                <NavLink to="/cadastro">
                  <FieldDescription className="text-center text-blue-400 underline ">
                    Não possui cadastro? Cadastre-se!
                  </FieldDescription>
                </NavLink>
              </Field>
            </FieldGroup>
          </form>
    </div>
  )
}