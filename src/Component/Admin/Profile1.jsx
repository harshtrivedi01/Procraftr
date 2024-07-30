import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const ProfilePage1 = () => {
 

  return (
    <div className="bg-indigo-900 p-4 ">
      <div className="max-w-4xl mx-auto ">
        <div className="rounded-lg shadow-lg p-6 bg-indigo-800 flex flex-col md:flex-row justify-between items-center h-44">
          <div className="space-y-2 mb-6 md:mb-0 md:mr-6 md:pr-6 ">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
                alt="Profile"
                className="w-20 h-20 rounded-full mb-4 md:mb-0"
              />
              <div className="text-white">
                <h2 className="text-xl font-semibold">Ben Dexter</h2>
                <p className="">Web Developer</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ms-20">
              <div>
                <p className="text-white">📧 ben@gmail.com</p>
                <p className="text-white">📱 12345678</p>
                <p className="text-white">📍 United States, Florida</p>
              </div>
            </div>
          </div>
           
          {/* Vertical divider for larger screens */}
          <div className="hidden md:block border-[0.5px] border-gray-500 h-40"></div>
          
          <div className="flex flex-col justify-start items-start gap-4">
            <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800">
              Resume Score
            </button>
            <div className="flex flex-col md:flex-row items-center gap-2">
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                id="fileInput"
              />
              <label htmlFor="fileInput" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 cursor-pointer">
                Choose File
              </label>
              <span className="text-white ml-2">{selectedFile ? selectedFile.name : "No file chosen"}</span>
            </div>
            <button
              onClick={handleResume}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
            >
              Upload Resume
            </button>
          </div>
        </div>

        {uploadStatus && (
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">{uploadStatus}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage1;
