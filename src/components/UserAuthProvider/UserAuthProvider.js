import React, { useState, useEffect } from 'react';
import { UserAuthContext } from '../../contexts/UserAuthContext';
import mainApi from '../../utils/api/MainApi'; 
import Preloader from '../Preloader/Preloader';

export default function UserAuthProvider ({ children }) {
  const [userData, setUserData] = useState(null);
  const [userMovies, setUserMovies] = useState([]);
  const [loading, setLoading] = useState(!userData);

  const signin = (email, password, cb) => {
    return mainApi.signin(email, password)
      .then(() => {
        Promise.all([mainApi.getUserData(), mainApi.getUserMovies()])
          .then((values) => {
            setUserData(values[0]);
            setUserMovies(values[1]);
            cb();
          });
      })
      .catch((err) => Promise.reject(err));
  }

  const signout = (cb) => {
    return mainApi.signout()
      .then(() => {
        setUserData(null);
        cb();
      });
  };

  const updateUserData = (newUserData) => setUserData(newUserData);

  const updateUserMovies = () => {
    mainApi.getUserMovies()
      .then((movies) => setUserMovies(movies))
      .catch((err) => console.log(err));
  };

  const checkToken = () => {
    setLoading(true);
    Promise.all([mainApi.getUserData(), mainApi.getUserMovies()])
      .then((values) => {
        setUserData(values[0]);
        setUserMovies(values[1]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => checkToken(), []);

  const value = { userData, userMovies, signin, signout, updateUserData, updateUserMovies, loading };

  return (
    <UserAuthContext.Provider value={value}>
      {loading ? <Preloader /> : children}
    </UserAuthContext.Provider>
  );
}
