import NASAImg from '../components/NASAImg/NASAImg'
import MoviesList from '../components/MoviesList/MoviesList'

const Home = ({ pageName }) => {

  return (
    <main>
      <h1 className='text-center my-3 w-100'>
        NASA Movies Web App: {pageName}
      </h1>
      <NASAImg/>
      <MoviesList/>
    </main>
  )
}

export default Home