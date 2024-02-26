import React from 'react'
import '../error/error.css'
import img from '../../assets/images/404.png'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
       <div className='error_main'> 
            <div className='error_box'>
                <img src={img} alt="not found" />
            </div>
            <Link to="/">Go Back</Link>
        </div> 
    </>
  )
}

export default Error