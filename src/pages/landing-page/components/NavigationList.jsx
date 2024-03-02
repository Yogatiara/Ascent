const NavigationList = () => {
  return (
    <ul className="flex flex-col p-2     text-base navigation-list  ">
      <li>
        <a
          href="#aboutUs"
          className="block py-2 px-3 border-b text-black  hover:text-gray-300 md:hover:bg-transparent md:p-0  "
        >
          Tentang kami
        </a>
      </li>
      <li>
        <a
          href="#service"
          className="block py-2 px-3 border-b text-black  hover:text-gray-300 md:hover:bg-transparent md:p-0  "
        >
          Layanan
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className="block py-2 px-3 text-black  hover:text-gray-300 md:hover:bg-transparent  md:p-0  "
        >
          FAQ
        </a>
      </li>
    </ul>
  );
};

export default NavigationList;
