import React, { useContext, useEffect, useState } from "react";
import SQuestion from "./question";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/context";




export default function SQuestions() {

    const context = useContext(Context);
    const navigate = useNavigate();
    
    const questions = [
        'Do you have any pain in the stomach?',
        'Do you feel dizzy in hot weather?'
    ]
    
    
    useEffect(() => {
        context.getHiddenQuestions();
    }, [])
    
  return (
    <>
      <div className="questions w-100 mt-5 d-flex flex-column">
      {questions.map((q, index) => {
                    const isHidden = context.hiddenQuestions.some(hiddenQ => hiddenQ.text === q);
                    return <SQuestion key={index} text={q} hidden={isHidden} />;
    })}
      </div>
    </>
  );
}
