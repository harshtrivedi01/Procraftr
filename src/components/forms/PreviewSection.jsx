import React, { useState,useEffect } from 'react';
import PdfDownloadButton from '../forms/PdfDownloadButton';
import CVGenerator from '../forms/CVGenerator';
import FunctionalityOfCV from './FunctionalityOfCV';
import TemplateComponent from './templateComponent';
import Footer from '../Footer';
import FontSelector from '../cvFunctionality/FontSelector';
import ColorButtons from '../cvFunctionality/ColorButtons';



const PreviewSection = ({ cvRef, handlePrint, setIsPreviewing, formData, isSaving,predefinedText,
   selectedTemplate, handleSectionInputChange, addSectionAdd, deleteSectionAdd, setSelectedTemplate,selectedFont, setSelectedFont,
   boxBgColor,setBoxBgColor }) => {
  

  const [textSize, setTextSize] = useState(2);
  const [sectionSpacing, setSectionSpacing] = useState(2);
  const [paragraphSpacing, setParagraphSpacing] = useState(2);
  const [lineSpacing, setLineSpacing] = useState(1.5);
  const [isPreviewScreen, setIsPreviewScreen] = useState(true);


  return (
    <div className='h- justify-center '>
      <div className='flex justify-end border-2 p-1 bg-slate-300 '>
        <button
          onClick={() => setIsPreviewing(false)}
          className="bg-white text-blue-800 border-blue-800 border-2 px-8 py-1 m-1 me-5 rounded-full font-bold "
        >
          Back
        </button>
      </div>
      <div className='px-10 mt-7 ms-36'>
        <h1 className='text-3xl font-bold mb-3 '>Review your resume</h1>
        <h1 className='text-lg'>Review and make any final changes to your resume, then download or email yourself a copy and apply for jobs!</h1>
      </div>
      <div className='flex justify-center mb-40'>
        <div className="w-3/6 pt-10   overflow-auto mb-10">
          <TemplateComponent
            ref={cvRef}
            data={formData}
            selectedTemplate={selectedTemplate}
            selectedFont={selectedFont}
            textSize={textSize}
            sectionSpacing={sectionSpacing}
            paragraphSpacing={paragraphSpacing}
            lineSpacing={lineSpacing}
            boxBgColor={boxBgColor}
            isPreviewScreen={isPreviewScreen}
            predefinedText={predefinedText} 
          />
          {/* Render Additional Sections Input Fields */}
        </div>
        <div className='py-9 w-1/4'>
          <div className='flex justify-around'>
            <div className="justify-end mt-4">
              <PdfDownloadButton targetRef={cvRef} />
            </div>
            <div className='mt-4'>
              <button
                onClick={handlePrint}
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-blue-500 rounded-lg group bg-blue-800 group-hover:bg-blue-950 border hover:text-white dark:text-blue focus:ring-2 focus:outline-none focus:ring-blue-100 dark:focus:ring-blue-100"
              >
                <span className="relative px-9 py-5 transition-all ease-in duration-75 bg-white dark:bg-gray-100 rounded-md group-hover:bg-opacity-0 font-bold">
                  Print
                </span>
              </button>
            </div>
          </div>
          <button type="button" className="ms-5 mt-5 mb-10 text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-bold rounded-full px-28 py-3 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 ">
            Finish Resume
          </button>
         
          <FunctionalityOfCV
            selectedTemplate={selectedTemplate}
            setSelectedTemplate={setSelectedTemplate}
            selectedFont={selectedFont}
            setSelectedFont={setSelectedFont}
            textSize={textSize}
            setTextSize={setTextSize}
            sectionSpacing={sectionSpacing}
            setSectionSpacing={setSectionSpacing}
            paragraphSpacing={paragraphSpacing}
            setParagraphSpacing={setParagraphSpacing}
            lineSpacing={lineSpacing}
            setLineSpacing={setLineSpacing}
            setBoxBgColor={setBoxBgColor} 
          />
         

          <div className="additional-sections ">
            {formData.sectionadd.map((section, index) => (
              <div key={index} className="additional-section ms-5 mb-2 border-2 rounded p-2">
                <div className="flex gap-1">
                  <div className="w-3/4">
                    <label htmlFor="sectiontitle" className="block text-sm font-medium text-gray-700 mb-2">
                      Title
                    </label>
                    <input
                      type="text"
                      name="sectiontitle"
                      value={section.sectiontitle}
                      onChange={(e) => handleSectionInputChange(e, index, 'sectionadd')}
                      placeholder="Section title"
                      className="w-full p-2 mb-4 border border-black rounded-lg"
                    />
                  </div>
                  <div className="w-3/4">
                    <label htmlFor="sectionname" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="sectionname"
                      value={section.sectionname}
                      onChange={(e) => handleSectionInputChange(e, index, 'sectionadd')}
                      placeholder="Section Name"
                      className="w-full p-2 border border-black rounded-lg"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label htmlFor="sectiondescription" className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <input
                    type="text"
                    name="sectiondescription"
                    value={section.sectiondescription}
                    onChange={(e) => handleSectionInputChange(e, index, 'sectionadd')}
                    placeholder="Section description"
                    className="w-full p-2 mb-4 border border-black rounded-lg"
                  />
                </div>
                <button type="button" onClick={() => deleteSectionAdd(index)} className="mt-2 text-red-500">
                  Delete Section
                </button>
              </div>
            ))}
            <button className="font-bold text-lg flex items-center p-2 px- ms-5 border-2 border-black rounded" onClick={addSectionAdd}>
              <h3>+ Add Section</h3>
            </button>
          </div>
        </div>
      </div>
      
    
    </div>
    
  );
};

export default PreviewSection;
