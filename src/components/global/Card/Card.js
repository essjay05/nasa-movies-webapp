import {useState, useEffect} from 'react'

import './Card.styles.scss'

const Card = ({ props, item, id, imgSrc, title, description, releaseDate, popularity }) => {

  console.log('Card item:')
  console.log(item)
  return (
    <div className='card'>
      { imgSrc !== null ?
        <img
          src={`https://image.tmdb.org/t/p/original/${imgSrc}`}
          alt={`Movie Poster for ${title}`}
          className='card-img-top' />
      :
        <h2>No poster found</h2>
      }
      <div className='card-body'>
        <h4 className='card-title'>{title}</h4>
        <p className='card-description'>{description}</p>
        <ul>
          <li>
            <strong>Release Date: </strong>{releaseDate}
          </li>
          <li>
            <strong>Popularity: </strong>{popularity}
          </li>
        </ul>
        <button className='card-btn' href=''>Link to Movie Detail</button>
      </div>
    </div>
  )
}

export default Card