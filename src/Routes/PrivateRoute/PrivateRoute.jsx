import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()

    if(loading) {
        return <div className="w-64 mx-auto flex items-center h-96"> <progress className="progress  w-56"></progress></div>
    }

    if(user?.email){
        return children;
    }

    // return <Navigate to="/login" state={{from: location}} replace></Navigate>;
    return (
        <Navigate to={location.state?.from || '/'} replace /> // Changes made here
    );
};

export default PrivateRoute;