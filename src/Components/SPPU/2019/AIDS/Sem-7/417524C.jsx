import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const A417524C = () => {
  const folders = {
    notes: "1I8VO3tcdwYKjswkU8EDWuS08G83W6btV",
    pyq: "1PvfO7JSQe1M3JWr7EFfCCeb4smnaP4zz",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">UI/UX Design</h1>
      <CategoryContent folders={folders} />
    </div>
    
  );
}

export default A417524C
