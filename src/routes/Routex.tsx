import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/homePage";
import Login from "../pages/loginPage";
import Cadastro from "../pages/cadastroPage"
import Error from "../pages/errorPage"

export default function HomeRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Cadastro" element={<Cadastro/>} />
                <Route path="/Error" element={<Error/>}/>
            </Routes>
        </Router>
    );
}