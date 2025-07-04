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
      // Simulate form submission (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Reset form on successful submission
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
    <div className="  px-4 sm:px-6 lg:px-8 py-8 md:py-12 bg-gray-900 min-h-screen">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Get in Touch
        </h2>
        <p className="text-gray-400 max-w-md mx-auto">
          Have a question or want to work together? Fill out the form below.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className=" mx-auto max-w-3xl  bg-gray-800 p-6 md:p-8 rounded-xl  flex  flex-col gap-6 shadow-lg border border-gray-700"
      >
        {submitStatus && (
          <div
            className={`p-3 rounded-lg ${
              submitStatus.success
                ? "bg-green-900/80 text-green-200"
                : "bg-red-900/80 text-red-200"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-gray-300 text-sm">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600 placeholder-gray-400"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-gray-300 text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600 placeholder-gray-400"
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="subject" className="text-gray-300 text-sm">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600 placeholder-gray-400"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="text-gray-300 text-sm">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message here..."
            rows="6"
            value={formData.message}
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600 placeholder-gray-400"
            required
          ></textarea>
        </div>

        <div className="flex items-start gap-3 text-sm">
          <input
            type="checkbox"
            id="agreeTerms"
            name="agreeTerms"
            checked={formData.agreeTerms}
            onChange={handleChange}
            className="mt-1 w-4 h-4 accent-blue-500 rounded focus:ring-blue-500 border-gray-600"
            required
          />
          <label htmlFor="agreeTerms" className="text-gray-300">
            I agree to the terms and conditions
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !formData.agreeTerms}
          className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center ${
            isSubmitting || !formData.agreeTerms
              ? "opacity-50 cursor-not-allowed"
              : "hover:shadow-lg hover:shadow-blue-500/20"
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
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
