import React from "react";
import { Testimonial } from "./Testimonial";
import "../static/styles/Testimonials.scss";

export const Testimonials = () => {
  return (
    <div className="testimonials">
      <span className="testimonials__heading">Testimonials</span>
      <div className="testimonials__testimonial">
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>
    </div>
  );
};
