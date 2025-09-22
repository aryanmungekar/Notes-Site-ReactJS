import React from 'react'
import SubjectBtn from '../../../../SubjectBtn'

const CsSem4 = () => {
  return (
    <>
      {/* <h1 className="pl-0 md:pl-20 text-xl md:text-2xl font-bold">Subject Name</h1> */}
      <div className="SubjectDiv">
        <SubjectBtn title="Engineering Mathematics III" code="207003" />
        <SubjectBtn title="Data Structures and Algorithms" code="210252" />
        <SubjectBtn title="Software Engineering" code="210253" />
        <SubjectBtn title="Microprocessor" code="210254" />
        <SubjectBtn title="Principles of Programming Languages" code="210255" />
      </div>


    </>
  )
}

export default CsSem4
