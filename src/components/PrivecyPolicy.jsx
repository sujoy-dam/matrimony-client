import React from 'react';

const PrivecyPolicy = () => {
    return (
        <div className='container mx-auto py-5 px-2 md:px-0'>
            <section className="mb-4">
                <h2 className="text-xl font-semibold">1. Introduction</h2>
                <p>Welcome to <span className='text-bold italic'>Our Bangla Matrimony Website</span>. We are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information.</p>
            </section>

            <section className="mb-4">
                <h2 className="text-xl font-semibold">2. Information We Collect</h2>
                <ul className="list-disc list-inside">
                    <li><strong>Personal Information:</strong> Name, email, phone number, date of birth, gender, and other details provided by users.</li>
                    <li><strong>Profile Information:</strong> Photographs, bio, preferences, and other details shared for matchmaking.</li>
                    <li><strong>Usage Data:</strong> IP address, browser type, device information, and interaction with our website.</li>
                </ul>
            </section>

            <section className="mb-4">
                <h2 className="text-xl font-semibold">3. How We Use Your Information</h2>
                <ul className="list-disc list-inside">
                    <li>Provide matchmaking services.</li>
                    <li>Enhance user experience and improve our platform.</li>
                    <li>Process payments (if applicable).</li>
                    <li>Ensure security and prevent fraud.</li>
                    <li>Communicate updates and promotions.</li>
                </ul>
            </section>

            <section className="mb-4">
                <h2 className="text-xl font-semibold">4. Data Sharing and Disclosure</h2>
                <p>We do not sell or rent your personal information. However, we may share data with:</p>
                <ul className="list-disc list-inside">
                    <li>Other users (limited profile information for matchmaking purposes).</li>
                    <li>Service providers (for payment processing, analytics, and hosting).</li>
                    <li>Law enforcement (if required by law).</li>
                </ul>
            </section>

            <section className="mb-4">
                <h2 className="text-xl font-semibold">5. Data Security</h2>
                <p>We implement security measures to protect your information. However, no online platform is 100% secure.</p>
            </section>

            <section className="mb-4">
                <h2 className="text-xl font-semibold">6. Cookies and Tracking Technologies</h2>
                <p>We use cookies and similar technologies to enhance user experience. Users can manage cookie preferences in their browser settings.</p>
            </section>

            <section className="mb-4">
                <h2 className="text-xl font-semibold">7. Your Rights and Choices</h2>
                <ul className="list-disc list-inside">
                    <li>Access, update, or delete your profile.</li>
                    <li>Opt-out of marketing emails.</li>
                    <li>Request data deletion.</li>
                </ul>
            </section>

            <section className="mb-4">
                <h2 className="text-xl font-semibold">8. Children’s Privacy</h2>
                <p>Our platform is not intended for users under 18. We do not knowingly collect data from minors.</p>
            </section>

            <section className="mb-4">
                <h2 className="text-xl font-semibold">9. Changes to This Policy</h2>
                <p>We may update this Privacy Policy. Users will be notified of significant changes.</p>
            </section>

            <section>
                <h2 className="text-xl font-semibold">10. Contact Us</h2>
                <p>For questions or concerns, contact us at [Your Contact Email].</p>
            </section>
        </div >
    );
};

export default PrivecyPolicy;