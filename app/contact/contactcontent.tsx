"use client";

import { useState, useEffect } from "react";

import Notiflix from "notiflix";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    captchaAnswer: "", // frontend only
  });

  const [captcha, setCaptcha] = useState("");
  const CAPTCHA_LENGTH = 6;

  useEffect(() => {
    // Set document title
    document.title = "Contact | Sona School of Business and Management";

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Contact Sona School of Business and Management for inquiries, admissions, and support.";

    // Robots
    let metaRobots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.name = 'robots';
      document.head.appendChild(metaRobots);
    }
    metaRobots.content = 'index, follow';

    // Canonical link
    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = "https://www.sonabusinessschool.com/contact";

    // Generate captcha (your existing logic)
    generateCaptcha();
  }, []);


  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < CAPTCHA_LENGTH; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(result);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message, captchaAnswer } = formData;

    // Validation
    if (!name || !email || !message || !captchaAnswer) {
      return Notiflix.Notify.failure("Please fill in all fields, including CAPTCHA.");
    }

    // Frontend string CAPTCHA validation
    if (captchaAnswer.trim() !== captcha) {
      Notiflix.Notify.failure("CAPTCHA is incorrect. Please try again.");
      setFormData({ ...formData, captchaAnswer: "" });
      generateCaptcha();
      return;
    }

    try {
      const response = await fetch(
        "https://www.sonabusinessschool.com/mba-contact-api/api/contact",
        {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong.");
      }

      Notiflix.Notify.success(
        "Your message has been submitted! Our admissions team will respond shortly."
      );

      setFormData({ name: "", email: "", message: "", captchaAnswer: "" });
      generateCaptcha(); // reset CAPTCHA

    } catch (error: any) {
      Notiflix.Notify.failure(error.message || "Something went wrong.");
    }
  };


  return (
    <section className="w-full min-h-screen bg-gray-50 py-12 flex flex-col text-gray-600 body-font relative items-center">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        {/* Map Section */}
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            title="map"
            src="https://www.google.com/maps?q=Sona+College+of+Technology,Salem,+India&hl=en&z=16&output=embed"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1 text-sm leading-relaxed">
                Sona School of Business & Management, <br />
                Sona College of Technology, <br />
                TPT Main Road (Junction), <br />
                Salem - 636 005, Tamil Nadu, India.
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a
                href="mailto:admission@sonabusinessschool.com"
                className="leading-relaxed text-sm"
                style={{ color: "#0b3370ff" }}
              >
                admission@sonabusinessschool.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed text-sm flex flex-col">
                <a href="tel:+919900016900" className="hover:underline" style={{ color: "#0b3370ff" }}>
                  +91 99000 16900
                </a>
                <a href="tel:+919489600283" className="hover:underline" style={{ color: "#0b3370ff" }}>
                  +91 94896 00283
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 rounded-lg shadow-md p-6">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Get in Touch
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Have questions about our MBA programs? Fill out the form and we’ll
            get back to you.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-[#0b3370ff] focus:ring-2 focus:ring-[#0b3370ff] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-[#0b3370ff] focus:ring-2 focus:ring-[#0b3370ff] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                maxLength={200}
                placeholder="Type your message here (max 200 characters)"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-[#0b3370ff] focus:ring-2 focus:ring-[#0b3370ff] h-32 text-base outline-none text-gray-700 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>

            {/* String CAPTCHA */}
            <div className="relative mb-4 flex flex-col">
              <label className="leading-7 text-sm text-gray-600 mb-2">
                Enter the text below:
              </label>
              <div className="flex items-center mb-2">
                <span className="bg-gray-200 px-4 py-2 rounded text-lg font-mono tracking-widest select-none">
                  {captcha}
                </span>
                <button
                  type="button"
                  onClick={generateCaptcha}
                  className="ml-2 px-2 py-1 bg-[#0b3370ff] text-white rounded text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 4v5h.582M20 20v-5h-.581M4 9a8 8 0 0112.874-4.644M20 15a8 8 0 01-12.874 4.644"
                    />
                  </svg>
                </button>
              </div>
              <input
                type="text"
                name="captchaAnswer"
                placeholder="Type the text here"
                value={formData.captchaAnswer}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-[#0b3370ff] focus:ring-2 focus:ring-[#0b3370ff] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"

              />
            </div>

            <button
              type="submit"
              className="text-white border-0 py-2 px-6 focus:outline-none rounded text-lg"
              style={{ backgroundColor: "#0b3370ff" }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
