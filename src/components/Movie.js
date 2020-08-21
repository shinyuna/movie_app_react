import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Movie.css';

export default function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <Link 
      className="movie"
      to={{
        pathname: `/movie/${id}`,
        state: { year, title, summary, poster, genres }
      }}
    >
      <img className="movie__poster" src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h4 className="movie__year">{year}</h4>
        <ul className="movie__genres">
          {genres.map((genre, index) => <li className="genres__genre" key={index}>{genre}</li>)}
        </ul>
        <p className="movie__summary">{summary.slice(0, 140)}...</p>
      </div>
    </Link>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired
}