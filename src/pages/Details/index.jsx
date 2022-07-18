import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { apiKey } from "../../api"
import './style.scss'
import starIcon from '../../assets/icons/starIcon.svg'
import { render } from "react-dom"


export function PageDetails() {
  const { id, typeContent } = useParams()
  const [movie, setMovies] = useState({})
  const MOVIE_API = (`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)

  const IMAGE_PATH = "https://image.tmdb.org/t/p/original/"

  useEffect(() => {
    fetch(`${MOVIE_API}`)
      .then(response => response.json())
      .then(data => {
        const { title, poster_path, overview, release_date, first_air_date,
          genres, backdrop_path, tagline, vote_average, status, runtime, type, original_title } = data
        const movie = {
          id,
          title,
          image: `${IMAGE_PATH}${poster_path}`,
          sinopse: overview,
          releaseDate: release_date,
          firstAirDate: first_air_date,
          genres,
          backdrop: `${IMAGE_PATH}${backdrop_path}`,
          tagline,
          rating: vote_average,
          status,
          runtime,
          type_movie: "movie"

        }
        setMovies(movie)

      })

  }, [id])



  if (movie.type_movie === "movie") {
    return (

      <div className="DetailsContainer">
        <section className="ContentBanner">
          <div className="BackgroudBanner">
            <img className="ImageBanner" src={movie.backdrop} alt="" />
          </div>
          <div className="TitleContent">
            <span>
              MaileHereko/{movie.type || "movie"}
            </span>
            <h1>{movie.title || movie.original_title}</h1>
          </div>
        </section>

        <section className="InfosContent">
          <div className="ContainerPorter">
            <img className="ImagePoster" src={`${movie.image}`} alt="" />
          </div>
          <div className="InfosContainer" >
            <h3 className="InfoTitle">{movie.tagline}</h3>
            <p className="Overview">{movie.sinopse}</p>
            <div className="Rankingcontainer">
              <img src={starIcon} alt="" />
              <span>
                {movie.rating}
              </span>
            </div>
            <div className="MovieInfos">
              <div className="StatusInfoContainer">
                <div className="StatusInfoContentContainer">
                  <span>Type</span>
                  <strong>
                    {movie.type_movie}
                  </strong>

                </div>
                <div className="StatusInfoContentContainer">
                  <span>Status</span>
                  <strong>{movie.status}</strong>
                </div>
              </div>
              <div className="StatusInfoContainer">
                <div className="StatusInfoContentContainer">
                  <span> Release Date </span>
                  <strong>
                    {movie.releaseDate}
                  </strong>
                </div>
              </div>
              <div className="StatusInfoContainer">
                <div className="StatusInfoContentContainer">
                  <span> Genres </span>
                  <strong>
                    {movie.genres.map(
                      (g, i )=>`${g.name}${i !==movie.genres.length - 1? " | " : " "}`
                    )}
                  </strong>
                </div>
              </div>

            </div>

          </div>
        </section >
      </div>
    )
  } else {
    return (
      <div>
        <h1>teste</h1>
      </div>
    )
  }
}

