import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const C214454 = () => { 
  const folders = {
    notes: "",
    pyq: "11tooYx4vrfOw4DR4hLCD7HRIXWLwF3Ut",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Software Engineering</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default C214454;
