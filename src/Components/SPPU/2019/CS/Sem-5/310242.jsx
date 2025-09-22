// 310242.jsx
import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const B310242 = () => {
  const folders = {
    notes: "13MXlXR9U98CrNRCRpddVgaOjUZe5RUjB",
    pyq: "1D6gSkRkK4bjOFqvbRBQzFGbgiH9kMNY_",
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

export default B310242;
