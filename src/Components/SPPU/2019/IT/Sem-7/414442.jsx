import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const C414442 = () => { 
  const folders = {
    notes: "1NtO6pCyMv6pNCR5-d9YVWIhxENDNlek0",
    pyq: "1F1pGokBAXoVK4O9O00Ik4RuRHTRIIuMA",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Software Project Management</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default C414442;
