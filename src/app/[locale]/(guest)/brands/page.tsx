"use client";

import FrontendLayout from '@/app/[locale]/layouts/guest-layout';
import Image from 'next/image';
import CommonButton from '@/components/CommonButton';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useBrand } from '@/contexts/BrandProvider';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function BrandsPage() {
  const t = useTranslations('brands');
  const { brandName } = useBrand();
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    industry: '',
    monthlyBudget: '',
    reviewGoals: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Reset form and close modal
      setFormData({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        website: '',
        industry: '',
        monthlyBudget: '',
        reviewGoals: '',
        message: ''
      });
      setIsRequestModalOpen(false);
      
      // Show success message (you can implement a toast notification here)
      alert('Request submitted successfully! We will contact you soon.');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FrontendLayout className="bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <div className="text-white dark:text-gray-100">{t('hero.title.line1')}</div>
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 dark:from-green-300 dark:to-emerald-400 bg-clip-text text-transparent">
                  {t('hero.title.line2')}
                </span>
              </h1>
              <p className="text-xl text-blue-100 dark:text-gray-300 leading-relaxed">
                {t('hero.subtitle')}
              </p>
               <div className="flex flex-col sm:flex-row gap-4">
                 <Dialog open={isRequestModalOpen} onOpenChange={setIsRequestModalOpen}>
                   <DialogTrigger asChild>
                     <CommonButton
                       text={t('hero.buttons.getStarted')}
                       variant="primary"
                       size="lg"
                       shape="rounded"
                       gradient={true}
                       shadow="lg"
                       className="bg-white text-blue-900 hover:bg-blue-50"
                     />
                   </DialogTrigger>
                 </Dialog>
               </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="animate-scale-in w-full max-w-2xl">
                <Image
                  src="/assets/banners/mockup-banner-01.jpg"
                  alt="Brand Dashboard Mockup"
                  width={800}
                  height={400}
                  className="w-full rounded-2xl shadow-floating"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose TrustMe Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">{t('whyChoose.title', { brandName })}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">{t('whyChoose.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">{t('whyChoose.features.verifiedReviewers.title')}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('whyChoose.features.verifiedReviewers.description')}
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">{t('whyChoose.features.qualityContent.title')}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('whyChoose.features.qualityContent.description')}
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">{t('whyChoose.features.targetedReach.title')}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('whyChoose.features.targetedReach.description')}
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">{t('whyChoose.features.analytics.title')}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('whyChoose.features.analytics.description')}
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">{t('whyChoose.features.secure.title')}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('whyChoose.features.secure.description')}
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">{t('whyChoose.features.support.title')}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('whyChoose.features.support.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">{t('howItWorks.title')}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">{t('howItWorks.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">{t('howItWorks.steps.createCampaign.title')}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('howItWorks.steps.createCampaign.description')}
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">{t('howItWorks.steps.selectReviewers.title')}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('howItWorks.steps.selectReviewers.description')}
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">{t('howItWorks.steps.monitorProgress.title')}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('howItWorks.steps.monitorProgress.description')}
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">{t('howItWorks.steps.getResults.title')}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('howItWorks.steps.getResults.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

       {/* Success Stories Section */}
       <section className="py-20 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="text-center mb-16">
             <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">{t('successStories.title')}</h2>
             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">{t('successStories.subtitle', { brandName })}</p>
           </div>

           {/* 3D Card Gallery */}
           <div className="relative flex justify-center items-center min-h-[500px] perspective-1000">
             {/* Left Card */}
             <div className="absolute left-0 transform transition-all duration-700 hover:scale-105 hover:z-20 group"
                  style={{
                    transform: 'translateX(-5%) translateZ(-50px) rotateY(15deg) scale(0.85)',
                    transformStyle: 'preserve-3d'
                  }}>
               <div className="relative w-80 h-96 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden group-hover:shadow-3xl transition-all duration-500">
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-700/10 dark:from-blue-400/10 dark:to-blue-600/20"></div>
                 <div className="relative p-8 h-full flex flex-col">
                   <div className="flex items-center mb-6">
                     <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                       A
                     </div>
                     <div className="ml-4">
                       <h4 className="font-bold text-gray-900 dark:text-gray-100 text-lg">Alex Johnson</h4>
                       <p className="text-gray-600 dark:text-gray-400 text-sm">Marketing Director, TechCorp</p>
                     </div>
                   </div>
                   <p className="text-gray-700 dark:text-gray-300 italic mb-6 text-base leading-relaxed flex-grow">
                     &ldquo;{t('successStories.testimonials.techcorp.quote', { brandName })}&rdquo;
                   </p>
                   <div className="flex text-yellow-500 space-x-1">
                     {[...Array(5)].map((_, i) => (
                       <svg key={i} className="w-6 h-6 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                       </svg>
                     ))}
                   </div>
                 </div>
               </div>
             </div>

             {/* Center Card - Main Focus */}
             <div className="relative z-10 transform transition-all duration-700 hover:scale-105 group"
                  style={{
                    transform: 'translateZ(0px) scale(1)',
                    transformStyle: 'preserve-3d'
                  }}>
               <div className="relative w-96 h-[28rem] bg-white dark:bg-gray-800 rounded-3xl shadow-3xl border border-gray-100 dark:border-gray-700 overflow-hidden group-hover:shadow-4xl transition-all duration-500">
                 <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-700/10 dark:from-green-400/10 dark:to-green-600/20"></div>
                 <div className="relative p-10 h-full flex flex-col">
                   <div className="flex items-center mb-8">
                     <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-xl">
                       S
                     </div>
                     <div className="ml-6">
                       <h4 className="font-bold text-gray-900 dark:text-gray-100 text-xl">Sarah Chen</h4>
                       <p className="text-gray-600 dark:text-gray-400 text-base">CEO, FashionForward</p>
                     </div>
                   </div>
                   <p className="text-gray-700 dark:text-gray-300 italic mb-8 text-lg leading-relaxed flex-grow">
                     &ldquo;{t('successStories.testimonials.fashionforward.quote', { brandName })}&rdquo;
                   </p>
                   <div className="flex text-yellow-500 space-x-1">
                     {[...Array(5)].map((_, i) => (
                       <svg key={i} className="w-7 h-7 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                       </svg>
                     ))}
                   </div>
                 </div>
               </div>
             </div>

             {/* Right Card */}
             <div className="absolute right-0 transform transition-all duration-700 hover:scale-105 hover:z-20 group"
                  style={{
                    transform: 'translateX(5%) translateZ(-50px) rotateY(-15deg) scale(0.85)',
                    transformStyle: 'preserve-3d'
                  }}>
               <div className="relative w-80 h-96 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden group-hover:shadow-3xl transition-all duration-500">
                 <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-700/10 dark:from-purple-400/10 dark:to-purple-600/20"></div>
                 <div className="relative p-8 h-full flex flex-col">
                   <div className="flex items-center mb-6">
                     <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                       M
                     </div>
                     <div className="ml-4">
                       <h4 className="font-bold text-gray-900 dark:text-gray-100 text-lg">Michael Rodriguez</h4>
                       <p className="text-gray-600 dark:text-gray-400 text-sm">Founder, HealthPlus</p>
                     </div>
                   </div>
                   <p className="text-gray-700 dark:text-gray-300 italic mb-6 text-base leading-relaxed flex-grow">
                     &ldquo;{t('successStories.testimonials.healthplus.quote', { brandName })}&rdquo;
                   </p>
                   <div className="flex text-yellow-500 space-x-1">
                     {[...Array(5)].map((_, i) => (
                       <svg key={i} className="w-6 h-6 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                       </svg>
                     ))}
                   </div>
                 </div>
               </div>
             </div>
           </div>

           {/* Mobile Responsive Fallback */}
           <div className="lg:hidden grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
             {/* Mobile Testimonial 1 */}
             <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
               <div className="flex items-center mb-6">
                 <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                   A
                 </div>
                 <div className="ml-4">
                   <h4 className="font-semibold text-gray-900 dark:text-gray-100">Alex Johnson</h4>
                   <p className="text-gray-600 dark:text-gray-400 text-sm">Marketing Director, TechCorp</p>
                 </div>
               </div>
               <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                 &ldquo;{t('successStories.testimonials.techcorp.quote', { brandName })}&rdquo;
               </p>
               <div className="flex text-yellow-500">
                 {[...Array(5)].map((_, i) => (
                   <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                   </svg>
                 ))}
               </div>
             </div>

             {/* Mobile Testimonial 2 */}
             <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
               <div className="flex items-center mb-6">
                 <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                   S
                 </div>
                 <div className="ml-4">
                   <h4 className="font-semibold text-gray-900 dark:text-gray-100">Sarah Chen</h4>
                   <p className="text-gray-600 dark:text-gray-400 text-sm">CEO, FashionForward</p>
                 </div>
               </div>
               <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                 &ldquo;{t('successStories.testimonials.fashionforward.quote', { brandName })}&rdquo;
               </p>
               <div className="flex text-yellow-500">
                 {[...Array(5)].map((_, i) => (
                   <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                   </svg>
                 ))}
               </div>
             </div>

             {/* Mobile Testimonial 3 */}
             <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
               <div className="flex items-center mb-6">
                 <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                   M
                 </div>
                 <div className="ml-4">
                   <h4 className="font-semibold text-gray-900 dark:text-gray-100">Michael Rodriguez</h4>
                   <p className="text-gray-600 dark:text-gray-400 text-sm">Founder, HealthPlus</p>
                 </div>
               </div>
               <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                 &ldquo;{t('successStories.testimonials.healthplus.quote', { brandName })}&rdquo;
               </p>
               <div className="flex text-yellow-500">
                 {[...Array(5)].map((_, i) => (
                   <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                   </svg>
                 ))}
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* Request Dialog */}
       <Dialog open={isRequestModalOpen} onOpenChange={setIsRequestModalOpen}>
         <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
           <DialogHeader>
             <DialogTitle>{t('requestModal.title', { brandName })}</DialogTitle>
             <DialogDescription>
               {t('requestModal.description', { brandName })}
             </DialogDescription>
           </DialogHeader>
           
           <form onSubmit={handleSubmit} className="space-y-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {/* Company Name */}
               <div>
                 <Label htmlFor="companyName" className="text-gray-700 dark:text-gray-300 mb-2">
                   {t('requestModal.form.companyName')} *
                 </Label>
                 <Input
                   id="companyName"
                   type="text"
                   name="companyName"
                   value={formData.companyName}
                   onChange={handleInputChange}
                   required
                   placeholder={t('requestModal.form.companyNamePlaceholder')}
                 />
               </div>

               {/* Contact Name */}
               <div>
                 <Label htmlFor="contactName" className="text-gray-700 dark:text-gray-300 mb-2">
                   {t('requestModal.form.contactName')} *
                 </Label>
                 <Input
                   id="contactName"
                   type="text"
                   name="contactName"
                   value={formData.contactName}
                   onChange={handleInputChange}
                   required
                   placeholder={t('requestModal.form.contactNamePlaceholder')}
                 />
               </div>

               {/* Email */}
               <div>
                 <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 mb-2">
                   {t('requestModal.form.email')} *
                 </Label>
                 <Input
                   id="email"
                   type="email"
                   name="email"
                   value={formData.email}
                   onChange={handleInputChange}
                   required
                   placeholder={t('requestModal.form.emailPlaceholder')}
                 />
               </div>

               {/* Phone */}
               <div>
                 <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300 mb-2">
                   {t('requestModal.form.phone')}
                 </Label>
                 <Input
                   id="phone"
                   type="tel"
                   name="phone"
                   value={formData.phone}
                   onChange={handleInputChange}
                   placeholder={t('requestModal.form.phonePlaceholder')}
                 />
               </div>

               {/* Website */}
               <div>
                 <Label htmlFor="website" className="text-gray-700 dark:text-gray-300 mb-2">
                   {t('requestModal.form.website')}
                 </Label>
                 <Input
                   id="website"
                   type="url"
                   name="website"
                   value={formData.website}
                   onChange={handleInputChange}
                   placeholder={t('requestModal.form.websitePlaceholder')}
                 />
               </div>

               {/* Industry */}
               <div>
                 <Label htmlFor="industry" className="text-gray-700 dark:text-gray-300 mb-2">
                   {t('requestModal.form.industry')} *
                 </Label>
                 <Select
                   name="industry"
                   value={formData.industry}
                   onValueChange={(value) => setFormData(prev => ({ ...prev, industry: value }))}
                   required
                 >
                   <SelectTrigger>
                     <SelectValue placeholder={t('requestModal.form.industryPlaceholder')} />
                   </SelectTrigger>
                   <SelectContent>
                     <SelectItem value="technology">{t('requestModal.form.industries.technology')}</SelectItem>
                     <SelectItem value="fashion">{t('requestModal.form.industries.fashion')}</SelectItem>
                     <SelectItem value="health">{t('requestModal.form.industries.health')}</SelectItem>
                     <SelectItem value="food">{t('requestModal.form.industries.food')}</SelectItem>
                     <SelectItem value="beauty">{t('requestModal.form.industries.beauty')}</SelectItem>
                     <SelectItem value="travel">{t('requestModal.form.industries.travel')}</SelectItem>
                     <SelectItem value="finance">{t('requestModal.form.industries.finance')}</SelectItem>
                     <SelectItem value="education">{t('requestModal.form.industries.education')}</SelectItem>
                     <SelectItem value="other">{t('requestModal.form.industries.other')}</SelectItem>
                   </SelectContent>
                 </Select>
               </div>

               {/* Monthly Budget */}
               <div>
                 <Label htmlFor="monthlyBudget" className="text-gray-700 dark:text-gray-300 mb-2">
                   {t('requestModal.form.monthlyBudget')} *
                 </Label>
                 <Select
                   name="monthlyBudget"
                   value={formData.monthlyBudget}
                   onValueChange={(value) => setFormData(prev => ({ ...prev, monthlyBudget: value }))}
                   required
                 >
                   <SelectTrigger>
                     <SelectValue placeholder={t('requestModal.form.monthlyBudgetPlaceholder')} />
                   </SelectTrigger>
                   <SelectContent>
                     <SelectItem value="under-1k">{t('requestModal.form.budgets.under1k')}</SelectItem>
                     <SelectItem value="1k-5k">{t('requestModal.form.budgets.1k5k')}</SelectItem>
                     <SelectItem value="5k-10k">{t('requestModal.form.budgets.5k10k')}</SelectItem>
                     <SelectItem value="10k-25k">{t('requestModal.form.budgets.10k25k')}</SelectItem>
                     <SelectItem value="25k-50k">{t('requestModal.form.budgets.25k50k')}</SelectItem>
                     <SelectItem value="over-50k">{t('requestModal.form.budgets.over50k')}</SelectItem>
                   </SelectContent>
                 </Select>
               </div>
             </div>

             {/* Review Goals */}
             <div>
               <Label htmlFor="reviewGoals" className="text-gray-700 dark:text-gray-300 mb-2">
                 {t('requestModal.form.reviewGoals')} *
               </Label>
               <Textarea
                 id="reviewGoals"
                 name="reviewGoals"
                 value={formData.reviewGoals}
                 onChange={handleInputChange}
                 required
                 rows={3}
                 placeholder={t('requestModal.form.reviewGoalsPlaceholder')}
               />
             </div>

             {/* Additional Message */}
             <div>
               <Label htmlFor="message" className="text-gray-700 dark:text-gray-300 mb-2">
                 {t('requestModal.form.message')}
               </Label>
               <Textarea
                 id="message"
                 name="message"
                 value={formData.message}
                 onChange={handleInputChange}
                 rows={4}
                 placeholder={t('requestModal.form.messagePlaceholder')}
               />
             </div>

             <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
               <p className="text-blue-800 dark:text-blue-200 text-sm">
                 {t('requestModal.form.note')}
               </p>
             </div>
           </form>

           <DialogFooter>
             <CommonButton
               text={t('requestModal.cancel')}
               variant="outline"
               onClick={() => setIsRequestModalOpen(false)}
             />
             <CommonButton
               text={isSubmitting ? t('requestModal.submitting') : t('requestModal.submit')}
               variant="success"
               onClick={() => {
                 const form = document.querySelector('form') as HTMLFormElement;
                 if (form) {
                   const formEvent = new Event('submit', { bubbles: true, cancelable: true });
                   form.dispatchEvent(formEvent);
                 }
               }}
               loading={isSubmitting}
               disabled={isSubmitting}
             />
           </DialogFooter>
         </DialogContent>
       </Dialog>

    </FrontendLayout>
  );
}
