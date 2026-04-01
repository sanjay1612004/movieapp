import React from 'react'
import Shimmer from './Shimmer'

const ShimmerSkeleton = () => {
  return (
    <div className='flex flex-wrap justify-center'>
        {Array(10).fill("").map((_,ind)=>{
           return <Shimmer key={ind}/>
        })}
    </div>
  )
}

export default ShimmerSkeleton