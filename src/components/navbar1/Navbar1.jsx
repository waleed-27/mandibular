import React from "react";
import "./navbar1.css";
import Home from "../../assets/Home.png"
import Logout from "../../assets/logout.png"

const Navbar1 = () => {
  return (
    <div className="klg__navbar1">
      <div className="klg__navbar1-links">
        <div className="klg__navbar1-links_logo">
          <a href="https://healthhub.kr/">HealthHub</a>
          <a href="/"><img src={Home} alt="" /></a>
        </div>
        <div className="klg__navbar1-links_container">
          <select id="country" name="country">
            <option value="" disabled selected hidden>
              Choose Case to View
            </option>
            <option value="">Case 1</option>
            <option value="">Case 2</option>
            <option value="">Case 3</option>
          </select>
          <a href=""><img src={Logout} alt="" /></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
