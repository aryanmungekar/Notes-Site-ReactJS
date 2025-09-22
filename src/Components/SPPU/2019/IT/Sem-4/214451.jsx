import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const C214451 = () => { 
  const folders = {
    notes: "",
    pyq: "1MG5tcXN7GDHZzyhtWrz0GoVyVZ2iHL8H",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Processor Architecture</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default C214451;
