import { useEffect, useState } from "react";

import "aos/dist/aos.css";
import { CiMenuFries } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import NavigationList from "./NavigationList";
import DownloadButton from "./DownloadButton";

const Navbar = ({ setDropDown, dropDown }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // const handleClick = () => {
  //   const whatsappLink = "http://wa.me/+6282266951933?text=Halo mimin ascent ";
  //   window.location.href = whatsappLink;
  // };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 600);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav
        // data-aos="fade-down"
        className="start-0 top-0 z-10 flex w-screen  flex-wrap items-center justify-between p-3 px-5 py-4 min-[600px]:absolute"
      >
        <a
          href=""
          className="min-[600px]:h-13 min-[600px]:w-13 flex h-10 w-10  items-center  space-x-1  min-[425px]:h-14 min-[425px]:w-14"
        >
          <img src="./Logo_2.png" className="" alt="TrashIN Logo" />
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

        {/* {} */}

        {isLargeScreen ? (
          <>
            <div>
              <NavigationList />
            </div>
            <div>
              <DownloadButton scale={"sm"} />
            </div>
          </>
        ) : dropDown ? (
          <button onClick={() => setDropDown(false)}>
            <IoIosClose className="h-6 w-6 text-gray-500 " />
          </button>
        ) : (
          <button type="button" onClick={() => setDropDown(true)}>
            <CiMenuFries className="h-5 w-5 " />
          </button>
        )}
      </nav>
    </>
  );
};

export default Navbar;
