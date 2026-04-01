import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ThemeContext } from '../App'
import Header from './Header'

const WatchPage = () => {
  const {theme,settheme}=useContext(ThemeContext)
  
  const {id}=useParams()
  const[details,setdetails]=useState('')
  async function handledetails() {
    const data=await fetch(`https://www.omdbapi.com/?apikey=3bbb8b89&i=${id}`)
    const json=await data.json()
    console.log(json)
    setdetails(json)
  }
  useEffect(()=>{
    window.scrollTo(0,0)
    handledetails()
  },[])
  const {Poster,Actors,Awards,BoxOffice,Country,Director,Genre,Language,Plot,Rated,Released,
    Runtime,Title,Writer,imdbRating}=details
  return (
    // <div className={!theme?'dark  dark:bg-gray-800 max-h-full':'dark:bg-gray-800 max-h-full '}>

    <div className={!theme?'dark  dark:bg-gray-800 min-h-screen':'dark:bg-gray-800 min-h-screen '}>
      <p className='text-center pt-4 font-bold text-3xl dark:text-yellow-400 text-black'>Movie Details</p>
    <div className='my-15 flex '>
    <div className='flex flex-col md:flex-row  my-auto gap-5 mx-3 px-3 bg-white shadow-[0_10px_25px_rgba(0,0,0,0.4)] w-full dark:bg-slate-800 p-4'>
      <div className='w-full md:w-[25%] h-72 md:h-96 flex justify-center'>
        <img src={Poster} alt="" className='h-full  w-full '/>
      </div>
      <div className='w-full md:w-[75%] ml-2 pl-1'>
        <div className='mt-2'>
          <p className='text-xl font-bold dark:text-yellow-400 text-black'>{Title}</p>
          <p className='font-medium dark:text-amber-300 text-black '>IBM Rating:⭐<span className='text-[#352525] dark:text-white'>{imdbRating}</span></p>
          <p className='font-medium dark:text-amber-300 text-black '>UA Rating:<span className='text-[#352525] dark:text-white'>{Rated}</span></p>
          <p className='font-medium dark:text-amber-300 text-black '>Duration:<span className='text-[#352525] dark:text-white'>{Runtime}</span></p>
          <p className='font-medium dark:text-amber-300 text-black '>Released On:<span className='text-[#352525] dark:text-white'>{Released}</span></p>
          <p className='font-medium dark:text-amber-300 text-black '>Genre:<span className='text-[#352525] dark:text-white'>{Genre}</span></p>
        </div>
        <div className='mt-2'>
          <p className=' text-wrap font-medium dark:text-amber-300 text-black '>Plot:<span className='text-[#352525] dark:text-white'>{Plot}</span></p>
        </div>
        <div className='mt-2'>
          <p className='font-medium dark:text-amber-300 text-black '>Director:<span className='text-[#352525] dark:text-white'>{Director}</span></p>
          <p className='font-medium dark:text-amber-300 text-black '>Writer:<span className='text-[#352525] dark:text-white'>{Writer}</span></p>
          <p className='font-medium dark:text-amber-300 text-black '>Actors:<span className='text-[#352525] dark:text-white'>{Actors}</span></p>
        </div>
        <div className='mt-2'>
          <p className='font-medium dark:text-amber-300 text-black '>Country:<span className='text-[#352525] dark:text-white'>{Country}</span></p>
          <p className='font-medium dark:text-amber-300 text-black '>Language:<span className='text-[#352525] dark:text-white'>{Language}</span></p>
        </div>
        <div className='mt-2'>
          <p className='font-medium dark:text-amber-300 text-black '>Awards:<span className='text-[#352525] dark:text-white'>{Awards}</span></p>
          <p className='font-medium dark:text-amber-300 text-black '>BoxOffice:<span className='text-[#352525] dark:text-white'>{BoxOffice}</span></p>
        </div>
      </div>
    </div>
  </div>
  </div>
  // </div>
  )
}

export default WatchPage