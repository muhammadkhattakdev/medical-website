import { faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import ProfileForm from "../../components/userDashboardComponents/profileForm";
import { Context } from "../../context/context";

const change_password_url = process.env.REACT_APP_CHANGE_PASSWORD_URL;

export default function MyProfile() {
  const context = useContext(Context);
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [message, setMessage] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  const upperCaseLetters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const lowerCaseLetters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];

  const handleShowModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const containsCharFromList = (string, list) => {
    return list.some((char) => string.includes(char));
  };

  const formSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      if (conPassword === password) {
        if (
          password.length >= 8 &&
          containsCharFromList(password, upperCaseLetters) &&
          containsCharFromList(password, lowerCaseLetters) &&
          containsCharFromList(password, numbers) &&
          containsCharFromList(password, specialChars)
        ) {
          const response = await fetch(change_password_url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${context.tokens.access}`,
            },
            body: JSON.stringify({
              current_password: currentPassword,
              password: password,
            }),
          });

          const data = await response.json();

          if (response.status === 200) {
            console.log("hello World");
            setMessage("Password Changed Successfully");
            setShowModal(false);
          }
          if (response.status === 400) {
            setMessage("Invalid Password");
            setShowModal(false);
          }
        } else {
          setMessage(
            "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character."
          );
        }
      } else {
        setMessage("Passwords do not match.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const hideModal = e => {
    setShowModal(false);
  }

  return (
    <>
      {message ? (
        <h4
          style={{
            color: "green",
            width: "fit-content",
            padding: "1rem",
            borderBottom: "2px solid green",
            boxShadow: "-20px 0px 0px green",
          }}
          className="message"
        >
          {message}
        </h4>
      ) : null}
      {showModal && (
        <div className="password-form-wrapper">
            <div onClick={hideModal} className="close-btn">
                X
            </div>
          <form onClick={formSubmitHandler} action="">
            <h3 className="primary-heading">
              <FontAwesomeIcon icon={faKey} /> Change Password
            </h3>
            <div className="input">
              <input
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                type="text"
                className="form-control"
              />
              <label htmlFor="">Old Password</label>
            </div>
            <div className="input">
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
              />
              <label htmlFor="">New Password</label>
            </div>
            <div className="input">
              <input
                type="text"
                value={conPassword}
                onChange={(e) => setConPassword(e.target.value)}
                className="form-control"
              />
              <label htmlFor="">Confirm Password</label>
            </div>
            <button type="submit" className="my-primary-btn">
              <FontAwesomeIcon icon={faKey} /> Change Password
            </button>
          </form>
        </div>
      )}
      <div className="profile-wrapper w-100">
        <h2 className="section__title">
          <FontAwesomeIcon icon={faUser} /> Edit Profile
        </h2>
        <div className="pic-row d-flex flex-row align-items-center justify-content-between">
          <FontAwesomeIcon className="img" icon={faUser} />{" "}
          <button onClick={handleShowModal} className="my-primary-btn">
            <FontAwesomeIcon icon={faKey} /> Change Password
          </button>
        </div>
        <ProfileForm />
      </div>
    </>
  );
}
