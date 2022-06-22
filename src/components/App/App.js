import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../pages/Main/Main';
import Movies from '../pages/Movies/Movies';
import Saved from '../pages/SavedMovies/Saved';
import ProfilePage from '../pages/Profile/ProfilePage';
import SignIn from '../pages/SignIn/SignIn'; 
import Register from '../pages/Register/Register';
import RequireAuth from '../RequireAuth/RequireAuth';
import Page404 from '../pages/Page404/Page404';
import UserAuthProvider from '../UserAuthProvider/UserAuthProvider';

const App = () => {
  return (
    <UserAuthProvider>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/movies"
          element={
            <RequireAuth>
              <Movies />
            </RequireAuth>
          } 
        />
        <Route
          path="/saved-movies"
          element={
            <RequireAuth>
              <Saved />
            </RequireAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <ProfilePage />
            </RequireAuth>
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </UserAuthProvider>
  );
}

export default App;
