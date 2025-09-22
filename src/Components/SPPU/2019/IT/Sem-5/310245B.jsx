import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const C310245B = () => { 
  const folders = {
    notes: "1pq6pGMKCrNqXsxNQxFaqx2F5MK80PuD4",
    pyq: "1GyG9LcerXzvdCUn-q9mhSUX-xR31l8on",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Elective -I : Internet of Things</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default C310245B;
