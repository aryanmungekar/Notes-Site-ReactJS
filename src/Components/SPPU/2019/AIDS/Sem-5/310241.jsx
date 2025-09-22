import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const A310241 = () => {
 const folders = {
    notes: "1ObOS_jSEn2VvtMJ3xlFj9Smm88mpIAPd",
    pyq: "1YLKG2mHB-i1ywbXQqrLGKI8IV0J-sIhk",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Database Management Systems</h1>
      <CategoryContent folders={folders} />
    </div>
    
  );
}

export default A310241
