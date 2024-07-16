import React, { useState } from 'react';
import Formheader from '../forms/Formheader';

function Summary({ summary = [], handleInputChange }) {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

 
  return (
    <>
      <div className="font-thin ">
       
        {summary.map((sum, index) => (
          <div key={index} className="flex  mt-10 justify-center">
            <div className="m-2 px-10 flex gap-3 w-3/">
              <div className="">
                
               
                <div className="flex justify-between font-bold text-lg my-4">
                  <h1 className='text-xl'>Professional Summary</h1>
                  <div>
                    <button className="font-bold text-lg flex items-center" onClick={toggleSearch}>
                      <svg
                        className="h-5 w-5 text-white bg-black rounded-full m-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <line x1="9" y1="12" x2="15" y2="12" stroke="white" />
                        <line x1="12" y1="9" x2="12" y2="15" stroke="white" />
                      </svg>
                      <h3>AI - Assist</h3>
                    </button>
                    {showSearch && (
                      <div className="flex mt-2 w-96 p-2 h-20 bg-white border border-gray-300 rounded-lg shadow-2xl z-10 gap-2">
                        {/* Search input with magnifying glass */}
                        <div className="relative">
                          <input
                            type="text"
                            className="block w-full pl-8 pr-4 py-2 text-sm focus:outline-none  "
                          />
                          <svg
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path
                              d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.98-5-5.98-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 3 2.56 5.51 5.34 5.98a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                            />
                          </svg>
                        </div>

                        <button
                          type="button"
                          className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                        >
                          Get Results
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div className="my-4  mb-10 font-normal">
                  Write 2-5 Sentences that highlight the value you can provide to a team and organization. Mention your previous role, experience & most importantly - your biggest achievements, best qualities, and skills
                </div>
                <input
                  type="text"
                  name="summarydescription"
                  value={sum.summarydescription}
                  onChange={(e) => handleInputChange(e, index, 'summary')}
                  className="w-full h-40 p-2 mb-4 border border-black rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Summary;

