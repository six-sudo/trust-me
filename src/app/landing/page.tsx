import FrontendLayout from '@/app/layouts/FrontendLayout';
import Image from 'next/image';
import Link from 'next/link';
import CommonButton from '@/components/CommonButton';

export default function LandingPage() {
  return (
    <FrontendLayout className="bg-white py-6 sm:py-20 md:py-24 lg:py-16 xl:py-20">
        {/* Main Content container*/}
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="space-y-8">
              {/* Headline */}
              <div className="space-y-4">
                <h1 className="text-[3.25rem] font-bold leading-tight">
                  <div className="text-blue-800">Get Free Products</div>
                  <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">Share Honest Reviews</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Join our community of reviewers, apply for mystery gigs in categories you love, and get rewarded for your authentic feedback.
                </p>
              </div>




              {/* Call-to-Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* r = reviewer, b = brand */}
                <Link href="/register/reviewer" id="become-reviewer-button">
                  <CommonButton
                    text="Become a Reviewer"
                    variant="primary"
                    size="lg"
                    shape="rounded"
                    gradient={true}
                    shadow="lg"
                    className="text-center"
                  />
                </Link>
                <CommonButton
                  text="For Brand"
                  variant="outline"
                  size="lg"
                  shape="rounded"
                  backgroundColor="#f8fafc"
                  textColor="#374151"
                  borderColor="#d1d5db"
                  hoverBackgroundColor="linear-gradient(to right, #60a5fa, #1d4ed8)"
                  hoverTextColor="#ffffff"
                  className="border border-gray-300"
                />
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-bold text-blue-800 mb-1">5000+</div>
                  <div className="text-sm text-gray-500">Active Reviewers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-500 mb-1">200+</div>
                  <div className="text-sm text-gray-500">Partner Brands</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-1">15K+</div>
                  <div className="text-sm text-gray-500">Reviews Posted</div>
                </div>
              </div>
            </div>

            {/* Right Column - Image Banner */}
            <div className="flex justify-center lg:justify-end">
              <div className="animate-scale-in w-full max-w-2xl">
                <Image
                  src="/assets/banners/mockup-banner.jpg"
                  alt="TrustMe Platform Mockup"
                  width={800}
                  height={600}
                  className="w-full rounded-2xl shadow-floating"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Why Join Trust me? Section */}
          <div className="mt-50">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Join TrustMe?</h2>
              <p className="text-xl text-gray-600">We make it easy and rewarding to share your voice.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 - Free Products & Services */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-4">Free Products & Services</h3>
                <p className="text-gray-600 leading-relaxed">
                  Apply for mystery gigs and receive products worth up to 2,000฿ based on your tier. No purchase necessary.
                </p>
              </div>

              {/* Card 2 - Earn Rewards & Level Up */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-4">Earn Rewards & Level Up</h3>
                <p className="text-gray-600 leading-relaxed">
                  Complete reviews to advance through Bronze, Silver, and Gold tiers. Unlock better rewards and exclusive opportunities.
                </p>
              </div>

              {/* Card 3 - Build Your Influence */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-4">Build Your Influence</h3>
                <p className="text-gray-600 leading-relaxed">
                  Grow your social media presence with authentic content. Connect with brands and become a recognized voice in your niche.
                </p>
              </div>
            </div>
          </div>

          {/* How It Works Section */}
          <div id="how-it-works" className="mt-40">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-xl text-gray-600">Getting started is simple and takes less than 5 minutes.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 - Sign Up */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sign Up</h3>
                <p className="text-gray-600 leading-relaxed">
                  Create your account and select your favorite categories
                </p>
              </div>

              {/* Step 2 - Get Verified */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Get Verified</h3>
                <p className="text-gray-600 leading-relaxed">
                  Complete identity verification to ensure community trust
                </p>
              </div>

              {/* Step 3 - Apply for Gigs */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Apply for Gigs</h3>
                <p className="text-gray-600 leading-relaxed">
                  Browse and apply for mystery products you want to try
                </p>
              </div>

              {/* Step 4 - Review & Earn */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Review & Earn</h3>
                <p className="text-gray-600 leading-relaxed">
                  Receive products, post honest reviews, level up your tier
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Real Reviews from Real People Section */}
        <section id="brands" className="py-20 bg-blue-900 text-white mt-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img
                  src="/assets/banners/mockup-banner-01.jpg"
                  alt="Brand review process"
                  className="w-full rounded-2xl shadow-floating"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Real Reviews from<br />Real People</h2>
                <p className="text-lg text-blue-100 mb-8">
                  Get authentic, detailed feedback and user-generated content for your brand from our curated community of engaged reviewers.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star h-5 w-5 mt-1 flex-shrink-0">
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <div>
                      <h3 className="font-semibold mb-1">Verified Reviewers</h3>
                      <p className="text-blue-100 text-sm">All reviewers are ID-verified with linked social media accounts</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-5 w-5 mt-1 flex-shrink-0">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <div>
                      <h3 className="font-semibold mb-1">Targeted Reach</h3>
                      <p className="text-blue-100 text-sm">Connect with reviewers in specific categories relevant to your product</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield h-5 w-5 mt-1 flex-shrink-0">
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    </svg>
                    <div>
                      <h3 className="font-semibold mb-1">Quality Content</h3>
                      <p className="text-blue-100 text-sm">Get high-quality photos, videos, and detailed reviews you can use</p>
                    </div>
                  </div>
                </div>
                <a href="mailto:brands@trustme.com" className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-white text-blue-900 hover:bg-blue-50 h-14 rounded-xl px-10 text-lg">
                  Learn More for Brands
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Ready to Start Reviewing Section */}
        <section id="getting-started" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Reviewing?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of reviewers who are already trying products for free and building their influence.
            </p>
            <Link href="/views/pages/register/reviewer-register">
              <CommonButton
                text="Get Started Today"
                variant="primary"
                size="lg"
                shape="rounded"
                gradient={true}
                shadow="lg"
                className="h-14 px-10"
              />
            </Link>
          </div>
        </section>
    </FrontendLayout>
  );
}
