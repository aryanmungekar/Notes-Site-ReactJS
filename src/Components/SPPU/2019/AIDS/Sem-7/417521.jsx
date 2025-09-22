import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const A = () => {
  const folders = {
    notes: "1jw-oi1K42-OsBi_G4LhXqyQcfvnhlkQQ",
    pyq: "1-9mFoSw8MNAnGxgK5KwP5qSpNGfCLWS5",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Machine Learning</h1>
      <CategoryContent folders={folders} />
    </div>
    
  );
}

export default A
