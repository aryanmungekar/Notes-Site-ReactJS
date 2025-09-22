import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const B410244B = () => {
  const folders = {
    notes: "1WxQIprUADCR0Bcm8GSypYaWtoClxbkoV",
    pyq: "",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Multimedia Techniques</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default B410244B;
