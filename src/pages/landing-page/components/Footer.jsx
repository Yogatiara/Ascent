const Footer = () => {
  return (
    <>
      {/* <div></div> */}
      <footer className=" max-w-screen flex w-full flex-col justify-between gap-4 bg-[#0092A4] p-3 min-[700px]:flex-row">
        <div>
          <p className=" text-sm font-thin text-white min-[365px]:text-base min-[425px]:text-base">
            © 2023-2024 Ascent team. All Rights Reserved.
          </p>
        </div>
        <div className=" flex flex-col gap-3 text-sm font-thin text-white min-[425px]:text-base min-[700px]:text-sm">
          <div className="border-b pb-2">
            <p>Ikuti kami dan dapatkan info menarik!</p>
          </div>
          <ul className="flex items-center gap-2">
            <li>
              <img
                className="w-5  min-[425px]:w-6"
                src="./icons/facebook.png"
                alt=""
              />
            </li>
            <li>
              <img
                className="w-5 min-[425px]:w-6"
                src="./icons/instagram.png"
                alt=""
              />
            </li>
            <li>
              <img
                className="w-5 min-[425px]:w-6"
                src="./icons/twitter.png"
                alt=""
              />
            </li>
            <li>
              <img
                className="w-5 min-[425px]:w-6"
                src="./icons/whatsapp.png"
                alt=""
              />
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
