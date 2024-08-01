import React, { useRef, useState } from 'react';
import html2pdf from 'html2pdf.js';

const PdfDownloadButton = () => {
  const targetRef = useRef();
  const [showForm, setShowForm] = useState(false);
  const [paymentToken, setPaymentToken] = useState(null);

  const handleChoosePlan = (planPrice, courseID) => {
    setPaymentToken({ planPrice, courseID });
    setShowForm(true);
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

  const handlePaymentSuccess = () => {
    handleDownload();
    setShowForm(false); // Hide form after payment success
  };

  return (
    <>
      <button 
        onClick={() => handleChoosePlan(49, '123')} 
        className="bg-blue-900 text-white p-2 rounded-lg m-2"
      >
        Choose This Plan
      </button>

      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white py-10 rounded-lg shadow-md w-96 text-center">
            <h2 className="text-xl font-bold mb-10">🛒 Checkout</h2>
            <form 
              id="checkoutForm" 
              action={`https://api.perfectresume.ca/api/user/paypal/create-payment`} 
              method="POST"
              onSubmit={(e) => {
                e.preventDefault();
                fetch('https://api.perfectresume.ca/api/user/paypal/create-payment', {
                  method: 'POST',
                  body: new URLSearchParams(new FormData(e.target)).toString(),
                  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                })
                .then(response => response.json())
                .then(data => {
                  if (data.success) {
                    // Redirect to PayPal success URL
                    window.location.href = `https://api.perfectresume.ca/api/user/paypal/success?token=${data.token}&PayerID=${data.PayerID}`;
                    handlePaymentSuccess();
                  }
                })
                .catch(error => console.error('Payment Error:', error));
              }}
            >
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required className='border-2 rounded-lg m-2 p-3'/><br /><br />
              <span className="text-violet-900 font-bold text-2xl">${paymentToken?.planPrice}</span> 
              <span className="text-violet-900">/One Time Purchase</span><br/>
              <input type="hidden" name="amount" value={paymentToken?.planPrice || ''} />
              <input type="hidden" name="courseID" value={paymentToken?.courseID || ''} />
              <button type="submit" className='bg-yellow-500 text-white px-20 rounded-lg mt-10 p-3 font-bold'>🚚 Checkout</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PdfDownloadButton;
