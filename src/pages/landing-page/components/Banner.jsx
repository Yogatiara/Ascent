import DownloadButton from "./DownloadButton";
import { CiPlay1 } from "react-icons/ci";

import "aos/dist/aos.css";

const Banner = ({ toggleModal }) => {
  return (
    <>
      <div className="relative w-screen h-screen">
        <div className="absolute z-10 py-32 space-y-3  flex flex-col gap-4 px-4  ">
          <div>
            <strong className="  text-white text-5xl font-bold ">Ascent</strong>
            <p className="text-left text-white text-base pt-3 font-normal ">
              Aplikasi revolusioner yang akan membuka pintu ke dunia pengetahuan
              tentang{" "}
              <span className="underline underline-offset-2 decoration-red-600">
                teknologi digital!
              </span>
            </p>
          </div>
          <div className="items-center">
            <div className="relative inline-flex">
              <button
                onClick={toggleModal}
                type="button"
                className=" bg-[#0092A4] w-16 h-16 flex justify-center items-center z-10 hover:bg-[#0091a400] focus:outline-none focus:ring-4 focus:ring-blue-300  rounded-full  "
              >
                <CiPlay1 className="w-8 h-8 text-white" />
              </button>
              {/* <div class="w-8 h-8 bg-blue-500 rounded-full"></div> */}

              <div className="w-16 h-16 bg-[#0092A4] rounded-full absolute top-0 left-0  p-4 animate-ping  animate-duration-[2000ms]"></div>

              <div className="w-16 h-16 bg-[#0092A4] rounded-full absolute top-0 left-0 animate-pulse p-4"></div>
            </div>
          </div>
        </div>
        <img
          className="  w-full h-full brightness-50 object-cover"
          src="./picture/banner.jpg"
          alt="classroom image"
        />
      </div>
    </>
  );
};

export default Banner;
