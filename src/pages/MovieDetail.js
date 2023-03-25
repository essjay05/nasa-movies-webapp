import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

import ImageIcon from '../components/global/SVGs/ImageIcon'

import './MovieDetail.styles.scss'

const MovieDetail = ({ pageName }) => {

  const location = useLocation()
  const { id, title } = {...location.state}

  const [ loading, setLoading ] = useState(true)
  const [ movie, setMovie ] = useState(null)
  const [ moviePoster, setMoviePoster ] = useState(null)

  console.log(pageName)
  console.log(`movie:`)
  console.log(movie)

  const getMovie = () => {
    return new Promise(resolve => {
      axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`)
        .then(response => {
          const result = response.data
          setMovie(result)
          setMoviePoster(`https://image.tmdb.org/t/p/original/${result.poster_path}`)
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

  // `https://image.tmdb.org/t/p/original/${imgSrc}`
  // https://www.imdb.com/title/${movie.imdb_id}/

  console.log()

  return (
    <main>
      
      { loading && !movie ?
        <h1>Loading...</h1>
      :
        <section className='movie-detail container w-100 mt-5'>
          { movie.poster_path ?
            <img
              src={moviePoster}
              alt={`Movie Poster for ${movie.title}`}
              className='card-img-top mb-4' />
          :
            <div className='img-placeholder-container d-flex flex-column justify-content-center'>
              <ImageIcon
                width={'64'}
                height={'64'}/>
              <p className='text-center'>No poster found</p>
            </div>
          }
          <h1>{title}</h1>
          { movie.tagline && 
            <h2 className='tagline'>{movie.tagline}</h2> }
          { movie.runtime > 0 && 
            <p className='runtime'>
              <strong>Runtime:</strong> {movie.runtime}
            </p> }
          { movie.overview && 
            <p className='overview'>
              <strong>Overview:</strong> {movie.overview}
            </p> }
          { ( movie.status.toLowerCase() === 'released' && movie.release_date ) &&
            <p className='release-date'>
              <strong>Release Date:</strong> {movie.release_date}
            </p> }
          { movie.vote_average && 
            <p className='vote-average'>
              <strong>Vote Average:</strong> {movie.vote_average}
            </p> }
          { movie.vote_count && 
            <p className='vote-count'>
              <strong>Vote Count:</strong> {movie.vote_count}
            </p> }
          { movie.popularity &&
            <p className='popularity'>
              <strong>Popularity:</strong> {movie.popularity}
            </p> }
          { movie.budget > 0 &&
            <p className='budget'>
              <strong>Budget:</strong> ${movie.budget}
            </p> }
          { movie.revenue > 0 &&
            <p className='revenue'>
              <strong>Revenue:</strong> ${movie.revenue}
            </p> }
          { movie.imdb_id && 
            <p className='imdb-id'>
              <strong>IMDB Link:</strong> <a href={`https://www.imdb.com/title/${movie.imdb_id}/`}>{`https://www.imdb.com/title/${movie.imdb_id}/`}</a>
            </p> }
          { movie.genres.length > 0 &&
            <div className='spoken-languages'>
              <strong>Genre{ movie.genres.length > 1 ? 's' : '' }:</strong>
              <ul>
                { movie.genres.map(genre => {
                  return <li>{genre.name}</li>
                })}
              </ul>
            </div> }
          { movie.production_companies.length > 0 &&
            <div className='production-companies'>
              <strong>Production Compan{ movie.production_companies.length > 1 ? 'ies' : 'y'}:</strong>
              <ul>
                { movie.production_companies.map(company => {
                  return <li>{company.name}</li>
                })}
              </ul>
            </div> }
          { movie.production_countries.length > 0 &&
            <div className='production-countries'>
              <strong>Production Countr{ movie.production_countries.length > 1 ? 'ies' : 'y' }:</strong>
              <ul>
                { movie.production_countries.map(country => {
                  return <li>{country.name}</li>
                })}
              </ul>
            </div> }
          { movie.spoken_languages.length > 0 &&
            <div className='spoken-languages'>
              <strong>Spoken Language{ movie.spoken_languages.length > 1 ? 's' : '' }:</strong>
              <ul>
                { movie.spoken_languages.map(lang => {
                  return <li>{lang.english_name}</li>
                })}
              </ul>
            </div> }
        </section>
      }
    </main>
  )
}

export default MovieDetail