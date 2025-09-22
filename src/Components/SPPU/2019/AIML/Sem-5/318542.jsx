import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const D318542 = () => { 
  const folders = {
    notes: "1Wzq1bOQLy5QeUIr5edZrzt6v13UvzjXU",
    pyq: "",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">IoT with Artificial Intelligence</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default D318542;
