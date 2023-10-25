import React from 'react'
import { HiUserCircle } from "react-icons/hi2";

const ArtistCard = ({ artistName, lyr, date }) => {
  return (
    <div className="bg-gray-900 min-h-[100px] my-2 px-8 m-7 rounded-xl flex flex-row items-center p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 duration-300 hover:text-gray-800 ">
        
        <div className="flex flex-col">
          <div className="flex flex-row justify-between mb-2 text-sm">
            <p className='text-white font-bold pr-4'>{ artistName }</p>
            {/* <p className='text-white'>{date}</p> */}
          </div>
          {/* <p className="text-sm text-gray-400 "> {lyr}</p>   */}
        </div>
      </div>
  )
}

export default ArtistCard