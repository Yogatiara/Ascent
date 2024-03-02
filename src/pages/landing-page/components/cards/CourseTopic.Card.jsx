import PropTypes from "prop-types";
const CourseTopicCard = ({ categoryData }) => {
  return (
    <>
      <div className="flex flex-row gap-8">
        {categoryData.map((data, id) => (
          <div key={id} className="bg-white rounded-xl shadow-xl">
            <h5 className="p-3 px-5 text-nowrap  ">{data.categoryName}</h5>
          </div>
        ))}
      </div>
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
