import React from 'react';


const Footer = () => {
  return (
    <footer className="relative py-20 flex flex-col items-center bg-cyan-900 overflow-hidden md:py-40">
      <div className="relative z-[1] container m-auto px-6 md:px-12">
        <div className="m-auto md:w-10/12 lg:w-8/12 xl:w-6/12">
          <div className="flex flex-wrap items-center justify-between md:flex-nowrap">
            <div className="w-full space-x-12 flex justify-center text-gray-300 sm:w-7/12 md:justify-start">
              <ul className="list-disc list-inside space-y-8">
                <li><a href="#" className="hover:text-sky-400 transition">Home</a></li>
                <li><a href="#" className="hover:text-sky-400 transition">About</a></li>
                <li><a href="#" className="hover:text-sky-400 transition">Guide</a></li>
                <li><a href="#" className="hover:text-sky-400 transition">Blocks</a></li>
                <li><a href="#" className="hover:text-sky-400 transition">Contact</a></li>
                <li><a href="#" className="hover:text-sky-400 transition">Terms of Use</a></li>
              </ul>

              <ul role="list" className="space-y-8">
                <li>
                  <a href="#" className="flex items-center space-x-3 hover:text-sky-400 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59..."/>
                    </svg>
                    <span>Github</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-3 hover:text-sky-400 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282..."/>
                    </svg>
                    <span>Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-3 hover:text-sky-400 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11..."/>
                    </svg>
                    <span>YouTube</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-3 hover:text-sky-400 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05..."/>
                    </svg>
                    <span>Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-3 hover:text-sky-400 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
                      <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5..."/>
                    </svg>
                    <span>Medium</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-3 hover:text-sky-400 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048..."/>
                    </svg>
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-3 hover:text-sky-400 transition">
                    <img className="w-5 h-5" src="https://c5.patreon.com/external/favicon/favicon.ico?v=69kMELnXkB" alt="patreon icon"/>
                    <span>Patreon</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-10/12 m-auto mt-16 space-y-6 text-center sm:text-left sm:w-5/12 sm:mt-auto">
              <span className="block text-gray-300">We change the way UI components libraries are used</span>
              <span className="block text-gray-300">Tailus Blocks &copy; 2021</span>
              <span className="flex justify-between text-white"> 
                <a href="#" className="font-semibold">Terms of Use</a>
                <a href="#" className="font-semibold">Privacy Policy</a>
              </span>
              <span className="block text-gray-300">Need help? <a href="#" className="font-semibold text-white">Contact Us</a></span>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute h-full inset-0 flex items-center">
        <div aria-hidden="true" className="bg-layers bg-scale w-56 h-56 m-auto blur-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full md:w-[30rem] md:h-[30rem] md:blur-3xl"></div>
      </div>
      <div aria-hidden="true" className="absolute inset-0 w-full h-full bg-[#020314] opacity-80"></div>
    </footer>
  );
};

export default Footer;
