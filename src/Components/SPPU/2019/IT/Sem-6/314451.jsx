import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const C314451 = () => { 
  const folders = {
    notes: "",
    pyq: "1yFsRM_656LN4w28EiPxTJ4ZDjB6ODFeS",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Computer Network and Security</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default C314451;
