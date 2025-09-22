import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const C414443 = () => { 
  const folders = {
    notes: "1r-hDT971kPcdZKKiRlfVhevXkbdkVmrC",
    pyq: "1ads1jz0c2vCaKOCXQfwJLyP0thdeCEZF",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Deep Learning</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default C414443;
