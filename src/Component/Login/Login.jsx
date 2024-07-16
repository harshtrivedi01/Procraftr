// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import logo from "./logo.jpg";
// import toast from "react-hot-toast";
// import Modal from "./Modal";
// import Signup from "./Signup";
// import axios from "axios";
// import "./Login.css"; 

// function Login() {
//   const [isThirdstepOpen, setThirdstepOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };


//   // const handleLogin =async (e)=>{
//   //   e.preventDefault()

//   //   if(!formData.email || !formData.password){
//   //      console.log("Email and Password are Required")
//   //      toast.error("Email and Password are Required")
//   //   }

//   //   try {
//   //      axios.post("https://api.perfectresume.ca/api/user/auth/login")
//   //      .then((Response)=>{
//   //         console.log(Response)
//   //         if(Response.status === 200){
//   //           toast.success("Login successfully")
//   //           navigate('/dashboard')
//   //         }
//   //         else{
//   //           toast.error("Failed to Login");
//   //           console.log(error)
//   //         }
//   //      }).catch((error)=>{console.log(error)})
//   //   } catch (error) {

//   //   }
//   // }

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!formData.email || !formData.password) {
//       console.log("Email and Password are Required");
//       toast.error("Email and Password are Required");
//       return;
//     }
//     console.log(formData)

//     try {
//       const response = await axios.post(
//         // `https://api.novajobs.us/api/jobseeker/auth/login`,
//         'https://api.perfectresume.ca/api/user/auth/login',
//         formData,
//       );

//       console.log(response);

//       if (response.status === 200) {
//         toast.success("Login successfully");
//         navigate("/dashboard");
//       } else {
//         toast.error("Failed to Login");
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.response?.data?.message || "An error occurred");
//     }
//   };

//   return (
//     <>
//       <div className="p-8 rounded-xl shadow-lg shadow-slate-700 w-full max-w-lg">
//         <div>
//           <img src={logo} className="w-20 h-10" alt="Logo" />
//         </div>
//         <div className="text-2xl text-black text-center font-bold align-middle">
//           Welcome Back
//         </div>
//         <p className="text-black text-base mb-6">
//           People across the globe are joining us to upgrade their career with
//           our Robust AI.
//         </p>
//         <form onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label className="block text-black">Email ID</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border rounded-md"
//               placeholder="Enter your email ID"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-black">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border rounded-md"
//               placeholder="Enter your password"
//             />
//           </div>

//           <button
//             type="button"
//             className="text-blue-300 hover:text-yellow-300 text-center py-2"
//             onClick={() => setThirdstepOpen(true)}
//           >
//             New User? Create Account
//           </button>
//           <div className="text-center py-2">
//             <label className="text-black">Forgot Password?</label>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-yellow-500 text-black px-4 py-2 rounded-md"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//       <Modal isOpen={isThirdstepOpen} onClose={() => setThirdstepOpen(false)}>
//         <Signup />
//       </Modal>
//     </>
//   );
// }

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./logo.jpg";
import toast from "react-hot-toast";
import Modal from "./Modal";
import Signup from "./Signup";
import axios from "axios";
import "./Login.css";

function Login() {
  const [isThirdstepOpen, setThirdstepOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Email and Password are Required");
      return;
    }

    try {
      const response = await axios.post(
        'https://api.perfectresume.ca/api/user/auth/login',
        formData,
      );

      if (response.status === 200) {
        toast.success("Login successfully");
        console.log(response)
        console.log("Token", response.data.data.token)
        localStorage.setItem("token",response.data.data.token)
        navigate("/dashboard");
      } else {
        toast.error("Failed to Login");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen w-full">
        <div className="p-8 rounded-xl shadow-lg shadow-slate-700 w-full max-w-lg bg-white">
          <div className="flex justify-center mb-6">
            <img src={logo} className="w-20 h-10" alt="Logo" />
          </div>
          <div className="text-2xl text-black text-center font-bold mb-4">
            Welcome Back
          </div>
          <p className="text-black text-base text-center mb-6">
            People across the globe are joining us to upgrade their career with our Robust AI.
          </p>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-black mb-2">Email ID</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your email ID"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="text-center py-2">
              <button
                type="button"
                className="text-blue-500 hover:text-yellow-500"
                onClick={() => setThirdstepOpen(true)}
              >
                New User? Create Account
              </button>
            </div>
            <div className="text-center py-2">
              <label className="text-black cursor-pointer">Forgot Password?</label>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <Modal isOpen={isThirdstepOpen} onClose={() => setThirdstepOpen(false)}>
        <Signup />
      </Modal>
    </>
  );
}

export default Login;

  