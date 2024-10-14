import React from "react";
import PrivacyImg from "../../assets/Images/ContactImage.webp";
import Banner from "../../components/PageBanner/Banner";

const Policy = [
  {
    Heading: "Lorem Ipsum is simply dummy text",
    Para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    Heading: "Lorem Ipsum",
    Para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
  },
  {
    Heading: "Lorem Ipsum",
    Para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
  },
  {
    Heading: "Lorem Ipsum",
    Para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
  },
  {
    Heading: "Lorem Ipsum",
    Para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
  },
];

export const Privacy = () => {
  return (
    <>
      {/* Banner Section****** */}
      <Banner
        Details={{
          Heading: "PRIVACY POLICY",
          Image: PrivacyImg,
        }}
      />

      <section className="layout-section">
        <div className="max-width">
          <div className="flex flex-col gap-10">
            {Policy.map((Details, index) => {
              return (
                <div>
                  <h2
                    className="heading-h3"
                    style={{
                      borderLeft:
                        index === Policy.length - 1 ? "4px solid #A52323" : "0",
                      paddingLeft: Policy.length - 1 === index ? "0.6rem" : "0",
                    }}
                  >
                    {Details.Heading}
                  </h2>
                  <p className="para mt-4 text-justify">{Details.Para}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
