// 210243.jsx
import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const B210243 = () => {
  const folders = {
    notes: "",
    pyq: "1i1PMkDYrQDIIX8AdBA4VY2t_cXsE5RpD",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Object Oriented Programming (OOP)</h1>  
      <CategoryContent folders={folders} />
    </div>
  );
}

export default B210243;
