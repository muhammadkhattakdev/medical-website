import { faCheck, faCross, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../context/context";

const get_user_url = process.env.REACT_APP_GET_USERS_URL;

export default function UserTable() {
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [count, setCount] = useState(0);

  const context = useContext(Context);
  const navigate = useNavigate();

  const getUsers = async (newPageNumber) => {
    if (!newPageNumber) {
      newPageNumber = 1;
    }
    const response = await fetch(`${get_user_url}${newPageNumber}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${context.tokens.access}`,
      },
    });

    const data = await response.json();

    if (response.status === 200) {
      setCount(data.count);
      setUsers(prevUsers => {
        const newUsers = data.users.filter(newUser => 
          !prevUsers.some(prevUser => prevUser.id === newUser.id)
        );

        return [...prevUsers, ...newUsers];
      });
    };
    if(response.status === 401) {
      navigate('/login/');
    }
  };

  const loadUsersHandler = e => {
    e.preventDefault();
    setPageNumber(prevNum => {
        const newPageNumber = prevNum + 1;
        getUsers(newPageNumber);
        return newPageNumber;
    });
    
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <>
      <div className="">
      {count} User Profiles
      <table class="table align-middle mb-0 bg-white">
        <thead class="bg-light">
          <tr>
            <th>Name</th>
            <th>Speciality</th>
            <th>Member</th>
            <th>Registration Body</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <FontAwesomeIcon style={{fontSize:'30px', marginRight:'1rem'}} icon={faUser} />
                      <div class="ms-3">
                        <p class="fw-bold mb-1">{user.first_name} {user.last_name}</p>
                        <a href={`${user.email}`} target="_blank" class="text-muted mb-0">{user.email}</a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">{user.speciality}</p>
                    <p class="text-muted mb-0">{user.status}</p>
                  </td>
                  <td>
                    <span class="badge badge-success rounded-pill d-inline">
                      {user.is_member ?
                      <FontAwesomeIcon icon={faCheck} />
                        :
                      <FontAwesomeIcon icon={faCross} />
                      }
                    </span>
                  </td>
                  <td>{user.country}</td>
                  <td>
                    <Link
                      to={`/admin/user/${user.id}`}
                      type="button"
                      class="btn btn-link btn-sm btn-rounded"
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      </div>
      <div style={{marginTop:'3rem', display:'flex',justifyContent:'center'}}>
        <Link onClick={loadUsersHandler}>Load More</Link>
      </div>
    </>
  );
}
