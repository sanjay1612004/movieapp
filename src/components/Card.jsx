import React from 'react'

const Card = ({ data }) => {

    const { Poster, Title, Year } = data

    return (

        <div className='m-3 w-60 rounded-xl overflow-hidden bg-white shadow-[0_10px_25px_rgba(0,0,0,0.4)] hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer dark:bg-gray-800 z-1'>

            <div className='w-full h-72 bg-gray-100 flex items-center justify-center  dark:bg-gray-800 '>

                <img
                    src={Poster}
                    className='max-h-full max-w-full object-contain py-2 px-4 dark:bg-gray-800'
                    alt={Title}
                />

            </div>

            <div className='p-3'>

                <p className='font-semibold text-gray-800 line-clamp-2 dark:text-yellow-400'>
                    {Title}
                </p>

                <p className='text-gray-500 text-sm mt-1'>
                    📅 {Year}
                </p>

            </div>

        </div>

    )

}

export default Card