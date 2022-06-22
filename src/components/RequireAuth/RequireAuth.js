import React, { useContext, useEffect, useState } from 'react';
import { useLocation, Navigate, useNavigate } from 'react-router-dom';
import  { UserAuthContext }  from '../../contexts/UserAuthContext';

export default function RequireAuth({ children }) {
  const { userData, checkToken } = useContext(UserAuthContext);
  const location = useLocation();
  let navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(userData ? true : false);

  useEffect(() => {
    if(!isAuthenticated) checkToken(() => setIsAuthenticated(true), () => setIsAuthenticated(false));
  }, []);

  return isAuthenticated ? children : (<Navigate to="/" state={{ from: location }} replace />);
}
