const ProfessionCard = () => {
  return (
    <div className="grid grid-rows-2 grid-flow-col text-center  text-md">
      <div className=" border-[#0092A4] border-b p-2">Software Enginner</div>
      <div className=" border-[#0092A4] p-2 flex items-center justify-center">
        Designer
      </div>
      <div className="border-[#0092A4] border-l border-b p-2">
        Product Manager
      </div>
      <div className=" border-[#0092A4] border-l p-2 flex items-center justify-center">
        Data Scientist
      </div>
    </div>
  );
};

export default ProfessionCard;
