import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const B310251 = () => {
  const folders = {
    notes: "",
    pyq: "1vUX2pjI3mvazIwO31uGcd-ztSFfAna34",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Data Science and Big Data Analytics</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default B310251;
