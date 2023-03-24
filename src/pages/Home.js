import { useState, useEffect } from 'react'
import axios from 'axios'

import NASAImg from '../components/NASAImg/NASAImg'
// import MoviesList from '../components/MoviesList/MoviesList'
import Card from '../components/global/Card/Card'

const Home = ({ pageName }) => {

  const [ loading, setLoading ] = useState(true)
  const [ data, setData ] = useState(null)

  useEffect(() => {
    axios(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&query=NASA&include_adult=false`)
      .then(response => {
        setData(response.data.results)
        console.log(`HOME axios.then response.data:`)
        console.log(response.data.results)
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
      { !loading && data ?
        <section className='d-flex flex-wrap'>
          {data.map(movie => {
            const { id, poster_path, title, overview, release_date, popularity } = {...movie}
            return (
              <Card 
                key={id}
                imgSrc={poster_path}
                title={title}
                description={overview}
                releaseDate={release_date}
                popularity={popularity}/>
            )
          })}
        </section>
      :
        <h2>Loading...</h2>
      }
      
    </main>
  )
}

export default Home