import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TechStackCard = () => {
  const slickSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
  };
  return (
    <>
      <div className="slider-container">
        {" "}
        <Slider {...slickSettings}>
          <div>
            <div className="flex flex-row place-content-center  ">
              <img className="w-48 sm:w-56" src="./icons/jwt.png" alt="" />
            </div>
          </div>

          <div className="mt-0.5">
            <div className="flex flex-row place-content-center  ">
              <img className="w-48" src="./icons/nodejs.png" alt="" />
            </div>
          </div>

          <div className="mt-2">
            <div className="flex flex-row place-content-center  ">
              <img className="w-64" src="./icons/pandas.png" alt="" />
            </div>
          </div>

          <div className="mt-4">
            <div className="flex flex-row place-content-center  ">
              <img className="w-64 sm:w-72" src="./icons/plotly.png" alt="" />
            </div>
          </div>

          <div className="">
            <div className="flex flex-row place-content-center  ">
              <img className="w-64" src="./icons/postgre.png" alt="" />
            </div>
          </div>

          <div className="mt-3  ">
            <div className="flex flex-row place-content-center ">
              <img className="w-28 sm:w-36" src="./icons/react.png" alt="" />
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default TechStackCard;
