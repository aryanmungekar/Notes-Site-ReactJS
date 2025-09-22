import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const A217521 = () => {
 const folders = {
    notes: "",
    pyq: "1xbVSI1ll8HmLDVRQ38nNCZvJ5urymJkQ",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Operating Systems</h1>
      <CategoryContent folders={folders} />
    </div>
    
  );
}

export default A217521
