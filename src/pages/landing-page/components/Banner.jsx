import PropTypes from "prop-types"; // Import prop-types library

import { CiPlay1 } from "react-icons/ci";
import "aos/dist/aos.css";

const Banner = ({ toggleModal }) => {
  return (
    <>
      <div className="relative h-auto w-screen max-[767px]:h-screen md:h-[600px]">
        <div className="absolute z-10  flex w-full  flex-col items-center  gap-4  px-4 pt-12 min-[375px]:px-6 min-[375px]:pt-16 min-[425px]:px-8  min-[470px]:px-10  min-[600px]:pt-36 md:flex-row md:gap-16 md:px-24 min-[850px]:gap-1 min-[850px]:px-32 min-[858px]:gap-12">
          <div className="">
            <strong className="  text-5xl font-bold text-white ">Ascent</strong>
            <p className="pt-3 text-left text-base font-normal text-white min-[470px]:text-lg md:text-base min-[850px]:text-lg">
              Aplikasi revolusioner yang akan membuka pintu ke dunia pengetahuan
              tentang{" "}
              <span className="underline decoration-red-600 underline-offset-2">
                teknologi digital!
              </span>
            </p>
          </div>
          {/* <div>
            <DownloadButton />
          </div> */}
          <div className="grid  place-content-center py-24 ">
            <div className="relative inline-flex">
              <button
                onClick={toggleModal}
                type="button"
                className=" z-10 flex h-20 w-20 items-center justify-center rounded-full bg-[#0092A4] hover:bg-[#0091a400] focus:outline-none focus:ring-4 focus:ring-blue-300  min-[425px]:h-24  min-[425px]:w-24 md:h-20 md:w-20"
              >
                <CiPlay1 className="h-8 w-8  text-white  min-[425px]:h-10 min-[425px]:w-10 " />
              </button>
              {/* <div class="w-8 h-8 bg-blue-500 rounded-full"></div> */}

              <div className="animate-duration-[2000ms] absolute left-0 top-0 h-20 w-20 animate-ping  rounded-full bg-[#0092A4]  p-4 min-[425px]:h-24  min-[425px]:w-24  md:h-20 md:w-20"></div>

              <div className="absolute left-0 top-0 h-20 w-20 animate-pulse  rounded-full bg-[#0092A4] p-4 min-[425px]:h-24 min-[425px]:w-24  md:h-20 md:w-20"></div>
            </div>
          </div>
        </div>
        <img
          className="  h-full w-full object-cover brightness-50"
          src="./picture/banner.jpg"
          alt="classroom image"
        />
      </div>
    </>
  );
};

Banner.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default Banner;
