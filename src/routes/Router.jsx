import { BrowserRouter, Route, Routes } from "react-router"

export const Router = () => {
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cadastro" element={<Cadastro/>} />
     </Routes>
    </BrowserRouter>
}