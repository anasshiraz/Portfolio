import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRightIcon, GithubIcon, LinkedinIcon } from "../components/Icons";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

const handleSubmit = (e) => {
  e.preventDefault();

  emailjs
    .send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      }
    )
    .then(
      () => {
        alert("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        console.error("Failed to send message:", error);
        alert("Something went wrong. Please try again.");
      }
    );
};

  return (
    <main className="mx-auto min-h-[calc(100vh-90px)] max-w-6xl px-6 py-20">
      
      {/* Page Heading */}
      <section className="animate-slide-left">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-blue-500">
          Contact / 03
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-neutral-900 md:text-6xl dark:text-neutral-100">
          Let's build something great.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
          Have an idea, a project, or an opportunity in mind? I'd love to hear
          about it. Send me a message and let's start a conversation.
        </p>
      </section>

      {/* Contact Section */}
      <section className="mt-20 grid gap-16 border-t border-neutral-200 pt-16 dark:border-neutral-800 md:grid-cols-[.8fr_1.2fr]">

        {/* Contact Information */}
        <div className="animate-slide-left animation-delay-100">
          <h2 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
            Say hello
          </h2>

          <div className="mt-8 space-y-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-500">Email</p>

              <a
                href="mailto:anasshiraz666@gmail.com"
                className="mt-2 inline-flex items-center gap-2 text-lg font-medium text-neutral-900 transition-colors hover:text-blue-500 dark:text-neutral-100"
              >
                anasshiraz666@gmail.com
                <ArrowUpRightIcon className="h-4 w-4" />
              </a>
            </div>

            <div className="border-t border-neutral-200 pt-6 dark:border-neutral-800">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-500">
                Elsewhere on the web
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://github.com/anasshiraz"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-700 transition-colors hover:border-blue-400 hover:text-blue-600 dark:border-neutral-800 dark:text-neutral-300 dark:hover:border-blue-500 dark:hover:text-blue-400"
                >
                  <GithubIcon className="h-4 w-4" /> GitHub
                </a>

                <a
                  href="https://linkedin.com/in/anas-shiraz-8025822b8"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-700 transition-colors hover:border-blue-400 hover:text-blue-600 dark:border-neutral-800 dark:text-neutral-300 dark:hover:border-blue-500 dark:hover:text-blue-400"
                >
                  <LinkedinIcon className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="animate-slide-right animation-delay-200 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900 md:p-8">

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
            >
              Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="mt-2 w-full border-b border-neutral-300 bg-transparent py-3 text-neutral-900 outline-none transition focus:border-neutral-900 dark:border-neutral-700 dark:text-neutral-100 dark:focus:border-neutral-100"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="mt-2 w-full border-b border-neutral-300 bg-transparent py-3 text-neutral-900 outline-none transition focus:border-neutral-900 dark:border-neutral-700 dark:text-neutral-100 dark:focus:border-neutral-100"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Tell me a little about your project..."
              className="mt-2 w-full resize-none border-b border-neutral-300 bg-transparent py-3 text-neutral-900 outline-none transition focus:border-neutral-900 dark:border-neutral-700 dark:text-neutral-100 dark:focus:border-neutral-100"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="rounded-md bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300"
          >
            Send Message
          </button>

        </form>
      </section>
    </main>
  );
}

export default Contact;