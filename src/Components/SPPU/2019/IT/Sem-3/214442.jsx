import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const C214442 = () => { 
  const folders = {
    notes: "",
    pyq: "1BRLbWQHGW4U4PrGqQK_0Pz1DwPgLD6d0",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Logic Design & Computer Organization</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default C214442;
