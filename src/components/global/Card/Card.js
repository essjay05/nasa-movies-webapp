import {useState, useEffect} from 'react'
import ImageIcon from '../SVGs/ImageIcon'

import './Card.styles.scss'

const Card = ({ props, item, id, imgSrc, title, description, releaseDate, popularity }) => {

  console.log('Card item:')
  console.log(item)
  return (
    <div className='card col-xl-3 col-sm-4 col-xs-12'>
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
        <button className='btn btn-primary card-btn text-center mx-auto' href=''>More Movie Details</button>
      </div>
    </div>
  )
}

export default Card