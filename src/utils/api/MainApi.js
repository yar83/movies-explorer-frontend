import { baseUrl, endpoints } from "../const/mainApi";

class MainApi {
  #base;
  #ends;

  constructor(base, endpoints) {
    this.#base = base;
    this.#ends = endpoints;
  }

  #checkResp(resp) {
    let ret;
    if (resp.ok) {
      ret = resp.json(); 
      return ret;
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
      .then((resp) => resp.ok ? {} : Promise.reject(resp.json()));
  }

  signout() {
    return fetch(
      `${this.#base}${this.#ends.signout}`,
      {
        method: 'POST',
        credentials: 'include',
      }
    )
      .then((resp) => resp)
      .catch((err) => console.log(err));
  }

  getUserData() {
    return fetch(
      `${this.#base}${this.#ends.me}`,
      {
        method: 'GET',
        credentials: 'include',
      }
    )
      .then(this.#checkResp)
      .catch((err) => console.log(err));
  }
}

export default new MainApi(baseUrl, endpoints);
