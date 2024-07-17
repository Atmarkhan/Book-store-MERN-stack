import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

function BackButton({ destination = "/" }) {
  return (
    <div className="flex">
      <Link
        to={destination}
        className="bg-sky-800 text-white px-4 py-1 rounded-lg w-fit"
      >
        <FaArrowLeft className="text-2x1" />
      </Link>
    </div>
  );
}

export default BackButton;
