import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const C414452 = () => { 
  const folders = {
    notes: "",
    pyq: "",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Elective-VI (Ethical Hacking and Security)</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default C414452;
