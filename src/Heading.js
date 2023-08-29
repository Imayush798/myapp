import React from 'react'
import { Link, NavLink} from 'react-router-dom'

const Heading = () => {

  const navLinkStyles=({isActive})=>{
    return{
    textDecoration: isActive? "none":"underline",
    color: isActive? "red":"white"
    }
  }
  return (
    <div className='header'>
    <h1>Hiii</h1>
    <NavLink  style={navLinkStyles}to={'/'}>Home</NavLink>
    <NavLink  style={navLinkStyles}to={'/about'}>About</NavLink>
    <NavLink  style={navLinkStyles}to={'/contact'}>Contact</NavLink>
    {/* <Link to={'/about'}><h1 style={{color:'white',cursor:'pointer'}}>About</h1></Link>
    <Link to={'/contact'}><h1 style={{color:'white',cursor:'pointer'}}>Contact</h1></Link> */}
   </div>
  )
}

export default Heading