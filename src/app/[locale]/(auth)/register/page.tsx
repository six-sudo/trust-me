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
  faUserPlus
} from '@fortawesome/free-solid-svg-icons';
import CommonButton from '@/components/CommonButton';
import Footer from '@/components/Footer';

export default function ReviewerRegister() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Password strength calculation
  const getPasswordStrength = (password: string): number => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/(?=.*[a-z])/.test(password)) strength++;
    if (/(?=.*[A-Z])/.test(password)) strength++;
    if (/(?=.*\d)/.test(password)) strength++;
    if (/(?=.*[@$!%*?&])/.test(password)) strength++;
    return Math.min(strength, 4);
  };

  const getPasswordStrengthText = (strength: number): string => {
    switch (strength) {
      case 0:
      case 1:
        return 'Very Weak';
      case 2:
        return 'Weak';
      case 3:
        return 'Good';
      case 4:
        return 'Strong';
      default:
        return 'Very Weak';
    }
  };

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

    // First name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters';
    } else if (!/^[a-zA-Z]+$/.test(formData.firstName.trim())) {
      newErrors.firstName = 'First name can only contain letters';
    }

    // Last name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = 'Last name must be at least 2 characters';
    } else if (!/^[a-zA-Z]+$/.test(formData.lastName.trim())) {
      newErrors.lastName = 'Last name can only contain letters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one lowercase letter';
    } else if (!/(?=.*[A-Z])/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one uppercase letter';
    } else if (!/(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one number';
    } else if (!/(?=.*[@$!%*?&])/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one special character (@$!%*?&)';
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
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
      console.log('Registration data:', formData);
      // Handle successful registration here
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black-50 via-black-50 to-black-100 dark:from-black-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      <div className="flex items-center py-8 px-4 sm:px-6 lg:px-8 min-h-screen">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 dark:from-blue-500/30 dark:to-purple-500/30 rounded-full animate-[float_20s_ease-in-out_infinite]"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-pink-600/20 dark:from-indigo-500/30 dark:to-pink-500/30 rounded-full animate-[float_25s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-600/10 dark:from-cyan-500/20 dark:to-blue-500/20 rounded-full animate-[float_30s_ease-in-out_infinite]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Section - Text Content */}
          <div className="hidden lg:block space-y-16">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-black text-slate-900 dark:text-gray-100 mb-8 leading-[0.9] tracking-tight">
                Your Voice <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">Matters</span>
              </h1>
              <p className="text-2xl text-slate-600 dark:text-gray-300 font-light leading-relaxed">
                Help others make better decisions with authentic, trusted reviews
              </p>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-gray-100 mb-3">Trust & Transparency</h3>
                <p className="text-slate-600 dark:text-gray-300 text-lg leading-relaxed">
                  Build a more honest marketplace
                </p>
              </div>

              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <FontAwesomeIcon icon={faUser} className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-gray-100 mb-3">Expert Recognition</h3>
                <p className="text-slate-600 dark:text-gray-300 text-lg leading-relaxed">
                  Become a trusted voice in your field
                </p>
              </div>
            </div>

            <div className="bg-white/40 dark:bg-gray-900/40 rounded-3xl p-10 text-center border border-white/20 dark:border-gray-700/20 shadow-2xl">
              <h4 className="text-3xl font-bold text-slate-900 dark:text-gray-100 mb-4">Join 10,000+ Trusted Reviewers</h4>
              <p className="text-slate-700 dark:text-gray-300 text-xl leading-relaxed">
                Making the digital world more reliable, one review at a time
              </p>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="bg-white/80 dark:bg-gray-900/80 py-8 px-6 shadow-2xl rounded-3xl border border-white/20 dark:border-gray-700/20 w-full lg:w-auto relative overflow-hidden">
            {/* Mobile Header */}
            <div className="lg:hidden text-center mb-6 relative z-10">
              <h1 className="text-3xl font-black text-slate-900 dark:text-gray-100 mb-2 tracking-tight">
                Join as a <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">Reviewer</span>
              </h1>
              <p className="text-slate-600 dark:text-gray-300 font-medium">
                Help others make better decisions
              </p>
            </div>

            {/* Desktop Header */}
            <div className="hidden lg:block text-center mb-6 relative z-10">
              <h2 className="text-2xl font-black text-slate-900 dark:text-gray-100 mb-2 tracking-tight">
                Create Your Account
              </h2>
              <p className="text-slate-600 dark:text-gray-300 font-medium">
                Get started in just a few minutes
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* First Name Field */}
              <div className="group">
                <label htmlFor="firstName" className="block text-sm font-semibold text-slate-700 dark:text-gray-300 mb-2 tracking-wide">
                  First Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FontAwesomeIcon icon={faUser} className="h-4 w-4 text-slate-400 dark:text-gray-500 group-focus-within:text-blue-500 dark:group-focus-within:text-blue-400 transition-colors duration-200" />
                  </div>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    autoFocus
                    className={`w-full pl-10 pr-10 py-3 border-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white/50 dark:bg-gray-700/50 text-slate-900 dark:text-gray-100 placeholder-slate-500 dark:placeholder-gray-400 ${
                      errors.firstName 
                        ? 'border-red-400 bg-red-50/50 dark:bg-red-900/20 dark:border-red-500 shadow-lg shadow-red-100 dark:shadow-red-900/20' 
                        : 'border-slate-200 dark:border-gray-600 hover:border-slate-300 dark:hover:border-gray-500 focus:shadow-lg focus:shadow-blue-100 dark:focus:shadow-blue-900/20'
                    }`}
                    placeholder="First name"
                  />
                  {formData.firstName && formData.firstName.trim().length >= 2 && !errors.firstName && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <FontAwesomeIcon icon={faCheckCircle} className="h-4 w-4 text-emerald-500 animate-pulse" />
                    </div>
                  )}
                </div>
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center font-medium">
                    <FontAwesomeIcon icon={faExclamationCircle} className="h-3 w-3 mr-1" />
                    {errors.firstName}
                  </p>
                )}
              </div>

              {/* Last Name Field */}
              <div className="group">
                <label htmlFor="lastName" className="block text-sm font-semibold text-slate-700 dark:text-gray-300 mb-2 tracking-wide">
                  Last Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FontAwesomeIcon icon={faUser} className="h-4 w-4 text-slate-400 dark:text-gray-500 group-focus-within:text-blue-500 dark:group-focus-within:text-blue-400 transition-colors duration-200" />
                  </div>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-10 py-3 border-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white/50 dark:bg-gray-700/50 text-slate-900 dark:text-gray-100 placeholder-slate-500 dark:placeholder-gray-400 ${
                      errors.lastName 
                        ? 'border-red-400 bg-red-50/50 dark:bg-red-900/20 dark:border-red-500 shadow-lg shadow-red-100 dark:shadow-red-900/20' 
                        : 'border-slate-200 dark:border-gray-600 hover:border-slate-300 dark:hover:border-gray-500 focus:shadow-lg focus:shadow-blue-100 dark:focus:shadow-blue-900/20'
                    }`}
                    placeholder="Last name"
                  />
                  {formData.lastName && formData.lastName.trim().length >= 2 && !errors.lastName && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <FontAwesomeIcon icon={faCheckCircle} className="h-4 w-4 text-emerald-500 animate-pulse" />
                    </div>
                  )}
                </div>
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center font-medium">
                    <FontAwesomeIcon icon={faExclamationCircle} className="h-3 w-3 mr-1" />
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            {/* Email Field */}
            <div className="group">
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-gray-300 mb-2 tracking-wide">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 text-slate-400 dark:text-gray-500 group-focus-within:text-blue-500 dark:group-focus-within:text-blue-400 transition-colors duration-200" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-10 py-3 border-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white/50 dark:bg-gray-700/50 text-slate-900 dark:text-gray-100 placeholder-slate-500 dark:placeholder-gray-400 ${
                    errors.email 
                      ? 'border-red-400 bg-red-50/50 dark:bg-red-900/20 dark:border-red-500 shadow-lg shadow-red-100 dark:shadow-red-900/20' 
                      : 'border-slate-200 dark:border-gray-600 hover:border-slate-300 dark:hover:border-gray-500 focus:shadow-lg focus:shadow-blue-100 dark:focus:shadow-blue-900/20'
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
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center font-medium">
                  <FontAwesomeIcon icon={faExclamationCircle} className="h-3 w-3 mr-1" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="group">
              <label htmlFor="password" className="block text-sm font-semibold text-slate-700 dark:text-gray-300 mb-2 tracking-wide">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faLock} className="h-4 w-4 text-slate-400 dark:text-gray-500 group-focus-within:text-blue-500 dark:group-focus-within:text-blue-400 transition-colors duration-200" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-12 py-3 border-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white/50 dark:bg-gray-700/50 text-slate-900 dark:text-gray-100 placeholder-slate-500 dark:placeholder-gray-400 ${
                    errors.password 
                      ? 'border-red-400 bg-red-50/50 dark:bg-red-900/20 dark:border-red-500 shadow-lg shadow-red-100 dark:shadow-red-900/20' 
                      : 'border-slate-200 dark:border-gray-600 hover:border-slate-300 dark:hover:border-gray-500 focus:shadow-lg focus:shadow-blue-100 dark:focus:shadow-blue-900/20'
                  }`}
                  placeholder="Create a strong password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center hover:text-slate-600 dark:hover:text-gray-300 transition-colors duration-200 cursor-pointer group"
                >
                  <FontAwesomeIcon 
                    icon={showPassword ? faEyeSlash : faEye} 
                    className="h-4 w-4 text-slate-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-200" 
                  />
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center font-medium">
                  <FontAwesomeIcon icon={faExclamationCircle} className="h-3 w-3 mr-1" />
                  {errors.password}
                </p>
              )}
              {/* Password Strength Indicator */}
              {formData.password && (
                <div className="mt-2">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4].map((level) => {
                      const strength = getPasswordStrength(formData.password);
                      return (
                        <div
                          key={level}
                          className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                            level <= strength
                              ? strength === 1
                                ? 'bg-gradient-to-r from-red-500 to-red-400 dark:from-red-400 dark:to-red-300 shadow-lg shadow-red-200 dark:shadow-red-900/20'
                                : strength === 2
                                ? 'bg-gradient-to-r from-yellow-500 to-yellow-400 dark:from-yellow-400 dark:to-yellow-300 shadow-lg shadow-yellow-200 dark:shadow-yellow-900/20'
                                : strength === 3
                                ? 'bg-gradient-to-r from-blue-500 to-blue-400 dark:from-blue-400 dark:to-blue-300 shadow-lg shadow-blue-200 dark:shadow-blue-900/20'
                                : 'bg-gradient-to-r from-emerald-500 to-emerald-400 dark:from-emerald-400 dark:to-emerald-300 shadow-lg shadow-emerald-200 dark:shadow-emerald-900/20'
                              : 'bg-slate-200 dark:bg-gray-600'
                          }`}
                        />
                      );
                    })}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-gray-400 mt-1 font-medium">
                    Password strength: <span className={`font-bold ${
                      getPasswordStrength(formData.password) === 1 ? 'text-red-600 dark:text-red-400' :
                      getPasswordStrength(formData.password) === 2 ? 'text-yellow-600 dark:text-yellow-400' :
                      getPasswordStrength(formData.password) === 3 ? 'text-blue-600 dark:text-blue-400' :
                      'text-emerald-600 dark:text-emerald-400'
                    }`}>
                      {getPasswordStrengthText(getPasswordStrength(formData.password))}
                    </span>
                  </p>
                </div>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="group">
              <label htmlFor="confirmPassword" className="block text-sm font-semibold text-slate-700 dark:text-gray-300 mb-2 tracking-wide">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-4 w-4 text-slate-400 dark:text-gray-500 group-focus-within:text-blue-500 dark:group-focus-within:text-blue-400 transition-colors duration-200" />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-12 py-3 border-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white/50 dark:bg-gray-700/50 text-slate-900 dark:text-gray-100 placeholder-slate-500 dark:placeholder-gray-400 ${
                    errors.confirmPassword 
                      ? 'border-red-400 bg-red-50/50 dark:bg-red-900/20 dark:border-red-500 shadow-lg shadow-red-100 dark:shadow-red-900/20' 
                      : 'border-slate-200 dark:border-gray-600 hover:border-slate-300 dark:hover:border-gray-500 focus:shadow-lg focus:shadow-blue-100 dark:focus:shadow-blue-900/20'
                  }`}
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center hover:text-slate-600 dark:hover:text-gray-300 transition-colors duration-200 cursor-pointer group"
                >
                  <FontAwesomeIcon 
                    icon={showConfirmPassword ? faEyeSlash : faEye} 
                    className="h-4 w-4 text-slate-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-200" 
                  />
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center font-medium">
                  <FontAwesomeIcon icon={faExclamationCircle} className="h-3 w-3 mr-1" />
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <CommonButton
                type="submit"
                text="Create Account"
                leftIcon={faUserPlus}
                variant="primary"
                size="lg"
                fullWidth
                loading={isSubmitting}
                loadingText="Creating Account..."
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
                <div className="w-full border-t border-slate-200 dark:border-gray-600" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-white/80 dark:bg-gray-800/80 text-slate-500 dark:text-gray-400 font-medium">Or continue with</span>
              </div>
            </div>
          </div>

          {/* Google Sign In Button */}
          <button
            type="button"
            className="w-full flex justify-center items-center px-4 py-3 border-2 border-slate-200 dark:border-gray-600 rounded-lg shadow-lg bg-white/80 dark:bg-gray-700/80 text-sm font-semibold text-slate-700 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-600 hover:border-slate-300 dark:hover:border-gray-500 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 transform hover:scale-105 relative z-10 cursor-pointer"
          >
            <img 
              src="/assets/icons/google-98.png" 
              alt="Google" 
              className="h-5 w-5 mr-3"
            />
            Sign up with Google
          </button>

            {/* Footer */}
            <div className="mt-6 text-center relative z-10">
              <p className="text-sm text-slate-600 dark:text-gray-300 font-medium">
                Already have an account?{' '}
                <a href="/login" className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-300 dark:hover:to-purple-300 transition-all duration-200">
                  Sign in here
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
