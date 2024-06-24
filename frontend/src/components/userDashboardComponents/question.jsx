import { faEye, faEyeSlash, faMoneyCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../../context/context";


const hide_question_url = process.env.REACT_APP_HIDE_QUESTION_URL;
const show_question_url = process.env.REACT_APP_SHOW_QUESTION_URL;

export default function SQuestion(props) {
    
    const { hidden, text }  = props;
    const [questions, setQuestions] = useState([]);
    const context = useContext(Context);
    const navigate = useNavigate();

    const hideQuestion = async e => {
      e.preventDefault();

      const response = await fetch(hide_question_url, {
        method: 'POST',
        headers: {
          'Content-Type':'application/json',
          Authorization: `Bearer ${context.tokens.access}`
        },
        body: JSON.stringify({text:text})
      });

      const data = await response.json();

      if (response.status === 200) {
        context.setHiddenQuestions(data.questions);
      }

      
      if(response.status === 401) {
        navigate('/login/');
        localStorage.removeItem('tokens')
        localStorage.removeItem('user')
    }
    }

    const showQuestion = async e => {
      e.preventDefault();
      const response = await fetch(show_question_url, {
        method: 'POST',
        headers: {
          'Content-Type':'application/json',
          Authorization: `Bearer ${context.tokens.access}`
        },
        body: JSON.stringify({text:text})
      });

      const data = await response.json();
      
      if (response.status === 200) {
        context.setHiddenQuestions(data.questions);
      }

      
      if(response.status === 401) {
        navigate('/login/');
        localStorage.removeItem('tokens')
        localStorage.removeItem('user')
    }
    }
    

  return (
    <>
      <div className="s-question mt-2">
        <div className="side"></div>
        <div className="q-content py-3">{text}</div>
        <div className="btns d-flex align-items-center">
          {
            hidden ? 
             <button onClick={showQuestion} className="my-primary-btn d-flex gap-2 align-items-center flex-nowrap">
                <FontAwesomeIcon icon={faEye} /> SHOW
            </button>
            :
            <button onClick={hideQuestion} className="hide-btn d-flex align-items-center gap-2 flex-nowrap">
                <FontAwesomeIcon icon={faEyeSlash} /> <span style={{textWrap:'nowrap'}}>HIDE</span>
            </button>
          }
        </div>
      </div>
    </>
  );
}
