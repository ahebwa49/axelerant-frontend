import React from "react";
import clientImage from "../static/img/client-img.png";
import quoteIcon from "../static/img/quote.png";
import "../static/styles/Testimonial.scss";

export const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="testimonial__quote">
        <img src={quoteIcon} alt="quote" className="testimonial__quote__icon" />
        <span>
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero.
        </span>
      </div>
      <div className="testimonial__user">
        <div className="testimonial__user__image">
          <img src={clientImage} alt="client image" />
        </div>
        <div className="testimonial__user__details">
          <div className="testimonial__user__details__name">CLIENT NAME </div>
          <div className="testimonial__user__details__org">Position, ORG</div>
        </div>
      </div>
    </div>
  );
};
