import React from "react"

import { useState, useEffect } from "react"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Carousel, CarouselContent, CarouselItem, type  CarouselApi  } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

import FavoriteButton from "../components/ui/FavButton";
import Categorias from "@/components/categorias"
import ParaVoce from "@/components/produtoUser"
import categoriaImg from "../assets/homePage/categorias/categoriaImg"
import produto_1 from "../assets/homePage/produtos/produtos_1"
import produto_2 from "../assets/homePage/produtos/produtos_2";
import produto_3 from "../assets/homePage/produtos/produtos_3";

import div from "../assets/barraLateral/Divider.png"
import cartShop from "../assets/homePage/carrinho.png"
import logo from "../assets/homePage/logo.png"
import car1 from "../assets/homePage/card/car1.jpg"
import car2 from "../assets/homePage/card/car2.png"
import car3 from "../assets/homePage/card/car3.png"
import Destaque from "../components/produtoDest";
import MaisVendidos from "../components/topSales";
import facebookIcon from "../assets/homePage/Redes/face.png";
import instagramIcon from "../assets/homePage/Redes/Insta.png";
import tiktokIcon from "../assets/homePage/Redes/tiktok.png";
import twitterIcon from "../assets/homePage/Redes/Twitter.png";
import linkedinIcon from "../assets/homePage/Redes/Linkedin.png";

function Home({ children }: { children: React.ReactNode }) {
   
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = useState(0);
    const carouselImages = [car1, car2, car3];

  
    useEffect(() => {
    if (!api) return;


    setCurrent(api.selectedScrollSnap());


    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
    }, [api]);

    
    return(
        
        <div className=" h-[71px] w-screen bg-secondary ">
            <SidebarProvider >

                <AppSidebar />
                <main >
                    <header className="p-4">
                            <SidebarTrigger  />
                            <div className=" right-6 absolute top-5">
                                <img src={cartShop} className="w-5"  />
                            </div>
                    </header>

                    <section className="flex items-center  gap-1 p-10">
                            <img src={logo} className="h-[42px]  " />
                            <span className="text-[24px] text-fourth  font-semibold">Bem-vindo à Elektro!</span>
                    </section>

                    <div className="flex flex-col p-8">
                        <Carousel setApi={setApi} className="w-full max-w-[327px]">
                            <CarouselContent className="-ml-4">
                                {carouselImages.map((image, index) => (
                                <CarouselItem key={index}>
                                    <img
                                    src={image}
                                    
                                    className="h-[191px] w-[327px] rounded-[16px] object-cover"
                                    alt={`Slide ${index + 1}`}
                                    />
                                </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>

                        <div className="flex items-center justify-center gap-3 pt-2"> 
                            {Array.from({ length: 3 }).map((_, index) => {
                            const isActive = current === index;

                            return (
                            <button
                                key={index}
                                onClick={() => api?.scrollTo(index)}
                                className={`
                                h-3 w-3 rounded-full border-2 border-none
                                transition-all duration-300 ease-in-out
                                ${
                                    isActive
                                    ? "bg-secondary scale-125 "
                                    : "bg-[#D9D9D9] scale-100 opacity-40 hover:opacity-75"
                                }
                                `}
                                aria-label={`Ir para slide ${index + 1}`}
                            />
                            );
                            })}
                        </div>
                            
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

                        <span className=" text-secondary text-[16px] ">Para Você</span>
                        <div className="flex flex-col gap-10 mt-2 mb-10">
                            <img src={div} alt="userIcon" className=" w-20rem h-1px" />
                        </div>

                        <Carousel opts={{ align: "start" }} className="w-full max-w-[20rem] h-[15rem]">
                            <CarouselContent className="">
                                {produto_1.map((produto, index) => (
                                    <CarouselItem key={index} className=" basis-1/2 ">
                                    <div className="p-[9.5px]">
                                    <Card className="shadow-md shadow-secondary ">
                                        <CardContent className= "flex flex-col text-left ">
                                            <ParaVoce
                                                name={produto.name}
                                                imageSrc={produto.imageSrc}
                                                preco={produto.preco}
                                            />
                                            <FavoriteButton />
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
                                    <Card className=" shadow-md shadow-secondary  ">
                                        <CardContent className= "flex flex-col text-left ">
                                            <Destaque
                                                name={produto.name}
                                                imageSrc={produto.imageSrc}
                                                preco={produto.preco}
                                            />
                                            <FavoriteButton />
                                        </CardContent>
                                    </Card>
                                </div>
                                </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>

                            <span className=" text-secondary text-[16px]">Mais Vendidos</span>
                            <div className="flex flex-col mt-[20px]  mb-10">
                                <img src={div} alt="userIcon" className=" w-20rem h-1px" />
                            </div>

                            <Carousel opts={{ align: "start" }} className="w-full max-w-[20rem] h-[15rem]">
                            <CarouselContent className="">
                                {produto_3.map((produto, index) => (
                                    <CarouselItem key={index} className=" basis-1/2 ">
                                    <div className="p-[9.5px]">
                                    <Card className=" shadow-md shadow-secondary ">
                                        <CardContent className= "flex flex-col text-left ">
                                            <MaisVendidos
                                                name={produto.name}
                                                imageSrc={produto.imageSrc}
                                                preco={produto.preco}
                                            />
                                            <FavoriteButton />
                                           
                                        </CardContent>
                                    </Card>
                                    </div>
                                </CarouselItem>
                                ))}
                            </CarouselContent>
                            </Carousel>



                    </div>
                </main>
               
            </SidebarProvider>
                        {children}
                    <div className="bg-fourthSecond flex p-10 gap-3 flex-col items-center w-[100%] h-[171px]">
                            <span className=" text-secondary text-[20px]">Siga-nos nas redes sociais!</span>
                            <div className="flex flex-row gap-3">
                                <img src={facebookIcon} alt="Facebook" className="" />
                                <img src={instagramIcon} alt="Instagram" className="" />
                                <img src={tiktokIcon} alt="Tiktok" className="" />
                                <img src={twitterIcon} alt="Twitter/X" className="" />
                                <img src={linkedinIcon} alt="Linkedin" className="" />
                            </div>
                    </div>
                
        </div>




    )
}
export default Home;