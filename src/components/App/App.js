import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../pages/Main/Main';
import Movies from '../pages/Movies/Movies';
import Saved from '../pages/SavedMovies/Saved';
import ProfilePage from '../pages/Profile/ProfilePage';
import SignIn from '../pages/SignIn/SignIn'; 
import Register from '../pages/Register/Register';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/saved-movies" element={<Saved />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<Register />} />
    </Routes>
  );
}

export default App;
