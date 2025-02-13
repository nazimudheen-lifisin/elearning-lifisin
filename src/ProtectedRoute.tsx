import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedType {
    component: React.ComponentType<any>
}

function ProtectedRoute({ component: Component }: ProtectedType) {

    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to={'/login'} replace />
    }

    return <Component />
}

export default ProtectedRoute