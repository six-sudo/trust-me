import FrontendLayout from '@/app/layouts/FrontendLayout';
import Link from 'next/link';

export default function RegisterSelection() {
  return (
    <FrontendLayout className="bg-white py-6 sm:py-20 md:py-24 lg:py-16 xl:py-20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Join Trust Me
            </h1>
            <p className="text-xl text-gray-600">
              Choose how you'd like to participate in our community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Reviewer Registration Card */}
            <Link href="/register/reviewer" className="group">
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-blue-200">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Join as a Reviewer
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Get free products and share honest reviews with our community
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4 text-left">
                    <p className="text-sm text-blue-800 font-medium mb-2">What you'll get:</p>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Free products to review</li>
                      <li>• Build your reviewer reputation</li>
                      <li>• Connect with brands</li>
                      <li>• Earn rewards for quality reviews</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Link>

            {/* Brand Registration Card */}
            <Link href="/register/brand" className="group">
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-green-200">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Join as a Brand
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Connect with reviewers and promote your products through authentic reviews
                  </p>
                  <div className="bg-green-50 rounded-lg p-4 text-left">
                    <p className="text-sm text-green-800 font-medium mb-2">What you'll get:</p>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Access to quality reviewers</li>
                      <li>• Authentic product reviews</li>
                      <li>• Increased brand visibility</li>
                      <li>• Detailed analytics and insights</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </FrontendLayout>
  );
}
