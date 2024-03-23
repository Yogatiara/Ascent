import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { GoDotFill } from "react-icons/go";

import PropTypes from "prop-types";
const CourseTopicCard = ({ categoryData }) => {
  const slickSettings = {
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "25px",
  };
  return (
    //
    <>
      <Slider {...slickSettings}>
        {categoryData.map((data, id) => (
          <div key={id} className="px-1">
            <div className="bg-white rounded-xl border p-3 px-2 ">
              <div className="flex flex-row items-center justify-between">
                <GoDotFill className="min-h-5 min-w-5 text-[#0092A4]" />

                <h5 className="text-nowrap text-sm truncate font-semibold">
                  {data.categoryName}
                </h5>
                <GoDotFill className="min-h-5 min-w-5 text-[#0092A4]" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

CourseTopicCard.propTypes = {
  categoryData: PropTypes.arrayOf(
    PropTypes.shape({
      categoryName: PropTypes.string,
    })
  ),
};

export default CourseTopicCard;
