import React from "react";
import "./Work.scss";
import Banner from "../../components/PageBanner/Banner";
import WorkImg from "../../assets/Images/ContactImage.png";
import workImg1 from "../../assets/Images/portfolio2.png";
import workImg2 from "../../assets/Images/portfolio3.png";
import workImg3 from "../../assets/Images/portfolio1.png";

import { MdArrowRightAlt } from "react-icons/md";

const Wroks = [
  {
    Heading1: "CLUB",
    Heading2: "Club Kolkata",
    Para1:
      "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.",
    Para2: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days.`,
    Para3:
      "The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.",
    Image: workImg1,
  },
  {
    Heading1: "RESTAURANT",
    Heading2: "Karahi Point",
    Para1:
      "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.",
    Para2: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days.`,
    Para3:
      "The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.",
    Image: workImg2,
  },
  {
    Heading1: "RETAIL OUTLET",
    Heading2: "Indian Frootland",
    Para1:
      "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.",
    Para2: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days.`,
    Para3:
      "The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.",
    Image: workImg3,
  },
];

const OurWork = () => {
  return (
    <>
      <Banner
        Details={{
          Heading: "OUR WORK",
          Image: WorkImg,
        }}
      />

      {/* Works Cars Section*** */}
      <section className="layout-section">
        <div className="max-width">
          <h2 className="heading-h2">OUR PORTFOLIO</h2>
          <h3 className="heading-h3">
            Lorem Ipsum is a<span className="text-[#8E7861]"> Demo Text </span>
          </h3>

          <div className="flex flex-col gap-20 md:mt-20 mt-10 ]">
            {Wroks.map((Details) => {
              return (
                <div className="work-card">
                  <div className="lg:w-[70%] lg:h-[600px] sm:h-[450px] h-[260px]">
                    <img
                      src={Details.Image}
                      alt="work-Img"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="lg:w-[30%] flex flex-col gap-6 ">
                    <div>
                      <h2 className="heading-h2">{Details.Heading1}</h2>
                      <h3 className="heading-h3">{Details.Heading2}</h3>
                    </div>
                    <div className="flex flex-col gap-10">
                      <p className="para">{Details.Para1}</p>
                      <p className="para">{Details.Para2}</p>
                      <p className="para">{Details.Para3}</p>
                    </div>

                    <div>
                      <button className="common-btn flex items-center gap-3">
                        contact us <MdArrowRightAlt size={25} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurWork;
