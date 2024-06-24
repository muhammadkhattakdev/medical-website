import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../context/context";



export default function AdminProtectedRoute(props) {

    const auth = useContext(Context);
    
    const { Component } = props;

    return (
        <>
            {auth.user && auth.validateToken() && auth.user.is_superuser ? <Component /> : <Navigate to='/login/' />}
        </>
    )
}

