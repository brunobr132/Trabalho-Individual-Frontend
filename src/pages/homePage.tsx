import React from "react"
import { useState } from "react"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Button } from "../components/ui/button";
import { Card, CardContent } from "@/components/ui/card"
import Categorias from "@/components/categorias"
import ParaVoce from "@/components/produtoUser"

import div from "../assets/barraLateral/Divider.png"
import cartShop from "../assets/homePage/carrinho.png"
import logo from "../assets/homePage/logo.png"
import categoriaImg from "../assets/homePage/categorias/categoriaImg"
import produto_1 from "../assets/homePage/produtos/produtos_1"
import ph from "../assets/homePage/ph/ph.jpg"
import fav from "../assets/homePage/fav.png"
import produto_2 from "../assets/homePage/produtos/produtos_2";
import Destaque from "../components/produtoDest";
import produto_3 from "../assets/homePage/produtos/produtos_3";
import MaisVendidos from "../components/topSales";
import facebookIcon from "../assets/homePage/Redes/face.png";
import instagramIcon from "../assets/homePage/Redes/Insta.png";
import tiktokIcon from "../assets/homePage/Redes/tiktok.png";
import twitterIcon from "../assets/homePage/Redes/Twitter.png";
import linkedinIcon from "../assets/homePage/Redes/Linkedin.png";

function Home({ children }: { children: React.ReactNode }) {
    const [ativo, setAtivo] = useState(false)
    return(

        <div className=" h-[71px] w-screen bg-secondary ">
            <SidebarProvider >

                <AppSidebar />
                <main className="p-4">
                    <header>
                            <SidebarTrigger  />
                            <div className=" right-6 absolute top-5">
                                <img src={cartShop} className="w-5"  />
                            </div>
                    </header>

                    <section className="flex items-center  gap-1 p-10">
                            <img src={logo} className=" " />
                            <span className="text-[24px] text-fourth  font-semibold">Bem-vindo à Elektro!</span>
                    </section>

                </main>
               
            </SidebarProvider>
                    <div className="flex flex-col p-8">
                        <Carousel>
                            <CarouselContent className="-ml-4">
                                {Array.from({ length: 3 }).map((_, index) => (
                                    <CarouselItem key={index}>
                                        <img src={ph} className=" rounded-[16px] w-[327px] h-[191px]" />
                                    </CarouselItem>

                                ))}
                            </CarouselContent>
                        </Carousel>
                            
                        <div className="flex flex-col gap-10 mt-[20px] mb-10">
                                <img src={div} alt="userIcon" className=" w-20rem h-1px" />
                        </div>
                            <div className=" flex flex-col  w-full max-w-xs mb-5">
                                <span className=" text-secondary text-[16px]">Categorias Elektro</span>
                                <div className="grid grid-cols-4 gap-x-5 gap-y-5">
                                    {
                                        categoriaImg.map((tipo, index) => (
                                            <Categorias
                                                key={index}
                                                name={tipo.name}
                                                imageSrc={tipo.imageSrc}
                                            />
                                        ))
                                    }
                                </div>
                            </div>

                            <span className=" text-secondary text-[16px]">Para Você</span>
                            <div className="flex flex-col gap-10 ] mb-10">
                                <img src={div} alt="userIcon" className=" w-20rem h-1px" />
                            </div>

                            <Carousel opts={{ align: "start" }} className="w-full max-w-[20rem] h-[15rem]">
                            <CarouselContent className="">
                                {produto_1.map((produto, index) => (
                                    <CarouselItem key={index} className=" basis-1/2 ">
                                    <div className="p-[9.5px]">
                                    <Card className=" ">
                                        <CardContent className= "flex flex-col text-left ">
                                            <ParaVoce
                                                name={produto.name}
                                                imageSrc={produto.imageSrc}
                                                preco={produto.preco}
                                            />
                                            <Button onClick={() => setAtivo(!ativo)} 
                                            className={ativo? "text-secondary" : "text-black"  }>
                                                <img src={fav} className="bg-none border-none"/>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                    </div>
                                </CarouselItem>
                                ))}
                            </CarouselContent>
                            </Carousel>

                            <span className=" text-secondary text-[16px]">Produtos em destaque</span>
                            <div className="flex flex-col mt-[20px]  mb-10">
                                <img src={div} alt="userIcon" className=" w-20rem h-1px" />
                            </div>

                            <Carousel opts={{ align: "start" }} className="w-full max-w-[20rem] h-[15rem]">
                            <CarouselContent className="">
                                {produto_2.map((produto, index) => (
                                    <CarouselItem key={index} className=" basis-1/2 ">
                                    <div className="p-[9.5px]">
                                    <Card className=" ">
                                        <CardContent className= "flex flex-col text-left ">
                                            <Destaque
                                                name={produto.name}
                                                imageSrc={produto.imageSrc}
                                                preco={produto.preco}
                                            />
                                            <Button onClick={() => setAtivo(!ativo)} 
                                            className={ativo? "text-secondary" : ""  }>
                                                <img src={fav} className="flex flex-row"/>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                    </div>
                                </CarouselItem>
                                ))}
                            </CarouselContent>
                            </Carousel>

                            <span className=" text-secondary text-[16px]">Produtos em destaque</span>
                            <div className="flex flex-col mt-[20px]  mb-10">
                                <img src={div} alt="userIcon" className=" w-20rem h-1px" />
                            </div>

                            <Carousel opts={{ align: "start" }} className="w-full max-w-[20rem] h-[15rem]">
                            <CarouselContent className="">
                                {produto_3.map((produto, index) => (
                                    <CarouselItem key={index} className=" basis-1/2 ">
                                    <div className="p-[9.5px]">
                                    <Card className=" ">
                                        <CardContent className= "flex flex-col text-left ">
                                            <MaisVendidos
                                                name={produto.name}
                                                imageSrc={produto.imageSrc}
                                                preco={produto.preco}
                                            />
                                            <Button onClick={() => setAtivo(!ativo)} 
                                            className={ativo? "text-secondary" : ""  }>
                                                <img src={fav} className="flex flex-row"/>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                    </div>
                                </CarouselItem>
                                ))}
                            </CarouselContent>
                            </Carousel>



                    </div>
                        {children}
                    <div className="bg-fourthSecond flex p-10 gap-3 flex-col items-center w-[100%] h-[171px]">
                            <span className=" text-secondary text-[20px]">Siga-nos nas redes sociais!</span>
                            <div className="flex flex-row gap-3">
                                <img src={facebookIcon} alt="Facebook" className="" />
                                <img src={instagramIcon} alt="Instagram" className="" />
                                <img src={tiktokIcon} alt="Tiktok" className="w-[24px]" />
                                <img src={twitterIcon} alt="Twitter/X" className="w-[24px]" />
                                <img src={linkedinIcon} alt="Linkedin" className="w-[24px]" />
                            </div>
                    </div>
                
        </div>




    )
}
export default Home;