import ScrollToTop from "react-scroll-to-top";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import AOS from "aos";
import "./LandingPage.css";
import "aos/dist/aos.css";

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
import ScrollOnTopButton from "./components/ScrollOntopButton";

const LandingPage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const { courseData } = useSelector((state) => state.course);
  const { categoryData } = useSelector((state) => state.category);

  const refs = {
    about: useRef(null),
    service: useRef(null),
    faq: useRef(null),
  };

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
        <>
          <div className=" font-montserrat">
            <div className="absolute z-40">
              <VideoModal
                setOpenModal={() => setOpenModal(false)}
                openModal={openModal}
              />
            </div>
            <ScrollOnTopButton ScrollToTop={ScrollToTop} />

            <Navbar dropDown={dropDown} setDropDown={setDropDown} refs={refs} />

            <div
              id="navigation-list"
              className={dropDown ? "fade-down" : "hide"}
            >
              <NavigationList setDropDown={setDropDown} />
            </div>

            <Banner toggleModal={() => setOpenModal(true)} />

            <div ref={refs.service}></div>
            <div className="mt-20 space-y-28 min-[850px]:mt-28 min-[850px]:space-y-32 min-[1104px]:space-y-64">
              <div data-aos="fade-right" data-aos-duration="900">
                <ServiceCard />
              </div>

              <div
                data-aos="fade-left"
                data-aos-duration="900"
                className="mx-2   flex-col text-left min-[375px]:mx-3.5 min-[425px]:mx-6 min-[600px]:mx-9 md:mx-16 min-[1060px]:mx-8 min-[1440px]:mx-10 min-[1670px]:mx-10 min-[1670px]:flex min-[1720px]:mx-16 min-[1750px]:mx-20 min-[1820px]:mx-28 min-[1850px]:mx-36"
              >
                <div className="px-auto mb-3  space-y-2 min-[1670px]:pr-36">
                  <h1 className="text-left text-2xl font-bold min-[600px]:text-3xl ">
                    Kelas Ascent Berbasis Industri
                  </h1>
                  <p className="m text-left text-sm text-gray-500 min-[375px]:text-base lg:pr-80 lg:text-lg xl:text-xl">
                    Ascent: Solusi pelatihan digital yang komprehensif dengan
                    berbagai kelas berbasis industri untuk meningkatkan
                    kompetensi digital Anda.
                  </p>
                </div>
                <CourseCard courseData={courseData} />
              </div>

              <div className=" bg-gray-50 py-6 min-[425px]:py-10 sm:px-10  md:px-20 min-[1173px]:px-36 min-[1440px]:px-64 min-[1500px]:px-72  min-[1670px]:px-96">
                <h1 className="px-10 pb-5 text-center text-xl font-bold min-[425px]:px-20 min-[425px]:pb-8 min-[540px]:px-36 min-[600px]:text-3xl min-[1134px]:px-72     min-[1880px]:px-96">
                  Kategori kelas yang dapat dipilih
                </h1>
                <div data-aos="zoom-in" data-aos-duration="900">
                  {isSmallScreen ? (
                    <CourseTopicCard categoryData={categoryData} />
                  ) : (
                    <CourseTopicCardWithOutSlider categoryData={categoryData} />
                  )}
                </div>
              </div>

              <div className="min-[1880px]:mx-32">
                <h1 className="px-5 pb-20 text-center text-xl font-bold min-[425px]:px-16 min-[540px]:px-20 min-[600px]:text-3xl min-[770px]:px-28 min-[840px]:px-36 min-[900px]:px-40 lg:px-56 min-[1060px]:px-64 min-[1125px]:px-72  min-[1173px]:px-96 min-[1440px]:px-[500px]  min-[1670px]:px-[650px]">
                  Sekilas <span className="italic">TechStack</span> yang akan
                  dipelajari
                </h1>
                <div>
                  <TechStackCard />
                </div>
              </div>

              <div className="min mx-4   flex-row-reverse  items-center min-[375px]:mx-9 md:mx-24 min-[900px]:flex  min-[900px]:gap-6 min-[1125px]:gap-10 min-[1139px]:gap-0 min-[1227px]:mx-40 min-[1334px]:mx-48 min-[1440px]:mx-60 min-[1500px]:mx-80  min-[1670px]:mx-96 min-[1754px]:mx-[420px] min-[1830px]:gap-10 min-[1870px]:mx-[460px]">
                <h1 className="mb-10 text-center text-xl font-bold min-[540px]:px-20 min-[600px]:text-2xl min-[900px]:px-0 min-[900px]:text-right min-[1139px]:pl-11 min-[1173px]:pl-28 min-[1500px]:pl-10 min-[1592px]:pl-20 ">
                  Profesi Yang Bisa Didapatkan Setelah Lulus
                </h1>
                <div data-aos="fade-down" data-aos-duration="900">
                  <ProfessionCard />
                </div>
              </div>

              <div>
                <div ref={refs.about} className="relative">
                  <div className="flex flex-col items-center justify-center gap-4 bg-[#0092A4] px-3   pb-48 pt-12 text-left text-white min-[375px]:px-6 min-[425px]:px-7 min-[470px]:px-10 md:flex-row-reverse md:px-5 md:pb-28 min-[900px]:pb-52 min-[1060px]:px-10 min-[1060px]:pb-64 min-[1120px]:pb-72 min-[1227px]:gap-16 min-[1227px]:pb-96 min-[1334px]:px-16 min-[1500px]:gap-24 min-[1500px]:px-24 min-[1500px]:pt-20 min-[1592px]:gap-32 min-[1592px]:px-36  min-[1880px]:px-48">
                    <div
                      data-aos="flip-left"
                      data-aos-duration="900"
                      className="grid  grid-cols-3 gap-2.5 min-[600px]:gap-4  min-[600px]:px-10 md:h-[350px] md:w-[2800px] md:px-0 "
                    >
                      <OurPhotosCard />
                    </div>
                    <div className="min-[600px]:px-8 md:px-0 min-[1227px]:pt-12 min-[1500px]:pt-24  min-[1880px]:pt-32">
                      <div></div>
                      <h1 className="my-5 text-2xl font-bold min-[600px]:text-3xl ">
                        Tentang Kami
                      </h1>
                      <p className="text-md min-[1334px]:text-lg  min-[1880px]:text-xl">
                        Aplikasi &quot;Ascent&quot; - adalah platform inovatif
                        untuk pembelajaran teknologi digital yang memberikan
                        akses mudah dan terjangkau. Tujuannya adalah membantu
                        pengguna mengembangkan keterampilan penting dalam dunia
                        industri, meningkatkan pemahaman tentang teknologi
                        digital, dan mencapai kesuksesan karier.
                      </p>
                    </div>
                  </div>
                  <div
                    data-aos="zoom-in-down"
                    data-aos-duration="900"
                    className="min-[700px]:mx-30 absolute inset-x-4 top-[700px]  min-[375px]:inset-x-6  min-[425px]:inset-x-7  min-[470px]:inset-x-11  min-[500px]:mx-8   min-[530px]:top-[750px]   min-[600px]:top-[800px] min-[630px]:mx-20   min-[700px]:inset-x-8 min-[700px]:top-[880px] min-[700px]:mx-0   md:inset-x-16  md:top-[480px]  min-[900px]:top-[550px] lg:inset-x-24 min-[1060px]:top-[600px]  min-[1120px]:inset-x-40 min-[1120px]:top-[640px] min-[1227px]:inset-x-44 min-[1227px]:top-[700px] min-[1334px]:inset-x-56 min-[1334px]:top-[750px] min-[1440px]:inset-x-64 min-[1500px]:inset-x-72  min-[1670px]:inset-x-80 min-[1754px]:inset-x-96 min-[1754px]:top-[800px] min-[1830px]:inset-x-[380px] min-[1830px]:top-[830px] min-[1880px]:inset-x-[450px]"
                  >
                    <DownloadNowCard />
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                  >
                    <path
                      fill="#0092A4"
                      fillOpacity="1"
                      d="M0,224L48,208C96,192,192,160,288,160C384,160,480,192,576,176C672,160,768,96,864,90.7C960,85,1056,139,1152,149.3C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              ref={refs.faq}
              data-aos="zoom-in-up"
              data-aos-duration="900"
              className="mx-3 mt-96 space-y-8 pb-24 min-[375px]:mx-6 min-[470px]:mx-10 min-[700px]:mt-52 min-[1060px]:mx-28 xl:mx-56 min-[1440px]:mx-72  min-[1670px]:mx-96"
            >
              <h1 className="text-center text-2xl font-semibold min-[425px]:px-10 min-[600px]:text-3xl ">
                Frequently Asked Question
              </h1>
              <FAQAccordion />
            </div>

            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default LandingPage;
