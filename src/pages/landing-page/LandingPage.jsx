import ScrollToTop from "react-scroll-to-top";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AOS from "aos";
import "./LandingPage.css";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ServiceCard from "./components/cards/ServiceCard";
import LogoFrame from "./components/LogoFrame";
import AboutUsCard from "./components/cards/AboutUsCard";
import Map from "./components/Map";
import ScrollOnTopButton from "./components/ScrollOntopButton";
import Footer from "./components/Footer";
import CourseCard from "./components/cards/CourseCard";
import { getCourseData } from "../../redux/actions/courseAction";
import LoadingPage from "./loading-page/LoadingPage";
import VideoModal from "./components/VideoModal";
import NavigationList from "./components/NavigationList";
import getCategoryData from "../../redux/actions/categoryAction";
import CourseTopicCard from "./components/cards/CourseTopic.Card";

const LandingPage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const { courseData } = useSelector((state) => state.course);
  const { categoryData } = useSelector((state) => state.category);

  useEffect(() => {
    AOS.init({ duration: 600 });
    dispatch(getCourseData(setLoading));
    dispatch(getCategoryData(setLoading));
  }, [dispatch]);

  console.log(categoryData);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <div className=" w-full h-full font-montserrat">
          <div className="absolute z-20">
            <VideoModal
              setOpenModal={() => setOpenModal(false)}
              openModal={openModal}
            />
          </div>
          {/* <ScrollOnTopButton ScrollToTop={ScrollToTop} /> */}

          <div className="w-full">
            <Navbar dropDown={dropDown} setDropDown={setDropDown} />
          </div>

          <div id="navigation-list" className={dropDown ? "fade-down" : "hide"}>
            <NavigationList />
          </div>

          <Banner toggleModal={() => setOpenModal(true)} />

          <div className="space-y-20 mt-20">
            <div id="service" className=" justify-center  ">
              <ServiceCard />
            </div>

            <div className="bg-gray-50">
              <div className="py-7">
                <h1 className="text-xl font-bold text-center px-10 pb-6">
                  Kategori kelas yang dapat dipilih
                </h1>
                <CourseTopicCard categoryData={categoryData} />
              </div>
            </div>
          </div>

          {/* 
          <div id="aboutUs" className="  ">
            <>
              <LogoFrame />
            </>

            <div>
              <div className="mx-5">
                <AboutUsCard />
              </div>
            </div>
          </div> */}

          {/* <div className="w-full h-screen flex flex-col justfiy-center items-center place-content-center font-montserrat gap-8 bg-[#0092A4]">
            <h1 className="text-5xl font-bold text-white text-center">
              Cabang kantor Ascent
            </h1>

            <div className="w-[66%] h-[620px]">
              <Map weight={"full"} height={"full"} zoom={5} show={false} />
            </div>
          </div> */}

          {/* <div className="h-screen gap-10 flex flex-col justify-center items-center font-montserrat text-center ">
            <h1 className="text-5xl font-bold text-[#0092A4]  text-center ">
              Kelas yang tersedia
            </h1>
            <div className="mx-auto">
              <CourseCard courseData={courseData} />
            </div>
          </div> */}

          {/* <div id="contact">
            <Footer />
          </div> */}
        </div>
      )}
    </>
  );
};

export default LandingPage;
