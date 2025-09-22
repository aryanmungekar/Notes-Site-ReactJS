// 310244.jsx
import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const B310244 = () => {
  const folders = {
    notes: "1YUcwyZx-fs9NRiAcd1FcnebGuyOmlCXl",
    pyq: "1g9b34Jx5XTx3xB4sMPOfHml6RurBzCaQ",
    solved_pyq: "",
    uploads: "",
  };

  return (
    <div className="pr-0 md:pr-50 pl-0 md:pl-50">
      <h1 className=" text-xl md:text-2xl font-bold pt-5">Computer Networks and Security</h1>
      <CategoryContent folders={folders} />
    </div>
  );
}

export default B310244;
