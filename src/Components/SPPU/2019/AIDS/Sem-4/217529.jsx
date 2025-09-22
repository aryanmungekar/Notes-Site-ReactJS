import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const A217529 = () => {
  const folders = {
    notes: "",
    pyq: "1qyZRk55GSrsMFzh-jvWZJxCbVuxfDCUb",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Internet of Things</h1>
      <CategoryContent folders={folders} />
    </div>
    
  );
}

export default A217529
