import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "./ui/sidebar"
import userImage from "../assets/barraLateral/user.png"
import bg from "../assets/barraLateral/bg.png"
import div from "../assets/barraLateral/Divider.png"
import AppRoutes from '../routes/Routex' 
//<AppRoutes>


export function AppSidebar() {
  return (
    <Sidebar  >
      <SidebarHeader className="bg-secondary p-4 text-white w-20rem h-17.75 ">
          <div className="flex items-center gap-3">
            <img src={bg}  className="  -mr-11.25  w-7 " />
            <img src={userImage} alt="userIcon" className="  mr-14 w-10" />
            <text className="text-white text-lg font-bold">Usuário</text>
          </div>
        </SidebarHeader>
      
      <SidebarContent className="bg-primary text-secondary text-[16px]  w-20rem h-17.75  ">
       {/* <AppRoutes/> */}
          <nav className=" p-5 flex flex-col gap-5">
            <link></link>
              <text>Editar dados</text>
              <img src={div} alt="userIcon" className=" w-20rem h-1px" />
              <text>Meus pedidos</text>
              <img src={div} alt="userIcon" className=" w-20rem h-1px" />
              <text>Meus produtos</text>
              <img src={div} alt="userIcon" className=" w-20rem h-1px" />
              <text>Meu carrinho</text>
          </nav>



        <SidebarGroup />
        <SidebarGroup />

      </SidebarContent>

      <SidebarFooter className="bg-primary text-[16px]  ">
        <text className="p-5 ">Sair</text>
        
      </SidebarFooter> 
    </Sidebar>
  )
}