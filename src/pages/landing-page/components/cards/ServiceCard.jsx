const ServiceCard = () => {
  return (
    <>
      <div className="font-montserrat space-y-12">
        <div className=" flex flex-col items-center    ">
          <div className="w-36 h-36  bg-white rounded-full shadow-2xl items-center flex justify-center hover:scale-110 ease-in-out duration-300">
            <img
              className="w-20 h-20"
              src="./picture/Analytics.png"
              alt="map icon"
            />
          </div>
          <div className="w-56">
            <h1 className="text-lg font-bold pt-5 text-center  ">
              <span className="text-[#0092A4]">Belajar</span> dari Pengalaman
              Terbaik!
            </h1>
          </div>
        </div>

        <div className="   flex flex-col  items-center">
          <div className="w-36 h-36 bg-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 ease-in-out duration-300">
            <img
              className="w-20 h-20"
              src="./picture/Project_planning.png"
              alt="volunteer icon"
            />
          </div>
          <div className="w-56">
            <h1 className="text-lg font-bold pt-5 text-center  ">
              <span className="text-[#0092A4]">Belajar</span> dari Praktisi
              Terbaik!
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-center ">
          <div className="w-36 h-36 bg-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 ease-in-out duration-300">
            <img
              className="w-20 "
              src="./picture/Share_location.png"
              alt="volunteer icon"
            />
          </div>
          <div className="w-56">
            <h1 className="text-lg font-bold pt-5 text-center  ">
              <span className="text-[#0092A4]">Belajar</span> darimana saja!
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
