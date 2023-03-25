import { useState, useEffect } from 'react'
import axios from 'axios'

import './NASAImg.styles.scss'

const NASAImg = () => {

  const [ loading, setLoading ] = useState(true)
  const [ data, setData ] = useState(null)

  useEffect(() => {
    axios(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_APOD_KEY}`)
      .then(response => {
        setData(response.data)
      })
      .catch(err => {
        console.error(err)
      })
      .finally(() => {
        setLoading(false)
      })
  
  }, [])

  const { copyright, date, explanation, hdurl } = {...data}

  return (
    <section className='nasa-img-section my-4'>
      { loading || !data ? 
        <h2>Loading...</h2>
      :
        <div className='d-flex flex-column align-items-center justify-content-center'>
          <h2 className='nasa-img-h2'>
            <span>NASA:</span> Picture of the Day
          </h2>
          <h3 className='nasa-pod-date'>{date}</h3>
          <figure className='nasa-img-wrapper'>
            <img src={hdurl} alt={explanation} className='nasa-img' />
            <figcaption className='nasa-img-details text-center'>
              Copyright: {copyright}
            </figcaption>
          </figure>
        </div>
      }
    </section>
  )
}

export default NASAImg