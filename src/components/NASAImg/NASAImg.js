import { useState, useEffect } from 'react'
// import axios from 'axios'

import './NASAImg.styles.scss'

const NASAImg = () => {

  const [ loading, setLoading ] = useState(true)
  const [ nasaImg, setNasaImg ] = useState('')

  // const nasa

  useEffect(() => {
    // axios(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_APOD_KEY}`)
    console.log(`nasaImg: ${nasaImg}`)
    console.log(process.env.REACT_APP_NASA_APOD_KEY)
  }, [nasaImg])


  return (
    <section className='nasaImgSection'>
      { loading ? 
        <h2>Loading...</h2>
      :
        <>
          <h2><span>NASA:</span> Picture of the Day</h2>
          <>{nasaImg}</>
        </>
      }
    </section>
  )
}

export default NASAImg