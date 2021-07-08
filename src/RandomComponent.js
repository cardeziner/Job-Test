import React from 'react'
import { Link } from 'react-router-dom'

const RandomComponent = (props) =>{
  return(
    <div>
    <h1>List of Assignments - Peter Stevens</h1> <br/>
    <Link to='/26'>Page 26</Link><br/>
    <Link to='/297'>Page 297</Link><br/>
    <Link to='/617'>Page 617</Link><br/>
    <Link to='/647'>Page 647</Link><br/>
     </div>
  )
}

export default RandomComponent
