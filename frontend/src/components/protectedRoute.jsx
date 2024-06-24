import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../context/context";



export default function ProtectedRoute(props) {

    const auth = useContext(Context);

    const { Component } = props;

    return (
        <>
            {auth.user && auth.validateToken() && auth.user.is_member ? <Component /> : <Navigate to='/login/' />}
        </>
    )
}

