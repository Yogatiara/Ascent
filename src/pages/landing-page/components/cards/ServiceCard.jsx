const ServiceCard = () => {
  return (
    <>
      <div className="flex flex-col  gap-12 font-montserrat">
        <div className=" flex flex-col items-center   ">
          <div className="flex h-36 w-36  items-center justify-center rounded-full bg-white shadow-2xl duration-300 ease-in-out hover:scale-110 min-[425px]:h-48 min-[425px]:w-48">
            <img
              className="h-20 w-20 min-[425px]:h-28  min-[425px]:w-28"
              src="./picture/Analytics.png"
              alt="map icon"
            />
          </div>
          <div className="w-56 min-[425px]:w-72">
            <h1 className="pt-6 text-center text-lg font-bold min-[425px]:text-xl  min-[470px]:text-2xl">
              <span className="text-[#0092A4]">Belajar</span> dari Pengalaman
              Terbaik!
            </h1>
          </div>
        </div>

        <div className="   flex flex-col  items-center">
          <div className="flex h-36 w-36 items-center justify-center rounded-full bg-white shadow-2xl duration-300 ease-in-out hover:scale-110  min-[425px]:h-48 min-[425px]:w-48">
            <img
              className="h-20 w-20 min-[425px]:h-28  min-[425px]:w-28"
              src="./picture/Project_planning.png"
              alt="volunteer icon"
            />
          </div>
          <div className="w-56  min-[425px]:w-72">
            <h1 className="pt-6 text-center text-lg font-bold min-[425px]:text-xl min-[470px]:text-2xl">
              <span className="text-[#0092A4]">Belajar</span> dari Praktisi
              Terbaik!
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-center ">
          <div className="flex h-36 w-36 items-center justify-center rounded-full bg-white shadow-2xl duration-300 ease-in-out hover:scale-110 min-[425px]:h-48 min-[425px]:w-48">
            <img
              className="w-20 min-[425px]:h-28  min-[425px]:w-24"
              src="./picture/Share_location.png"
              alt="volunteer icon"
            />
          </div>
          <div className="w-56">
            <h1 className="pt-6 text-center text-lg font-bold min-[425px]:text-xl min-[470px]:text-2xl">
              <span className="text-[#0092A4]">Belajar</span> darimana saja!
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
