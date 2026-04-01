import React from 'react'

const Shimmer = () => {
  return (
    <div>
      <div className='m-3 w-60 rounded-xl overflow-hidden bg-white shadow-[0_10px_25px_rgba(0,0,0,0.4)] dark:bg-gray-800 animate-pulse'>

        <div className='w-full h-72 bg-gray-300 dark:bg-gray-700'></div>

        <div className='p-3'>
            <div className='h-5 bg-gray-300 rounded w-40 mb-2 dark:bg-gray-700'></div>

            <div className='h-4 bg-gray-300 rounded w-24 dark:bg-gray-700'></div>
        </div>

    </div>

    </div>
  )
}

export default Shimmer