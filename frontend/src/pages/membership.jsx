import React, { useContext, useEffect, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEuro } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../context/context";

const buy_membership_url = process.env.REACT_APP_BUY_MEMEBERSHIP_URL;

export default function Membership() {

  const context = useContext(Context);

  const [buttonKey, setButtonKey] = useState(0);

  const [plan, setPlan] = useState({
    price: 25,
    time: "Month",
    description: "Get One Month Premium Membership to Our Site.",
  });

  const monthlyPlan = {
    price: 25,
    time: "Month",
    description: "Get One Month Premium Membership to Our Site.",
  };

  const yearlyPlan = {
    price: 225,
    time: "Year",
    description:
      'Buy One Year Premium Membership for our Site with <span className="mark">25% Off</span>.',
  };

  const planChangeHandler = (e) => {
    if (e.target.value === "yearly") {
      e.target.checked = true;
      setPlan(yearlyPlan);
    };

    if (e.target.value === "monthly") {
      e.target.checked = true;
      setPlan(monthlyPlan);
    }
  };

  const PayPalComponent = ({ plan }) => {
    const [buttonKey, setButtonKey] = useState(0);
  };


  const paymentApproveHandler = async (details) => {
    const response = await fetch(buy_membership_url, {
        method: "POST",
        headers: {
            'Content-Type':'application/json',
            Authorization:`Bearer ${context.tokens.access}`
        },
        body: JSON.stringify({order_id:details['id'], duration:plan.time})
    });

    if (response.status === 200) {
        console.log("Bought");
    }
  }


  useEffect(() => {
    setButtonKey(prevKey => prevKey + 1);
  }, [plan.price]);

  return (
    <>
      <div style={{marginTop:'18vh'}} className="container  membership-wrapper">
        <div className="row mb-5 mt-5 d-flex flex-row align-items-center justify-content-around">
          <div className="col-md-5  mb-sm-3">
            <div className="p-side">
              <div className="p-card">
                <span className="p-title d-flex flex-row  border-2 border-black justify-content-between w-100">
                  <input
                    onClick={planChangeHandler}
                    value="monthly"
                    type="radio"
                    name="plan"
                    id="monthly"
                  />{" "}
                  <label htmlFor="monthly">Monthly</label>
                  <input
                    value="yearly"
                    onClick={planChangeHandler}
                    type="radio"
                    name="plan"
                    id="yearly"
                  />{" "}
                  <label htmlFor="yearly">Yearly</label>
                </span>
                <span className="exp">
                  <span className="m">
                    <FontAwesomeIcon icon={faEuro} /> {plan.price}
                  </span>
                  <span className="t">/{plan.time}</span>
                </span>
                <span className="desc" dangerouslySetInnerHTML={{ __html: plan.description }}></span>
                <div className="line"></div>
                <div className="f-list">
                  <span className="e">Everything in plan..</span>
                  <span className="l-elem">
                    <FontAwesomeIcon icon={faCheck} />
                    <span className="f-desc">Publish your own Articles</span>
                  </span>
                  <span className="l-elem">
                    <FontAwesomeIcon icon={faCheck} />
                    <span className="f-desc">Access to our patient forms.</span>
                  </span>
                  <span className="l-elem">
                    <FontAwesomeIcon icon={faCheck} />

                    <span className="f-desc">Ask Custom questions and Concerns.</span>
                  </span>
                  <span className="l-elem">
                    <FontAwesomeIcon icon={faCheck} />
                    <span className="f-desc">Access both Free and Premium Articles</span>
                  </span>
                </div>
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Subscribe Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-5 paypal-btns">
            { context.user && context.validateToken() 
            ?
            <PayPalScriptProvider
            options={{ "client-id": "AYnsB1uEjVe-sfGaWQZMOPX-ogkmLsoFeXNUNY-aQAy3nor3kAHRH8Xv4iBb3Lc7FMnp2ECqne4qrgzl", currency: "EUR" }}
            >
              <PayPalButtons
                key={buttonKey}
                style={{ layout: "vertical" }}
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: plan.price,
                        },
                        shipping_preference: "NO_SHIPPING",
                      },
                    ],
                  });
                }}
                onApprove={(data, actions) => {
                  return actions.order.capture().then((details) => {
                    console.log("Payment Approved: ", details);
                    paymentApproveHandler(details);
                  });
                }}
                onCancel={(data) => {
                  console.log("Payment cancelled: ", data);
                }}
                onError={(err) => {
                  console.log("Payment error: ", err);
                }}
                />
            </PayPalScriptProvider>
            : 
            <div className="login-btns gap-3 justify-content-around w-100 align-items-center d-flex flex-column">
              <span className="">
                To Continue
              </span>
              <Link to='/login/' className="my-primary-btn text-center w-75">Login Now</Link>
              <span>
                or <Link to='/signup' className="common-link">Sign Up</Link>
              </span>
            </div>
              }
          </div>
          {/* <div className="col-md-5">
            <div className="p-side">
              <div className="p-card">
                <span className="p-title">Yearly</span>
                <span className="exp">
                  <span className="m"><FontAwesomeIcon icon={faEuro} /> 225</span>
                  <span className="t">/Year</span>
                </span>
                <span className="desc">
                    Buy One Year Premium Membership for our Site with <span className="mark">25% Off</span>. 
                </span>
                <div className="line"></div>
                <div className="f-list">
                  <span className="e">Everything in plan..</span>
                  <span className="l-elem">
                    <FontAwesomeIcon icon={faCheck} />
                    <span className="f-desc">Lorem ipsum dolor sit.</span>
                  </span>
                  <span className="l-elem">
                  <FontAwesomeIcon icon={faCheck} />
                    <span className="f-desc">Lorem ipsum dolor sit.</span>
                  </span>
                  <span className="l-elem">
                  <FontAwesomeIcon icon={faCheck} />

                    <span className="f-desc">Lorem ipsum dolor sit.</span>
                  </span>
                  <span className="l-elem">
                  <FontAwesomeIcon icon={faCheck} />

                    <span className="f-desc">Lorem ipsum dolor sit.</span>
                  </span>
                </div>
                <Link onClick={e => {e.preventDefault()}}>Subscribe Now</Link>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
