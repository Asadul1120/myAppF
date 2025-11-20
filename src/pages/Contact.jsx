import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    agreeTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      await fetch(`${import.meta.env.VITE_API_URL}/message/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        agreeTerms: false,
      });
      setSubmitStatus({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-900 text-white p-6 sm:p-4 md:p-6 rounded-xl">
      <div className="text-center mb-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-1">Get in Touch</h2>
        <p className="text-gray-400 text-sm sm:text-base">
          Have a question or want to work together? Fill out the form below.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl mx-auto bg-gray-800 p-4 sm:p-6 rounded-xl flex flex-col gap-4 shadow "
      >
        {submitStatus && (
          <div
            className={`p-3 rounded text-sm ${
              submitStatus.success
                ? "bg-green-900/80 text-green-200"
                : "bg-red-900/80 text-red-200"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="name" className="text-sm text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="text-sm text-gray-300">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="text-sm text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Your message here..."
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        <div className="flex items-start gap-2 text-sm">
          <input
            type="checkbox"
            id="agreeTerms"
            name="agreeTerms"
            checked={formData.agreeTerms}
            onChange={handleChange}
            className="mt-1 w-4 h-4 accent-blue-500"
            required
          />
          <label htmlFor="agreeTerms" className="text-gray-300">
            I agree to the terms and conditions
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !formData.agreeTerms}
          className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-all duration-300 flex items-center justify-center ${
            isSubmitting || !formData.agreeTerms
              ? "opacity-50 cursor-not-allowed"
              : "hover:shadow-md"
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
};

export default Contact;
