import { faCheck, faCross, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../context/context";

const get_memberships_url = process.env.REACT_APP_GET_MEMBERSHIPS_URL;

export default function MembershipsTable() {
  const [memberships, setMemberships] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [count, setCount] = useState(0);

  const context = useContext(Context);
  const navigate = useNavigate();

  const getMemberships = async (newPageNumber) => {
    if (!newPageNumber) {
      newPageNumber = 1;
    }
    const response = await fetch(`${get_memberships_url}${newPageNumber}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${context.tokens.access}`,
      },
    });

    const data = await response.json();

    if (response.status === 200) {
      setCount(data.count);
      console.log(data);
      setMemberships(prevMemberships => {
        const newMemberships = data.memberships.filter(newMembership => 
          !prevMemberships.some(prevMembership => prevMembership.id === newMembership.id)
        );

        return [...prevMemberships, ...newMemberships];
      });
    };
    if(response.status === 401) {
      navigate('/login/');
    }
  };

  const loadMembershipsHandler = e => {
    e.preventDefault();
    setPageNumber(prevNum => {
        const newPageNumber = prevNum + 1;
        getMemberships(newPageNumber);
        return newPageNumber;
    });
    
  }

  useEffect(() => {
    getMemberships();
}, [])

  return (
    <>
      <div className="">
      {count} User Profiles
      <table class="table align-middle mb-0 bg-white">
        <thead class="bg-light">
          <tr>
            <th>User</th>
            <th>Purchase Date</th>
            <th>Expiration Date</th>
            <th>Paypal Order Id</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {memberships.map((membership) => {
            return (
              <>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <FontAwesomeIcon style={{fontSize:'30px', marginRight:'1rem'}} icon={faUser} />
                      <div class="ms-3">
                        <p class="fw-bold mb-1">{membership.user.first_name} {membership.user.last_name}</p>
                        <a href={`${membership.user.email}`} target="_blank" class="text-muted mb-0">{membership.user.email}</a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">{membership.purchase_date}</p>
                    <p class="text-muted mb-0"></p>
                  </td>
                  <td>
                        {membership.expiration_date}
                  </td>
                  <td>{membership.order_id}</td>
                  <td>
                    <Link
                      to={`/admin/user/${membership.user.id}`}
                      type="button"
                      class="btn btn-link btn-sm btn-rounded"
                    >
                      User Details
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
        <Link onClick={loadMembershipsHandler}>Load More</Link>
      </div>
    </>
  );
}
