import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const A317529 = () => {
  const folders = {
    notes: "",
    pyq: "1bySV8FTS40yxf4u-yBgwv7-UjifyEZ-K",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Data Science</h1>
      <CategoryContent folders={folders} />
    </div>
    
  );
}

export default A317529
