import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const B410242 = () => {
  const folders = {
    notes: "1WwW5uw_WqoWxib6RqWe1dAzLyAq8EOMb",
    pyq: "11JXGnSQrjrtkjPh1WAKtEK1wiSUZpdxp",
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

export default B410242;
