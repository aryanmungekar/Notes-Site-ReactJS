import React from "react";
import comming from '../Images/coming-soon.png'

const ComingSoon = () => {
  return (
    <div className="flex justify-center items-center  bg-transparent">
      <div className="w-full max-w-md p-6 text-center border-2 border-gray-300 rounded-xl bg-gray-100 shadow-md">
        <img
          src={comming}
          alt="Working Animation"
          className="w-72 mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold text-gray-800 flex justify-center items-center gap-2">
          Pardon our dust!

        </h2>
        <p className="mt-4 text-gray-700 text-lg">
          Great things are being built here. Stay tuned!
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
