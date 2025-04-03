import React from 'react';

const AboutUs = () => {
    const features = [
        { icon: "💍", title: "Verified Profiles", description: "Ensuring authenticity for genuine connections." },
        { icon: "❤️", title: "Smart Matchmaking", description: "Find your soulmate based on compatibility." },
        { icon: "🔒", title: "Secure & Private", description: "Your data is safe and secure with us." },
      ];
      
      const testimonials = [
        { name: "Amit & Priya", feedback: "We met through Bangla Matrimony and are happily married now!" },
        { name: "Rahul & Sneha", feedback: "A trustworthy platform to find true love!" },
      ];
    return (
        <div className="bg-base-100 py-12 px-6">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Welcome to <span className="font-semibold text-indigo-600">Bangla Matrimony</span>,
          your trusted partner in finding the perfect life companion. We are committed to 
          helping individuals connect with their ideal match based on values, interests, and beliefs.
        </p>
      </div>

      {/* Features Section */}
      <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="card bg-white shadow-xl p-6 text-center">
            <div className="text-4xl mb-3 text-indigo-600">{feature.icon}</div>
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-500 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Testimonials Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900">What Our Users Say</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card bg-white shadow-lg p-6">
              <p className="text-gray-600">“{testimonial.feedback}”</p>
              <h4 className="mt-4 font-semibold text-indigo-600">- {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Join Us Today</h2>
        <p className="text-gray-600 mt-2">Find your perfect match and start your journey towards happiness.</p>
        <button className="btn bg-pink-400 mt-4">Get Started</button>
      </div>
    </div>
    );
};

export default AboutUs;