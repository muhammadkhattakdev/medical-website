import { faGauge, faPerson, faUser, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";


export default function AdminPanelSidebar() {


    return (
        <>
            <div className="dashboard-sidebar">
                <ul>
                    <li>
                        <Link to='/admin/' className="dashboard-link">
                        <FontAwesomeIcon icon={faGauge} />
                            Administration
                        </Link>
                    </li>
                    <li>
                    <Link to='/admin/blogs/' className="dashboard-link">
                        <FontAwesomeIcon icon={faUserFriends} />
                            Blogs
                        </Link>
                    </li>
                    <li>
                    <Link to='/admin/users/' style={{textWrap:'nowrap'}} className="dashboard-link ">
                        <FontAwesomeIcon icon={faUser} />
                            User Profiles
                        </Link>
                    </li>
                    <li>
                    <Link to='/admin/memberships/' className="dashboard-link">
                        <FontAwesomeIcon icon={faUserFriends} />
                            MemberShips
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}