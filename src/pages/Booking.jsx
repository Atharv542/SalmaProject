import React, { useState, useRef } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { PopupModal } from "react-calendly";

const BookingForm = () => {
  const initialData={
    name: "",
    email: "",
    phone: "",
    message: "",
  }
  const formRef = useRef(null);
  const [isCalendlyOpen, setCalendlyOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    // Phone number validation
    if (!formData.phone || formData.phone.replace(/\D/g, "").length < 10) {
      toast.error("Please enter a valid phone number.");
      return;
    }

    // 1st email: send details to admin
    emailjs
      .sendForm(
        "service_j4ah4kb", // your admin email service ID
        "template_hc6cpun", // your admin template ID
        formRef.current,
        "qOUTSphaEMIDp4QnT"
      )
      .then(() => {
        toast.success(
          "Your appointment form is submitted! Please select a time slot."
        );
        setFormData(initialData);
        setCalendlyOpen(true);
      })
      .catch(() => {
        toast.error("Something went wrong. Please try again.");
      });

    // 2nd email: confirmation to user
    emailjs
      .sendForm(
        "service_m2mqngm", // your user confirmation service ID
        "template_inmmn0l", // your user confirmation template ID
        formRef.current,
        "akzRyfz66xpuRZCnF" // your user public key
      )
      .then(() => {
        console.log("Confirmation email sent to user");
      })
      .catch((error) => {
        console.log(error);
      });
  };

 

  const calendlyURL = ` https://calendly.com/atharvr808/30min?name=${encodeURIComponent(
    formData.name
  )}&email=${encodeURIComponent(formData.email)}&a1=${encodeURIComponent(
    formData.message
  )}`;

  return (
    <div className="h-[calc(100vh-80px)] px-4 pt-40 bg-gray-50 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl border-t-4 border-pink-500 p-6 sm:p-8 overflow-hidden">
        <h2 className="text-2xl sm:text-3xl font-bold text-pink-500 text-center mb-4 sm:mb-6">
          Book a Life Coaching Session
        </h2>
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-4 sm:space-y-6"
        >
          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-black font-semibold mb-1"
            >
              Full Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm sm:text-base"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-black font-semibold mb-1"
            >
              Email Address <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm sm:text-base"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-black font-semibold mb-1">
              Phone Number <span className="text-red-600">*</span>
            </label>
            <PhoneInput
              country={"in"}
              value={formData.phone}
              onChange={(phone) => setFormData({ ...formData, phone })}
              inputClass="!w-full !h-12 !text-sm"
              inputStyle={{
                width: "100%",
                borderRadius: "0.5rem",
                border: "1px solid #D1D5DB",
              }}
              enableSearch={true}
              specialLabel={null}
              inputProps={{
                name: "phone",
              }}
              required
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-black font-semibold mb-1"
            >
              Your Message <span className="text-red-600">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="3"
              placeholder="Tell us how we can help you"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
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

      {/* Calendly Popup */}
      <PopupModal
        url={calendlyURL}
        onModalClose={() => setCalendlyOpen(false)}
        open={isCalendlyOpen}
        rootElement={document.getElementById("root")}
      />

      <Toaster position="top-center" />
    </div>
  );
};

export default BookingForm;
