import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { Oculos } from "../pages/HomePage/selecionados"

export const Rotas =()=>{

    return(<>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/Oculos"  element={<Oculos/>}/>

        </Routes>
    </>)
}