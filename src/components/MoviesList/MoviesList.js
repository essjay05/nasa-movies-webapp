import { useEffect, useState } from 'react'
import axios from 'axios'

import Card from '../global/Card/Card'

import './MoviesList.styles.scss'

const MoviesList = () => {
  
  const [ loading, setLoading ] = useState(true)
  const [ nasaMovies, setNasaMovies ] = useState(null)

  const getMovies = () => {
    return new Promise(resolve => {
      axios(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&query=NASA&include_adult=false`)
        .then(response => {
          const movieResults = response.data.results
          const filteredResults = movieResults.filter(movie => {
            const movieMatches = movie.title.match(/NASA/g)
            return movieMatches
          })
          setNasaMovies(filteredResults)
        })
        .catch(err => {
          console.error(err)
        })
        .finally(() => {
          setLoading(false)
        })
    })
  }

  useEffect(() => {
    getMovies()
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

  return (
    <section className='nasa-movies-section d-flex flex-wrap w-100'>
      { loading || !nasaMovies ?
        <h3>Loading...</h3>
      :
        nasaMovies.map(movie => {
          const { id, poster_path, backdrop_path, title, overview, release_date, popularity } = {...movie}
          return (
            <Card
              key={id}
              url={`/movies/${id}`}
              className={'col-xl-3 col-sm-4 col-xs-12'}
              item={movie}
              imgSrc={poster_path || backdrop_path}
              title={title}
              description={overview}
              releaseDate={release_date}
              popularity={popularity}/>
          )
        })
      }
    </section>
  )
}

export default MoviesList