'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, 
  faEnvelope, 
  faLock, 
  faCheckCircle, 
  faExclamationCircle, 
  faEye, 
  faEyeSlash,
  faSignInAlt
} from '@fortawesome/free-solid-svg-icons';
import CommonButton from '@/components/CommonButton';
import Footer from '@/components/Footer';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Login data:', formData);
      // Handle successful login here
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      <div className="flex items-center py-8 px-4 sm:px-6 lg:px-8 min-h-screen">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full animate-[float_20s_ease-in-out_infinite]"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-pink-600/20 rounded-full animate-[float_25s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-600/10 rounded-full animate-[float_30s_ease-in-out_infinite]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Section - Text Content */}
          <div className="hidden lg:block space-y-16">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-black text-slate-900 mb-8 leading-[0.9] tracking-tight">
                Welcome <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Back</span>
              </h1>
              <p className="text-2xl text-slate-600 font-light leading-relaxed">
                Continue your journey of building trust and transparency
              </p>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <FontAwesomeIcon icon={faUser} className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Your Reviews</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Access your review history
                </p>
              </div>

              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Trusted Status</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Maintain your trusted reviewer status
                </p>
              </div>
            </div>

            <div className="bg-white/40  rounded-3xl p-10 text-center border border-white/20 shadow-2xl">
              <h4 className="text-3xl font-bold text-slate-900 mb-4">Join 10,000+ Trusted Reviewers</h4>
              <p className="text-slate-700 text-xl leading-relaxed">
                Making the digital world more reliable, one review at a time
              </p>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="bg-white/80 py-8 px-6 shadow-2xl rounded-3xl border border-white/20 w-full lg:w-auto relative overflow-hidden">
            {/* Mobile Header */}
            <div className="lg:hidden text-center mb-6 relative z-10">
              <h1 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">
                Welcome <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Back</span>
              </h1>
              <p className="text-slate-600 font-medium">
                Sign in to your account
              </p>
            </div>

            {/* Desktop Header */}
            <div className="hidden lg:block text-center mb-6 relative z-10">
              <h2 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">
                Sign In
              </h2>
              <p className="text-slate-600 font-medium">
                Welcome back! Please sign in to continue
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {/* Email Field */}
              <div className="group">
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2 tracking-wide">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 text-slate-400 group-focus-within:text-blue-500 transition-colors duration-200" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-10 py-3 border-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white/50  ${
                      errors.email 
                        ? 'border-red-400 bg-red-50/50 shadow-lg shadow-red-100' 
                        : 'border-slate-200 hover:border-slate-300 focus:shadow-lg focus:shadow-blue-100'
                    }`}
                    placeholder="Enter your email address"
                  />
                  {formData.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && !errors.email && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <FontAwesomeIcon icon={faCheckCircle} className="h-4 w-4 text-emerald-500 animate-pulse" />
                    </div>
                  )}
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 flex items-center font-medium">
                    <FontAwesomeIcon icon={faExclamationCircle} className="h-3 w-3 mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div className="group">
                <label htmlFor="password" className="block text-sm font-semibold text-slate-700 mb-2 tracking-wide">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FontAwesomeIcon icon={faLock} className="h-4 w-4 text-slate-400 group-focus-within:text-blue-500 transition-colors duration-200" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-12 py-3 border-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white/50  ${
                      errors.password 
                        ? 'border-red-400 bg-red-50/50 shadow-lg shadow-red-100' 
                        : 'border-slate-200 hover:border-slate-300 focus:shadow-lg focus:shadow-blue-100'
                    }`}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center hover:text-slate-600 transition-colors duration-200 cursor-pointer group"
                  >
                    <FontAwesomeIcon 
                      icon={showPassword ? faEyeSlash : faEye} 
                      className="h-4 w-4 text-slate-400 group-hover:text-blue-500 transition-colors duration-200" 
                    />
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600 flex items-center font-medium">
                    <FontAwesomeIcon icon={faExclamationCircle} className="h-3 w-3 mr-1" />
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-700 font-medium">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="/forgot-password" className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                    Forgot password?
                  </a>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <CommonButton
                  type="submit"
                  text="Sign In"
                  leftIcon={faSignInAlt}
                  variant="primary"
                  size="lg"
                  fullWidth
                  loading={isSubmitting}
                  loadingText="Signing In..."
                  shadow="xl"
                  animationType="scale"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl [&_svg]:!w-5 [&_svg]:!h-5"
                />
              </div>
            </form>

            {/* Divider */}
            <div className="mt-6 mb-6 relative z-10">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-3 bg-white/80  text-slate-500 font-medium">Or continue with</span>
                </div>
              </div>
            </div>

            {/* Google Sign In Button */}
            <button
              type="button"
              className="w-full flex justify-center items-center px-4 py-3 border-2 border-slate-200 rounded-lg shadow-lg bg-white/80  text-sm font-semibold text-slate-700 hover:bg-white hover:border-slate-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 transform hover:scale-105 relative z-10 cursor-pointer"
            >
              <img 
                src="/assets/icons/google-98.png" 
                alt="Google" 
                className="h-5 w-5 mr-3"
              />
              Sign in with Google
            </button>

            {/* Footer */}
            <div className="mt-6 text-center relative z-10">
              <p className="text-sm text-slate-600 font-medium">
                Don't have an account?{' '}
                <a href="/register" className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                  Sign up here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}
