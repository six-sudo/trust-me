import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-blue-800"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
              </div>
              <span className="font-bold text-lg text-blue-800">Trust me</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Connecting brands with authentic voices since 2024.
            </p>
          </div>

          {/* For Reviewers Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-800 text-sm">For Reviewers</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200"
                >
                  Sign Up
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200"
                >
                  Browse Gigs
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200"
                >
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          {/* For Brands Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-800 text-sm">For Brands</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200"
                >
                  Partner With Us
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-800 text-sm">Company</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            © 2024 Trust me. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
