import React from 'react'
import { Navigate  } from "react-router-dom";

const NotFound = () => {
  return (
    <div className='center'>
        <h1>404 Not Found</h1>
        <Navigate to="/" />
    </div>
  )
}

export default NotFound