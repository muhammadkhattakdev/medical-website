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
                        <Link to='/dashboard/form1/' className="dashboard-link">
                        Holistic Nursing Assessment
                        </Link>
                    </li>
                    <li>
                        <Link to='/dashboard/form2/' className="dashboard-link text-center">
                            Form 2
                        </Link>
                    </li>
                    <li>
                        <Link to='/dashboard/form3/' className="dashboard-link">
                            Form 3
                        </Link>
                    </li>
                    <li>
                        <Link to='/dashboard/form4/' className="dashboard-link">
                            Form 4
                        </Link>
                    </li>
                    <li>
                        <Link to='/dashboard/form5/' className="dashboard-link">
                            Form 5
                        </Link>
                    </li>
                    <li>
                        <Link to='/dashboard/form6/' className="dashboard-link">
                            Form 6
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