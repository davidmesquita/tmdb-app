import { useEffect } from "react";
import { useState } from "react";
import { apiKey } from "../../api";
import './style.scss';
import starIcon from '../../assets/icons/starIcon.svg'
import { Link } from "react-router-dom";
import { Filter } from "../Filter";


const MOVIE_API = (`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)

const IMAGE_PATH = "https://image.tmdb.org/t/p/w500/"

export function CardMovie() {
  const [movies, setMovies] = useState([])
  const [value, setType] = useState('')
 
  useEffect(() => {

    fetch(MOVIE_API)
      .then(res => res.json())
      .then((data) => {
        setMovies(data.results)
      })
  }, [])
  if (value === "Movie") {
    console.log("teste")
    
  }else if(value === "Tv Shows"){
    // var MOVIE_API = (`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`)
  }

  return (


    <div className="movieGalery">
      {movies.map(movie => {

        return (

          <Link key={movie.id} to={`/details/${movie.id}`}>
            <div className="cardContainer">
              <div className="cardContent"  >
                <img className="thumbnail" src={`${IMAGE_PATH}${movie.poster_path}`} alt="" />
                <div className="ranking">
                  <img src={starIcon} alt="rating" />
                  <span>{movie.vote_average}</span>
                </div>
              </div>
              <footer className="titleCard">
                <strong >{movie.title}</strong>
              </footer>
            </div>
          </Link>
        )
      })
      }
    </div>

  )
}