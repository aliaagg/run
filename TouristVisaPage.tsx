import React from 'react';
import { Plane, CheckCircle, Clock, FileText, Users, Globe } from 'lucide-react';

const TouristVisaPage = () => {
  const openWhatsApp = () => {
    const phoneNumber = '+923187203522';
    const message = 'Hello! I am interested in Tourist Visa services. Can you provide more details about the process and requirements?';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const countries = [
    { name: 'Canada', flag: '🇨🇦', processing: '15-30 days' },
    { name: 'Australia', flag: '🇦🇺', processing: '20-40 days' },
    { name: 'United Kingdom', flag: '🇬🇧', processing: '15-25 days' },
    { name: 'United States', flag: '🇺🇸', processing: '30-60 days' },
    { name: 'Germany', flag: '🇩🇪', processing: '10-15 days' },
    { name: 'France', flag: '🇫🇷', processing: '10-15 days' }
  ];

  const requirements = [
    'Valid passport with 6+ months validity',
    'Completed visa application form',
    'Recent passport-size photographs',
    'Travel itinerary and hotel bookings',
    'Bank statements (last 6 months)',
    'Employment letter or business registration',
    'Travel insurance coverage',
    'Proof of ties to home country'
  ];

  const services = [
    { icon: FileText, title: 'Document Preparation', desc: 'Complete assistance with all required documents' },
    { icon: Clock, title: 'Fast Processing', desc: 'Expedited processing for urgent travel needs' },
    { icon: Users, title: 'Expert Consultation', desc: 'One-on-one guidance from visa experts' },
    { icon: Globe, title: 'Multiple Countries', desc: 'Tourist visas for 25+ destinations worldwide' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Plane className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Tourist Visa Services</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Explore the world with confidence. Our expert tourist visa services make your travel dreams a reality.
            </p>
            <button 
              onClick={openWhatsApp}
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Tourist Visa Services</h2>
            <p className="text-xl text-gray-600">Comprehensive support for all your travel visa needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Popular Tourist Destinations</h2>
            <p className="text-xl text-gray-600">We process tourist visas for these popular destinations</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{country.flag}</span>
                  <h3 className="text-xl font-bold text-black">{country.name}</h3>
                </div>
                <p className="text-gray-600 mb-2">Processing Time: <span className="font-semibold">{country.processing}</span></p>
                <button 
                  onClick={openWhatsApp}
                  className="text-red-600 font-semibold hover:text-red-800 transition-colors"
                >
                  Apply Now →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">General Requirements</h2>
              <p className="text-xl text-gray-600 mb-8">
                While requirements vary by country, here are the common documents needed for most tourist visa applications.
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
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-6">Get Expert Assistance</h3>
              <p className="text-gray-600 mb-6">
                Our visa experts will guide you through the entire process, ensuring all requirements are met for a successful application.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Document checklist review</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Application form assistance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Interview preparation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Application tracking</span>
                </div>
              </div>
              <button 
                onClick={openWhatsApp}
                className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Start Your Application
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our visa experts today and let us help you plan your perfect trip with hassle-free visa processing.
          </p>
          <button 
            onClick={openWhatsApp}
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            Contact Us Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default TouristVisaPage;