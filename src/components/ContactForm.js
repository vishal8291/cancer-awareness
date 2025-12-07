// src/components/ContactForm.js
import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-900/60 border border-slate-700 rounded-2xl p-6 md:p-8 shadow-xl space-y-5"
    >
      <div>
        <label className="block text-xs font-semibold text-slate-300 mb-1">
          Name
        </label>
        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-300 mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-300 mb-1">
          Message
        </label>
        <textarea
          name="message"
          rows="4"
          required
          value={form.message}
          onChange={handleChange}
          className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-50 resize-none focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2.5 rounded-lg bg-pink-500 text-slate-950 text-sm font-semibold hover:bg-pink-400 transition shadow-md"
      >
        Submit 
      </button>

      {submitted && (
        <p className="text-xs text-emerald-400">
          Thank you. Your message is noted locally (no backend connected).
        </p>
      )}
    </form>
  );
};

export default ContactForm;
