import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const B410241 = () => {
  const folders = {
    notes: "164xuUpAOpK5rdfTZUwPIZ8hT9IESm99d",
    pyq: "1ZMYkxMreQDBUVV6moBCTWxALEeJChCiF",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Design and Analysis of Algorithms</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default B410241;
