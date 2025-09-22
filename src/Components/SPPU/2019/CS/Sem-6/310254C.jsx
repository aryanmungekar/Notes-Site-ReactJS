import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const B310254C = () => {
  const folders = {
    notes: "",
    pyq: "1ov4tAD9bqM9BP-mFJ39srKP2uNQe_tgd",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Elective II - Cloud Computing</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default B310254C;
