import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Screens/Home/Home";

export default function Rutas() {
    return (<BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>);
}

