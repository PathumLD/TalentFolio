import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from '../auth/SignIn';
import LandingPage from '../pages/LandingPage';
import CandidateSignUp from '../auth/CandidateSignUp';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/candidate-register" element={<CandidateSignUp />} />
    </Routes>
  );
};

export default Router;
