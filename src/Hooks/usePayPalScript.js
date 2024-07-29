// src/hooks/usePayPalScript.js
import { useEffect } from 'react';

const usePayPalScript = (onLoad) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.paypal.com/sdk/js?client-id=YOUR_PAYPAL_CLIENT_ID"; // Replace with your PayPal Client ID
    script.async = true;
    script.onload = () => {
      if (onLoad) onLoad();
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [onLoad]);
};

export default usePayPalScript;
