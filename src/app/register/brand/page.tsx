import FrontendLayout from '@/app/layouts/FrontendLayout';

export default function BrandRegister() {
  return (
    <FrontendLayout className="bg-white py-6 sm:py-20 md:py-24 lg:py-16 xl:py-20">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Join as a Brand
              </h1>
              <p className="text-xl text-gray-600">
                Connect with reviewers and promote your products through authentic reviews
              </p>
            </div>
            
            {/* Registration Form Placeholder */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Brand Registration Form
                </h2>
                <p className="text-gray-600 mb-8">
                  Registration form will be implemented here
                </p>
                <div className="bg-gray-50 rounded-lg p-6 text-gray-500">
                  <p>Form fields will include:</p>
                  <ul className="mt-4 space-y-2 text-left">
                    <li>• Company Information</li>
                    <li>• Business Contact Details</li>
                    <li>• Product Categories</li>
                    <li>• Marketing Budget</li>
                    <li>• Target Audience</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </FrontendLayout>
  );
}
