import React from 'react';
import PropTypes from 'prop-types';

import play from '../assets/img/play-icon.png';
import plus from '../assets/img/plus-icon.png';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className='Carousel__item'>
    <img className='Carousel__item-img' src={cover} alt={title} />
    <div className='Carousel__details'>
      <div className='Carousel__details-actionBox'>
        <img className='Carousel__details-action' src={play} alt='Play Icon' />
        <img className='Carousel__details-action' src={plus} alt='Plus Icon' />
      </div>
      <p className='Carousel__details-title'>{ title }</p>
      <p className='Carousel__details-subtitle'>{ `${year} ${contentRating} ${duration}` }</p>
    </div>
  </div>
);

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

export default CarouselItem;
