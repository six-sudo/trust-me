import FrontendLayout from '@/app/layouts/FrontendLayout';

export default function ReviewerRegister() {
  return (
    <FrontendLayout className="bg-white py-6 sm:py-20 md:py-24 lg:py-16 xl:py-20">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Join as a Reviewer
              </h1>
              <p className="text-xl text-gray-600">
                Start your journey to get free products and share honest reviews
              </p>
            </div>
            
            {/* Registration Form Placeholder */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Reviewer Registration Form
                </h2>
                <p className="text-gray-600 mb-8">
                  Registration form will be implemented here
                </p>
                <div className="bg-gray-50 rounded-lg p-6 text-gray-500">
                  <p>Form fields will include:</p>
                  <ul className="mt-4 space-y-2 text-left">
                    <li>• Personal Information</li>
                    <li>• Contact Details</li>
                    <li>• Social Media Accounts</li>
                    <li>• Preferred Categories</li>
                    <li>• Review Experience</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </FrontendLayout>
  );
}
