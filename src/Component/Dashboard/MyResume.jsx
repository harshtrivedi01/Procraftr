import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyResume = () => {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios.get('https://api.perfectresume.ca/api/user/resume-list', {
      headers: {
        Authorization: `${token}`
      }
    })
      .then(response => {
        console.log(response.data.resumelist);
        setResumes(response.data.resumelist);
      })
      .catch(error => console.error('Error fetching resume list:', error));
  }, []);

  return (
    <div className="container mx-auto p-4 text-center" >
      <div className="overflow-x-auto">
        <table className="min-w-full bg-dark text-black rounded-md">
          <thead>
            <tr>
              <th className="py-2 px-4">Resume</th>
              <th className="py-2 px-4">Score</th>
              <th className="py-2 px-4">Improve with AI</th>
              <th className="py-2 px-4">Created</th>
              <th className="py-2 px-4">Actions</th>
              <th className="py-2 px-4">JD Match %</th>
            </tr>
          </thead>
          <tbody>
            {resumes.map((resume, index) => (
              <tr key={index} className="border-t border-gray-700">
                <td className="py-2 px-4">{resume.name}</td>
                <td className="py-2 px-4">
                  <button className="bg-yellow-500 text-black py-1 px-3 rounded">Resume Score</button>
                </td>
                <td className="py-2 px-4">
                  <button className="bg-yellow-500 text-white py-1 px-3 rounded">AI</button>
                </td>
                <td className="py-2 px-4">{new Date(resume.created_at).toLocaleDateString()}</td>
                <td className="py-2 px-4">
                  <div className="flex items-center space-x-2">
                    <button className="text-black">
                      <i className="fas fa-upload"></i>
                    </button>
                    <button className="text-black">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="text-black">
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </td>
                <td className="py-2 px-4">{resume.ai_resume_score_percentage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyResume;
