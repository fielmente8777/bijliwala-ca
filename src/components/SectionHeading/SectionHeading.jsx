
const SectionHeading = ({ Heading1, Heading2, SPAN }) => {
  return (
    <div>
      <h2 className="heading-h2 text-center">{Heading1}</h2>
      <h3 className="heading-h3 text-center mt-2">
        {Heading2} <span className="text-[#8e7861]">{SPAN}</span>
      </h3>
    </div>
  );
};

export default SectionHeading;
