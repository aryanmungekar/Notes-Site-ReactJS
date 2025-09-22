import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const A217528 = () => {
  const folders = {
    notes: "",
    pyq: "1QY_qmd7S8-0r-j_QsdYNLEKx9gd-GGjv",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Statistics</h1>
      <CategoryContent folders={folders} />
    </div>
    
  );
}

export default A217528
