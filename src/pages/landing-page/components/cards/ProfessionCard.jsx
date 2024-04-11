const ProfessionCard = () => {
  return (
    <div className="text-md grid grid-flow-col grid-rows-2  text-center min-[900px]:w-[500px] ">
      <div className=" border-b border-[#0092A4] p-2">Software Enginner</div>
      <div className=" flex items-center justify-center border-[#0092A4] p-2">
        Designer
      </div>
      <div className="border-b border-l border-[#0092A4] p-2">
        Product Manager
      </div>
      <div className=" flex items-center justify-center border-l border-[#0092A4] p-2">
        Data Scientist
      </div>
    </div>
  );
};

export default ProfessionCard;
