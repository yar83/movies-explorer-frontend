export function useSearch() {
  const shortsMaxDuration = 40;

  const getInitMoviesCount = () => {
    switch (true) {
      case window.innerWidth >= 1280:
        return (
          {
            initialCount: 12,
            additionalCount: 3
          }
        );
      case window.innerWidth >= 768:
        return (
          {
            initialCount: 8,
            additionalCount: 2
          }
        );
      default:
        return (
          {
            initialCount: 5,
            additionalCount: 2
          }
        );
    }
  };

  const filterMoviesBySearchQuery = (rawMovies, searchQuery) => {
    const isShortsChecked = localStorage.getItem('shorts-checkbox') === 'true' ? true : false;
    const searchPattern = new RegExp(`^.*${searchQuery}.*$`, 'i');
    return isShortsChecked
      ?
        rawMovies.filter((movie) =>
            searchPattern.test(movie.nameRU) && movie.duration <= shortsMaxDuration
        )
      :
        rawMovies.filter((movie) =>
          searchPattern.test(movie.nameRU)
        );
  };

  const getMoviesByCount = (filteredMovies, moviesCount) => {
    return filteredMovies.length <= moviesCount
    ? filteredMovies
    : filteredMovies.slice(0, moviesCount) 
  };

  return { getInitMoviesCount, filterMoviesBySearchQuery, getMoviesByCount };
}
