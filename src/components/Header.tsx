import {
    DollarSign,
    Plus,
    Power
} from "lucide-react"
import {
    Button
} from "./ui/button"
import {
    useDispatch
} from "react-redux"
import {
    logout
} from "@/Redux/feature/userSlice"
import {
    useNavigate
} from "react-router-dom"
import {
    useEffect
} from "react"

function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    function handleLogout(e) {
        e.preventDefault();
        dispatch(logout());
        navigate("/login");
        
    }

    return (
        <div className="h-16 w-full bg-white border-b flex justify-between items-center">
            <h2 className="ml-4 text-lg">Laundry App</h2>
            <div className="hidden sm:block">
                <Button size={'sm'}
                    variant={'link'}
                    className=" gap-2 mr-2 ">
                    <Plus size={16}/>New Order
                </Button>
                <Button size={'sm'}
                    variant={'link'}
                    className=" gap-2 mr-2 ">
                    <DollarSign size={16}/>Checkout
                </Button>
            </div>
            <Button onClick={handleLogout}
                size={'sm'}
                variant={'link'}
                className=" gap-2 mr-2 ">
                <Power size={16}/>Logout
            </Button>
        </div>
    )
}

export default Header
