import { useState } from 'react'
import './style.scss'
import { CardMovie } from '../CardMovie'
import { apiKey } from '../../api'

export function Filter() {

  const [value, setType] = useState('')
  if (value === "All") {
    console.log("All")    
  } else if(value ==="Movies"){
    console.log("Movies")
    
  }else if (value==="Tv Shows"){
    const MOVIE_API = (`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`)
  }



  return (
    <div className='filterContainer'>
      <button value="All" className='options' onClick={ e=> setType(e.target.value)}>All</button>
      <button value="Movies" className='options' onClick={ e=> setType(e.target.value)}>Movies</button>
      <button value="Tv Shows" className='options' onClick={ e=> setType(e.target.value)}>Tv Shows</button>
    </div>


  )
}

