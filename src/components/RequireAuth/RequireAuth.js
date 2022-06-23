import React, { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import  { UserAuthContext }  from '../../contexts/UserAuthContext';

export default function RequireAuth({ children }) {
  const { userData } = useContext(UserAuthContext);
  const location = useLocation();

  return userData ? children : (<Navigate to="/" state={{ from: location }} replace />);
}
