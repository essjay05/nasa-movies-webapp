import { Link } from 'react-router-dom'

import ImageIcon from '../SVGs/ImageIcon'

import './Card.styles.scss'

const Card = ({ props, item, id, url, imgSrc, title, description, releaseDate, popularity, className }) => {

  return (
    <div className={`card ${className}`}>
      <div className='card-body'>
        { imgSrc !== null ?
          <img
            src={`https://image.tmdb.org/t/p/original/${imgSrc}`}
            alt={`Movie Poster for ${title}`}
            className='card-img-top' />
        :
          <div className='img-placeholder-container d-flex flex-column justify-content-center'>
            <ImageIcon
              width={'64'}
              height={'64'}/>
            <p className='text-center'>No poster found</p>
          </div>

        }
        <h3 className='card-title mt-3'>{title}</h3>
        <p className='card-description'>{description}</p>
        <ul>
          <li>
            <strong>Release Date: </strong>{releaseDate}
          </li>
          <li>
            <strong>Popularity: </strong>{popularity}
          </li>
        </ul>
        <Link 
          to={url}
          state={{ ...item, ...props }}
          aria-label={`To ${title} movie detail page`}
          className='btn btn-primary card-btn'>
          More Movie Details
        </Link>
      </div>
    </div>
  )
}

export default Card