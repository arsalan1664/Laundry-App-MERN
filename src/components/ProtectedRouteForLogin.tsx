
import { useEffect } from "react";
import {
    useSelector
} from "react-redux";
import {
    useNavigate
} from "react-router-dom";



function ProtectedRouteForLogin ({
    children 
}) {
    const navigate = useNavigate()
    const user = useSelector((state : any) => state.user.isLogin);
    console.log(user);
    
    return (
        <> {
            !user ? children : useEffect(()=> navigate('/'),[]) 
        } </>
    );
}

export default ProtectedRouteForLogin ;
