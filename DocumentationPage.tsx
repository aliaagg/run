import React from 'react';
import { FileText, CheckCircle, Clock, Shield, Users, Globe } from 'lucide-react';

const DocumentationPage = () => {
  const openWhatsApp = () => {
    const phoneNumber = '+923187203522';
    const message = 'Hello! I am interested in Documentation services. Can you provide more details about the process and requirements?';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const documentTypes = [
    { type: 'Educational Documents', desc: 'Degree attestation and verification', icon: '🎓', time: '5-15 days' },
    { type: 'Personal Documents', desc: 'Birth, marriage, death certificates', icon: '📋', time: '3-10 days' },
    { type: 'Commercial Documents', desc: 'Business and trade documents', icon: '💼', time: '7-20 days' },
    { type: 'Legal Documents', desc: 'Power of attorney, affidavits', icon: '⚖️', time: '5-12 days' }
  ];

  const attestationProcess = [
    { step: 1, title: 'Document Verification', desc: 'Initial verification of original documents' },
    { step: 2, title: 'Notary Public', desc: 'Notarization by authorized notary public' },
    { step: 3, title: 'Home Department', desc: 'Attestation by provincial home department' },
    { step: 4, title: 'Ministry of Foreign Affairs', desc: 'MOFA attestation for international use' },
    { step: 5, title: 'Embassy Attestation', desc: 'Final attestation by destination country embassy' }
  ];

  const services = [
    { icon: FileText, title: 'Document Preparation', desc: 'Complete preparation and formatting of documents' },
    { icon: Shield, title: 'Attestation Services', desc: 'Full attestation from relevant authorities' },
    { icon: Clock, title: 'Express Processing', desc: 'Fast-track services for urgent requirements' },
    { icon: Globe, title: 'Translation Services', desc: 'Certified translation in multiple languages' }
  ];

  const countries = [
    { name: 'UAE', flag: '🇦🇪', embassy: 'UAE Embassy', time: '3-5 days' },
    { name: 'Saudi Arabia', flag: '🇸🇦', embassy: 'Saudi Embassy', time: '5-7 days' },
    { name: 'Qatar', flag: '🇶🇦', embassy: 'Qatar Embassy', time: '3-5 days' },
    { name: 'Kuwait', flag: '🇰🇼', embassy: 'Kuwait Embassy', time: '4-6 days' },
    { name: 'Oman', flag: '🇴🇲', embassy: 'Oman Embassy', time: '3-5 days' },
    { name: 'Bahrain', flag: '🇧🇭', embassy: 'Bahrain Embassy', time: '3-5 days' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <FileText className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Documentation Services</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Professional document attestation and verification services. We handle all your documentation needs with precision and care.
            </p>
            <button 
              onClick={openWhatsApp}
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Get Documents Attested
            </button>
          </div>
        </div>
      </section>

      {/* Document Types Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Document Types We Handle</h2>
            <p className="text-xl text-gray-600">Comprehensive attestation services for all document categories</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {documentTypes.map((doc, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="text-4xl mb-4">{doc.icon}</div>
                <h3 className="text-xl font-bold text-black mb-2">{doc.type}</h3>
                <p className="text-gray-600 mb-4">{doc.desc}</p>
                <p className="text-sm text-red-600 font-semibold">Processing: {doc.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Documentation Services</h2>
            <p className="text-xl text-gray-600">Complete document processing solutions</p>
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

      {/* Attestation Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Attestation Process</h2>
            <p className="text-xl text-gray-600">Step-by-step document attestation procedure</p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8">
            {attestationProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {process.step}
                </div>
                <h3 className="text-lg font-bold text-black mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.desc}</p>
                {index < attestationProcess.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-red-200 transform translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embassy Attestation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Embassy Attestation</h2>
            <p className="text-xl text-gray-600">Final attestation from destination country embassies</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{country.flag}</span>
                  <h3 className="text-xl font-bold text-black">{country.name}</h3>
                </div>
                <p className="text-gray-600 mb-2">Embassy: <span className="font-semibold">{country.embassy}</span></p>
                <p className="text-gray-600 mb-4">Processing: <span className="font-semibold">{country.time}</span></p>
                <button 
                  onClick={openWhatsApp}
                  className="text-red-600 font-semibold hover:text-red-800 transition-colors"
                >
                  Get Attested →
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
              <h2 className="text-4xl font-bold text-black mb-6">What You Need</h2>
              <p className="text-xl text-gray-600 mb-8">
                Requirements for document attestation services.
              </p>
              <div className="space-y-4">
                {[
                  'Original documents to be attested',
                  'Photocopies of all documents',
                  'Valid passport copy',
                  'CNIC copy of applicant',
                  'Completed attestation forms',
                  'Passport-size photographs',
                  'Processing fees payment',
                  'Authorization letter (if applicable)'
                ].map((req, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-6">Why Choose Our Services?</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-red-600 text-white p-2 rounded-lg mr-4">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Secure Handling</h4>
                    <p className="text-gray-600 text-sm">Your documents are handled with utmost security and care</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-600 text-white p-2 rounded-lg mr-4">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Fast Processing</h4>
                    <p className="text-gray-600 text-sm">Quick turnaround times with express options available</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-600 text-white p-2 rounded-lg mr-4">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Expert Team</h4>
                    <p className="text-gray-600 text-sm">Experienced professionals handling your documentation</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={openWhatsApp}
                className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Start Documentation Process
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Document Attestation?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your documents attested quickly and securely. Our expert team ensures all your documentation needs are met professionally.
          </p>
          <button 
            onClick={openWhatsApp}
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default DocumentationPage;