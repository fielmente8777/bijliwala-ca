import React from "react";
import Banner from "../../components/PageBanner/Banner";
import BlogImg from "../../assets/Images/ContactImage.png";
import BlogsCard from "../../components/Cards/BlogsCard";

const Blogs = [
  {
    Heading: "Lorem Ipsum Demo",
    Para: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The not passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et fghd Malorum for use in a type....",
    Date: "DECEMBER 21, 2023",
  },
  {
    Heading: "Lorem Ipsum Demo",
    Para: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The not passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et fghd Malorum for use in a type....",
    Date: "DECEMBER 21, 2023",
  },
  {
    Heading: "Lorem Ipsum Demo",
    Para: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The not passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et fghd Malorum for use in a type....",
    Date: "DECEMBER 21, 2023",
  },
  {
    Heading: "Lorem Ipsum Demo",
    Para: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The not passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et fghd Malorum for use in a type....",
    Date: "DECEMBER 21, 2023",
  },
  {
    Heading: "Lorem Ipsum Demo",
    Para: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The not passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et fghd Malorum for use in a type....",
    Date: "DECEMBER 21, 2023",
  },
  {
    Heading: "Lorem Ipsum Demo",
    Para: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The not passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et fghd Malorum for use in a type....",
    Date: "DECEMBER 21, 2023",
  },
];

const Blog = () => {
  return (
    <>
      {/* Banner Section****** */}
      <Banner
        Details={{
          Heading: "OUR BLOGS",
          Image: BlogImg,
        }}
      />
      <section className="layout-section">
        <div className="max-width">
          <h2 className="heading-h2">LOREM IPSUM</h2>
          <h3 className="heading-h3">
            Lorem Ipsum is a <span className="text-[#8E7861]">Demo Text </span>
          </h3>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 md:mt-20 mt-10">
            {Blogs.map((details) => {
              return <BlogsCard Details={details} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
