import React from 'react'
import CategoryContent from "../../../CategoryContent";

const BEE24 = () => {
  const folders = {
    notes: "",
    pyq: "1PXJMPGTUX-UIPSwFiAtXKuoPFSnQWXE6",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Basic Electrical Engineering</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default BEE24;
