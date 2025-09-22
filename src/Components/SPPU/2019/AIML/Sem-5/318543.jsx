import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const D318543 = () => { 
  const folders = {
    notes: "1EURe1Mha2ZgOCdIXKGLQ6DVf0aPQOs_k",
    pyq: "",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Web Technology</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default D318543;
