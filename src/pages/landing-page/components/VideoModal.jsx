import ReactPlayer from "react-player/youtube";
import { IoIosClose } from "react-icons/io";
import { RemoveScroll } from "react-remove-scroll";
import PropTypes from "prop-types";

const VideoModal = ({ openModal, setOpenModal }) => {
  return (
    <>
      {openModal && (
        <RemoveScroll>
          <div className="fixed  h-full  w-screen overscroll-y-none bg-slate-800	py-3">
            <div className="flex flex-row justify-end pr-3 ">
              <button
                onClick={setOpenModal}
                type="button"
                className=" rounded-full  bg-slate-700 hover:bg-[#0091a400] focus:outline-none focus:ring-4  focus:ring-blue-300  "
              >
                <IoIosClose className="h-8 w-8 text-white" />
              </button>
            </div>

            <div className="flex h-full  w-full flex-col justify-center ">
              <div className="h-48 min-[425px]:h-60 min-[500px]:h-72 min-[630px]:h-2/3 lg:h-5/6">
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
VideoModal.propTypes = {
  openModal: PropTypes.bool.isRequired,
  setOpenModal: PropTypes.func.isRequired,
};

export default VideoModal;
