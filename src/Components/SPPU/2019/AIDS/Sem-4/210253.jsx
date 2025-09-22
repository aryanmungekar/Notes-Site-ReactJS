import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const A210253 = () => {
  const folders = {
    notes: "",
    pyq: "1792imTc6bydPmDks3WAID4VEWeMKQgtx",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Data Structures and Algorithms</h1>
      <CategoryContent folders={folders} />
    </div>
    
  );
}

export default A210253
