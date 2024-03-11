import React from "react";

const SectionHeading = ({ Heading1, Heading2 }) => {
  return (
    <div>
      <h2 className="heading-h2 text-center">{Heading1}</h2>
      <h3 className="heading-h3 text-center mt-2">{Heading2}</h3>
    </div>
  );
};

export default SectionHeading;
