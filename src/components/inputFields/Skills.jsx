import React from 'react';

const Skills = ({ skills = [], handleInputChange, addSkill, deleteSkill ,selectedTemplate,setSelectedTemplate}) => {
  return (
    <div className="mt-10 px-20">
      
      {skills.map((skill, index) => (
        <div key={index} className=" mt-4">
         
         <div className="flex gap-6">
  <div className="w-3/4">

  <label htmlFor="skillname" className="block text-sm font-medium text-gray-700 mb-2">
  Skill Name 
        </label>
        <input 
          type="text" 
          name="skillname" 
         value={skill.skillname}
              onChange={(e) => handleInputChange(e, index, 'skills')}
          placeholder="skill name " 
          className="w-full p-3 mb-4 border border-black rounded-lg"
        />
  </div>

  <div className="w-3/4">

  <label htmlFor="skilldetails" className="block text-sm font-medium text-gray-700 mb-2">
  Skill Details 
        </label>
        <input 
          type="text" 
          name="skilldetails" 
          value={skill.skilldetails}
              onChange={(e) => handleInputChange(e, index, 'skills')}
          placeholder="skill details " 
          className="w-full p-3 mb-4 border border-black rounded-lg"
        />
       
        
  </div>


</div>


            <button
              type="button"
              onClick={() => deleteSkill(index)}
              className="mt-2 text-red-500"
            >
              Delete Skill
            </button>
          
        </div>
      ))}
      <button className="font-bold text-lg flex items-center" onClick={addSkill}>
                <h3>Add Item</h3>
                <svg className="h-5 w-5 text-white bg-black rounded-full m-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="none" d="M0 0h24v24H0z"/>
                  <line x1="9" y1="12" x2="15" y2="12" stroke="white" />
                  <line x1="12" y1="9" x2="12" y2="15" stroke="white" />
                  </svg>
            </button>
    </div>
  );
};

export default Skills;
