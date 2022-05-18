import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import GhostButton from '../ui/buttons/ghost/GhostButton'; 
import { actionButtonText } from '../../shared/constants/buttons/button-text';
import './index.css';
import moviesExplorer from '../../utils/api/MoviesExplorer';

export default function MoviesSection() {
  const [movies, setMovies] = useState([]);
  let location = useLocation();

  useEffect(() => {
    moviesExplorer.getMovies()
      .then(allMovies => {
        let moviesArr = [];
        for (let i = 0; i < 12; i++ ) {
          moviesArr.push({
            id: allMovies[i].id,
            title: allMovies[i].nameRU,
            duration: allMovies[i].duration,
            posterUrl: allMovies[i].image.url,
          });
        }
        setMovies(moviesArr);
      });
      return undefined;
    }
  , []);
  
  return (
    <section className="movies-section">
      <MoviesCardList movies={movies} />
      { movies.length > 3 && location.pathname === '/movies' &&
        <div className="movies-section__more">
          <GhostButton label={actionButtonText.more} />
        </div>
      }
    </section>
  );
};
