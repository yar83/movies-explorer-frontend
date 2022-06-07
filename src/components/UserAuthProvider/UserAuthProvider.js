import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuthContext } from '../../contexts/UserAuthContext';
import mainApi from '../../utils/api/MainApi'; 

export default function UserAuthProvider ({ children }) {
  const [userData, setUserData] = useState(null);

  const navigate = useNavigate();

  const signin = (email, password, cb) => {
    return mainApi.signin(email, password)
      .then(() => {
        return mainApi.getUserData()
          .then((user) => {
            setUserData(user);
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

  useEffect(() => {
    mainApi.getUserData()
      .then((user) => {
        setUserData(user);
        console.log(user);
        navigate('/', { replace: true });
      });
  }, []);

  const value = { userData, signin, signout };

  return <UserAuthContext.Provider value={value}>{children}</UserAuthContext.Provider>;
}
