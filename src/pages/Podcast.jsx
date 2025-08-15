import React, { useState, useEffect, useRef } from "react";
import {
  Mic2,
  PlayCircle,
  Calendar,
  User,
  Mail,
  Sparkles,
  Youtube,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
export default function PodcastInvite({ youtubeUrl = "#" }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
    const formRef = useRef(); 

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 7000);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => setShowPopup(false);

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const form = new FormData(e.currentTarget);
  const payload = Object.fromEntries(form.entries());

  try {
    // Send form data to EmailJS
    await emailjs.send(
      "service_iqlskp8",   // Replace with your EmailJS service ID
      "template_kfbi15o",  // Replace with your EmailJS template ID
      payload,             // The object with form data
      "NlblmczVhV2Vxciv1"    // Replace with your EmailJS public key
    );

    console.log("Form submitted:", payload);
    toast.success("Your request has been submitted")
     formRef.current?.reset();
    setSubmitted(true);
  } catch (err) {
    console.error("EmailJS Error:", err);
    toast.error("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};

  const InviteCard = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-[0_25px_80px_-15px_rgba(255,182,193,0.4)] border border-rose-100/60 bg-gradient-to-br from-white via-rose-25/30 to-pink-25/20 backdrop-blur-xl"
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[200px]">
        {/* Left panel */}
        <div className="lg:col-span-2 p-8 lg:p-10 bg-gradient-to-br from-rose-50/80 via-pink-50/60 to-rose-100/40 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-rose-200/20 to-transparent rounded-full -mr-16 -mt-16" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-200/20 to-transparent rounded-full -ml-12 -mb-12" />
          
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-center gap-2 text-rose-400"
            >
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-bold tracking-wide uppercase">
                The Inner Bloom Podcast
              </span>
            </motion.div>

            <div className="mt-6 flex items-start gap-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
                className="mt-1 shrink-0 rounded-2xl bg-gradient-to-br from-rose-100 to-pink-100 p-3 shadow-lg shadow-rose-200/50"
              >
                <Mic2 className="h-7 w-7 text-rose-500" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                  Be a Guest & Share Your Story
                </h2>
                <p className="mt-3 text-base leading-relaxed text-rose-600/80 font-medium">
                  Join our heartfelt conversations on growth, healing, and inner
                  transformation. We feature founders, creators, and everyday
                  heroes—just like you.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-2xl border border-rose-200/80 bg-gradient-to-r from-white to-rose-50/50 px-6 py-3 text-sm font-bold text-rose-600 shadow-lg shadow-rose-200/30 transition-all duration-300 hover:shadow-xl hover:shadow-rose-200/40 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-rose-300/50"
              >
                <PlayCircle className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                Watch Episodes
              </a>
              <div className="inline-flex items-center gap-2 text-sm text-rose-400 font-medium">
                <Youtube className="h-4 w-4" />
                New episodes weekly
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right panel */}
        <div className="lg:col-span-3 p-8 lg:p-10">
          {!submitted ? (
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <label className="group block">
                  <span className="mb-2 flex items-center gap-2 text-sm font-bold text-rose-500">
                    <User className="h-4 w-4" /> Full Name
                  </span>
                  <input
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-rose-150 bg-gradient-to-r from-white to-rose-25/30 px-4 py-3 text-sm text-rose-700 placeholder-rose-300 outline-none transition-all duration-300 focus:border-rose-300 focus:ring-4 focus:ring-rose-200/30 focus:bg-white"
                  />
                </label>
                <label className="group block">
                  <span className="mb-2 flex items-center gap-2 text-sm font-bold text-rose-500">
                    <Mail className="h-4 w-4" /> Email Address
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-rose-150 bg-gradient-to-r from-white to-rose-25/30 px-4 py-3 text-sm text-rose-700 placeholder-rose-300 outline-none transition-all duration-300 focus:border-rose-300 focus:ring-4 focus:ring-rose-200/30 focus:bg-white"
                  />
                </label>
              </div>

              <label className="group block">
                <span className="mb-2 flex items-center gap-2 text-sm font-bold text-rose-500">
                  <Mic2 className="h-4 w-4" /> Topic You'd Love to Share
                </span>
                <input
                  name="topic"
                  required
                  placeholder="Share your ideas..."
                  className="w-full rounded-xl border border-rose-150 bg-gradient-to-r from-white to-rose-25/30 px-4 py-3 text-sm text-rose-700 placeholder-rose-300 outline-none transition-all duration-300 focus:border-rose-300 focus:ring-4 focus:ring-rose-200/30 focus:bg-white"
                />
              </label>

              <label className="group block">
                <span className="mb-2 flex items-center gap-2 text-sm font-bold text-rose-500">
                  <Calendar className="h-4 w-4" /> Your Availability
                </span>
                <input
                  name="availability"
                  placeholder="Enter your preferred date"
                  className="w-full rounded-xl border border-rose-150 bg-gradient-to-r from-white to-rose-25/30 px-4 py-3 text-sm text-rose-700 placeholder-rose-300 outline-none transition-all duration-300 focus:border-rose-300 focus:ring-4 focus:ring-rose-200/30 focus:bg-white"
                />
              </label>

              <label className="group block">
                <span className="mb-2 flex items-center gap-2 text-sm font-bold text-rose-500">
                  <Sparkles className="h-4 w-4" /> Tell us about yourself
                </span>
                <textarea
                  name="bio"
                  rows={4}
                  placeholder="Share your story..."
                  className="w-full rounded-xl border border-rose-150 bg-gradient-to-r from-white to-rose-25/30 px-4 py-3 text-sm text-rose-700 placeholder-rose-300 outline-none transition-all duration-300 focus:border-rose-300 focus:ring-4 focus:ring-rose-200/30 focus:bg-white resize-none"
                />
              </label>

              <label className="flex items-start gap-3 text-sm text-rose-600 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  className="mt-0.5 rounded border-rose-300 text-rose-500 focus:ring-rose-300/50 focus:ring-offset-0"
                />
                <span className="leading-relaxed">
                  I agree to be contacted regarding my podcast guest request and understand that my information will be used to coordinate the interview.
                </span>
              </label>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 px-8 py-3 text-sm font-bold text-white shadow-xl shadow-rose-300/40 transition-all duration-300 hover:shadow-2xl hover:shadow-rose-300/50 focus:outline-none focus:ring-4 focus:ring-rose-300/50 disabled:opacity-60 disabled:hover:scale-100"
                >
                  {loading ? (
                    <motion.span
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      Sending Request…
                    </motion.span>
                  ) : (
                    <>
                      <Mic2 className="h-4 w-4" /> Request to be a Guest
                    </>
                  )}
                </motion.button>

                <button
                  type="button"
                  onClick={() =>
                    window.open(youtubeUrl, "_blank", "noreferrer")
                  }
                  className="inline-flex cursor-pointer items-center gap-2 rounded-2xl border border-rose-200 bg-gradient-to-r from-white to-rose-50/50 px-6 py-3 text-sm font-bold text-rose-600 shadow-lg shadow-rose-200/20 transition-all duration-300 hover:shadow-xl hover:shadow-rose-200/30 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-rose-300/50"
                >
                  <PlayCircle className="h-4 w-4" /> Watch Episodes
                </button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-start gap-6 py-12"
            >
              <div className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-rose-100 to-pink-100 px-6 py-3 text-rose-600 shadow-lg shadow-rose-200/30">
                <Sparkles className="h-5 w-5" />
                <span className="text-lg font-bold">Request Sent Successfully! ✨</span>
              </div>
              <div className="space-y-2">
                <p className="text-base text-rose-600 font-medium">
                  Thank you for your interest in being a guest on The Inner Bloom Podcast!
                </p>
                <p className="text-sm text-rose-500">
                  We'll review your application and get back to you within 48 hours. In the meantime, feel free to explore our recent episodes.
                </p>
              </div>
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex cursor-pointer items-center gap-2 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 px-8 py-3 text-sm font-bold text-white shadow-xl shadow-rose-300/40 transition-all duration-300 hover:shadow-2xl hover:shadow-rose-300/50 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-rose-300/50"
              >
                <PlayCircle className="h-5 w-5" /> Explore Recent Episodes
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      {/* Inline placement */}
      {InviteCard}

      {/* Pop-up */}
      {/*<AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-br from-black/40 via-rose-900/20 to-pink-900/20 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="relative max-w-5xl w-full max-h-[90vh] overflow-auto"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
            >
              <button
                onClick={closePopup}
                className="absolute top-6 right-6 z-20 text-rose-400 hover:text-rose-600 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg shadow-rose-200/40 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-rose-300/50"
              >
                <X className="h-5 w-5" />
              </button>
              {InviteCard}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>*/}
    </>
  );
}