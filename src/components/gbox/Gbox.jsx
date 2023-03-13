import React from "react";
import "./gbox.css";

const Gbox = ({ imgUrl, title, subtitle, text }) => {
  return (
    <div className="klg__gbox">
      <img src={imgUrl} alt="" />
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      <ul>
        {text.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Gbox;
