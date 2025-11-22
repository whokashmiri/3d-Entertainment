// ContactFormWithMap.jsx
import { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send to backend / email service
    console.log("Form submitted:", form);
  };

  return (
    <section className="bg-[#c8d0d4] text-white py-20 px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-700">
            Contact
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-wide">
            Let’s work together
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-700 max-w-2xl">
            Share a few details about your project or inquiry, and our team will
            get back to you as soon as possible.
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-10 lg:grid-cols-[1.1fr_minmax(0,1fr)] items-stretch">
          {/* FORM */}
          <div className=" bg-[#c8d0d4]  px-6 py-7 md:px-8 md:py-9">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full  border border-neutral-700 bg-neutral-900/70 px-3 py-2.5 text-sm text-white outline-none focus:border-white focus:ring-1 focus:ring-white/70"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full  border border-neutral-700 bg-neutral-900/70 px-3 py-2.5 text-sm text-white outline-none focus:border-white focus:ring-1 focus:ring-white/70"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* Phone + Subject */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-2"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full  border border-neutral-700 bg-neutral-900/70 px-3 py-2.5 text-sm text-white outline-none focus:border-white focus:ring-1 focus:ring-white/70"
                    placeholder="+966 ..."
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-2"
                  >
                    Project type
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full  border border-neutral-700 bg-neutral-900/70 px-3 py-2.5 text-sm text-white outline-none focus:border-white focus:ring-1 focus:ring-white/70"
                  >
                    <option value="">Select one</option>
                    <option value="film">Cinema / Film Production</option>
                    <option value="props">Props & Fabrication</option>
                    <option value="trade">Trade Show / Exhibition</option>
                    <option value="theme">Theme Park / Experience</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full  border border-neutral-700 bg-neutral-900/70 px-3 py-2.5 text-sm text-white outline-none focus:border-white focus:ring-1 focus:ring-white/70 resize-none"
                  placeholder="Tell us a bit about your project, timeline, and goals."
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <p className="text-xs text-gray-500 max-w-xs">
                  By submitting, you agree that we can contact you about your
                  inquiry via email or phone.
                </p>

                <button
                  type="submit"
                  className="inline-flex items-center  bg-[#A6000A] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(0,0,0,0.5)] transition hover:bg-[#9a363d]"
                >
                  Send message
                  <span className="ml-2 text-base">↗</span>
                </button>
              </div>
            </form>
          </div>

          {/* MAP */}
          <div className=" overflow-hidden ">
            {/* Replace src with your own Google Maps embed link */}
            <iframe
              title="3D Entertainment Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.9175310923792!2d39.14178171032434!3d21.58914196821437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3da87e12d03cb%3A0xaad451ac0b2c881f!2sSalama%20center!5e0!3m2!1sen!2ssa!4v1763830698163!5m2!1sen!2ssa"
              className="h-64 w-full md:h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />





          </div>
        </div>
      </div>
    </section>
  );
}
