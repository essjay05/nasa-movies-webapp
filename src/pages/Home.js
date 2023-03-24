import { useState, useEffect } from 'react'
import axios from 'axios'

import NASAImg from '../components/NASAImg/NASAImg'
import MoviesList from '../components/MoviesList/MoviesList'

const Home = ({ pageName }) => {

  const [ loading, setLoading ] = useState(true)
  const [ data, setData ] = useState(null)

  useEffect(() => {
    axios(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&query=NASA&include_adult=false`)
      .then(response => {
        setData(response.data)
        console.log(`HOME axios.then response.data:`)
        console.log(response.data)
      })
      .catch(err => {
        console.error(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <main>
      <h1>NASA Movies Web App: {pageName}</h1>
      <NASAImg/>
      { loading && !data ?
        <h2>Loading...</h2>
      :
        <>
          <h2>Data is loaded!</h2>
        </>
      }
      <MoviesList/>
    </main>
  )
}

export default Home