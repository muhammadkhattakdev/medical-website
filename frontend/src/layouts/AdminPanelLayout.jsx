import React from "react";
import { Outlet } from "react-router-dom";
import AdminPanelSidebar from "../components/adminPanelComponents/sidebar";

export default function AdminPanelLayout() {

    return (
        <>

            <div className="dashboard">
                <AdminPanelSidebar />
                <div className="dashboard-page container-fluid">
                    <div className="row w-100">
                        <div className="col-lg-12 w-100">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}