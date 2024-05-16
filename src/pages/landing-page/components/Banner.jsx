import PropTypes from "prop-types"; // Import prop-types library

import { CiPlay1 } from "react-icons/ci";
import "aos/dist/aos.css";

const Banner = ({ toggleModal }) => {
  return (
    <>
      <div className="relative h-auto w-full max-[767px]:h-screen md:h-[600px] min-[1180px]:h-[660px] min-[1250px]:h-[700px] 2xl:h-[750px]  min-[1880px]:h-[850px]">
        <div className="absolute z-10  flex w-full  flex-col items-center justify-center  gap-4  px-4 pt-12 min-[375px]:px-6 min-[375px]:pt-16 min-[425px]:px-8  min-[470px]:px-10  min-[600px]:pt-36 md:flex-row md:gap-16 md:px-24 min-[850px]:gap-1 min-[850px]:px-32 min-[858px]:gap-12  min-[1060px]:px-40 min-[1104px]:px-44 min-[1180px]:px-60 min-[1180px]:pt-48 min-[1250px]:px-56 min-[1250px]:pt-52 xl:px-64  min-[1440px]:gap-16 min-[1440px]:px-72 min-[1500px]:px-80 2xl:px-80 2xl:pt-56 min-[1670px]:px-96 min-[1820px]:px-[450px] min-[1880px]:px-[500px]  min-[1880px]:pt-60">
          <div className="md:border-r md:pr-8 min-[1136px]:pr-28 min-[1440px]:pr-10 min-[1592px]:pr-16">
            <strong className="  text-5xl font-bold text-white min-[1440px]:font-extrabold min-[1820px]:text-6xl">
              Ascent
            </strong>
            <p className="pt-3 text-left text-base font-normal text-white min-[470px]:text-lg md:text-base min-[850px]:text-lg min-[1440px]:text-xl">
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
                className=" z-10 flex h-20 w-20 items-center justify-center rounded-full bg-[#0092A4] hover:bg-[#0091a400] focus:outline-none focus:ring-4 focus:ring-blue-300  min-[425px]:h-24  min-[425px]:w-24 md:h-20 md:w-20 min-[1440px]:h-32 min-[1440px]:w-32  "
              >
                <CiPlay1 className="h-8 w-8  text-white  min-[425px]:h-10 min-[425px]:w-10 min-[1440px]:h-12 min-[1440px]:w-12" />
              </button>
              {/* <div class="w-8 h-8 bg-blue-500 rounded-full"></div> */}

              <div className="animate-duration-[2000ms] absolute left-0 top-0 h-20 w-20  animate-ping rounded-full  bg-[#0092A4] p-4  min-[425px]:h-24  min-[425px]:w-24 md:h-20 md:w-20 min-[1440px]:h-32 min-[1440px]:w-32"></div>

              <div className="absolute left-0 top-0 h-20 w-20 animate-pulse  rounded-full bg-[#0092A4] p-4 min-[425px]:h-24 min-[425px]:w-24  md:h-20 md:w-20 min-[1440px]:h-32 min-[1440px]:w-32"></div>
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
