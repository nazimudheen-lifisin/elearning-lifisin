import { Navigate } from "react-router-dom";

function checkRedirection(Component) {

    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to={'/login'} />
    }

    return <Component />
}

export default checkRedirection