import PropTypes from "prop-types";

import { SiLevelsdotfyi } from "react-icons/si";
import { FaBook } from "react-icons/fa";

const CourseCard = ({ courseData }) => {
  return (
    <>
      <div className="flex grid-cols-4 items-center gap-2 overflow-x-auto min-[375px]:gap-4 min-[1670px]:grid ">
        {courseData.slice(2, 6).map((data, index) => (
          <div key={index} className="w-80 min-w-72 min-[375px]:min-w-96">
            <div className="h-60  min-[425px]:h-72 ">
              <img
                className=" h-full w-full rounded-t-xl  "
                src={data.image}
                alt=""
              />
            </div>

            <div className="gap-2  rounded-b-xl border border-b-4 border-b-[#0092A4] p-3 shadow-sm">
              <p className="h-10 text-base font-semibold min-[425px]:text-lg">
                {data.courseName}
              </p>

              <div className="space-y-1">
                <div className="flex items-center space-x-2 font-medium">
                  <div>
                    <SiLevelsdotfyi className="text-[#0092A4]" />
                  </div>
                  <div>
                    <p className="text-sm min-[425px]:text-base">
                      {data.courseLevel}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 font-medium">
                  <div>
                    <FaBook className="text-[#0092A4]" />
                  </div>
                  <div>
                    <p className="text-sm min-[425px]:text-base">
                      {data.modulePerCourse} modul
                    </p>
                  </div>
                </div>
              </div>
              <div>
                {data.rawPrice == 0 ? (
                  <h2 className="pt-4 font-semibold text-red-600 min-[425px]:text-lg">
                    Gratis!
                  </h2>
                ) : (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 pt-4 min-[425px]:text-lg">
                      {data.isDiscount && (
                        <div className="rounded-lg bg-green-400 px-1.5 text-sm font-semibold text-white">
                          {data.courseDiscountInPercent}%
                        </div>
                      )}

                      <p
                        className={` ${
                          data.isDiscount
                            ? "font-medium text-gray-500 line-through"
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
                        className={`pt-4 font-semibold text-[#0092A4]
                        min-[425px]:text-lg`}
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
      </div>
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
    }),
  ),
};

export default CourseCard;
