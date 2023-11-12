import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import {Login} from './views/Login'
import {Register} from "./views/Register"
import Body from "./components/Body"




function App() {


    return (
        <div className="bg-background text-foreground min-h-screen h-screen ">

            <Header/>
            <Routes>
            <Route path="/" element={<Body/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            </Routes>


        </div>
    )
}

export default App
