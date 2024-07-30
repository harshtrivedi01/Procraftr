import React from 'react';
import html2pdf from 'html2pdf.js';
import {useState} from "react";


const PdfDownloadButton = ({ targetRef }) => {
const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

  
    const handleChoosePlan = (plan, planPrice, planCourseID) => {
      setPrice(planPrice);
     
      setShowForm(true);
    };

    const [showForm2, setShowForm2] = useState(false);
    const [name2, setName2] = useState('');
    const [price2, setPrice2] = useState(0);
    const [courseID2, setCourseID2] = useState('');
  
    const handleChoosePlan2 = (plan, planPrice2, planCourseID2) => {
      setPrice2(planPrice2);
      setCourseID2(planCourseID2);
      setShowForm2(true);
    };
  const handleDownload = () => {
    const element = targetRef.current;

    const opt = {
      margin: 0.5,
      filename: 'cv.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <>
    <button onClick={handleDownload} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-blue-500 rounded-lg group bg-blue-800 group-hover:bg-blue-950 border hover:text-white dark:text-blue focus:ring-2 focus:outline-none focus:ring-blue-100 dark:focus:ring-blue-100">
              <span className="relative p-5 py-5 transition-all ease-in duration-75 bg-white dark:bg-gray-100 rounded-md group-hover:bg-opacity-0 font-bold">
              Download
           </span>
              </button>
              <button
                    className='bg-blue-900 text-white p-2 rounded-lg m-2'
                    onClick={() => handleChoosePlan('paid', 49, '123')}
                  >
                    Choose This Plan
                  </button>
                  
              {showForm && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                  <div className="bg-white py-10 rounded-lg shadow-md w-96 text-center">
                    <h2 className="text-xl font-bold mb-10">🛒 Checkout </h2>
                    <form id="checkoutForm" action="https://api.perfectresume.ca/api/user/paypal/create-payment" method="POST">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required className='border-2 rounded-lg m-2 p-3'/><br /><br />
        
        <span className=" text-violet-900 font-bold text-2xl "> $49</span> <span className=" text-violet-900 ">/One Time Purchase</span><br/>
        <input type="hidden" name="amount" defaultValue="49" />
        <input type="hidden" name="courseID" defaultValue="" />
        <button type="submit"  className='bg-yellow-500 text-white px-20 rounded-lg mt-10 p-3 font-bold'>🚚 Checkout </button>
      </form>
                  </div>
                </div>
              )}
    </>
    
  );
};

export default PdfDownloadButton;
