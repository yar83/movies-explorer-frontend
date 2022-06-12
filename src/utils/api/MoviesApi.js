import { endpoint } from '../const/moviesApi';

class MoviesExplorer {
  #endpoint;

  constructor(endpoint) {
    this.#endpoint = endpoint;
  }
  
  getMovies() {
    return fetch(
      this.#endpoint,
      {
        method: 'GET',
      }
    )
    //.then(resp => resp.ok ? resp.json() : Promise.reject(resp))
    .then(resp => resp.json())
    .catch((err) => console.log(err));
  }
}

export default new MoviesExplorer(endpoint);
