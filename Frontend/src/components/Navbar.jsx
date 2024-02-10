import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

    
    const backgroundStyle = {
        position: 'fixed',
        width: '100%',
        height: '8vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', // Adjust this if needed
        color: '#ffffff',
        backgroundColor: 'transparent',
        backdropFilter: 'blur(10px)',
        zIndex: 20,
      };
      
      

  return (
    <>
    <div style={backgroundStyle} className=' py-auto'>
      <nav className='flex items-center justify-between mx-6 my-auto'>
        <a href='/' className='text-3xl font-bold text-white '>TalentFolio</a>
        

        <div className='hidden space-x-6 text-base font-semibold text-primary lg:block'>
        <Link to="about-us" smooth={true} duration={500} className="py-1 hover:border-b-2">
            About Us
          </Link>
            <Link to="/login" className='px-4 py-2 text-white rounded-lg hover:bg-white hover:text-blue bg-blue'>Sign In</Link>
        </div>
        
      </nav>
    </div>
    </>
  );
};

export default Navbar;