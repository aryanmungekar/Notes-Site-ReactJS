// 210245.jsx
import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const B210245 = () => {
  const folders = {
    notes: "",
    pyq: "1Vq-mHKM8FIEzAzMQkK1q9JbROdLJqxyL",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Digital Electronics and Logic Design</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default B210245;
