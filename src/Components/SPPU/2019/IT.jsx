import React from 'react'
import SemButtons from '../../SemButtons'

const IT = () => {
  return (
    <>
    {/* <h1 className="pl-0 md:pl-20 text-xl md:text-2xl font-bold">Subject Name</h1> */}
    <div className='Subject'>
      <SemButtons title="Semester-3" url="Sem-3"/>
      <SemButtons title="Semester 4" url="Sem-4"/>
      <SemButtons title="Semester 5" url="Sem-5"/>
      <SemButtons title="Semester 6" url="Sem-6"/>
      <SemButtons title="Semester 7" url="Sem-7"/>
      <SemButtons title="Semester 8" url="Sem-8"/>
    </div></>
  )
}

export default IT
