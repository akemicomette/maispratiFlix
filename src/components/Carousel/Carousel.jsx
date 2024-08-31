import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { getByGenre } from '../../services/api.js';
import './carousel.css';

export function Carousel({ genreId, genreName }) {
  const [movies, setMovies] = useState([]);
  const carousel = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesByGenre = await getByGenre(genreId);
        setMovies(moviesByGenre);
      } catch (error) {
        console.error('Erro ao buscar filmes:', error);
      }
    };

    fetchMovies();
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, [genreId]);

  return (
    <div className="carousel-container">
      <h2 className="carousel-genres">{genreName}</h2>
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className='carousel-inner'
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {movies.map(movie => (
            <motion.div className="carousel-item-img" key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

Carousel.propTypes = {
  genreId: PropTypes.func.isRequired,
  genreName: PropTypes.func.isRequired,
};