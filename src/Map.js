import React from "react";
import "./Map.scss";
import AboutUsImage from "./static/img/aboutus.jpg";

export const Map = () => {
  return (
    <div className="map">
      <div className="map__text">
        <p className="map__text__title">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard for a while.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
      <div className="map__worldmap">
        <img src={AboutUsImage} alt="all us" />
      </div>
    </div>
  );
};
