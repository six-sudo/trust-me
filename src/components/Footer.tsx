import React from 'react';
import Logo from '@/components/Logo';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Logo size="md" />
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
