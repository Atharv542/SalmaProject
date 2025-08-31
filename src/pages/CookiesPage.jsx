import React from 'react';

const CookiesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl border border-rose-100 p-8 md:p-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-8">
            Cookies Policy
          </h1>
          
          <div className="prose prose-rose max-w-none">
            <p className="text-gray-600 mb-2">
              <strong>Effective Date:</strong> 2025
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Last Updated:</strong> September 2025
            </p>
            
            <p className="text-gray-700 mb-8">
              At The Inner Bloom Journey, we use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and support our services. This Cookies Policy explains what cookies are, how we use them, and how you can control them.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-rose-700 mb-4">1. What Are Cookies?</h2>
                <p className="text-gray-700">
                  Cookies are small text files placed on your device (computer, tablet, smartphone) when you visit a website. They help the site remember your actions and preferences over time to provide a more personalized experience.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-rose-700 mb-4">2. Types of Cookies We Use</h2>
                <p className="text-gray-700 mb-4">We use the following categories of cookies:</p>
                
                <div className="space-y-4">
                  <div className="bg-rose-50 p-4 rounded-lg border border-rose-200">
                    <h3 className="text-lg font-semibold text-rose-600 mb-2">a. Necessary Cookies</h3>
                    <p className="text-gray-700">
                      These cookies are essential for the website to function properly and cannot be switched off in our systems. They are usually set in response to actions like logging in or filling out forms.
                    </p>
                  </div>
                  
                  <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
                    <h3 className="text-lg font-semibold text-rose-600 mb-2">b. Performance & Analytics Cookies</h3>
                    <p className="text-gray-700">
                      These cookies collect information about how visitors use our site, such as which pages are visited most often. We use this data to improve our website's performance.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h3 className="text-lg font-semibold text-rose-600 mb-2">c. Functionality Cookies</h3>
                    <p className="text-gray-700">
                      These cookies allow our website to remember your preferences (e.g., language settings or region) and provide enhanced features.
                    </p>
                  </div>
                  
                  <div className="bg-rose-50 p-4 rounded-lg border border-rose-200">
                    <h3 className="text-lg font-semibold text-rose-600 mb-2">d. Marketing & Advertising Cookies</h3>
                    <p className="text-gray-700">
                      We may use these cookies to deliver relevant advertisements to you and track the effectiveness of our marketing campaigns. These cookies may be set by third-party services.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-rose-700 mb-4">3. Third-Party Cookies</h2>
                <p className="text-gray-700">
                  We may allow third-party services like Google Analytics or social media plugins to place cookies to help us analyze site usage or enable content sharing. These third parties are responsible for their own cookies and privacy practices.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-rose-700 mb-4">4. Your Choices</h2>
                <p className="text-gray-700 mb-4">You can control or disable cookies in several ways:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li><strong>Browser Settings:</strong> Most web browsers allow you to manage or delete cookies. Check your browser's help section for instructions.</li>
                  <li><strong>Cookie Consent Banner:</strong> When visiting our site, you may be presented with a cookie banner giving you the option to accept or decline non-essential cookies.</li>
                  <li><strong>Opt-Out Tools:</strong> You may also opt out of some third-party cookies via tools such as the Network Advertising Initiative or Your Online Choices.</li>
                </ul>
                <p className="text-gray-700">
                  Please note that disabling some cookies may affect the functionality or performance of our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-rose-700 mb-4">5. Changes to This Policy</h2>
                <p className="text-gray-700">
                  We may update this Cookies Policy from time to time. Changes will be posted on this page and reflected by the "Last Updated" date above.
                </p>
              </section>

              <section className="bg-rose-50 p-6 rounded-lg border border-rose-200">
                <h2 className="text-2xl font-semibold text-rose-700 mb-4">6. Contact Us</h2>
                <p className="text-gray-700">
                  If you have any questions or concerns about our use of cookies, please contact us at:
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

export default CookiesPage;