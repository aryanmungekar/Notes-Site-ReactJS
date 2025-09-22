import React from 'react'
import './SubjectBtn.css'
import { Link } from 'react-router-dom'

const SubjectBtn = (props) => {
  return (
    <Link to={"./" + props.code}>
      <div className="subject-card">
      <div className="subject-title">{props.title}</div>
      <div className="subject-code">Code : {props.code}</div>
    </div>
    </Link>
  )
}

export default SubjectBtn
