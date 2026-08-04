import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react";
import { Lock } from 'lucide-react';
import logo from "../../assets/homePage/logo.png"
import IconG from "../../assets/iconG.png"
import IconF from "../../assets/iconF.png"
import { NavLink } from "react-router-dom";


//#B9B9B9
export function LoginForm({
  className,
  ...props 
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>

          <form>
            <FieldGroup>
              <Field  >
                <img src={logo} className="h-[330px]  " />
                <FieldLabel htmlFor="email">Email</FieldLabel>
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
              <Field>

                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                </div>
                
                <div className="relative">

                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                      <Lock className="h-5 w-5 text-black" aria-hidden="true" />
                  </div>

                  <Input 
                    id="password" 
                    type="password" 
                    className="pl-5 border-0 border-b-2 bg-none border-[#B9B9B9]" 
                    placeholder="**********" 
                    />

                  
                </div>
                  <a
                    href="#"
                    className=" text-right ml-auto inline-block text-sm underline-offset-4 underline"
                  >
                    Esqueci minha senha
                  </a>
              </Field>
              <Field >
                <NavLink to="/"  className="flex text-center pl-18.75">
                  <Button variant="outline" className="p-2.5 text-[14px] bg-secondary text-white rounded-full py-3 px-6 h-[48px] w-[188px]" type="button"  >Entrar</Button>
                </NavLink>
                
                <div  className="pl-[32px] flex flex-row gap-[20px]">
                  
                  <div className="  p-5 border-0 border-t-2 border-black">
                    <Button variant="outline" className="bg-secondary rounded-full h-17 w-17 flex items-center justify-center "  size="icon">
                      <img src={IconF} className=" h-[24px] " />
                    </Button>
                  </div>

                  <text>ou</text>

                  <div className=" p-5 border-0 border-t-2 border-black">
                    <Button  variant="outline" className=" bg-secondary rounded-full h-17 w-17 flex items-center justify-center">
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