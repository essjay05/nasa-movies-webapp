import React from 'react'
import NASAImg from '../components/NASAImg/NASAImg'

const Home = ({ pageName }) => {

  return (
    <main>
      <h1>NASA Movies Web App: {pageName}</h1>
      <NASAImg/>
    </main>
  )
}

export default Home