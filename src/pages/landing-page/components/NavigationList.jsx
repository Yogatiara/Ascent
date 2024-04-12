// eslint-disable-next-line react/prop-types
const NavigationList = ({ setDropDown }) => {
  return (
    <ul
      onClick={() => setDropDown(false)}
      className="navigation-list flex flex-col p-2  text-base text-black   min-[600px]:flex-row min-[600px]:text-white md:gap-10 md:text-sm min-[1440px]:text-base "
    >
      <li>
        <a
          href="#aboutUs"
          className="block border-b px-3 py-2 hover:text-gray-300  min-[600px]:border-b-0 md:p-0 md:hover:bg-transparent  "
        >
          Tentang kami
        </a>
      </li>
      <li>
        <a
          href="#service"
          className="block border-b px-3 py-2  hover:text-gray-300 min-[600px]:border-b-0 md:p-0 md:hover:bg-transparent  "
        >
          Layanan
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className="block px-3 py-2  hover:text-gray-300 md:p-0  md:hover:bg-transparent  "
        >
          FAQ
        </a>
      </li>
    </ul>
  );
};

export default NavigationList;
