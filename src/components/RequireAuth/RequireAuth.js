import React, { useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import { UserAuthContext } from '../../contexts/UserAuthContext';

export default function RequireAuth({ children }) {
  const { userData } = useContext(UserAuthContext);
  const location = useLocation();
    
  const [authenticated, setAuthenticated] = useState(userData ? true : false);

  useEffect(() => {
    const checkToken = async () => {
      await fetch(
        'https://api.eternalmovies.nomoredomains.work/users/me',
        {
          method: 'GET',
          credentials: 'include',
        }
      )
      .then((res) => res.ok ? setAuthenticated(true) : setAuthenticated(false))
      .catch((err) => console.log('err', err));
    };

    if (!authenticated) checkToken();
  }, []);
   
  return authenticated ? children : (<Navigate to="/" state={{ from: location }} replace />);
}
