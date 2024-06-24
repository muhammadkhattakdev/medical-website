import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SQuestion from "../../components/userDashboardComponents/question";
import SQuestions from "../../components/userDashboardComponents/questions";

export default function UserSettings() {
  return (
    <>
      <h3 className="section__title">
        <FontAwesomeIcon icon={faGear} /> Settings
      </h3>
      <SQuestions />
    </>
  );
}
