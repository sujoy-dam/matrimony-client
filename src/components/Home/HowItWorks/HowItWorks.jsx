import React from 'react';

const HowItWorks = () => {
    const steps = [
        { icon: "📝", title: "Create Profile", description: "Sign up and create your detailed profile to find a compatible match." },
        { icon: "🔍", title: "Find Matches", description: "Browse through verified profiles and find matches that suit you best." },
        { icon: "💌", title: "Connect & Communicate", description: "Send interest, chat securely, and take the next step towards marriage." },
      ];
      
    return (
        <div className="bg-base-100 shadow-xl border rounded-xl py-12 px-6">
            {/* Hero Section */}
            <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold">How It Works</h1>
                <p className="mt-4 text-lg">
                    Finding your perfect match is easy with MatrimonyHub. Follow these simple steps to start your journey.
                </p>
            </div>

            {/* Steps Section */}
            <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {steps.map((step, index) => (
                    <div key={index} className="card bg-white shadow-xl p-6 text-center">
                        <div className="text-4xl mb-3 text-indigo-600">{step.icon}</div>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                        <p className="text-gray-500 mt-2">{step.description}</p>
                    </div>
                ))}
            </div>

            {/* Additional Information */}
            <div className="mt-16 max-w-4xl mx-auto text-center">
                <h2 className="text-2xl font-bold">Why Choose MatrimonyHub?</h2>
                <p className="mt-4">
                    MatrimonyHub is dedicated to helping individuals find their perfect life partner with the utmost safety and efficiency. Our platform ensures:
                </p>
                <ul className="list-disc list-inside mt-4">
                    <li>Strict verification of profiles for authenticity.</li>
                    <li>AI-powered matchmaking for better compatibility.</li>
                    <li>Secure and private communication tools.</li>
                    <li>Personalized assistance for premium members.</li>
                </ul>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
                <h2 className="text-2xl font-bold">Ready to Find Your Match?</h2>
                <p className="mt-2">Join MatrimonyHub today and take the first step towards a lifetime of happiness.</p>
                <button className="btn btn-primary mt-4">Get Started</button>
            </div>
        </div>
    );
};

export default HowItWorks;