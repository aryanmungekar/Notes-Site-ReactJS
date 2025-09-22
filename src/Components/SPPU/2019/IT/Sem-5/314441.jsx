import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const C314441 = () => { 
  const folders = {
    notes: "1La_5r9Bf4goXzfVbXM5WrEmbhQ5rXKna",
    pyq: "10LShsDUfs729RezTRCdtYvCXmgdQekwX",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Theory of Computation</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default C314441;
