import { faGauge, faGear, faPen, faPenNib, faPerson, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";


export default function UserSidebar() {


    return (
        <>
            <div className="dashboard-sidebar">
                <ul>
                    <li>
                        <Link to='/dashboard/' className="dashboard-link">
                        <FontAwesomeIcon icon={faGauge} />
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to='/dashboard/profile/' className="dashboard-link">
                        <FontAwesomeIcon icon={faUser} />
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link to='/' className="dashboard-link">
                            All Forms
                        </Link>                                                
                    </li>

                    <li>
                        <Link to='/dashboard/blogs/' className="dashboard-link">
                        <FontAwesomeIcon icon={faPenNib} />    MY BLOGS
                        </Link>
                    </li>
                    <li>
                        <Link to='/dashboard/write-blog/' className="dashboard-link">
                        <FontAwesomeIcon icon={faPen} />Write Blog
                        </Link>
                    </li>
                    <li>
                        <Link to='/dashboard/settings/' className="dashboard-link">
                        <FontAwesomeIcon icon={faGear} /> Settings
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}