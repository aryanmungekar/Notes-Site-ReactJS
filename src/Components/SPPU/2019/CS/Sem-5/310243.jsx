// 310243.jsx
import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const B310243 = () => {
  const folders = {
    notes: "1nStSEdlKeX3hXkEMWVVpzk-72ARhS8Rx",
    pyq: "1RlO6hofMyDHoqGq1GHfvr3GFaKJ5quRj",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Systems Programming and Operating System</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default B310243;
