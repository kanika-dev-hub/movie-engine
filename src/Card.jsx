import React from 'react'

const Card = ({ movie }) => {
  return (
    <div className="mt-5 flex flex-col w-64 h-80 items-start bg-neutral-700 rounded-lg hover:bg-neutral-600 hover:scale-105">
        <img className="h-64 w-full object-cover rounded-t-lg" src={(movie.Poster !=='N/A')?movie.Poster:'https://via.placeholder.com/300'}
            alt={movie.Title}/>     
        <div className="flex flex-col px-4 py-1">
            <p title={movie.Title} className="text-md font-lato font-bold text-gray-400 truncate max-w-[25ch]">{movie.Title}</p>
            <p className="text-sm font-sans text-gray-200">{movie.Type}</p>
            {/* <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">{movie.Year}</p> */}
        </div>
    </div>
  )
}

export default Card


