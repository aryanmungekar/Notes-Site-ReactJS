import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const A310254c = () => {
  const folders = {
    notes: "",
    pyq: "1oSk0suP1ssfDMo7NhiimxAyGK_MmThk2",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Cloud Computing</h1>
      <CategoryContent folders={folders} />
    </div>
    
  );
}

export default A310254c
