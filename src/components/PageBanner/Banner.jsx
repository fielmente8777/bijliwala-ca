import React from "react";

const Banner = ({ Details }) => {
  return (
    <div
      className="pageBanner"
      style={{
        backgroundImage: `url(${Details.Image})`,
      }}
    >
      <div>
        <h1 className="pageBanner-h1">{Details.Heading}</h1>
      </div>
    </div>
  );
};

export default Banner;
