import React from 'react'
import CategoryContent from "../../../../CategoryContent";

const A310252 = () => {
  const folders = {
      notes: "1sOY5_NJqgv2WyW0HTEgR-AQeScJKso5C",
      pyq: "1_pMW4uhz67uZ9skvWUDl6y9rCod563Y4",
      solved_pyq: "",
      uploads: "",
    };
  
    return (
      <div className="pr-0 md:pr-50 pl-0 md:pl-50">
        <h1 className=" text-xl md:text-2xl font-bold pt-5">Web Technology</h1>
        <CategoryContent folders={folders} />
      </div>
      
    );
}

export default A310252
