"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    console.log("Form submitted", data);
    setStatus("Thanks! We will reach out soon.");
    form.reset();
  };

  return (
    <section id="contact" className="bg-white">
      <div className="container py-16 lg:py-20">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
            <p className="mt-2 text-gray-600">
              Have questions about admissions, curriculum, or scholarships? Send us a message and our team will contact you.
            </p>
            {status && <p className="mt-3 rounded-lg bg-green-50 px-4 py-3 text-green-700">{status}</p>}
          </div>

          <form onSubmit={onSubmit} className="card">
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input required name="name" placeholder="Your full name" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-maroon focus:ring-1 focus:ring-maroon" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input required type="email" name="email" placeholder="you@example.com" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-maroon focus:ring-1 focus:ring-maroon" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea required name="message" rows={4} placeholder="How can we help you?" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-maroon focus:ring-1 focus:ring-maroon" />
              </div>
              <button className="btn btn-primary w-full">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
