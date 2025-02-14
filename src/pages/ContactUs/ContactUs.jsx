import React from 'react';

const ContactUs = () => {
    const faqs = [
        {
          question: 'How do I create an account?',
          answer: 'To create an account, click on the "Sign Up" button at the top right corner and fill in the required details.',
        },
        {
          question: 'Is my personal information secure?',
          answer: 'Yes, we prioritize your privacy and ensure that your personal information is protected with advanced security measures.',
        },
        // Add more FAQs as needed
      ];
    return (
        <div className="bg-gray-100 py-12 px-6">
            {/* Hero Section */}
            <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
                <p className="mt-4 text-lg text-gray-600">
                    Have any questions or need assistance? Feel free to reach out to us. We are here to help you!
                </p>
            </div>

            {/* Contact Form */}
            <div className="mt-12 max-w-4xl mx-auto bg-white shadow-xl p-8 rounded-lg">
                <form className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-semibold">Name</label>
                        <input type="text" className="input input-bordered w-full mt-1" placeholder="Enter your name" required />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold">Email</label>
                        <input type="email" className="input input-bordered w-full mt-1" placeholder="Enter your email" required />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold">Message</label>
                        <textarea className="textarea textarea-bordered w-full mt-1" rows="4" placeholder="Your message" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-full">Send Message</button>
                </form>
            </div>

            {/* Contact Information */}
            <div className="mt-16 text-center">
                <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
                <p className="text-gray-600 mt-2">Reach us through email or call us directly.</p>
                <div className="mt-4">
                    <p className="text-lg font-semibold text-indigo-600">📧 support@matrimonyhub.com</p>
                    <p className="text-lg font-semibold text-indigo-600">📞 +123 456 7890</p>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-16 max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 text-center">Frequently Asked Questions</h2>
                <div className="mt-8">
                    {faqs.map((faq, index) => (
                        <div key={index} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-4">
                            <input type="checkbox" />
                            <div className="collapse-title text-lg font-medium">
                                {faq.question}
                            </div>
                            <div className="collapse-content">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default ContactUs;