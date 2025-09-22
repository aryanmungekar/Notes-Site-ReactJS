import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const A217530 = () => {
  const folders = {
    notes: "",
    pyq: "1YMF2fd8DHrZQWxUFZ3Pge5Kim-w2S07y",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Management Information Systems</h1>
      <CategoryContent folders={folders} />
    </div>
    
  );
}

export default A217530
