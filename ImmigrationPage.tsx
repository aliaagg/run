import React from 'react';
import { Home, CheckCircle, Clock, FileText, Users, Globe } from 'lucide-react';

const ImmigrationPage = () => {
  const openWhatsApp = () => {
    const phoneNumber = '+923187203522';
    const message = 'Hello! I am interested in Immigration services. Can you provide more details about the process and requirements?';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const immigrationTypes = [
    { type: 'Skilled Migration', desc: 'For professionals with in-demand skills', icon: '🎯', countries: 'Canada, Australia, NZ' },
    { type: 'Investment Visa', desc: 'For investors and entrepreneurs', icon: '💼', countries: 'USA, UK, Portugal' },
    { type: 'Express Entry', desc: 'Fast-track immigration to Canada', icon: '⚡', countries: 'Canada' },
    { type: 'Provincial Nominee', desc: 'Province-specific immigration programs', icon: '🏛️', countries: 'Canada, Australia' }
  ];

  const countries = [
    { name: 'Canada', flag: '🇨🇦', programs: ['Express Entry', 'PNP', 'Quebec'], processing: '6-12 months' },
    { name: 'Australia', flag: '🇦🇺', programs: ['SkillSelect', 'State Nomination', 'Business'], processing: '8-16 months' },
    { name: 'New Zealand', flag: '🇳🇿', programs: ['Skilled Migrant', 'Investor', 'Entrepreneur'], processing: '6-12 months' },
    { name: 'United States', flag: '🇺🇸', programs: ['EB-1', 'EB-2', 'EB-5 Investor'], processing: '12-36 months' },
    { name: 'United Kingdom', flag: '🇬🇧', programs: ['Global Talent', 'Innovator', 'Investor'], processing: '3-8 weeks' },
    { name: 'Germany', flag: '🇩🇪', programs: ['EU Blue Card', 'Self-Employment', 'Investment'], processing: '1-6 months' }
  ];

  const requirements = [
    'Age requirements (typically 18-45 years)',
    'Educational qualifications assessment',
    'Professional work experience',
    'Language proficiency (English/French)',
    'Financial proof and settlement funds',
    'Medical examinations',
    'Police clearance certificates',
    'Skills assessment by relevant authority',
    'Expression of Interest (EOI) submission',
    'Invitation to Apply (ITA) acceptance'
  ];

  const services = [
    { icon: FileText, title: 'Eligibility Assessment', desc: 'Comprehensive evaluation of your immigration prospects' },
    { icon: Clock, title: 'Application Management', desc: 'End-to-end handling of your immigration application' },
    { icon: Users, title: 'Legal Representation', desc: 'Expert immigration lawyers for complex cases' },
    { icon: Globe, title: 'Settlement Services', desc: 'Support for establishing life in your new country' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Home className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Immigration Services</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Make your new country home. We provide comprehensive immigration solutions for permanent residency and citizenship.
            </p>
            <button 
              onClick={openWhatsApp}
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Start Your Immigration Journey
            </button>
          </div>
        </div>
      </section>

      {/* Immigration Types Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Immigration Programs</h2>
            <p className="text-xl text-gray-600">Various pathways to permanent residency and citizenship</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {immigrationTypes.map((program, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold text-black mb-2">{program.type}</h3>
                <p className="text-gray-600 mb-4">{program.desc}</p>
                <p className="text-sm text-red-600 font-semibold">Available in: {program.countries}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Immigration Services</h2>
            <p className="text-xl text-gray-600">Complete support for your immigration journey</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Immigration Destinations</h2>
            <p className="text-xl text-gray-600">Countries offering permanent residency programs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <div key={index} className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{country.flag}</span>
                  <h3 className="text-xl font-bold text-black">{country.name}</h3>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Available Programs:</h4>
                  <div className="flex flex-wrap gap-2">
                    {country.programs.map((program, idx) => (
                      <span key={idx} className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                        {program}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">Processing: <span className="font-semibold">{country.processing}</span></p>
                <button 
                  onClick={openWhatsApp}
                  className="text-red-600 font-semibold hover:text-red-800 transition-colors"
                >
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">Immigration Requirements</h2>
              <p className="text-xl text-gray-600 mb-8">
                General requirements for most immigration programs worldwide.
              </p>
              <div className="space-y-4">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-red-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-black mb-6">Why Choose Our Immigration Services?</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-red-600 text-white p-2 rounded-lg mr-4">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Expert Immigration Lawyers</h4>
                    <p className="text-gray-600 text-sm">Registered immigration consultants and lawyers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-600 text-white p-2 rounded-lg mr-4">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">High Success Rate</h4>
                    <p className="text-gray-600 text-sm">95% approval rate for immigration applications</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-600 text-white p-2 rounded-lg mr-4">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Global Experience</h4>
                    <p className="text-gray-600 text-sm">15+ years handling immigration cases worldwide</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={openWhatsApp}
                className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Get Free Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make Your Move?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your immigration journey today. Our experts will guide you through every step towards permanent residency.
          </p>
          <button 
            onClick={openWhatsApp}
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            Begin Your Immigration Process
          </button>
        </div>
      </section>
    </div>
  );
};

export default ImmigrationPage;