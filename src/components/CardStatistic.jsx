import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { PiUsersLight } from "react-icons/pi";
import { MdOutlineClass, MdClass } from "react-icons/md";

import { getCourseData } from "../redux/actions/courseAction";
import getUserData from "../redux/actions/userAction";

const CardStatistic = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const { courseData } = useSelector((state) => state.course);
  const { userData } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getCourseData(setLoading));
    dispatch(getUserData(setLoading));
  }, [dispatch]);

  return (
    <div className="flex flex-col place-items-center max-md:space-y-7 md:flex-row md:space-x-2 lg:space-x-6 xl:space-x-10 ">
      <div className="flex flex-row items-center space-x-5 md:space-x-3 xl:space-x-6 bg-[#489CFF] p-6 md:p-3 w-5/6 lg:w-4/6 xl:min-w-3/5 lg:p-4 xl:p-6  rounded-xl">
        <div className="p-2 bg-white rounded-3xl md:rounded-2xl">
          <PiUsersLight className="text-5xl md:text-2xl lg:text-4xl xl:text-6xl text-[#489CFF]" />
        </div>

        <div className="text-lg text-white md:text-sm lg:text-lg xl:text-xl">
          <p>
            {userData.filter((member) => member.role === "member").length === 0
              ? "Belum ada user"
              : userData.filter((member) => member.role === "member").length}
          </p>
          <p className="font-bold md:font-semibold">Active Users</p>
        </div>
      </div>
      <div className="flex flex-row items-center space-x-5 md:space-x-3  xl:space-x-6 bg-[#73CA5C] p-6 md:p-3 w-5/6 lg:w-4/6  xl:w-3/5 lg:p-4  xl:p-6  rounded-xl">
        <div className="p-2 bg-white rounded-3xl md:rounded-2xl">
          <MdOutlineClass className="text-5xl md:text-2xl lg:text-4xl xl:text-6xl  text-[#73CA5C]" />
        </div>

        <div className="text-lg text-white md:text-sm lg:text-lg xl:text-xl">
          <p>
            {courseData.length === 0 ? "Belum ada kelas" : courseData.length}
          </p>
          <p className="font-bold">Active Class</p>
        </div>
      </div>
      <div className="flex flex-row items-center space-x-5 md:space-x-3   xl:space-x-6 bg-[#6148FF] p-6 md:p-3 w-5/6 lg:w-4/6  xl:w-3/5 lg:p-4  xl:p-6  rounded-xl">
        <div className="p-2 bg-white rounded-3xl md:rounded-2xl">
          <MdClass className="text-5xl md:text-2xl lg:text-4xl xl:text-6xl  text-[#6148FF]" />
        </div>

        <div className="text-lg text-white md:text-sm lg:text-lg xl:text-xl">
          <p>
            {!courseData.filter((course) => course.courseType === "Premium") &&
              "Belum ada kelas"}
            {loading
              ? "Loading...."
              : courseData.filter((course) => course.courseType === "Premium")
                  .length}
          </p>
          <p className="font-bold">Premium Class</p>
        </div>
      </div>
    </div>
  );
};

export default CardStatistic;