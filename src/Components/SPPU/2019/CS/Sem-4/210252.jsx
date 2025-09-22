// 210252.jsx
import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const B210252 = () => {
  const folders = {
    notes: "",
    pyq: "1NfwVlL98PWvj0KeRh1kLzKUqfexH7YBY",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Data Structures and Algorithms</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default B210252;
