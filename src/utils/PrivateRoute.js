
import { Navigate, Outlet } from 'react-router-dom';

const useToken = () => {
    const token = sessionStorage.getItem('token')
    if(!token){
        return false
    }
    else return true
}

const PrivateRoute = () =>{
    const auth=useToken()

    return auth?<Outlet /> : <Navigate to="/login"/>
}

export default PrivateRoute;