import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const C314444 = () => { 
  const folders = {
    notes: "1CiBYaqo09seNC2mSHSFj28xKneTruqrs",
    pyq: "1P7pqEEVEYC2AubvYD9T9Ra3ftAGcAdhr",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Human Computer Interaction</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default C314444;
