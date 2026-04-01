import React, { createContext, useEffect, useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import DisplayPage from './components/DisplayPage'
import WatchPage from './components/WatchPage'
import Header from './components/Header'
import Login from './components/Login'
import { GoogleOAuthProvider } from '@react-oauth/google'

export const ThemeContext=createContext()
export const SearchContext=createContext()
export const DebounceContext=createContext() 
export const LoginContext=createContext()
const App = () => {
  const client_iD="197457992337-tnmb8prl6ar64mvqas6f3mhe4jiiur5j.apps.googleusercontent.com"
  const[theme,settheme]=useState(false)
  const[searchval,setsearchval]=useState("")
  const[debounce,setdebounce]=useState('')
  const [islogin,setislogin]=useState(localStorage.getItem("login")=="true")
  useEffect(()=>{
  if(theme){
    document.body.className="bg-white text-black"
  }else{
    document.body.className="bg-gray-800 text-white"
  }
},[theme])
  return (
    <div className=''>
      <LoginContext.Provider value={{islogin,setislogin}}>
      <GoogleOAuthProvider clientId={client_iD}>
      <DebounceContext.Provider value={{debounce,setdebounce}}>
      <ThemeContext.Provider value={{theme,settheme}}>
        <SearchContext.Provider value={{searchval,setsearchval}}>
        <div className={theme ? "bg-white text-black min-h-screen" : ""}>


      <BrowserRouter>
      {islogin && <Header/>}
        <Routes>
          <Route path='/home' element={<DisplayPage/>}/>
          <Route path='/watch/:id' element={<WatchPage/>}/>
          <Route path='/' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
      </div>
        </SearchContext.Provider>
      </ThemeContext.Provider>
    </DebounceContext.Provider>
    </GoogleOAuthProvider>
    </LoginContext.Provider>
    </div>
  )
}

export default App