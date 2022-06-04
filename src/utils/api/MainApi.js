import { baseUrl, endpoints } from "../const/mainApi";

class MainApi {
  #base;
  #ends;

  constructor(base, endpoints) {
    this.#base = base;
    this.#ends = endpoints;
  }

  #checkResp(resp) {
    if (resp.ok) {
      return resp.json();
    }
    return Promise.reject(resp);
  };

  signup(name, email, password) {
    return fetch(
      `${this.#base}${this.#ends.signup}`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      },
    )
      .then(this.#checkResp);
  }

  signin(email, password) {
    return fetch(
      `${this.#base}${this.#ends.signin}`,
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      },
    )
      .then(this.#checkResp);
  }
}

export default new MainApi(baseUrl, endpoints);
