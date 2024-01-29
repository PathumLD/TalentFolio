import React, { useState } from 'react';
import Modal from '../components/Modal';


const YourComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className='flex items-center justify-center gap-6 mx-auto '>
        <button className='px-4 py-3 font-medium text-white rounded-xl hover:opacity-85 bg-blue' onClick={closeModal}>Candidate</button>
        <button className='px-4 py-3 font-medium text-white rounded-xl hover:opacity-85 bg-blue' onClick={closeModal}>Company</button>
        </div>
      </Modal>
    </div>
  );
};

export default YourComponent;
