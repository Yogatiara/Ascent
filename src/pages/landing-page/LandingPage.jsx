// import ScrollToTop from "react-scroll-to-top";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AOS from "aos";
import "./LandingPage.css";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ServiceCard from "./components/cards/ServiceCard";
// import LogoFrame from "./components/LogoFrame";
// import AboutUsCard from "./components/cards/AboutUsCard";
// import Map from "./components/Map";
// import ScrollOnTopButton from "./components/ScrollOntopButton";
// import Footer from "./components/Footer";
import CourseCard from "./components/cards/CourseCard";
import { getCourseData } from "../../redux/actions/courseAction";
import LoadingPage from "./loading-page/LoadingPage";
import VideoModal from "./components/VideoModal";
import NavigationList from "./components/NavigationList";
import getCategoryData from "../../redux/actions/categoryAction";
import CourseTopicCard from "./components/cards/CourseTopicCard";
import ProfessionCard from "./components/cards/ProfessionCard";
import OurPhotosCard from "./components/cards/OurPhotosCard";
import DownloadNowCard from "./components/cards/DownloadNowCard";

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

  console.log(courseData);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <div className="font-montserrat">
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
            <NavigationList setDropDown={setDropDown} />
          </div>

          <Banner toggleModal={() => setOpenModal(true)} />

          <div className="space-y-28 mt-20">
            <div id="service" className=" justify-center  ">
              <ServiceCard />
            </div>

            <div className="text-left">
              <div className="mx-3 space-y-2 mb-3">
                <h1 className="text-2xl font-bold">
                  Kelas Ascent Berbasis Industri
                </h1>
                <p className="text-md text-gray-500">
                  Ascent: Solusi pelatihan digital yang komprehensif dengan
                  berbagai kelas berbasis industri untuk meningkatkan kompetensi
                  digital Anda.
                </p>
              </div>
              <CourseCard courseData={courseData} />
            </div>

            <div className="bg-gray-50 w-screen py-6">
              <h1 className="text-xl font-bold text-center px-10 pb-5">
                Kategori kelas yang dapat dipilih
              </h1>
              <CourseTopicCard categoryData={categoryData} />
            </div>

            <div className="mx-4">
              <h1 className="text-xl font-bold mb-5">
                Profesi Yang Bisa Didapatkan Setelah Lulus
              </h1>
              <ProfessionCard />
            </div>

            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#0092A4"
                  fill-opacity="1"
                  d="M0,32L48,42.7C96,53,192,75,288,122.7C384,171,480,245,576,234.7C672,224,768,128,864,122.7C960,117,1056,203,1152,218.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
              <div className="relative">
                <div className="px-3 text-left bg-[#0092A4] pt-8 pb-36 text-white">
                  <OurPhotosCard />
                  <h1 className="text-2xl font-bold my-5">Tentang Kami</h1>
                  <p className="text-md ">
                    Aplikasi "Ascent" – adalah platform inovatif untuk
                    pembelajaran teknologi digital yang memberikan akses mudah
                    dan terjangkau. Tujuannya adalah membantu pengguna
                    mengembangkan keterampilan penting dalam dunia industri,
                    meningkatkan pemahaman tentang teknologi digital, dan
                    mencapai kesuksesan karier.
                  </p>
                </div>
                <div className="absolute inset-x-4 top-[990px]	">
                  <DownloadNowCard />
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#0092A4"
                    fill-opacity="1"
                    d="M0,224L48,208C96,192,192,160,288,160C384,160,480,192,576,176C672,160,768,96,864,90.7C960,85,1056,139,1152,149.3C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          {/* 
          <div >
           

            <div>
              <div className="mx-5">
               
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
