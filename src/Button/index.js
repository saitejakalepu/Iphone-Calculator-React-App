import React from "react";
import "./Button.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackspace } from '@fortawesome/free-solid-svg-icons';

const Button = ({ content, onButtonClick, type }) => {
  if(content==="del")
  {
    return(
      <div
      className={`Button ${type || ""}`} onClick={onButtonClick(content)}>
      <span> 
      <FontAwesomeIcon className="fadelete" icon={faBackspace} />
      </span>
      </div>
    );
  
  }
  else{
    return (
      <div
      className={`Button ${type || ""}`} onClick={onButtonClick(content)}>
      {content}
    </div>
      );
  }
  
};

export default Button;
