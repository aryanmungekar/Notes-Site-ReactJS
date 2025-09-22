// 210254.jsx
import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const B210254 = () => {
  const folders = {
    notes: "",
    pyq: "1wBnGn-w7PUG-6LK0rbYEq6B96vC9Sb4P",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Microprocessor</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default B210254;
