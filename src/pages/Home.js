import React from 'react'
import axios from 'axios'

import NASAImg from '../components/NASAImg/NASAImg'
import MoviesList from '../components/MoviesList/MoviesList'

const Home = ({ pageName }) => {

  return (
    <main>
      <h1>NASA Movies Web App: {pageName}</h1>
      <NASAImg/>
      <MoviesList/>
    </main>
  )
}

export default Home