import React from 'react';
import './Footer.css';
import logo from './logo.jpg'

const Footer = () => {
    return (
      <>
      
        <footer className=" bg-black text-white py-8" id='footerbg'>
            <div className="container mx-auto flex flex-col gap-7 justify-between px-6">
              <div className=' flex flex-wrap justify-between px-2 md:px-[65px]'>
                <div className=" md:w-auto mb-6 md:mb-0">
                    <img src={logo} className=' h-14 w-full'/>
                    <p className=' text-lg text-bold px-5'>Building Careers of Tomorrow</p>
                </div>
                <div className="w-full md:w-auto mb-6 md:mb-0">
                    <h2 className="text-lg font-semibold text-white">Get Our Weekly</h2>
                    <form className="flex flex-col md:flex-row gap-3">
                        <input type="email" placeholder="Type your email..." required className="p-2  rounded" />
                        <button type="submit" className="md:px-4 md:py-1 p-1 rounded-full bg-white text-black hover:bg-orange-500">Subscribe</button>
                    </form>
                </div>
                </div>
                <br/>
                <div className=' flex flex-wrap justify-around'>
                <div className="w-full md:w-auto mb-6 md:mb-0" id='footer'>
                    <h2 className="text-lg font-bold text-white">Perfect Resume</h2>
                    <ul>
                        <li><a href="#" className="">About Us</a></li>
                        <li><a href="#" className="">Careers</a></li>
                        <li><a href="#" className="">Placement Support</a></li>
                        <li><a href="#" className="">Resources</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-auto mb-6 md:mb-0">
                    <h2 className="text-lg font-bold text-white">Support</h2>
                    <ul>
                        <li><a href="#" className="">Contact</a></li>
                        <li><a href="#" className="">Salary Tool</a></li>
                        <li><a href="#" className="">Grievance Redressal</a></li>
                        <li><a href="#" className="">Terms & Conditions</a></li>
                        <li><a href="#" className="">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-auto mb-6 md:mb-0">
                    <h2 className="text-lg font-bold text-white">Scope & Products</h2>
                    <ul>
                        <li><a href="#" className="">Ai Resume Builder</a></li>
                        <li><a href="#" className="">Ai Skill Tests</a></li>
                        <li><a href="#" className="">Ai CV Parsing</a></li>
                        <li><a href="#" className="">White Labelling</a></li>
                        <li><a href="#" className="">Generative AI</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-auto mb-6 md:mb-0">
                    <h2 className="text-lg font-bold text-white">Ai Resources</h2>
                    <ul>
                        <li><a href="#" className="">Ai - Resume Accuracy</a></li>
                        <li><a href="#" className="">Ai - Resume Enhancer</a></li>
                        <li><a href="#" className="">Ai - Job Match & Apply</a></li>
                        <li><a href="#" className="">Verified Jobs</a></li>
                        <li><a href="#" className="">Verified Profiles</a></li>
                        <li><a href="#" className="">& Much More</a></li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="container text-base md:mx-auto text-center border-t border-white pt-6 mt-6">
                <p className="text-white text-right">&copy; Copyright By PerfectResume.ca All Rights Reserved</p>
            </div>
        </footer>
        </>
    );
}

export default Footer;
