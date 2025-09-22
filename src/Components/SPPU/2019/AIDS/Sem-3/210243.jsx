import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const A210243 = () => {
 const folders = {
    notes: "",
    pyq: "1j-PaeppYED8X285mNIgtxaLsSybusSGe",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Object Oriented Programming (OOP)</h1>
      <CategoryContent folders={folders} />
    </div>
    
  );
}

export default A210243
