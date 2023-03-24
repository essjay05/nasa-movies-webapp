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
        console.log(`axios.then response.data`)
        console.log(response.data)
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
    <section className='nasa-img-section'>
      { loading || !data ? 
        <h2>Loading...</h2>
      :
        <>
          <h2 className='nasa-img-h2'><span>NASA:</span> Picture of the Day</h2>
          <h3 className='nasa-pod-date'>{date}</h3>
          <figure className='nasa-img-wrapper mw-75'>
            <img src={hdurl} alt={explanation} className='nasa-img mw-75' />
            <figcaption className='nasa-img-details'>Copyright: {copyright}</figcaption>
          </figure>
        </>
      }
    </section>
  )
}

export default NASAImg