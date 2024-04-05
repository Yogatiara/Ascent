import { GoDotFill } from "react-icons/go";

import PropTypes from "prop-types";
const CourseTopicCardWithOutSlider = ({ categoryData }) => {
  return (
    //
    <>
      <div className="mx-3 grid grid-cols-3 gap-2 ">
        {categoryData.map((data, id) => (
          <div
            key={id}
            className={`${id == 0 ? "col-span-2 col-start-1" : id == 2 ? "col-span-3" : id == 4 ? "col-span-2 col-start-2" : id == 5 ? "col-span-3 col-start-1" : ""}`}
          >
            <div className=" rounded-xl border bg-white p-3 ">
              <div className="flex flex-row items-center justify-between">
                <GoDotFill className="min-h-5 min-w-5 text-[#0092A4]" />

                <h5 className="text-sm font-semibold">
                  {id == 3
                    ? "UI/UX Design"
                    : id == 5
                      ? "Product Manager"
                      : data.categoryName}
                </h5>
                <GoDotFill className="min-h-5 min-w-5 text-[#0092A4]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

CourseTopicCardWithOutSlider.propTypes = {
  categoryData: PropTypes.arrayOf(
    PropTypes.shape({
      categoryName: PropTypes.string,
    }),
  ),
};

export default CourseTopicCardWithOutSlider;
