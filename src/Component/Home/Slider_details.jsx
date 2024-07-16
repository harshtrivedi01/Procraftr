// import React, { useState } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import image1 from '../assest/service1.jpg';
// import image2 from '../assest/service2.jpg';
// import image3 from '../assest/service3.jpg';
// import image4 from '../assest/service4.jpg';

// const images = [
//   image1,
//   image2,
//   image3,
//   image4,
// ];

// const ImageSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const nextSlide = () => {
//     const isLastSlide = currentIndex === images.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   return (
//     <>
//     <h1 className="text-center text-4xl py-5 font-bold">Explore Our AI Enabled Resume Services</h1>
//     <div className="relative flex justify-center items-center w-full md:w-[100%] h-64 md:h-[800px] mx-auto">
//       <FaArrowLeft
//         className="absolute top-1/2 left-2 md:left-28 transform -translate-y-1/2 text-blue-700 cursor-pointer z-10"
//         onClick={prevSlide}
//       />
//       <FaArrowRight
//         className="absolute top-1/2 right-2 md:right-28 transform -translate-y-1/2 text-blue-700 cursor-pointer z-10"
//         onClick={nextSlide}
//       />
//       {images.map((image, index) => (
//         <div
//           key={index}
//           className={`absolute   w-[80%]  transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
//         >
//           {index === currentIndex && (
//             <img src={image} alt={`Slide ${index}`} className="w-full h-full rounded-3xl object-cover" />
//           )}
//         </div>
//       ))}
//       <div className="absolute bottom-4 flex justify-center w-full">
//         {images.map((_, index) => (
//           <div
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'}`}
//           ></div>
//         ))}
//       </div>
//     </div>
//     </>
//   );
// };

// export default ImageSlider;


// // import React, { useState } from 'react';
// // import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// // import image1 from '../assest/service1.jpg';
// // import image2 from '../assest/service2.jpg';
// // import image3 from '../assest/service3.jpg';
// // import image4 from '../assest/service4.jpg';

// // const images = [
// //   image1,
// //   image2,
// //   image3,
// //   image4,
// // ];

// // const ImageSlider = () => {
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   const prevSlide = () => {
// //     const isFirstSlide = currentIndex === 0;
// //     const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
// //     setCurrentIndex(newIndex);
// //   };

// //   const nextSlide = () => {
// //     const isLastSlide = currentIndex === images.length - 1;
// //     const newIndex = isLastSlide ? 0 : currentIndex + 1;
// //     setCurrentIndex(newIndex);
// //   };

// //   return (
// //     <>
// //       <h1 className="text-center text-2xl md:text-4xl py-5 font-bold">Explore Our AI Enabled Resume Services</h1>
// //       <div className="relative flex justify-center items-center w-full md:w-[100%] h-64 md:h-[800px] mx-auto">
// //         <FaArrowLeft
// //           className="absolute top-1/2 left-4 md:left-28 transform -translate-y-1/2 text-blue-700 cursor-pointer z-10"
// //           onClick={prevSlide}
// //           size={30}
// //         />
// //         <FaArrowRight
// //           className="absolute top-1/2 right-4 md:right-28 transform -translate-y-1/2 text-blue-700 cursor-pointer z-10"
// //           onClick={nextSlide}
// //           size={30}
// //         />
// //         {images.map((image, index) => (
// //           <div
// //             key={index}
// //             className={`absolute w-full md:w-[80%] h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
// //           >
// //             {index === currentIndex && (
// //               <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
// //             )}
// //           </div>
// //         ))}
// //         <div className="absolute bottom-4 flex justify-center w-full">
// //           {images.map((_, index) => (
// //             <div
// //               key={index}
// //               onClick={() => setCurrentIndex(index)}
// //               className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'}`}
// //             ></div>
// //           ))}
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default ImageSlider;


import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import image1 from '../assest/service1.jpg';
import image2 from '../assest/service2.jpg';
import image3 from '../assest/service3.jpg';
import image4 from '../assest/service4.jpg';

const images = [
  image1,
  image2,
  image3,
  image4,
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const autoPlay = setInterval(() => {
      nextSlide();
    }, 2000); // Change slide every 3 seconds

    return () => {
      clearInterval(autoPlay);
    };
  }, [currentIndex]);

  return (
    <>
      <h1 className="text-center text-4xl py-5 font-bold">Explore Our AI Enabled Resume Services</h1>
      <div className="relative flex justify-center items-center w-full md:w-[100%] h-64 md:h-[800px] mx-auto">
        <FaArrowLeft
          className="absolute top-1/2 left-2 md:left-28 transform -translate-y-1/2 text-blue-700 cursor-pointer z-10"
          onClick={prevSlide}
        />
        <FaArrowRight
          className="absolute top-1/2 right-2 md:right-28 transform -translate-y-1/2 text-blue-700 cursor-pointer z-10"
          onClick={nextSlide}
        />
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-[80%] transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            {index === currentIndex && (
              <img src={image} alt={`Slide ${index}`} className="w-full h-full rounded-3xl object-cover" />
            )}
          </div>
        ))}
        <div className="absolute bottom-4 flex justify-center w-full">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'}`}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
