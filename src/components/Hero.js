import React from "react";
import "../static/styles/Hero.scss";
import getInTouchIcon from "../static/img/getInTouchIcon.png";
import serviceIcon from "../static/img/service.png";
import serviceIconOne from "../static/img/service1.png";
import serviceIconTwo from "../static/img/service2.png";
import { MenuButton } from "./MenuButton";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__header">
        <div className="hero__header__mobilemenubutton">
          <MenuButton />
        </div>
        <div className="hero__header__logo">
          COMPANY <span>LOGO</span>
        </div>
        <div className="hero__header__options">
          <span>About</span>
          <span>Services</span>
          <span>Solutions</span>
          <span>Blog</span>
          <span>
            <img
              src={getInTouchIcon}
              alt="get in touch"
              className="hero__header__options__img"
            />
            <span className="hero__header__options__getintouch">
              Get In Touch
            </span>
          </span>
        </div>
        <div className="hero__header__getintouchicon">
          <img src={getInTouchIcon} alt="get in touch" />
        </div>
      </div>
      <div className="hero__heading">
        <span>Integer bibendum sit amet arcu vel egestas.</span>
      </div>
      <div className="hero__services">
        <div className="hero__services__service">
          <img src={serviceIcon} width="60" alt="service" />
          <div className="hero__services__service__name">
            <span>Service Name</span>
          </div>
        </div>
        <div className="hero__services__service">
          <img src={serviceIconOne} width="60" alt="service" />
          <div className="hero__services__service__name">
            <span>Service Name</span>
          </div>
        </div>
        <div className="hero__services__service">
          <img src={serviceIconTwo} width="60" alt="service" />
          <div className="hero__services__service__name">
            <span>Service Name</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
