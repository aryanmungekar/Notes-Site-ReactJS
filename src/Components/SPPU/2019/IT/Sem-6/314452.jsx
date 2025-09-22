import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const C314452 = () => { 
  const folders = {
    notes: "",
    pyq: "1kYEw0HBHQ8PfXI61JMv4L4YW7WqbRWcK",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Data Science and Big Data Analytics</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default C314452;
