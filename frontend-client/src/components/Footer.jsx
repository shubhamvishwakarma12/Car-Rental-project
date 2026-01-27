import React from "react";
import { assets } from "../assets/assets";

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <footer className="flex flex-wrap justify-center lg:justify-between overflow-hidden gap-10 md:gap-20 py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-500 bg-black mt-7">
        <div className="flex flex-wrap items-start gap-10 md:gap-[60px] xl:gap-[140px]">
        
                    <img src={assets.logo} alt="logo"  className='h-8'/>
          

          <div>
            <p className="text-slate-100 font-semibold">Product</p>
            <ul className="mt-2 space-y-2">
              <li><a href="/" className="hover:text-indigo-600 transition">Home</a></li>
              <li><a href="/" className="hover:text-indigo-600 transition">Support</a></li>
              <li><a href="/" className="hover:text-indigo-600 transition">Pricing</a></li>
              <li><a href="/" className="hover:text-indigo-600 transition">Affiliate</a></li>
            </ul>
          </div>

          <div>
            <p className="text-slate-100 font-semibold">Resources</p>
            <ul className="mt-2 space-y-2">
              <li><a href="/" className="hover:text-indigo-600 transition">Company</a></li>
              {/* <li><a href="/" className="hover:text-indigo-600 transition">Blogs</a></li> */}
              <li><a href="/" className="hover:text-indigo-600 transition">Community</a></li>
              <li>
                <a href="/" className="hover:text-indigo-600 transition">
                  Careers
                
                </a>
              </li>
              <li><a href="/" className="hover:text-indigo-600 transition">About</a></li>
            </ul>
          </div>

          <div>
            <p className="text-slate-100 font-semibold">Legal</p>
            <ul className="mt-2 space-y-2">
              <li><a href="/" className="hover:text-indigo-600 transition">Privacy</a></li>
              <li><a href="/" className="hover:text-indigo-600 transition">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end">
          <p className="max-w-60">
            Making every customer feel valued—no matter where they are in the world. 
          </p>

          <div className="flex items-center gap-4 mt-3">
            {/* Social icons unchanged except JSX attributes */}
            {/* Dribbble, LinkedIn, Twitter, YouTube */}
          </div>

          <p className="mt-3 text-center">
            © 2026 <a href="https://prebuiltui.com">CarRental</a>
          </p>
        </div>
      </footer>
    </>
  );
}
