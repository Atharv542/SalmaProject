import React from 'react';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl border border-rose-100 p-8 md:p-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-rose max-w-none">
            <p className="text-gray-600 mb-2">
              <strong>Effective Date:</strong> 2025
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Last Updated:</strong> September 2025
            </p>
            
            <p className="text-gray-700 mb-8">
              At The Inner Bloom Journey, owned and operated by Salma Nisha, your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. By accessing our website and using our services, you consent to the practices described in this policy.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-rose-700 mb-4">1. Information We Collect</h2>
                <p className="text-gray-700 mb-4">We may collect the following types of information:</p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-rose-600 mb-2">a. Personal Information:</h3>
                    <p className="text-gray-700">
                      When you book a session, sign up for a newsletter, or contact us, we may collect personal data including your name, email address, phone number, and payment information.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-rose-600 mb-2">b. Usage Data:</h3>
                    <p className="text-gray-700">
                      We may collect information automatically when you use the site, such as your IP address, browser type, operating system, pages visited, and timestamps.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-rose-600 mb-2">c. Cookies & Tracking Technologies:</h3>
                    <p className="text-gray-700">
                      We use cookies and similar technologies to enhance your browsing experience and gather information about usage patterns.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-rose-700 mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Provide, operate, and maintain our services</li>
                  <li>Process transactions and send confirmations</li>
                  <li>Respond to inquiries and provide customer support</li>
                  <li>Send updates, newsletters, or promotional materials (with your consent)</li>
                  <li>Improve website functionality and user experience</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-rose-700 mb-4">3. How We Share Your Information</h2>
                <p className="text-gray-700 mb-4">
                  We do not sell, trade, or rent your personal information. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>With service providers who help us operate our business (e.g., payment processors, email marketing services)</li>
                  <li>To comply with legal obligations, law enforcement requests, or to protect our rights</li>
                  <li>With your explicit consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-rose-700 mb-4">4. Data Security</h2>
                <p className="text-gray-700">
                  We implement appropriate technical and organizational measures to protect your personal data. However, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-rose-700 mb-4">5. Your Rights and Choices</h2>
                <p className="text-gray-700 mb-4">Depending on your location, you may have the right to:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
                  <li>Access the personal information we hold about you</li>
                  <li>Request corrections or deletions of your data</li>
                  <li>Withdraw consent at any time for processing or marketing</li>
                  <li>Lodge a complaint with a data protection authority</li>
                </ul>
                <p className="text-gray-700">
                  To exercise any of these rights, please contact us at theinnerbloomjourney07@gmail.com.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-rose-700 mb-4">6. Third-Party Links</h2>
                <p className="text-gray-700">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review their privacy policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-rose-700 mb-4">7. Children's Privacy</h2>
                <p className="text-gray-700">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected such data, please contact us so we can delete it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-rose-700 mb-4">8. Changes to This Privacy Policy</h2>
                <p className="text-gray-700">
                  We reserve the right to update or modify this Privacy Policy at any time. Changes will take effect immediately upon posting. Continued use of the website after such changes constitutes acceptance.
                </p>
              </section>

              <section className="bg-rose-50 p-6 rounded-lg border border-rose-200">
                <h2 className="text-2xl font-semibold text-rose-700 mb-4">9. Contact Us</h2>
                <p className="text-gray-700">
                  If you have any questions or concerns about this Privacy Policy, please contact us at:
                </p>
                <p className="text-rose-600 font-medium mt-2">
                  📧 theinnerbloomjourney07@gmail.com
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;