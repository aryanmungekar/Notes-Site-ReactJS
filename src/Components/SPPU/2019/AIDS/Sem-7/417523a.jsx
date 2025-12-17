import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const A417523a = () => {
  const folders = {
    notes: "1fFJb7930F5TDiM2bkNX0kF9xtqHcuv1g",
    pyq: "10feT7mNpu6HO-RmI8WOAqglmBbDoKp_y",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Enterprise Architecture and Components</h1>
      <CategoryContent folders={folders} />
    </div>
    
  );
}

export default A417523a
