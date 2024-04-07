const ServiceCard = () => {
  return (
    <>
      <div className="flex flex-col  place-content-center items-center gap-12 font-montserrat min-[850px]:flex-row min-[850px]:gap-8">
        <div className=" flex flex-col items-center   ">
          <div className="flex h-36 w-36  items-center justify-center rounded-full bg-white shadow-2xl duration-300 ease-in-out hover:scale-110 min-[425px]:h-48 min-[425px]:w-48 min-[850px]:h-40 min-[850px]:w-40">
            <img
              className="h-20 w-20 min-[425px]:h-28  min-[425px]:w-28 min-[850px]:h-24 min-[850px]:w-24"
              src="./picture/Analytics.png"
              alt="map icon"
            />
          </div>
          <div className="w-56 min-[425px]:w-72 min-[850px]:w-64">
            <h1 className="pt-6 text-center text-lg font-bold min-[425px]:text-xl  min-[470px]:text-2xl min-[850px]:text-lg">
              <span className="text-[#0092A4]">Belajar</span> dari Pengalaman
              Terbaik!
            </h1>
          </div>
        </div>

        <div className="   flex flex-col  items-center">
          <div className="flex h-36 w-36 items-center justify-center rounded-full bg-white shadow-2xl duration-300 ease-in-out hover:scale-110  min-[425px]:h-48 min-[425px]:w-48 min-[850px]:h-40 min-[850px]:w-40">
            <img
              className="h-20 w-20 min-[425px]:h-28  min-[425px]:w-28 min-[850px]:h-24 min-[850px]:w-24"
              src="./picture/Project_planning.png"
              alt="volunteer icon"
            />
          </div>
          <div className="w-56  min-[425px]:w-72 min-[850px]:w-64">
            <h1 className="pt-6 text-center text-lg font-bold min-[425px]:text-xl min-[470px]:text-2xl  min-[850px]:text-lg">
              <span className="text-[#0092A4]">Belajar</span> dari Praktisi
              Terbaik!
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-center ">
          <div className="flex h-36 w-36 items-center justify-center rounded-full bg-white shadow-2xl duration-300 ease-in-out hover:scale-110 min-[425px]:h-48 min-[425px]:w-48 min-[850px]:h-40 min-[850px]:w-40">
            <img
              className="w-20 min-[425px]:h-28  min-[425px]:w-24 "
              src="./picture/Share_location.png"
              alt="volunteer icon"
            />
          </div>
          <div className="w-56  min-[850px]:w-48">
            <h1 className="pt-6 text-center text-lg font-bold min-[425px]:text-xl min-[470px]:text-2xl  min-[850px]:text-lg">
              <span className="text-[#0092A4]">Belajar</span> darimana saja!
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
