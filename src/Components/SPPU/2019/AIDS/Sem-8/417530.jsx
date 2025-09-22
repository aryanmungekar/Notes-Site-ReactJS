import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const A417530 = () => {
  const folders = {
    notes: "",
    pyq: "1UlQpjHqWRiHjPBusD0ig4XFqZF5hldPQ",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Computational Intelligence</h1>
      <CategoryContent folders={folders} />
    </div>
    
  );
}

export default A417530
