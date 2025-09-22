import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const B410243 = () => {
  const folders = {
    notes: "1z2LCmhN32iGmiqiechFUdP3rzjlykoxE",
    pyq: "1Pv82ag6YmGMFyx6-idCSxXlRtt92mCTK",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Blockchain Technology</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default B410243;
