// import React, { useState } from 'react';
// import logo from './logo.jpg';
// import './Navbar.css';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleMenuClick = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleLinkClick = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <nav className="bg-black border-b border-gray-200 " id='navbg'>
//       <div className="mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex-shrink-0 flex items-center">
//             <Link to="/" className="">
//               <img src={logo} alt='logo' className='w-full h-14' />
//             </Link>
//           </div>
//           <div className="hidden md:flex justify-center items-center" id='nav'>
//             <Link to="/" className="text-white px-3 py-2 rounded-md text-lg font-semibold">Resume Score</Link>
//             <Link to="/" className="text-white px-3 py-2 rounded-md text-lg font-semibold">AI Resume Builder</Link>
//             <Link to="/" className="text-white px-3 py-2 rounded-md text-lg font-semibold">AI Resume Fetch</Link>
//             <Link to="/" className="text-white px-3 py-2 rounded-md text-lg font-semibold">Resources</Link>
//             <Link to="/" className="text-white px-3 py-2 rounded-md text-lg font-semibold">About Us</Link>
//             <Link to="/" className="text-white px-3 py-2 rounded-md text-lg font-semibold">Blog</Link>

//           </div>
//           <div className="buttons flex justify-center items-center gap-4">
//           <Link to="/login" className="text-white px-4 py-2 text-md font-semibold border-2 rounded-xl">Log in</Link>
//           <Link to="/signup" className="text-white px-4 py-2 text-md font-semibold border-2 rounded-xl">Sign up</Link>
//           </div>
//           <div className="flex justify-center gap-4  sm:hidden">
//             <button
//               onClick={handleMenuClick}
//               className="text-white hover:text-gray-700 focus:outline-none px-3 py-2 rounded-md text-sm font-medium"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//               </svg>
//             </button>
//           </div>
//         </div>
//         {isMenuOpen && (
//           <div className="sm:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               <Link to="/" className="text-white block px-3 py-2 rounded-md text-base font-semibold" onClick={handleLinkClick}>Resume</Link>
//               <Link to="/" className="text-white block px-3 py-2 rounded-md text-base font-semibold" onClick={handleLinkClick}>CV</Link>
//               <Link to="/" className="text-white block px-3 py-2 rounded-md text-base font-semibold" onClick={handleLinkClick}>Cover Letter</Link>
//               <Link to="/" className="text-white block px-3 py-2 rounded-md text-base font-semibold" onClick={handleLinkClick}>Advice</Link>
//               <Link to="/login" className="text-white block px-3 py-2 rounded-md text-base font-semibold" onClick={handleLinkClick}>Login</Link>
//               <Link to="/" className="text-white block px-3 py-2 rounded-md text-base font-semibold" onClick={handleLinkClick}>Contact Us</Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import logo from './logo.jpg';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-black border-b border-gray-200">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="">
              <img src={logo} alt="logo" className="w-20 h-14" />
            </Link>
          </div>
          <div className="hidden md:flex justify-center items-center space-x-4" id="nav">
            <Link to="/" className="text-white px-3 py-2 rounded-md text-lg font-semibold">Resume Score</Link>
            <Link to="/" className="text-white px-3 py-2 rounded-md text-lg font-semibold">AI Resume Builder</Link>
            <Link to="/" className="text-white px-3 py-2 rounded-md text-lg font-semibold">AI Resume Fetch</Link>
            <Link to="/" className="text-white px-3 py-2 rounded-md text-lg font-semibold">Resources</Link>
            <Link to="/" className="text-white px-3 py-2 rounded-md text-lg font-semibold">About Us</Link>
            <Link to="/" className="text-white px-3 py-2 rounded-md text-lg font-semibold">Blog</Link>
          </div>
          <div className="hidden md:flex justify-center items-center gap-4">
            <Link to="/login" className="text-white px-4 py-2 text-md font-semibold border-2 rounded-xl">Log in</Link>
            <Link to="/signup" className="text-white px-4 py-2 text-md font-semibold border-2 rounded-xl">Sign up</Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={handleMenuClick}
              className="text-white hover:text-gray-700 focus:outline-none px-3 py-2 rounded-md text-sm font-medium"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="text-white block px-3 py-2 rounded-md text-base font-semibold" onClick={handleLinkClick}>Resume Score</Link>
              <Link to="/" className="text-white block px-3 py-2 rounded-md text-base font-semibold" onClick={handleLinkClick}>AI Resume Builder</Link>
              <Link to="/" className="text-white block px-3 py-2 rounded-md text-base font-semibold" onClick={handleLinkClick}>AI Resume Fetch</Link>
              <Link to="/" className="text-white block px-3 py-2 rounded-md text-base font-semibold" onClick={handleLinkClick}>Resources</Link>
              <Link to="/" className="text-white block px-3 py-2 rounded-md text-base font-semibold" onClick={handleLinkClick}>About Us</Link>
              <Link to="/" className="text-white block px-3 py-2 rounded-md text-base font-semibold" onClick={handleLinkClick}>Blog</Link>
              <Link to="/login" className="text-white block px-3 py-2 rounded-md text-base font-semibold" onClick={handleLinkClick}>Login</Link>
              <Link to="/signup" className="text-white block px-3 py-2 rounded-md text-base font-semibold" onClick={handleLinkClick}>Sign up</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
