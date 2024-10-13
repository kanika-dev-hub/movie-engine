import React, {useEffect, useState} from 'react'
import Card from './Card'
import './input.css'

const API_URL = 'http://www.omdbapi.com?apikey=3ec079a3'

function App() {

  const [movies,setMovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState("")

  useEffect(() => {
    searchMovies("man");
  },[]);

  const searchMovies = async (title) => {
    console.log(title)
    const response1 = await fetch(`${API_URL}&s=${title}&page=1`);
    const data1 = await response1.json();
    const response2 = await fetch(`${API_URL}&s=${title}&page=2`);
    const data2 = await response2.json();
    Array.prototype.push.apply(data1.Search,data2.Search); 
    setMovies(data1.Search);
  }

  return (
    <div className='container w-5/6 mx-auto my-10 p-2'>
      <h1 className='text-5xl font-extrabold font-mono text-center p-2 mb-5'>MovieLand</h1>
      <div className="max-w-2xl mx-auto">
          <div className="flex">        
              <div className="relative w-full">
                  <input value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search Movie..." required />
                  <button className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-red-700 rounded-e-lg border border-red-700 hover:bg-red-800 hover:border-red-800 focus:ring-0  focus:outline-none dark:bg-red-700 dark:hover:bg-red-700 dark:focus:ring-red-800" onClick={() => searchMovies(searchTerm)}>
                      <svg className="w-5 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                  </button>
              </div>
          </div>
      </div>

    {movies?.length>0 
    ? (
        <div className='container flex flex-wrap gap-3 mt-10'>
          {movies.map((movie) => (
            <Card key={movie.imdbID} movie={movie}/>
          ))}
        </div>
    ) : (
      <div className='mt-20'>
        <h2 className='text-5xl text-center font-mono font-bold p-10'>No Movies Found !</h2>
      </div>
    )}
    
    </div>
  );
}

export default App;
