// 210253.jsx
import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const B210253 = () => {
  const folders = {
    notes: "",
    pyq: "1gfQWuJF4lvagR6XLRy5O-F3ac2e1duUO",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Software Engineering</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default B210253;
