import ReactPlayer from "react-player/youtube";
import { IoIosClose } from "react-icons/io";
import { RemoveScroll } from "react-remove-scroll";

const VideoModal = ({ openModal, setOpenModal }) => {
  return (
    <>
      {openModal && (
        <RemoveScroll>
          <div className="w-screen h-full py-3  fixed bg-slate-800 overscroll-y-none	">
            <div className="flex flex-row justify-end pr-3 ">
              <button
                onClick={setOpenModal}
                type="button"
                className=" bg-slate-700  hover:bg-[#0091a400] focus:outline-none focus:ring-4 focus:ring-blue-300  rounded-full  "
              >
                <IoIosClose className="w-8 h-8 text-white" />
              </button>
            </div>

            <div className="w-full h-full  flex flex-col justify-center ">
              <div className="h-48">
                <ReactPlayer
                  className="react-player "
                  url={"http://www.youtube.com/watch?v=ixOd42SEUF0"}
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
        </RemoveScroll>
      )}
    </>
  );
};

export default VideoModal;
