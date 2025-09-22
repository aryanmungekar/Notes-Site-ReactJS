import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const A417533B = () => {
  const folders = {
    notes: "",
    pyq: "1ANHZ-DAeKBVivl8ARcbskyfJEC9eA4gm",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      {/* <h1 className=" text-xl md:text-2xl font-bold pt-5">Business Intelligence</h1> */}
      <CategoryContent folders={folders} />
    </div>
    
  );
}

export default A417533B
