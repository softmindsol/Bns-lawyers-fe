import React from 'react';
import { BiMenu, BiUser } from 'react-icons/bi';

const Navbar = () => {
  return (
    <nav className="conteiner rounded-md  bg-white shadow-md my-4 mx-8 border-gray-200 px-4 py-2">
      <div className="flex items-center justify-between">
        {/* Left side menu button */}
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <BiMenu className="h-5 w-5 text-gray-600" />
        </button>

        {/* Right side items */}
        <div className="flex items-center space-x-4">
          {/* Info circle icon */}
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <div className="w-5 h-5 rounded-full border-2 border-gray-600 flex items-center justify-center">
              <span className="text-gray-600 text-sm font-semibold">i</span>
            </div>
          </button>

          {/* Share icon */}
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </button>

          {/* Form icon */}
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </button>

          {/* User profile */}
          <button className="p-1 hover:bg-gray-100 rounded-full">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <BiUser className="h-5 w-5 text-gray-600" />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;