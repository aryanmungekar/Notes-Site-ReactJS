import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const B410252A = () => {
  const folders = {
    notes: "",
    pyq: "1txdDbe0N1e21b3viOLjUMo8pi3NCf2G1",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Natural Language Processing</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default B410252A;
