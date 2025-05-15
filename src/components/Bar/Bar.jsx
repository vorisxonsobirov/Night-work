import React from 'react'
import "../../App.css"
import { Link } from 'react-router-dom';
import "./bar.css"

const Bar = () => {
  return (
    <div className='Bar'>
      <Link to="/"> <p> Profile</p></Link> 
      <Link to="/KursValyut"> <p>Kurs valyut </p></Link> 
      <Link to="/Xabarlar"> <p>Xabarlar</p></Link> 
      <Link to="/Tulovlar"> <p>Tulovlar </p></Link> 
      <Link to="/Kontragentlar"> <p>Kontragentlar </p></Link> 
    </div>
  )
}

export default Bar
