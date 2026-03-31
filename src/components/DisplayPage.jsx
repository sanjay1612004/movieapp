import React, { useContext, useEffect, useState } from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
import Header from './Header'
import { DebounceContext, ThemeContext } from '../App'

const DisplayPage = () => {
    const {theme,settheme}=useContext(ThemeContext)
    const [page, setpage] = useState(1)
    const [data, setdata] = useState("")
    const [res, setres] = useState([])
    const [filtered,setfiltered]=useState([])
    const {debounce,setdebounce}=useContext(DebounceContext)
        const query=debounce || "movie"

    async function fetchdata() {
        const data = await fetch(`https://www.omdbapi.com/?apikey=3bbb8b89&s=${query}&page=${page}`)
        const json = await data.json()
        
        setdata(json)
        console.log(json)
        // setres(json?.Search)
        if(json?.Search){
    setres(prev => [...prev , ...json.Search])
}
    }
    useEffect(() => {
        fetchdata()
    }, [page,debounce])
    useEffect(()=>{
                setfiltered(res)

    },[res])
    useEffect(() => {

        function handleScroll() {

            if (
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 5
            ) {
                setpage(prev => prev + 1)
            }

        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    }, [])
    async function handlesearch(){
        const data = await fetch(`https://www.omdbapi.com/?apikey=3bbb8b89&s=${debounce}`)
        const json=await data.json()
        console.log(json?.Search)
        setfiltered(json?.Search ?? [])
        // console.log(filtered)
    }
    console.log(filtered)
    

    useEffect(()=>{
        handlesearch()
    },[debounce])

    return (
        <div className={!theme?'dark dark:bg-gray-800 h-full':'dark:bg-gray-800 '}>
        <div className='flex flex-wrap'>
            {console.log(res)}
            {filtered.length === 0 && <p>loading....</p>}
            {filtered.length > 0 && filtered?.map((item, ind) => {
                return <Link to={`/watch/${item.imdbID}`}><Card data={item} /></Link>

            })}
        </div>
        </div>
    )
}

export default DisplayPage