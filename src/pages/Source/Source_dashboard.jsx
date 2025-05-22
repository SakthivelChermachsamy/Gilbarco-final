import { Navigate, useNavigate } from 'react-router-dom';
import Nav from '../../components/Source/Nav';
import Recent from '../../components/Source/Recent';
import { isAuthenticated } from '../../services/Auth';
import { Logout } from '../../services/Auth';
export default function Source_dashboard(){
    const navigate = useNavigate();
    const LogoutUser =()=>{
        Logout();
        navigate('/login');
    }
    if(!isAuthenticated()){
        return <Navigate to="/login"/>
    }
    return (
        <div>
            <Nav LogoutUser={LogoutUser}/>
            <Recent/>
        </div>
    );
}