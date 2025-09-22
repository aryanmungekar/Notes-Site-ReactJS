import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const A210244 = () => {
 const folders = {
    notes: "",
    pyq: "1KY7Ydx2cyO71eg5Sr0VXgccw5DFjMxze",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Computer Graphics</h1>
      <CategoryContent folders={folders} />
    </div>
    
  );
}

export default A210244
