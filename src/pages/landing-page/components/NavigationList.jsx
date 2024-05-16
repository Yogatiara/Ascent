import PropTypes from "prop-types";

const NavigationList = ({ setDropDown, refs }) => {
  const goTo = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  console.log(refs);

  return (
    <ul
      onClick={() => setDropDown(false)}
      className="navigation-list flex flex-col p-2  text-base text-black   min-[600px]:flex-row min-[600px]:text-white md:gap-10 md:text-sm min-[1440px]:text-base  min-[1880px]:text-lg"
    >
      <li>
        <a
          href="#AboutUs"
          onClick={() => goTo(refs.about.current)}
          className="block border-b px-3 py-2 hover:text-gray-300  min-[600px]:border-b-0 md:p-0 md:hover:bg-transparent  "
        >
          Tentang kami
        </a>
      </li>
      <li>
        <a
          href="#service"
          onClick={() => goTo(refs.service.current)}
          className="block border-b px-3 py-2  hover:text-gray-300 min-[600px]:border-b-0 md:p-0 md:hover:bg-transparent  "
        >
          Layanan
        </a>
      </li>
      <li>
        <a
          href="#FAQ"
          onClick={() => goTo(refs.faq.current)}
          className="block px-3 py-2  hover:text-gray-300 md:p-0  md:hover:bg-transparent  "
        >
          FAQ
        </a>
      </li>
    </ul>
  );
};

NavigationList.propTypes = {
  setDropDown: PropTypes.func.isRequired,
  refs: PropTypes.object, // Properti ref harus berupa objek
};

export default NavigationList;
