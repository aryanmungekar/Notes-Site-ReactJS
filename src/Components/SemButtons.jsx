import React from 'react'
import './SemButtons.css'
import { Link } from 'react-router-dom'

const SemButtons = (props) => {
  return (
    <Link to={props.url}>
      <div className='Buttons'>
         <h1>{props.title}</h1>
    </div>
    </Link>
  )
}

export default SemButtons
