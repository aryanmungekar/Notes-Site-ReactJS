// 210241.jsx
import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const B210241 = () => {
  const folders = {
    notes: "",
    pyq: "1W2uVQ9dRyYjUg-mBqblArkSiDmy1OFrf",
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

export default B210241;
