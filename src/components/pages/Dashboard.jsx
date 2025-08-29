import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  
  return (
    <div className='w-full h-[100vh] flex flex-col justify-center items-center'>
      <div className='flex'>
        CodeDock!
      </div>
      <div className='flex'>
        <Link to={'/projects'}>
          Your Projects!
        </Link>
      </div>
    </div>
    
  )
}

export default Dashboard