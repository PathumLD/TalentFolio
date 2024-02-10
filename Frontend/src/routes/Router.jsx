import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from '../auth/SignIn';
import LandingPage from '../pages/LandingPage';
import CandidateSignUp from '../auth/CandidateSignUp';
import CandidateProfile from '../pages/candidate/CandidateProfile';
import CandidateLayout from '../components/shared/CandidateLayout';
import CandidateDashboard from '../pages/candidate/CandidateDashboard';
import CandidateAppliedVacancies from '../pages/candidate/CandidateAppliedVacancies';
import CandidateInteviews from '../pages/candidate/CandidateInteviews';
import CandidateAllVacancies from '../pages/candidate/CandidateAllVacancies';
import CandidateCompanies from '../pages/candidate/CandidateCompanies';

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
        <Route path="applied-vacancies" element={<CandidateAppliedVacancies />} />
        <Route path="interviews" element={<CandidateInteviews />} />
        <Route path="all-vacancies" element={<CandidateAllVacancies />} />
        <Route path="companies" element={<CandidateCompanies />} />
      </Route>
    </Routes>
  );
};

export default Router;
