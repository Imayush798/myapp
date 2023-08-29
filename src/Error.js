import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Error = () => {
    const navigate= useNavigate()
  return (
    <>
    <div>Error 404 page not found</div>
    <button onClick={()=>navigate('about')}> go back</button>
    </>
  )
}

export default Error