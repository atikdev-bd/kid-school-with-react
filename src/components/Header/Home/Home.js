import React from "react";
import { useLoaderData } from "react-router-dom";
import svg3 from "../../../Assets/svg/family-insurance.svg";
import svg2 from "../../../Assets/svg/lecturing.svg";
import svg1 from "../../../Assets/svg/reading-book.svg";
import Info from "../../Info/Info";
import "./Home.css";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <div className="home border-b-2 border-b-red-100 "></div>
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 mx-16 mt-8">
        <div className="bg-lime-200 hover:bg-green-400 flex justify-center shadow-2xl border rounded-md">
          <div className="p-4">
            <img className="w-32" src={svg1} alt="" />
            <h1 className="text-2xl text-violet-700 font-medium mt-2">
              Student Portal
            </h1>
          </div>
        </div>
        <div className="bg-rose-200 hover:bg-teal-200  flex justify-center shadow-2xl  border rounded-md">
          <div className="p-4">
            <img className="w-32" src={svg2} alt="" />
            <h1 className="text-2xl text-teal-800 font-medium mt-2">
              Staff Portal
            </h1>
          </div>
        </div>
        <div className="bg-slate-300 hover:bg-emerald-200 flex justify-center shadow-2xl  border rounded-md">
          <div className="p-4">
            <img className="w-32" src={svg3} alt="" />
            <h1 className="text-2xl text-sky-900 font-medium mt-2">
              Parent Portal
            </h1>
          </div>
        </div>
      </div>
      <div className=" mt-28">
        <h1 className="text-2xl lg:text-4xl text-blue-900 font-bold flex justify-center">
          STANDARD CURRICULUM
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 gap-6 items-center mt-4 mx-2 mb-10">
        {
            data.map(info => <Info key={info.id} info = {info}></Info>)
        }
      </div>
    </div>
  );
};

export default Home;
