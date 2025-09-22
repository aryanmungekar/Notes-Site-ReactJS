import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const D318545 = () => { 
  const folders = {
    notes: "1oTABEYpIGVTOa7g8Y5vYuiyfsq58BMO8",
    pyq: "",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Elective-I-(A): Robotics</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default D318545;
