import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from '../auth/SignIn';
import LandingPage from '../pages/LandingPage';
import CandidateSignUp from '../auth/CandidateSignUp';
import CandidateProfile from '../pages/candidate/CandidateProfile';
import CandidateLayout from '../components/shared/CandidateLayout';
import CandidateDashboard from '../pages/candidate/CandidateDashboard';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/candidate-register" element={<CandidateSignUp />} />

      {/* Candidate */}
      <Route path="/candidate" element={<CandidateLayout />}>
        <Route index element={<CandidateDashboard />} />
        <Route path="profile" element={<CandidateProfile />} />
      </Route>
    </Routes>
  );
};

export default Router;
