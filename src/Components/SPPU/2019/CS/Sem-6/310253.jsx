import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const B310253 = () => {
  const folders = {
    notes: "",
    pyq: "1nXS_H3wj6RgxyQTZVO_0_kTdCOxvrD51",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Artificial Intelligence</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default B310253;
