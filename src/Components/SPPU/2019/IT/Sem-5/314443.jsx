import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const C314443 = () => { 
  const folders = {
    notes: "1xwksFzym2VXcb--OXX-uf_w60HjUFfZK",
    pyq: "1QrpRN4j6WofCPi3uY3nEJMWmMSP__ZPL",
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

export default C314443;
