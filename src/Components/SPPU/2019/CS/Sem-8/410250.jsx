import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const B410250 = () => {
  const folders = {
    notes: "",
    pyq: "16RAond9TcUcWM41aPpHEqZkqKkOInLiA",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">High Performance Computing</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default B410250;
