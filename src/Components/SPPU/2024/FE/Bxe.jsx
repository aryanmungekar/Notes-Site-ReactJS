import React from 'react'
import CategoryContent from "../../../CategoryContent";

const BXE24 = () => {
  const folders = {
    notes: "",
    pyq: "1nK-_vAZ6atYiBOb2LkFZyjgx2CQ_jg_R",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Basic Electronics Engineering</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default BXE24;
