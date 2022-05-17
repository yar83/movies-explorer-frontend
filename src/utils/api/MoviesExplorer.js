import { endpoint } from '../const/moviesExplorer';

class MoviesExplorer {
  #endpoint;

  constructor(endpoint) {
    this.#endpoint = endpoint;
  }
  
  getMovies() {
    return fetch(this.#endpoint,
    {
      method: 'GET',
    })
    .then(res => res.json())
    .catch((err) => console.log(err));
  }
}

export default new MoviesExplorer(endpoint);
