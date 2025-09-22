import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const A317530 = () => {
  const folders = {
    notes: "",
    pyq: "1-mbb0efvTCjr5b9baNr3uktT4MPZ7K_3",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Cyber Security</h1>
      <CategoryContent folders={folders} />
    </div>
    
  );
}

export default A317530
