import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const C414444 = () => { 
  const folders = {
    notes: "1bUMMCPhw2OKZWjYyXWspAI1BRieDDwwj",
    pyq: "1l_xDTu2a0PrvUmAXVx9jbwbhkFhTfkG3",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Elective – III (Mobile Computing)</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default C414444;
