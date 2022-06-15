import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuthContext } from '../../contexts/UserAuthContext';
import mainApi from '../../utils/api/MainApi'; 

export default function UserAuthProvider ({ children }) {
  const [userData, setUserData] = useState(null);
  const [userMovies, setUserMovies] = useState([]);

  const navigate = useNavigate();

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

  useEffect(() => {
    Promise.all([mainApi.getUserData(), mainApi.getUserMovies()])
      .then((values) => {
        setUserData(values[0]);
        setUserMovies(values[1]);
      });
  }, []);

  const value = { userData, userMovies, signin, signout, updateUserData };

  return <UserAuthContext.Provider value={value}>{children}</UserAuthContext.Provider>;
}
