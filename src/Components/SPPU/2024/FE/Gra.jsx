import React from 'react'
import CategoryContent from "../../../CategoryContent";

const GRA24 = () => {
  const folders = {
    notes: "",
    pyq: "",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Engineering Graphics</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default GRA24;
