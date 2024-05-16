/* eslint-disable react/prop-types */
const ScrollOnTopButton = ({ ScrollToTop }) => {
  return (
    <>
      <ScrollToTop
        smooth
        top={20}
        height="30"
        className="rounded-2xl pl-1.5 shadow-2xl"
      />
    </>
  );
};

export default ScrollOnTopButton;
