import React from 'react';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl border border-rose-100 p-8 md:p-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-rose max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Effective Date:</strong> 2025
            </p>
            
            <p className="text-gray-700 mb-8">
              Welcome to The Inner Bloom Journey, owned and operated by Salma Nisha. By accessing and using our website, services, and resources, you agree to comply with and be bound by the following Terms of Service. Please review them carefully.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-rose-700 mb-4">1. Introduction</h2>
                <p className="text-gray-700">
                  At The Inner Bloom Journey, we guide you on a transformative journey to unlock your full potential and live a life of purpose, meaning, and fulfilment. Our services are designed to support personal growth, professional development, and deeper self-understanding through certified Life and Therapy Coaching practices.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-rose-700 mb-4">2. Services</h2>
                <p className="text-gray-700 mb-4">
                  We offer a client-based coaching and guidance experience based on:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Mindset Coaching</li>
                  <li>Relationship Breakthrough Coaching</li>
                </ul>
                <p className="text-gray-700">
                  Each service is provided through a customized approach combining methodologies certified by Jay Shetty Certification School. By purchasing, booking, or participating in any of our services, you agree to the service descriptions and pricing as outlined on our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-rose-700 mb-4">3. No Guarantees</h2>
                <p className="text-gray-700">
                  While our methods and programs are designed to create real and lasting transformation, individual results may vary. We cannot and do not guarantee specific outcomes. Your success depends on your commitment, effort, and individual circumstances.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-rose-700 mb-4">4. Payment Terms</h2>
                <p className="text-gray-700">
                  All payments for coaching sessions, packages, and programs must be made in full prior to the commencement of services unless otherwise stated. We reserve the right to cancel sessions or services if payment has not been received.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-rose-700 mb-4">5. Cancellation & Refund Policy</h2>
                <p className="text-gray-700 mb-4">
                  Appointments must be cancelled or rescheduled at least 24 hours in advance. No-shows or cancellations made with less than 24 hours' notice may be subject to a cancellation fee.
                </p>
                <p className="text-gray-700">
                  Refunds are not typically provided for completed sessions. However, if you are dissatisfied with a service, we encourage you to contact us directly to discuss potential remedies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-rose-700 mb-4">6. Intellectual Property</h2>
                <p className="text-gray-700">
                  All materials provided on this website and during sessions—including but not limited to documents, videos, worksheets, and exercises—are the intellectual property of The Inner Bloom Journey. These materials may not be copied, reproduced, distributed, or used without our express written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-rose-700 mb-4">7. Confidentiality</h2>
                <p className="text-gray-700 mb-4">
                  We value your privacy and confidentiality. Any information shared during coaching sessions will remain confidential unless disclosure is required by law (e.g., risk of harm to self or others).
                </p>
                <p className="text-gray-700">
                  Please note that while coaching is a supportive and professional relationship, it is not a substitute for licensed therapy, counselling, or medical advice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-rose-700 mb-4">8. Code of Conduct</h2>
                <p className="text-gray-700">
                  We are committed to providing a supportive and respectful environment for all clients. By using our services, you agree to interact respectfully and responsibly. Harassment, discrimination, or inappropriate behaviour will not be tolerated and may result in termination of services without a refund.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-rose-700 mb-4">9. Limitation of Liability</h2>
                <p className="text-gray-700">
                  You acknowledge and agree that The Inner Bloom Journey, Salma Nisha, and affiliated parties are not liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of your access to or use of the services or materials.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-rose-700 mb-4">10. Modifications</h2>
                <p className="text-gray-700">
                  We reserve the right to update or change these Terms of Service at any time. Changes will be effective immediately upon posting on the website. Your continued use of the site or services after changes are made constitutes acceptance of those changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-rose-700 mb-4">11. Governing Law</h2>
                <p className="text-gray-700">
                  These Terms are governed by and construed in accordance with the laws of County of Alameda and State of California. Any disputes arising under these Terms will be resolved in the appropriate courts of that jurisdiction.
                </p>
              </section>

              <section className="bg-rose-50 p-6 rounded-lg border border-rose-200">
                <h2 className="text-2xl font-semibold text-rose-700 mb-4">Contact Information</h2>
                <p className="text-gray-700">
                  For any questions about these Terms of Service, please contact us at: 
                  <a href="mailto:theinnerbloomjourney07@gmail.com" className="text-rose-600 hover:text-rose-800 ml-1">
                    theinnerbloomjourney07@gmail.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;