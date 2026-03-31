import React, { useContext, useState } from 'react'
import { LoginContext, ThemeContext } from '../App'
import { useNavigate } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google'

const LoginPage = () => {

    const { theme } = useContext(ThemeContext)
    const {islogin,setislogin}=useContext(LoginContext)

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const navigate=useNavigate()

    function handleLogin(e) {
        e.preventDefault()

        console.log(email, password)

        // add auth logic here
        if (email!="" && password!=""){
            navigate('/home')
            setislogin(true)
        }
    }

    return (

        <div className={!theme ?
            "bg-gray-800 min-h-screen flex flex-col items-center"
            :
            "bg-white min-h-screen flex flex-col items-center"
        }>

            <h1 className='text-4xl text-white font-bold mt-10'>
                Login
            </h1>

            <form
                onSubmit={handleLogin}
                className='bg-gray-900 p-8 rounded-xl mt-10 w-100 shadow-lg h-100'
            >

                <div className='flex flex-col mb-4'>
                    <label className='text-white mb-2'>Email</label>

                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        placeholder="Enter email"
                        className='p-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-amber-400'
                    />

                </div>

                <div className='flex flex-col mb-6'>

                    <label className='text-white mb-2'>Password</label>

                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        placeholder="Enter password"
                        className='p-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-amber-400'
                    />

                </div>

                <button
                    className='w-full bg-amber-400 text-black font-bold p-2 rounded hover:bg-amber-300 transition'
                >
                    Login
                </button>

                <p className='text-gray-400 mt-4 text-sm text-center'>
                    Don't have account?
                    <span className='text-amber-400 cursor-pointer ml-1'>
                        Register
                    </span>
                </p>
                <div className='pt-2 mt-2 flex justify-center'>
                         <GoogleLogin onSuccess={(response)=>{
                console.log(response);
                console.log(response.credential)
                setislogin(true)
                navigate("/home")
                }} 
                onError={()=>console.log("Login")}/>
                </div>
            

            </form>

        </div>

    )

}

export default LoginPage