import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/homePage";
import Login from "../pages/loginPage";

export default function HomeRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/LoginPage" element={<Login />} />
            </Routes>
        </Router>
    );
}