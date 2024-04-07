import { useEffect, useState } from "react";
import PropTypes from "prop-types";

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
        className="start-0 top-0 z-10 flex w-screen  flex-wrap items-center justify-between p-3 px-5 py-4 min-[600px]:absolute md:px-8"
      >
        <a
          href=""
          className="min-[600px]:h-13 min-[600px]:w-13 flex h-10 w-10  items-center  space-x-1  min-[425px]:h-14 min-[425px]:w-14"
        >
          <img src="./Logo_2.png" className="" alt="TrashIN Logo" />
          {/* <h1 className="text-xl font-bold text-[#0092A4]">Ascent</h1> */}
        </a>

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
Navbar.propTypes = {
  setDropDown: PropTypes.func.isRequired,
  dropDown: PropTypes.bool.isRequired,
};

export default Navbar;
