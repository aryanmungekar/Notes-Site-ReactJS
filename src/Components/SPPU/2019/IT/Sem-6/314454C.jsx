import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const C314454C = () => { 
  const folders = {
    notes: "",
    pyq: "1iSzl16LfINsGbxK6WFZg1JG1KWNg4UWS",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Elective-II (Cloud Computing)</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default C314454C;
