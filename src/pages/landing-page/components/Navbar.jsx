import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "aos/dist/aos.css";
import { CiMenuFries } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import NavigationList from "./NavigationList";
import DownloadButton from "./DownloadButton";

const Navbar = ({ setDropDown, dropDown, refs }) => {
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
    <nav
      // data-aos="fade-down"
      className="start-0 top-0 z-20 flex w-full  flex-wrap items-center justify-between p-3 px-5 py-4 min-[600px]:absolute md:px-8 min-[1440px]:px-1  min-[1880px]:px-16"
    >
      <a
        href=""
        className="min-[600px]:h-13 min-[600px]:w-13 flex h-10 w-10  items-center  space-x-1  min-[425px]:h-14 min-[425px]:w-14 min-[1440px]:h-16 min-[1440px]:w-16"
      >
        <img src="./Logo_2.png" className="" alt="TrashIN Logo" />
      </a>

      {isLargeScreen ? (
        <>
          <div>
            <NavigationList refs={refs} />
          </div>
          <div>
            <DownloadButton scale={"sm"} />
          </div>
        </>
      ) : dropDown ? (
        <button type="button" onClick={() => setDropDown(false)}>
          <IoIosClose className="h-6 w-6 text-gray-500 " />
        </button>
      ) : (
        <button type="button" onClick={() => setDropDown(true)}>
          <CiMenuFries className="h-5 w-5 " />
        </button>
      )}
    </nav>
  );
};
Navbar.propTypes = {
  setDropDown: PropTypes.func.isRequired,
  dropDown: PropTypes.bool.isRequired,
  refs: PropTypes.object,
};

export default Navbar;
