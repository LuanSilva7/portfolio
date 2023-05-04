import {Routes,Route, BrowserRouter} from "react-router-dom"
import Home from "../views/Home"


export default function RoutesComponets(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/"element={<Home/>} />

        </Routes>
        </BrowserRouter>
    )
}