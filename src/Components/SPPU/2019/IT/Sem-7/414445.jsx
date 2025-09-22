import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const C414445 = () => { 
  const folders = {
    notes: "1awy9Ks97A9uNfxBtoZxS8iN7bt-gW8aI",
    pyq: "",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Elective – IV (Bioinformatics)</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default C414445;
