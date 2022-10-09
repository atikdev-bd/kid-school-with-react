import React from "react";

const Info = ({ info }) => {
  const {age, title, img } = info;
  return (
    <div className="shadow-2xl p-4  border rounded-md bg-slate-400">
      <div className=" flex justify-center">
        <img className="w-56" src={img} alt="" />
      </div>
      <div className="mx-12 lg:mx-32 py-2">
        <h1 className="text-xl font-bold text-zinc-900">{age}</h1>
        <h2 className="font-bold">{title}</h2>
        <button className="bg-zinc-600 hover:bg-neutral-900 py-1 px-2 mt-2 text-white rounded-md">Read more</button>
      </div>
    </div>
  );
};

export default Info;
