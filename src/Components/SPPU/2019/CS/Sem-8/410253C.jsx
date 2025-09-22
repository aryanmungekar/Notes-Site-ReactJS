import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const B410253C = () => {
  const folders = {
    notes: "",
    pyq: "1uTL487O7mFbBThWfv6rgMcPF3NTOD6LT",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Business Intelligence</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default B410253C;
