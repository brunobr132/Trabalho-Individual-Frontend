import { Button,   Input } from "@base-ui/react";

import { NavLink } from "react-router-dom";
import { FieldGroup, Field, FieldDescription, FieldLabel, } from "../components/ui/field";
import IconG from "../assets/iconG.png"
import IconF from "../assets/iconF.png"

export default function RegisterForm(){
    return(
        <form>
            <FieldGroup className="p-5">

              <div  className="pl-[32px] flex flex-row gap-[20px] items-end">   

                  <div className="  p-5 border-0 border-b-2 border-black">
                    <Button variant="outline" className="bg-secondary rounded-full h-17 w-17 flex items-center justify-center "  size="icon">
                      <img src={IconF} className=" h-[24px] " />
                    </Button>
                  </div>

                  <span className=" text-sm font-medium">ou</span>

                  <div className=" p-5 border-0 border-b-2 border-black">
                    <Button  variant="outline" className=" bg-secondary rounded-full h-17 w-17 flex items-center justify-center">
                      <img src={IconG} className=" h-[24px] " />
                    </Button>
                  </div>
              </div>
              <Field className=""  >

                <FieldLabel htmlFor="Nome">Nome</FieldLabel>

                  <Input 
                    id="Nome"
                    type="Nome"
                    className=" border-0 border-b-2 bg-none border-[#B9B9B9]" 
                    placeholder="Digite seu nome completo"
                  />

                <FieldLabel htmlFor="CPF">CPF</FieldLabel>

                <Input 
                    id="CPF"
                    type="CPF"
                    className=" border-0 border-b-2 bg-none border-[#B9B9B9]" 
                    placeholder="Digita seu CPF"
                />
                <FieldLabel htmlFor="Cellphone">Telefone</FieldLabel>

                <Input 
                    id="Cellphone"
                    type="Cellphone"
                    className=" border-0 border-b-2 bg-none border-[#B9B9B9]" 
                    placeholder="Digita seu telefone"
                />
                
                
                <FieldLabel htmlFor="email">Email</FieldLabel>

                  <Input 
                    id="email"
                    type="email"
                    className=" border-0 border-b-2 bg-none border-[#B9B9B9]" 
                    placeholder="Digite Seu Email"
                  />


                  

                  
              </Field>

              <Field>          
                  <FieldLabel htmlFor="password">Senha</FieldLabel>
                
                  <Input 
                    id="password" 
                    type="password" 
                    className=" border-0 border-b-2 bg-none border-[#B9B9B9]" 
                    placeholder="Digite sua senha" 
                    />

                  <FieldLabel htmlFor="password">Password</FieldLabel>

                  <Input 
                    id="password" 
                    type="password" 
                    className=" border-0 border-b-2 bg-none border-[#B9B9B9]" 
                    placeholder="Confirme sua senha" 
                    />
                
      
              </Field>
              <Field >
                <NavLink to="/home"  className="flex text-center pl-18.75">
                  <Button variant="outline" className="p-2 text-[14px] bg-secondary text-white rounded-full py-3 px-6 h-[48px] w-[188px]" type="button"  >Cadastrar-se!</Button>
                </NavLink>
                
                
                
                
                
              </Field>
            </FieldGroup>
          </form>
    )
}