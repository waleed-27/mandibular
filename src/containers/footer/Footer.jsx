import React from "react";
import "./footer.css";
import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/Youtube.png";

const Footer = () => {
  return (
    <div className="klg__footer section__padding">
      <div className="klg__footer-div1">
        <p>Personal Information Handling Policy</p>
        <p>Terms and Conditions</p>
      </div>
      <div className="klg__footer-div2">
        <div className="klg__footer-div2__img1">
          <img src={logo} alt="" />
        </div>
        <div className="klg__footer-div2__p">
          <p>
            Healthhub Co., Ltd. l Address 4F 31, Gangnam-daero 101-gil,
            Seocho-gu, Seoul, 06524, Republic of Korea Tel. 02-511-3601 | Fax.
            02-548-6646
          </p>
          <p>
            Copyright ⓒ Healthhub Co., Ltd. All Rights Reserved.{" "}
            <b>Not for Clinical Use</b>
          </p>
        </div>
        <div className="klg__footer-div2__img2">
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={youtube} alt="youtube" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
