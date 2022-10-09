import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <div className="first-header bg-slate-600 flex justify-around">
        <div className="mt-3">
          <Link
            className="text-gray-200  font-semibold hover:text-lime-600"
            to="/location"
          >
            Location
          </Link>
        </div>
        <div className=" flex gap-6 h-12 mt-2 text-xl">
          <Link
            className="font-medium text-red-50 hover:text-orange-500"
            to="/parent"
          >
            Parent Portal
          </Link>
          <Link
            className="font-medium text-red-50 hover:text-orange-500"
            to="career"
          >
            Career
          </Link>
          <Link
            className="font-medium text-red-50 hover:text-orange-500"
            to="/login"
          >
            Login
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-around px-12  second-header bg-orange-50 h-20">
        <div className="">
          <h1 className="pl-8 text-2xl font-bold">Back To School</h1>
        </div>
        <div className="flex gap-6 font-medium">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="admission">Admission</Link>
          <Link to="events">Events</Link>
          <Link to="contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
