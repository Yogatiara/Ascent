// import ScrollToTop from "react-scroll-to-top";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AOS from "aos";
import "./LandingPage.css";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ServiceCard from "./components/cards/ServiceCard";
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
import FAQAccordion from "./components/FAQAccordion";
import TechStackCard from "./components/cards/TechStackCard";
import Footer from "./components/Footer";
import CourseTopicCardWithOutSlider from "./components/cards/CourseTopicCardWithOutSlider";

const LandingPage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const { courseData } = useSelector((state) => state.course);
  const { categoryData } = useSelector((state) => state.category);

  useEffect(() => {
    AOS.init({ duration: 600 });
    dispatch(getCourseData(setLoading));
    dispatch(getCategoryData(setLoading));
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

          <div className="mt-20 space-y-28">
            <div id="service" className=" justify-center  ">
              <ServiceCard />
            </div>

            <div className="d mx-2 text-left min-[375px]:mx-3.5 min-[425px]:mx-6 min-[600px]:mx-9">
              <div className="mb-3 space-y-2  ">
                <h1 className="text-left text-2xl font-bold min-[600px]:text-3xl ">
                  Kelas Ascent Berbasis Industri
                </h1>
                <p className="text-sm text-gray-500 min-[375px]:text-base ">
                  Ascent: Solusi pelatihan digital yang komprehensif dengan
                  berbagai kelas berbasis industri untuk meningkatkan kompetensi
                  digital Anda.
                </p>
              </div>
              <CourseCard courseData={courseData} />
            </div>

            <div className="w-screen bg-gray-50 py-6 min-[425px]:py-10 sm:px-10">
              <h1 className="px-10 pb-5 text-center text-xl font-bold min-[425px]:px-20 min-[425px]:pb-8 min-[600px]:text-3xl ">
                Kategori kelas yang dapat dipilih
              </h1>
              {isSmallScreen ? (
                <CourseTopicCard categoryData={categoryData} />
              ) : (
                <CourseTopicCardWithOutSlider categoryData={categoryData} />
              )}
            </div>
            <div>
              <h1 className="px-5 pb-10 text-center text-xl font-bold min-[425px]:px-16 min-[600px]:text-3xl">
                Sekilas <span className="italic">TechStack</span> yang akan
                dipelajari
              </h1>
              <TechStackCard />
            </div>

            <div className="mx-4 min-[375px]:mx-9">
              <h1 className="mb-5 text-center text-xl font-bold min-[600px]:text-2xl">
                Profesi Yang Bisa Didapatkan Setelah Lulus
              </h1>
              <ProfessionCard />
            </div>

            <div>
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#0092A4"
                  fillOpacity="1"
                  d="M0,32L48,42.7C96,53,192,75,288,122.7C384,171,480,245,576,234.7C672,224,768,128,864,122.7C960,117,1056,203,1152,218.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg> */}
              <div className="relative">
                <div className="bg-[#0092A4] px-3 pb-36 pt-12 text-left text-white min-[375px]:px-6  min-[425px]:px-7 min-[470px]:px-10">
                  <OurPhotosCard />
                  <div className="min-[600px]:px-8">
                    <h1 className="my-5 text-2xl font-bold min-[600px]:text-3xl ">
                      Tentang Kami
                    </h1>
                    <p className="text-md ">
                      Aplikasi "Ascent" – adalah platform inovatif untuk
                      pembelajaran teknologi digital yang memberikan akses mudah
                      dan terjangkau. Tujuannya adalah membantu pengguna
                      mengembangkan keterampilan penting dalam dunia industri,
                      meningkatkan pemahaman tentang teknologi digital, dan
                      mencapai kesuksesan karier.
                    </p>
                  </div>
                </div>
                <div className="min-[700px]:mx-30 absolute inset-x-4 top-[1010px] min-[365px]:top-[1040px] min-[370px]:top-[1060px] min-[375px]:inset-x-6 min-[418px]:top-[1080px] min-[424px]:top-[1100px] min-[425px]:inset-x-7 min-[439px]:top-[1140px] min-[470px]:inset-x-11 min-[498px]:top-[1150px] min-[500px]:mx-8 min-[512px]:top-[1200px]  min-[540px]:top-[1255px] min-[570px]:top-[1320px]  min-[600px]:top-[1200px] min-[628px]:top-[1250px] min-[630px]:mx-20 sm:top-[1280px] min-[670px]:top-[1340px] min-[700px]:inset-x-8 min-[700px]:top-[1390px] min-[700px]:mx-0">
                  <DownloadNowCard />
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#0092A4"
                    fillOpacity="1"
                    d="M0,224L48,208C96,192,192,160,288,160C384,160,480,192,576,176C672,160,768,96,864,90.7C960,85,1056,139,1152,149.3C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="mx-3 mt-96 space-y-8 pb-24 min-[375px]:mx-6 min-[470px]:mx-10 min-[700px]:mt-52">
            <h1 className="text-center text-2xl font-semibold min-[425px]:px-10 min-[600px]:text-3xl ">
              Frequently Asked Question
            </h1>
            <FAQAccordion />
          </div>

          <Footer />
        </div>
      )}
    </>
  );
};

export default LandingPage;
