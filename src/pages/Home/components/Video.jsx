import Video from "../../../assets/Bijliwala-Construction.mp4";
import videoPreviewImage from "../../../assets/Images/videioprevImage.png";
import SEOVideo from "../../../components/SEOVideo";
const VideoSection = () => {


  return (
    <div
      className="max-w-[1600px] mx-auto flex justify-center items-center lg:min-h-[574px] md:h-[400px] h-[280px]"
      style={{
        backgroundImage: `url(${videoPreviewImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <SEOVideo src={Video} muted={true} autoPlay={true} controls={false} />
      {/* <ReactPlayer
        width={"1630px"}
        height={"100%"}
        // className="w-[1030px] max-md:w-full h-[100%]"
        url='https://www.youtube.com/embed/QDPXrp9dCQI'
        playing={true}
        loop={true}
        controls={true}
        muted={true}
        Autoplay={true}
      /> */}
      {/* <iframe
        className="w-[1600px] max-md:w-full h-[100%]"
        src="https://www.youtube.com/embed/QDPXrp9dCQI?loop=1&autoplay=1&mute=1&vq=hd1080"
        frameborder="0" allowfullscreen></iframe> */}
      {/* <div>
        <MdOutlinePlayCircleOutline className="text-[8rem] text-[#8E7861] cursor-pointer" />
      </div> */}
    </div>
  );
};

export default VideoSection;
