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
import CompanyLayout from '../components/shared/CompanyLayout';
import CompanyDashboard from '../pages/company/CompanyDashboard';
import CompanyProfile from '../pages/company/CompanyProfile';
import CompanyTalentPool from '../pages/company/CompanyTalentPool';
import CompanyAllVacancies from '../pages/company/CompanyAllVacancies'; 
import CompanyEvents from '../pages/company/CompanyEvents';
import CompanyInterviews from '../pages/company/CompanyInterviews';
import AdminLayout from '../components/shared/AdminLayout';
import AdminDashboard from '../pages/admin/AdminDashboard';
import AdminAnalytics from '../pages/admin/AdminAnalytics';
import AdminAllVacancies from '../pages/admin/AdminAllVacancies';
import AdminEvents from '../pages/admin/AdminEvents';
import CandidateEvents from '../pages/candidate/CandidateEvents';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/candidate-register" element={<CandidateSignUp />} />

      {/* Admin */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="analytics" element={<AdminAnalytics />} />
        <Route path="all-vacancies" element={<AdminAllVacancies />} />
        <Route path="events" element={<AdminEvents />} />
      </Route>

      {/* Candidate */}
      <Route path="/candidate" element={<CandidateLayout />}>
        <Route index element={<CandidateDashboard />} />
        <Route path="profile" element={<CandidateProfile />} />
        <Route path="applied-vacancies" element={<CandidateAppliedVacancies />} />
        <Route path="interviews" element={<CandidateInteviews />} />
        <Route path="all-vacancies" element={<CandidateAllVacancies />} />
        <Route path="companies" element={<CandidateCompanies />} />
        <Route path="events" element={<CandidateEvents />} />
      </Route>

        {/* Company */}
      <Route path="/company" element={<CompanyLayout />}>
        <Route index element={<CompanyDashboard />} />
        <Route path="profile" element={<CompanyProfile />} />
        <Route path="interviews" element={<CompanyInterviews />} />
        <Route path="all-vacancies" element={<CompanyAllVacancies />} />
        <Route path="events" element={<CompanyEvents />} />
        <Route path="talent-pool" element={<CompanyTalentPool />} />
      </Route>

    </Routes>
  );
};

export default Router;
