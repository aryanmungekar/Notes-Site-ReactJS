import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const C214441 = () => { 
  const folders = {
    notes: "",
    pyq: "1WEuG6n4PNkCAxkl631aL9XUhsaU-WkhG",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Discrete Mathematics</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default C214441;
