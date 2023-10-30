import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import Service from "./components/Service"


function App() {


    return (
        <div className="bg-background text-foreground min-h-screen">
            <Navbar/>
            <Banner/>
            <Service/>

        </div>
    )
}

export default App
