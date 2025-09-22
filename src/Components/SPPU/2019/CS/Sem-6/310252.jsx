import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const B310252 = () => {
  const folders = {
    notes: "",
    pyq: "1f2bgnRmgTAvOT3rD4B3LlODMO0Z-xTp2",
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

export default B310252;
