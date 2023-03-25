import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

import './MovieDetail.styles.scss'

const MovieDetail = ({ pageName }) => {

  const location = useLocation()
  const { id, title } = {...location.state}

  const [ loading, setLoading ] = useState(true)
  const [ movie, setMovie ] = useState(null)

  // console.log(pageName)
  // console.log(`movie:`)
  // console.log(movie)

  const getMovie = () => {
    return new Promise(resolve => {
      axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`)
        .then(response => {
          const result = response.data
          setMovie(result)
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
    getMovie()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log()

  return (
    <main>
      
      { loading && !movie ?
        <h1>Loading...</h1>
      :
        <section className='movie-detail container w-100 mt-5'>
          <h1>{title}</h1>
          <h2 className='tagline'>{movie.tagline}</h2>
        </section>
      }
    </main>
  )
}

export default MovieDetail