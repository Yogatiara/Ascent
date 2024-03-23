import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";

import { SiLevelsdotfyi } from "react-icons/si";
import { FaBook } from "react-icons/fa";

const CourseCard = ({ courseData }) => {
  const slickSettings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  };

  return (
    <>
      <Slider {...slickSettings}>
        {courseData.slice(2, 6).map((data, index) => (
          <div key={index} className="px-2.5">
            <div className="h-60">
              <img
                className=" h-full rounded-t-xl w-full  "
                src={data.image}
                alt=""
              />
            </div>

            <div className="p-3  gap-2 rounded-b-xl border-b-4 shadow-sm border-b-[#0092A4] border">
              <p className="text-base font-semibold h-10 ">{data.courseName}</p>

              <div className="space-y-1">
                <div className="flex items-center space-x-2 font-medium">
                  <div>
                    <SiLevelsdotfyi className="text-[#0092A4]" />
                  </div>
                  <div>
                    <p className="text-sm">{data.courseLevel}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 font-medium">
                  <div>
                    <FaBook className="text-[#0092A4]" />
                  </div>
                  <div>
                    <p className="text-sm">{data.modulePerCourse} modul</p>
                  </div>
                </div>
              </div>
              <div>
                {data.rawPrice == 0 ? (
                  <h2 className="pt-4 font-semibold text-red-600">Gratis!</h2>
                ) : (
                  <div className="flex justify-between items-center">
                    <div className="flex items-center pt-4 space-x-1">
                      {data.isDiscount && (
                        <div className="bg-green-400 font-semibold text-sm text-white px-1.5 rounded-lg">
                          {data.courseDiscountInPercent}%
                        </div>
                      )}

                      <p
                        className={` ${
                          data.isDiscount
                            ? "line-through text-gray-500 font-medium"
                            : "font-semibold text-[#0092A4]"
                        }`}
                      >
                        Rp.
                        {data.rawPrice
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                      </p>
                    </div>

                    {data.isDiscount && (
                      <p
                        className={`font-semibold pt-4 text-[#0092A4]
                        }`}
                      >
                        Rp.
                        {data.coursePrice
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

CourseCard.propTypes = {
  courseData: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      courseType: PropTypes.string,
      courseName: PropTypes.string,
      rating: PropTypes.number,
      courseLevel: PropTypes.string,
      modulePerCourse: PropTypes.number,
    })
  ),
};

export default CourseCard;
