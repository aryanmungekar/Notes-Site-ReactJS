import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const C214452 = () => { 
  const folders = {
    notes: "",
    pyq: "1PtJNAMkYM4Pb4OmA9uq40PqK5LHX-xFT",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Database Management System</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default C214452;
