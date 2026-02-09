import LazyLoad from "react-lazy-load";

export const Card1 = ({ Details, Position }) => {
  return (
    <div className="border border-[#473C30] flex items-center px-8 md:py-16 py-8 min-h-[320px]">
      <div
        className={`flex flex-col gap-5 ${Position ? "items-center" : "items-start"
          }`}
      >

        <LazyLoad className="w-[130px] h-[80px]" offset={300} threshold={0.95} >
          <img src={Details.Icon} alt="floor-img" className="w-full h-full" />
        </LazyLoad>
        <h2 className="md:text-[2.4rem] text-[1.8rem] font-bold">
          {Details.Heading}
        </h2>
        <p
          className={`text-[1.4rem] text-[#FFFFFFB0] ${Position ? "text-center" : "text-start"
            }`}
        >
          {Details.Para}
        </p>
      </div>
    </div>
  );
};
