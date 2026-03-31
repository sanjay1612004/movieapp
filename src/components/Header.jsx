import React, { useContext, useEffect } from 'react'
import { FaSearch } from "react-icons/fa";
import { DebounceContext, SearchContext, ThemeContext } from '../App';
import { Link } from 'react-router-dom';


const Header = () => {
 const{theme,settheme}=useContext(ThemeContext)
 const{searchval,setsearchval}=useContext(SearchContext)
 const{debounce,setdebounce}=useContext(DebounceContext)
 useEffect(()=>{
    const timer=setTimeout(()=>{
        setdebounce(searchval)
    },[500])
    return ()=>{clearTimeout(timer)}
 },[searchval])
  return (
    <div className='w-full h-15 bg-gray-900 text-white flex justify-between sticky top-0 z-2'>
        <div>
            <Link to={'/'}><p className='text-2xl font-bold tracking-wide mt-3 '><span className='mr-1 ml-1'>🎬</span>Movie<span className='text-amber-400'>HuB</span></p></Link>   
        </div>
        <div className='flex '>
            <span className='my-4 mr-5 cursor-pointer text-xl' onClick={()=>settheme(!theme)}>{!theme ? "☀️" : "🌙"}</span>
            <input type="text" className='my-4 bg-white text-black rounded-xl px-2 py-1  mr-2 outline-none' placeholder='Enter the movie to search' onChange={(e)=>setsearchval(e.target.value)} value={searchval}/>
            <FaSearch className='text-amber-400 text-2xl my-4 mx-2'/>
        </div>
    </div>
  )
}

export default Header