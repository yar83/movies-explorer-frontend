import React, { useState, useEffect } from 'react';
import { UserAuthContext } from '../../contexts/UserAuthContext';
import mainApi from '../../utils/api/MainApi'; 
import Preloader from '../Preloader/Preloader';

export default function UserAuthProvider ({ children }) {
  const [userData, setUserData] = useState(null);
  const [userMovies, setUserMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
        localStorage.clear();
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
    Promise.all([mainApi.getUserData(), mainApi.getUserMovies()])
      .then((values) => {
        setUserData(values[0]);
        setUserMovies(values[1]);
        setIsLoading(false);
      })
      .catch((err) => {
        err.json()
          .then((errMsg) => {
            console.log(errMsg);
            setIsLoading(false);
          });
      });
  };

  useEffect(() => {
    checkToken();
  }, []);

  const value = { userData, userMovies, signin, signout, updateUserData, updateUserMovies, checkToken };

  return (
    <UserAuthContext.Provider value={value}>
      {isLoading ? <Preloader/> : children}
    </UserAuthContext.Provider>
  );
}
