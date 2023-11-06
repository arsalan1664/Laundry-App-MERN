import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import {Login} from './views/Login'
import {Register} from "./views/Register"
import Body from "./components/Body"
import ProtectedRoute from "./components/ProtectedRoute"
import ProtectedRouteForLogin from "./components/ProtectedRouteForLogin"



function App() {


    return (
        <div className="bg-background text-foreground min-h-screen h-screen ">

            <Header/>
            <Routes>
            <Route path="/" element={<ProtectedRoute><Body/></ProtectedRoute>}/>
            <Route path="/register" element={<ProtectedRouteForLogin><Register/></ProtectedRouteForLogin>}/>
            <Route path="/login" element={<ProtectedRouteForLogin><Login/></ProtectedRouteForLogin>}/>
            </Routes>


        </div>
    )
}

export default App
