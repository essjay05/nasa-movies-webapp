import { useState, useEffect } from 'react'
import axios from 'axios'

import NASAImg from '../components/NASAImg/NASAImg'
import MoviesList from '../components/MoviesList/MoviesList'
import Card from '../components/global/Card/Card'

const Home = ({ pageName }) => {

  const [ loading, setLoading ] = useState(true)
  const [ data, setData ] = useState(null)
  const [ nasaMovies, setNasaMovies ] = useState(null)

  const getMovies = () => {
    return new Promise(resolve => {
      axios(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&query=NASA&include_adult=false`)
        .then(response => {
          const movieResults = response.data.results
          const filteredResults = movieResults.filter(movie => {
            const movieMatches = movie.title.match(/NASA/g)
            setNasaMovies(movieMatches)
            setLoading(false)
            return movieMatches
          })
          setData(filteredResults)
          console.log(`HOME axios.then filteredResults`)
          console.log(filteredResults)
        })
        .catch(err => {
          console.error(err)
        })
        .finally(() => {
          setLoading(false)
        })
    })
  }

  // async function filterMoviesData() {
  //   const 
  // }

  useEffect(() => {
   getMovies()
  }, [])

  return (
    <main>
      <h1>NASA Movies Web App: {pageName}</h1>
      <NASAImg/>
      { !loading && data ?
        <MoviesList movies={nasaMovies}/>
      :
        <h2>Loading...</h2>
      }
      
    </main>
  )
}

export default Home