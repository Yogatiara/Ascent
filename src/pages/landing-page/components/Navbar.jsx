import "aos/dist/aos.css";
import { CiMenuFries } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";

const Navbar = ({ setDropDown, dropDown }) => {
  const handleClick = () => {
    const whatsappLink = "http://wa.me/+6282266951933?text=Halo mimin ascent ";
    window.location.href = whatsappLink;
  };
  return (
    <>
      <nav
        // data-aos="fade-down"
        className=" z-20 top-0 start-0 max-w-screen py-4 flex flex-wrap items-center justify-between mx-2 p-3 "
      >
        <a href="" className="flex items-center space-x-1 ">
          <img src="./Logo_2.png" className="h-10" alt="TrashIN Logo" />
          {/* <h1 className="text-xl font-bold text-[#0092A4]">Ascent</h1> */}
        </a>

        {/* <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse  p-1 ">
          <button
            type="button"
            onClick={handleClick}
            className="text-white z-100 animate-pulse
              bg-[#0092A4] hover:bg-[#004e64ab] focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <div className="flex items-center space-x-2 text-lg">
              <div>Hubungi kami</div>

              <img className="w-6" src="../icons/whatsapp.png" alt="" />
            </div>
          </button>
        </div> */}
        {dropDown ? (
          <button onClick={() => setDropDown(false)}>
            <IoIosClose className="w-6 h-6 text-gray-500 " />
          </button>
        ) : (
          <button type="button" onClick={() => setDropDown(true)}>
            <CiMenuFries className="w-5 h-5 " />
          </button>
        )}

        {/* 
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 "
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-2  mt-4 font-bold text-xl opacity-100 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
            <li>
              <a
                href="#aboutUs"
                className="block py-2 px-3 text-white rounded  hover:text-gray-300 md:hover:bg-transparent md:p-0  "
              >
                Tentang kami
              </a>
            </li>
            <li>
              <a
                href="#service"
                className="block py-2 px-3 text-white rounded hover:text-gray-300 md:hover:bg-transparent md:p-0  "
              >
                Layanan
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 px-3 text-white rounded hover:text-gray-300 md:hover:bg-transparent  md:p-0  "
              >
                FAQ
              </a>
            </li>
          </ul>
        </div> */}
      </nav>
    </>
  );
};

export default Navbar;
