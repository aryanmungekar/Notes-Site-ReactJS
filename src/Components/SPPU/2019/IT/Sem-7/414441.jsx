import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const C414441 = () => { 
  const folders = {
    notes: "1VL4upvv-_9IpoVVkJzPG3iH4n0o7lW5_",
    pyq: "11OuLeNnzJAX-VJvq3Apyuxd9gL-WF__2",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Information Storage and Retrieval</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default C414441;
