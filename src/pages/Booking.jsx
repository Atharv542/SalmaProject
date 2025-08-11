import React, { useState, useRef } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const BookingForm = () => {
  const [phone, setPhone] = useState("");
  const form = useRef(null);

const sendEmail = (e) => {
  e.preventDefault();

if (!phone || phone.replace(/\D/g, "").length < 10) {
  toast.error("Please enter a valid phone number.");
  return;
}

  emailjs
    .sendForm(
      "service_j4ah4kb",
      "template_hc6cpun",
      form.current,
      "qOUTSphaEMIDp4QnT"
    )
    .then(
      (result) => {
        console.log("Email sent:", result.text);
        toast.success("Your appointment form is submitted! Please select a time slot.");
        form.current.reset();
        setPhone(""); // clear phone manually
      },
      (error) => {
        console.error("Email error:", error.text);
        toast.error("Something went wrong. Please try again.");
      }
      
    );
   
};

  return (
    <div className="h-[calc(100vh-80px)] px-4 pt-40 bg-gray-50 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl border-t-4 border-pink-500 p-6 sm:p-8 overflow-hidden">
        <h2 className="text-2xl sm:text-3xl font-bold text-pink-500 text-center mb-4 sm:mb-6">
          Book a Free Life Coaching Session
        </h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4 sm:space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block text-black font-semibold mb-1">
              Full Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm sm:text-base"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-black font-semibold mb-1">
              Email Address <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm sm:text-base"
              required
            />
          </div>

          {/* Phone Number with Country Code */}
          <div>
            <label className="block text-black font-semibold mb-1">
              Phone Number <span className="text-red-600">*</span>
            </label>
            <PhoneInput
              country={"in"}
              value={phone}
              onChange={setPhone}
              inputClass="!w-full !h-12 !text-sm"
              inputStyle={{
                width: "100%",
                borderRadius: "0.5rem",
                border: "1px solid #D1D5DB",
              }}
              enableSearch={true}
              specialLabel={null}
              
              inputProps={{
                name: "user_phone",
              }}
              required
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-black font-semibold mb-1">
              Your Message <span className="text-red-600">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="3"
              placeholder="Tell us how we can help you"
              className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm sm:text-base"
              required
            ></textarea>
          </div>

          {/* CTA Button */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 sm:py-3 rounded-lg transition duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
          >
            Connect with Me
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;




