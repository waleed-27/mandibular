import React from "react";
import "./box.css";

const Box = ({ imgUrl, title, text }) => {
  return (
    <div className="klg__box">
      <img src={imgUrl} alt="" />
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};

export default Box;
