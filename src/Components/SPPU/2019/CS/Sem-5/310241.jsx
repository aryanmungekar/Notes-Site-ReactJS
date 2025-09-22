// 310241.jsx
import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const B310241 = () => {
  const folders = {
    notes: "16B5eM8vept15TAPWh-iqT_u-kuefONmA",
    pyq: "1U8JOj6DBEQH6ACOO7iQnd56zBfzmpSmF",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Database Management Systems</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default B310241;
