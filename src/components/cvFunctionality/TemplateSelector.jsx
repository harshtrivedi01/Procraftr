// import React, { useState } from 'react';

// // Import images using relative paths and Webpack's require context
// const templates = [
//   { id: 'Template1', name: 'Template 1', image: require('../cvFunctionality/templateimages/template1.png').default },
//   { id: 'Template2', name: 'Template 2', image: require('../cvFunctionality/templateimages/template2.png').default },
//   { id: 'Template3', name: 'Template 3', image: require('../cvFunctionality/templateimages/template6.png').default },
//   { id: 'Template4', name: 'Template 4', image: require('../cvFunctionality/templateimages/template4.png').default },
//   { id: 'Template5', name: 'Template 5', image: require('../cvFunctionality/templateimages/template5.png').default },
//   { id: 'Template6', name: 'Template 6', image: require('../cvFunctionality/templateimages/template3.png').default },
//   { id: 'Template7', name: 'Template 7', image: require('../cvFunctionality/templateimages/template7.png').default },
//   { id: 'Template8', name: 'Template 8', image: require('../cvFunctionality/templateimages/template8.png').default },
//   { id: 'Template9', name: 'Template 9', image: require('../cvFunctionality/templateimages/template9.png').default },
//   { id: 'Template10', name: 'Template 10', image: require('../cvFunctionality/templateimages/template10.png').default }
// ];

// const TemplateSelector = ({ selectedTemplate, setSelectedTemplate,onImageUpload  }) => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [uploadedImage, setUploadedImage] = useState(null);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };
//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     setUploadedImage(file);
//     onImageUpload(file); // Call the onImageUpload prop with the uploaded image
//   };

//   return (
//     <div className="">
//       <button
//         onClick={toggleDropdown}
//         className="text-black border-blue-950 border-2 rounded font-bold p-2 w-full"
//       >
//        Select Templates 
//       </button>

//       {dropdownOpen && (
//         <div className="h-60 z-10 bg-white border rounded-lg shadow-lg mt-2 p-4 overflow-auto">
//           <div className="grid grid-cols-2 gap-4 overflow-auto">
//             {templates.map(template => (
//               <div
//                 key={template.id}
//                 className={`border-2 cursor-pointer ${
//                   selectedTemplate === template.id ? 'border-blue-950 bg-blue-200' : 'border-gray-300 bg-white'
//                 }`}
//                 onClick={() => {
//                   setSelectedTemplate(template.id);
//                   setDropdownOpen(false); // Close dropdown after selection
//                 }}
//               >
//                 <img src={template.image} alt={template.name} className="w-full h-36 object-cover rounded-lg" />
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TemplateSelector;


import React, { useState } from 'react';
import template1Image from '../cvFunctionality/templateimages/template1.png';
import template2Image from '../cvFunctionality/templateimages/template2.png';
import template3Image from '../cvFunctionality/templateimages/template3.png';
import template4Image from '../cvFunctionality/templateimages/template4.png';
import template5Image from '../cvFunctionality/templateimages/template5.png';
import template6Image from '../cvFunctionality/templateimages/template6.png';
import template7Image from '../cvFunctionality/templateimages/template7.png';
import template8Image from '../cvFunctionality/templateimages/template8.png';
import template9Image from '../cvFunctionality/templateimages/template9.png';
import template10Image from '../cvFunctionality/templateimages/template10.png';

const templates = [
  { id: 'Template1', name: 'Template 1', image: template1Image },
  { id: 'Template2', name: 'Template 2', image: template2Image },
  { id: 'Template3', name: 'Template 3', image: template3Image },
  { id: 'Template4', name: 'Template 4', image: template4Image },
  { id: 'Template5', name: 'Template 5', image: template5Image },
  { id: 'Template6', name: 'Template 6', image: template6Image },
  { id: 'Template7', name: 'Template 7', image: template7Image },
  { id: 'Template8', name: 'Template 8', image: template8Image },
  { id: 'Template9', name: 'Template 9', image: template9Image },
  { id: 'Template10', name: 'Template 10', image: template10Image }
];

const TemplateSelector = ({ selectedTemplate, setSelectedTemplate, onImageUpload }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setUploadedImage(file);
    onImageUpload(file); // Call the onImageUpload prop with the uploaded image
  };

  return (
    <div className="">
      <button
        onClick={toggleDropdown}
        className="text-black border-blue-950 border-2 rounded font-bold p-2 w-full"
      >
        Select Templates
      </button>

      {dropdownOpen && (
        <div className="h-60 z-10 bg-white border rounded-lg shadow-lg mt-2 p-4 overflow-auto">
          <div className="grid grid-cols-2 gap-4 overflow-auto">
            {templates.map(template => (
              <div
                key={template.id}
                className={`border-2 cursor-pointer ${
                  selectedTemplate === template.id ? 'border-blue-950 bg-blue-200' : 'border-gray-300 bg-white'
                }`}
                onClick={() => {
                  setSelectedTemplate(template.id);
                  setDropdownOpen(false); // Close dropdown after selection
                }}
              >
                <img src={template.image} alt={template.name} className="w-full h-36 object-cover rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Optional: File upload input for image selection */}
      <input type="file" accept="image/*" onChange={handleImageChange} />

      {/* Optional: Display uploaded image */}
      {uploadedImage && (
        <div className="mt-4">
          <h3>Uploaded Image Preview:</h3>
          <img src={URL.createObjectURL(uploadedImage)} alt="Uploaded" className="w-full h-auto max-h-36 object-cover rounded-lg" />
        </div>
      )}
    </div>
  );
};

export default TemplateSelector;
