import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const C414450 = () => { 
  const folders = {
    notes: "",
    pyq: "1U3iVSLRhHA_a_gFH639LGGLxefRgYCbN",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Distributed Systems</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default C414450;
