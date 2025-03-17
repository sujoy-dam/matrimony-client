import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
const faqs = [
    {
        question: "How do I create an account?",
        answer: "Click on the 'Sign Up' button, fill in your details, and verify your email to create an account."
    },
    {
        question: "Is my information secure?",
        answer: "Yes, we prioritize security with encrypted data storage and privacy-focused features."
    },
    {
        question: "How do I search for a partner?",
        answer: "Use our advanced search filters to find compatible matches based on your preferences."
    },
    {
        question: "What are the benefits of a premium membership?",
        answer: "Premium members enjoy unlimited messaging, enhanced profile visibility, and access to exclusive features."
    },
    {
        question: "How can I contact customer support?",
        answer: "You can reach out to us via the contact form, email, or live chat support on our website."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

        const toggleFAQ = (index) => {
            setOpenIndex(openIndex === index ? null : index);
        };
   
    return (
        <div className="max-w-3xl mx-auto p-6" id='faq'>
            <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="collapse collapse-plus bg-base-200">
                        <input
                            type="checkbox"
                            className="peer"
                            checked={openIndex === index}
                            onChange={() => toggleFAQ(index)}
                        />
                        <div className="collapse-title text-lg font-medium flex justify-between items-center cursor-pointer">
                            {faq.question}
                            {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                        </div>
                        <div className="collapse-content">
                            <p className="text-gray-600">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;