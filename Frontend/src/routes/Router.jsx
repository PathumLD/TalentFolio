import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from '../auth/SignIn';
import LandingPage from '../pages/LandingPage';
import CandidateSignUp from '../auth/CandidateSignUp';
import CandidateProfile from '../pages/candidate/CandidateProfile';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/candidate-register" element={<CandidateSignUp />} />

                  {/* Candidate */}

      <Route path="/candidate-profile" element={<CandidateProfile />} />
    </Routes>
  );
};

export default Router;
