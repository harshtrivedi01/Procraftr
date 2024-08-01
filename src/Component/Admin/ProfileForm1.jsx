import React from 'react';
import { Link } from 'react-router-dom';

const ProfileForm1 = () => {
  const boxes = [ 
    <Link to="/admin/resumes1" key="box1">
      <div className="bg-purple-200 hover:bg-gray-300 rounded-lg shadow-md pt-16 w-96 h-60 text-center cursor-pointer text-3xl font-semibold">
      <div className='text-5xl'>👨🏻‍👩🏻‍👦🏻‍👦🏻</div> <br/>
        All Customer
      </div>
    </Link>,
    <Link to="/admin/notification1" key="box2">
      <div className="bg-purple-900 hover:bg-gray-300 hover:text-black rounded-lg shadow-md pt-16 w-96 h-60 text-center text-white cursor-pointer text-3xl font-semibold">
      <div className='text-5xl'>📋</div><br/>My Templates
      </div>
    </Link>,
    <Link to="/admin/addreferall1" key="box3">
      <div className="bg-purple-900 hover:bg-gray-300 rounded-lg shadow-md pt-16 w-96 h-60 text-center cursor-pointer text-white text-3xl font-semibold">
      <div className='text-5xl'>  📊</div><br/> Leads
      </div>
    </Link>,
    <Link to="/admin/payment1" key="box4">
      <div className="bg-purple-900 hover:bg-gray-300 hover:text-black rounded-lg shadow-md pt-16 w-96 h-60 text-center text-white cursor-pointer text-3xl font-semibold">
      <div className='text-5xl'>💷</div><br/>Payments
      </div>
    </Link>,
  
  ];

  return (
    <div className="p-2 md:p-6 flex flex-wrap justify-center gap-10">
      {boxes.map((box, index) => box)}
    </div>
  );
};

export default ProfileForm1;