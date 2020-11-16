import React from "react";
import "./Footer.scss";
import facebookIcon from "./static/img/facebook.png";
import twitterIcon from "./static/img/twitter.png";
import emailIcon from "./static/img/email.png";
import linkedInIcon from "./static/img/linkedin.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__header">Convinced TO Work With Us</div>
      <div className="footer__header__subheading">
        Company has helped agencies keep their promises to clients since 2005
      </div>
      <div className="footer__inputs">
        <input placeholder="Fullname" />
        <input placeholder="Email Address" />
        <input placeholder="Phone Number" />
      </div>
      <div className="footer__textarea">
        <textarea placeholder="Message in brief" />
      </div>
      <div className="footer__button">Submit</div>
      <div className="footer__note">
        <div className="footer__note__copyright">
          &copy;2017 Company. All rights reserved
        </div>
        <div className="footer__note__socials">
          <span> follow us on:</span> <img src={facebookIcon} alt="facebook" />
          <img src={linkedInIcon} alt="linkedin" />
          <img src={twitterIcon} alt="twitter" />
          <img src={emailIcon} alt="email" />
        </div>
      </div>
    </div>
  );
};
