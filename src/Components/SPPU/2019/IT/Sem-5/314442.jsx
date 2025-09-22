import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const C314442 = () => { 
  const folders = {
    notes: "1wUoaHd-Z0aqNfsN0Nyp281OOhjq-Jmk7",
    pyq: "1IWw6JuAN2vlkcZymxQvYlPN7nh_wz4Up",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Operating System</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default C314442;
