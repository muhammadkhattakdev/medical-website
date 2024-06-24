import React from "react";
import UserTable from "../../components/adminPanelComponents/usersTable";

export default function Users() {

    return (
        <>
            <h3 className="section__title mb-5">User Profiles</h3>
            <UserTable />
        </>
    )
}