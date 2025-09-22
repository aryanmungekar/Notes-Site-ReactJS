import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const A310245b = () => {
 const folders = {
    notes: "1Wyq3xj0JT5C3y53Ff37u3fv4Msg3e_np",
    pyq: "1jBrhzCqEphSq9O9_RfxzMoqjz4dEd5pm",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Human Computer Interface</h1>
      <CategoryContent folders={folders} />
    </div>
    
  );
}

export default A310245b
