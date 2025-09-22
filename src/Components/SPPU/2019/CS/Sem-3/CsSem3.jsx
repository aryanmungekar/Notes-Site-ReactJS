import React from 'react'
import SubjectBtn from '../../../../SubjectBtn'

const CsSem3 = () => {
  return (
    <>
      {/* <h1 className="pl-0 md:pl-20 text-xl md:text-2xl font-bold">Subject Name</h1> */}
      <div className="SubjectDiv">
        <SubjectBtn title="Discrete Mathematics" code="210241" />
        <SubjectBtn title="Fundamentals of Data Structures" code="210242" />
        <SubjectBtn title="Object Oriented Programming (OOP)" code="210243" />
        <SubjectBtn title="Computer Graphics" code="210244" />
        <SubjectBtn title="Digital Electronics and Logic Design" code="210245" />
      </div>


    </>
  )
}

export default CsSem3
