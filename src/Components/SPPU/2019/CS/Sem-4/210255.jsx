// 210255.jsx
import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const B210255 = () => {
  const folders = {
    notes: "",
    pyq: "1Em1Xl8HK0QRwJw_yhwwg-oS4Ly41qVMq",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Principles of Programming Languages</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default B210255;
