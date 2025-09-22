import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const A417531 = () => {
  const folders = {
    notes: "",
    pyq: "1M2ob4zxDySbfGCsw5LLNKHgbybR1TsjK",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Distributed Computing</h1>
      <CategoryContent folders={folders} />
    </div>
    
  );
}

export default A417531
