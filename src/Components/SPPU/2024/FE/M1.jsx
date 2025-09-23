import React from 'react'
import CategoryContent from "../../../CategoryContent";

const M124 = () => {
  const folders = {
    notes: "",
    pyq: "1w0pC_M7BUtxI3tJweRAU6HH4xoKbzVqc",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Engineering Mathematics I</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default M124;
