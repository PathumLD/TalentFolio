import React from 'react';
import CandidateProfileInfo from '../../components/candidate/CandidateProfileInfo';
import CandidateResume from '../../components/candidate/CandidateResume';

const CandidateProfile = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-5'>
      <div className='col-span-3 overflow-hidden'>
        <CandidateProfileInfo />
      </div>
      <div className='col-span-2 mb-10 overflow-hidden'>
        <CandidateResume />
      </div>
    </div>
  );
};

export default CandidateProfile;
