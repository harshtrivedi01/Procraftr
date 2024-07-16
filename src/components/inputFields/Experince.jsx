import React, { useState, useEffect } from 'react';

const Experience = ({ experiences = [], handleInputChange, addExperience, deleteExperience,handleKeyPress }) => {
  const [isCurrentlyWorking, setIsCurrentlyWorking] = useState(false);
  const [isExperienceComplete, setIsExperienceComplete] = useState(false);

  useEffect(() => {
    checkExperienceCompletion();
  }, [experiences]);

  const checkExperienceCompletion = () => {
    const complete = experiences.every(exp => 
      exp.Company && 
      exp.role && 
      exp.month1 && 
      (exp.month2 || isCurrentlyWorking) && 
      exp.companydescription
    );
    setIsExperienceComplete(complete);
  };
   // Function to handle changes in the company description field
   const handleDescriptionChange = (e, index) => {
    const { value } = e.target;

    // Replace carriage return (\r) characters with newline (\n) characters
    const formattedValue = value.replace(/\r/g, '\n');

    // Call the parent component's handleInputChange function with the updated value
    handleInputChange({ target: { name: 'companydescription', value: formattedValue } }, index, 'experiences');
  };

  return (
    <div className='mt-4'>
      <div className="px-20 w-full">
        {experiences.map((exp, index) => (
          <div key={index} className="flex mt-4">
            <div className="w-full">
            <h6 className='font-bold text-xs my-10 '>* indicates a required field</h6>
              <div className="flex gap-6">
                <div className="w-3/4">
                  <label htmlFor="Company" className="block text-sm font-medium text-gray-700 mb-2">
                    Who Did You Do This For?
                  </label>
                  <input 
                    type="text" 
                    name="Company" 
                    value={exp.Company}
                    onChange={(e) => handleInputChange(e, index, 'experiences')}
                    placeholder="Company Name" 
                    className="w-full p-3 mb-4 border border-black rounded-lg"
                  />
                </div>
                <div className="w-3/4">
                  <label htmlFor="role" className="block text-sm font-medium font-medium mb-2">
                    What Was Your Title? *
                  </label>
                  <input 
                    type="text" 
                    name="role" 
                    value={exp.role}
                    onChange={(e) => handleInputChange(e, index, 'experiences')}
                    placeholder="Role" 
                    className="w-full p-3 mb-4 border border-black rounded-lg"
                    required
                  />
                </div>
              </div>

              <div className="flex gap-2 w-1/3 pe-2">
                <div className="w-3/4">
                  <label htmlFor="month1" className="block text-sm font-medium text-gray-700 mb-2">
                    Start Date: 
                  </label>
                  <input 
                    type="month" 
                    name="month1" 
                    value={exp.month1}
                    onChange={(e) => handleInputChange(e, index, 'experiences')}
                    className="w-full p-3 mb-4 border border-black rounded-lg"
                  /> 
                </div>

                <div className="w-3/4">
                  <label htmlFor="month2" className="block text-sm font-medium text-gray-700 mb-2">
                    End Date: 
                  </label>
                  <input 
                    type="month" 
                    name="month2" 
                    value={exp.month2}
                    onChange={(e) => handleInputChange(e, index, 'experiences')}
                    disabled={isCurrentlyWorking}
                    className="w-full p-3 mb-4 border border-black rounded-lg"
                  />
                </div>
              </div>

              <input
  type="checkbox" 
  id={`currentlyWorking${index}`}
  checked={isCurrentlyWorking}
  onChange={() => {
    setIsCurrentlyWorking(!isCurrentlyWorking);
    // If the user is currently working, set month2 to "Present", else keep it empty
    handleInputChange(
      { target: { name: "month2", value: isCurrentlyWorking ? "" : "Present" } },
      index,
      "experiences"
    );
  }}
  className="mr-2 mb-4"
/> Currently Working

<div className="w-3/4">

  <label htmlFor="companyplace" className="block text-sm  text-gray-900 mb-2 font-semibold">
  Company Location 
        </label>
        <input 
          type="text" 
          name="companyplace" 
          value={exp.companyplace}
              onChange={(e) => handleInputChange(e, index, 'experiences')}
          placeholder="e.g. Delhi, India" 
          className="w-full p-3 mb-4 border border-black rounded-lg"
        />
        
  </div>

              <div className="flex justify-between text-lg my-2">
                <h3>Description</h3>
                <h3>AI - Assist</h3>
              </div>
                 <textarea 
                name="companydescription"
                value={exp.companydescription}
                onChange={(e) => handleDescriptionChange(e, index)}
                className="w-full h-40 p-2 mb-4 border border-black rounded-lg"
              />
              <button
                type="button"
                onClick={() => deleteExperience(index)}
                className="mt-2 text-red-500"
              >
                Delete Experience
              </button>
            </div>
          </div>
        ))}
        <button className="font-bold text-lg flex items-center" onClick={addExperience}>
          <h3>Add Item</h3>
          <svg className="h-5 w-5 text-white bg-black rounded-full m-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z"/>
            <line x1="9" y1="12" x2="15" y2="12" stroke="white" />
            <line x1="12" y1="9" x2="12" y2="15" stroke="white" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Experience;
