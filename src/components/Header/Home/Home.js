import React from "react";
import svg1 from "../../../Assets/svg/reading-book.svg";
import svg2 from "../../../Assets/svg/lecturing.svg";
import svg3 from "../../../Assets/svg/family-insurance.svg";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="home"></div>
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 mx-16 mt-8">
        <div className="bg-lime-200 hover:bg-green-400 flex justify-center shadow-2xl border rounded-md">
          <div className="p-4">
            <img className="w-32" src={svg1} alt="" />
            <h1 className="text-2xl text-violet-700 font-medium mt-2">Student Portal</h1>
          </div>
        </div>
        <div className="bg-rose-200 hover:bg-teal-200  flex justify-center shadow-2xl  border rounded-md">
          <div className="p-4">
            <img className="w-32" src={svg2} alt="" />
            <h1 className="text-2xl text-teal-800 font-medium mt-2">Staff Portal</h1>
          </div>
        </div>
        <div className="bg-slate-300 hover:bg-emerald-200 flex justify-center shadow-2xl  border rounded-md">
          <div className="p-4">
            <img className="w-32" src={svg3} alt="" />
            <h1 className="text-2xl text-sky-900 font-medium mt-2">Parent Portal</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
