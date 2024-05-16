// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { useRef, useEffect } from "react";

// import { useRef } from "react";

import "./TechStackCard.css";

const TechStackCard = () => {
  const logosRef = useRef(null);

  useEffect(() => {
    const ul = logosRef.current;
    if (ul) {
      ul.insertAdjacentHTML("afterend", ul.outerHTML);
      ul.nextSibling.setAttribute("aria-hidden", "true");
    }
    // Cleanup function
  }, []);
  return (
    <>
      <div className="inline-flex w-full gap-10 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] ">
        <ul className=" flex animate-infinite-scroll items-center justify-center gap-10 md:justify-start [&_img]:max-w-none [&_li]:mx-8">
          <li>
            <img className="w-48" src="./icons/nodejs.png" alt="" />
          </li>
          <li>
            <img className="w-64" src="./icons/pandas.png" alt="" />
          </li>

          <li>
            <img className="w-64 sm:w-72 " src="./icons/plotly.png" alt="" />
          </li>

          <li>
            <img className="w-64" src="./icons/postgre.png" alt="" />
          </li>
          <li>
            <img className="w-28 sm:w-36" src="./icons/react.png" alt="" />
          </li>
        </ul>
        <ul className="flex animate-infinite-scroll items-center justify-center gap-10 md:justify-start [&_img]:max-w-none [&_li]:mx-8">
          <li>
            <img className="w-48 " src="./icons/nodejs.png" alt="" />
          </li>
          <li>
            <img className="w-64 " src="./icons/pandas.png" alt="" />
          </li>

          <li>
            <img className="w-64 sm:w-72 " src="./icons/plotly.png" alt="" />
          </li>

          <li>
            <img className="w-64" src="./icons/postgre.png" alt="" />
          </li>
          <li>
            <img className="w-28 sm:w-36" src="./icons/react.png" alt="" />
          </li>
        </ul>
        <ul className="flex animate-infinite-scroll items-center justify-center gap-10 md:justify-start [&_img]:max-w-none [&_li]:mx-8">
          <li>
            <img className="w-48 " src="./icons/nodejs.png" alt="" />
          </li>
          <li>
            <img className="w-64 " src="./icons/pandas.png" alt="" />
          </li>

          <li>
            <img className="w-64 sm:w-72 " src="./icons/plotly.png" alt="" />
          </li>

          <li>
            <img className="w-64" src="./icons/postgre.png" alt="" />
          </li>
          <li>
            <img className="w-28 sm:w-36" src="./icons/react.png" alt="" />
          </li>
        </ul>
      </div>

      {/* </Slider> */}
    </>
  );
};

export default TechStackCard;
