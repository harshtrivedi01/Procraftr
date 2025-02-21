import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
function Addreferall1() {
    const boxes = [
        <Link to="/admin/Refferallbycustomer" key="box1">
          <div className="bg-violet-900 hover:bg-gray-300 hover:text-black rounded-lg shadow-md pt-16 w-80 h-60 text-center text-white cursor-pointer text-3xl font-semibold">
          <div className='text-5xl'>👥</div><br/>Referrals By Customers
          </div>
        </Link>,
        <Link to="/admin/self" key="box2">
          <div className="bg-violet-900 hover:bg-gray-300 hover:text-black rounded-lg shadow-md pt-16 w-80 h-60 text-center text-white cursor-pointer text-3xl font-semibold">
          <div className='text-5xl'>🤳🏽</div><br/>Self
          </div>
        </Link>,
        <Link to="/box1" key="box1">
        <div className="bg-violet-900 hover:bg-gray-300 hover:text-black rounded-lg shadow-md pt-16 w-80 h-60 text-center text-white cursor-pointer text-3xl font-semibold">
        <div className='text-5xl'>📫</div><br/>Request Service
        </div>
      </Link>,
      <Link to="/box2" key="box2">
        <div className="bg-violet-900 hover:bg-gray-300 hover:text-black rounded-lg shadow-md pt-16 w-80 h-60 text-center text-white cursor-pointer text-3xl font-semibold">
        <div className='text-5xl'>📑</div><br/>New Template
        </div>
      </Link>,
      <Link to="/box1" key="box1">
      <div className="bg-violet-900 hover:bg-gray-300 hover:text-black rounded-lg shadow-md pt-16 w-80 h-60 text-center text-white cursor-pointer text-3xl font-semibold">
      <div className='text-5xl'>📝</div><br/>New Cover Letter
      </div>
    </Link>,
    <Link to="/box2" key="box2">
      <div className="bg-violet-900 hover:bg-gray-300 hover:text-black rounded-lg shadow-md pt-16 w-80 h-60 text-center text-white cursor-pointer text-3xl font-semibold">
      <div className='text-5xl'>🛠️</div><br/>Support
      </div>
    </Link>,
     <Link to="/box2" key="box2">
     <div className="bg-violet-900 hover:bg-gray-300 hover:text-black rounded-lg shadow-md pt-16 w-80 h-60 text-center text-white cursor-pointer text-3xl font-semibold">
     <div className='text-5xl'>🌍</div><br/>Other
     </div>
   </Link>,
        
        
        
      ];
    
      return (
        <div className="p-2 md:p-4 flex flex-wrap justify-center gap-5">
          {boxes.map((box, index) => box)}
        </div>
      );
    };

export default Addreferall1;
