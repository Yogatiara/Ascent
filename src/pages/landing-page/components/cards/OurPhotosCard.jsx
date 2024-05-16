const OurPhotosCard = () => {
  return (
    <>
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
    </>
  );
};

export default OurPhotosCard;
