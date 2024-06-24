import React from "react";
import UserSidebar from "../components/userDashboardComponents/sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

export default function UserDashboardLayout() {

    return (
        <>

            <div className="dashboard">
                <UserSidebar />
                <div className="dashboard-page container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}