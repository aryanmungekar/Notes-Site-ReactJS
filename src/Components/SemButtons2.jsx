import React from 'react'
import './SemButtons2.css'
import { Link } from 'react-router-dom'

const SemButtons2 = (props) => {
  return (
    <Link to={props.url}>
      <div className='Buttons2'>
         <h1>{props.title}</h1>
    </div>
    </Link>
  )
}

export default SemButtons2
