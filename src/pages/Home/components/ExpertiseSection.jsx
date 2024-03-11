import React from "react";
import { Card1 } from "../../../components/Cards/Card1";
import floor from "../../../assets/svg/floor.svg";
import electric from "../../../assets/svg/electric.svg";
import furniture from "../../../assets/svg/furniture.svg";

const Details = [
  {
    Icon: floor,
    Heading: "Roofing and Flooring",
    Para: "We lay the foundation for your space with a wide range of flooring options. Our roofing experts construct sturdy, weather-resistant roofs to protect your renovation, making it secure, enduring, and code-compliant.",
  },
  {
    Icon: electric,
    Heading: "Roofing ",
    Para: "We lay the foundation for your space with a wide range of flooring options. Our roofing experts construct sturdy, weather-resistant roofs to protect your renovation, making it secure, enduring, and code-compliant.",
  },
  {
    Icon: furniture,
    Heading: "Roofing and Flooring",
    Para: "We lay the foundation for your space with a wide range of flooring options. Our roofing experts construct sturdy, weather-resistant roofs to protect your renovation, making it secure, enduring, and code-compliant.",
  },
];

const ExpertiseSection = () => {
  return (
    <div className="max-width">
      <h2 className="heading-h2">OUR EXPERTISE</h2>
      <h3 className="heading-h3">
        Best Renovating <span className="text-[#8E7861]">Agency</span>
      </h3>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-8">
        {Details.map((details) => {
          return <Card1 Details={details} />;
        })}
      </div>
    </div>
  );
};

export default ExpertiseSection;
