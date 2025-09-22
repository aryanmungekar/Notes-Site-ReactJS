import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const C207003 = () => { 
  const folders = {
    notes: "",
    pyq: "14xgaX-No7MpcBU4NxOWIEuxGcdKe8kli",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Engineering Mathematics III</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default C207003;
