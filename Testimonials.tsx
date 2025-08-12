import React from 'react';
import { Star, Quote, ExternalLink } from 'lucide-react';

const Testimonials = () => {
  const openGoogleReviews = () => {
    window.open('https://www.google.com/maps/place/Haideri+Consultants/@31.5615197,74.2963916,17z/data=!3m1!4b1!4m6!3m5!1s0x391905de0b9b7c7f:0x5c5b7b5b5b5b5b5b!8m2!3d31.5615197!4d74.2963916!16s%2Fg%2F11c5q8q8q8', '_blank');
  };

  const testimonials = [
    {
      name: 'Ahmed Hassan',
      country: 'Canada',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Haideri Consultants made my Canadian immigration dream come true. Their professional guidance and support throughout the process was exceptional. Highly recommended!'
    },
    {
      name: 'Fatima Ali',
      country: 'Australia',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Thanks to their expert advice, I successfully obtained my Australian student visa. The team was always available to answer my questions and guide me through each step.'
    },
    {
      name: 'Muhammad Khan',
      country: 'United Kingdom',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Professional, reliable, and results-oriented. Haideri Consultants helped me secure my UK work visa efficiently. Their attention to detail is remarkable.'
    },
    {
      name: 'Sarah Ahmed',
      country: 'Germany',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'I was impressed by their knowledge of German immigration laws. They handled my case with utmost professionalism and I got my visa approved on the first attempt.'
    },
    {
      name: 'Ali Raza',
      country: 'New Zealand',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Excellent service from start to finish. The team at Haideri Consultants is knowledgeable, patient, and truly cares about their clients success.'
    },
    {
      name: 'Ayesha Malik',
      country: 'United States',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Getting my US visa seemed impossible until I found Haideri Consultants. Their expertise and dedication made all the difference. Forever grateful!'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our satisfied clients who achieved their immigration goals with our help
          </p>
        </div>

        {/* Google Reviews Widget */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-2xl mb-16 border border-blue-200">
          <div className="text-center mb-8">
            <div className="flex justify-center items-center mb-4">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" 
                alt="Google" 
                className="w-8 h-8 mr-3"
              />
              <h3 className="text-2xl font-bold text-gray-800">Google Reviews</h3>
            </div>
            <div className="flex justify-center items-center mb-4">
              <div className="flex mr-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-800">4.9</span>
              <span className="text-gray-600 ml-2">(150+ Reviews)</span>
            </div>
            <p className="text-gray-600 mb-6">
              See what our clients are saying about us on Google
            </p>
            <button 
              onClick={openGoogleReviews}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center mx-auto"
            >
              View All Google Reviews
              <ExternalLink className="ml-2 h-4 w-4" />
            </button>
          </div>
          
          {/* Sample Google Reviews */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  A
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Ahmad Khan</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                "Excellent service! They helped me get my Canadian visa approved quickly. Professional team with great expertise."
              </p>
              <p className="text-gray-400 text-xs mt-2">2 weeks ago</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  S
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Sarah Ahmed</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                "Best consultancy in Lahore! They guided me through every step of my Australia immigration process."
              </p>
              <p className="text-gray-400 text-xs mt-2">1 month ago</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  M
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Muhammad Ali</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                "Highly recommended! Got my UK work visa approved on first attempt. Thank you Haideri Consultants!"
              </p>
              <p className="text-gray-400 text-xs mt-2">3 weeks ago</p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl relative hover:shadow-lg transition-shadow">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-red-600 opacity-20" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold text-black">{testimonial.name}</h4>
                  <p className="text-red-600 font-medium">Migrated to {testimonial.country}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;