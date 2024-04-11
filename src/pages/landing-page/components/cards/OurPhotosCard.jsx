const OurPhotosCard = () => {
  return (
    <div className="grid  grid-cols-3 gap-2.5 min-[600px]:gap-4  min-[600px]:px-10 md:h-[350px] md:w-[2800px] md:px-0 ">
      <div className="grid  gap-2.5 min-[600px]:gap-4 ">
        <div>
          <img
            className="h-full w-full rounded-lg"
            src="./picture/Our photos/7.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-full w-full rounded-lg object-cover "
            src="./picture/Our photos/6.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="grid  gap-2.5 min-[600px]:gap-4 ">
        <div>
          <img
            className="h-full w-full rounded-lg"
            src="./picture/Our photos/5.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-full w-full rounded-lg object-cover "
            src="./picture/Our photos/4.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="grid   gap-2.5 min-[600px]:gap-4 ">
        <div>
          <img
            className="h-full w-full rounded-lg object-cover"
            src="./picture/Our photos/3.jpg "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default OurPhotosCard;
