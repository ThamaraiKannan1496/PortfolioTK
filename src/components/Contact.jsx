import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          formRef.current.reset();
          setLoading(false);
          setTimeout(() => setStatus(""), 3000);
        },
        () => {
          setStatus("Failed to send message. Try again!");
          setLoading(false);
          setTimeout(() => setStatus(""), 3000);
        }
      );
  };

  return (
    <>
      <section
        id="contact"
        className="
          relative w-full min-h-screen 
          bg-center bg-cover bg-no-repeat 
          flex flex-col items-center 
          pt-10 px-3
        "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1617309215127-ebeb4eddeba5?q=80&w=1170&auto=format&fit=crop')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* SECTION HEADING */}
        <div className="relative z-10 flex items-center justify-center gap-4 mb-10">
          <span className="w-20 h-[3px] bg-[#F76500] rounded-full"></span>

          <h2
            className="text-5xl font-bold font-bubblegum text-white text-center"
            data-aos="zoom-in"
          >
            Contact
          </h2>

          <span className="w-20 h-[3px] bg-[#F76500] rounded-full"></span>
        </div>

        {/* CONTACT FORM */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="
            relative z-10
            max-w-lg w-full
            py-8 px-6 md:p-10 
            rounded-2xl
            backdrop-blur-md bg-white/10 
            border border-white/30 
            shadow-2xl 
            text-white 
            space-y-5 
            font-poppins
          "
        >
          <h2 className="text-2xl font-medium font-poppins text-center">
            Send a note
          </h2>

          {/* Name */}
          <div>
            <label className="text-sm">Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="
                w-full p-3 mt-1 
                rounded bg-white/20 
                border border-white/30
                text-white placeholder-white/60
                focus:outline-none focus:ring-2 focus:ring-white/50
              "
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="
                w-full p-3 mt-1 
                rounded bg-white/20 
                border border-white/30
                text-white placeholder-white/60
                focus:outline-none focus:ring-2 focus:ring-white/50
              "
              placeholder="Enter your email"
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-sm">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="
                w-full p-3 mt-1 
                rounded bg-white/20 
                border border-white/30
                text-white placeholder-white/60
                focus:outline-none focus:ring-2 focus:ring-white/50
              "
              placeholder="Write your message..."
            ></textarea>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className={`
              relative block text-center font-poppins
              rounded-tl-2xl rounded-br-2xl
              w-full md:w-1/2 mx-auto py-2.5 mt-2
              font-medium transition-all duration-300 
              border border-black overflow-hidden group
              ${
                loading
                  ? "opacity-60 cursor-not-allowed bg-white text-black"
                  : "bg-white text-[#212529] hover:text-white cursor-pointer"
              }
            `}
          >
            {/* Button Text */}
            <span className="relative z-10">
              {loading ? "Sending..." : "Send Message"}
            </span>

            {/* Hover Black Background */}
            {!loading && (
              <span
                className="
                  absolute left-0 top-0 h-full w-0 bg-black
                  transition-all duration-300 group-hover:w-full
                "
              ></span>
            )}
          </button>

          {/* STATUS MESSAGE */}
          {status && (
            <p className="text-center text-sm font-medium mt-2 text-green-300">
              {status}
            </p>
          )}
        </form>
      </section>

      {/* FOOTER */}
      <div className="flex flex-col gap-y-3 md:flex-row items-center justify-around py-8 px-5 font-medium font-poppins">
        <h3>&copy; Copy Rights Reserved - 2026</h3>
        <h3>
          <span className="mr-2 font-caveat text-2xl">developed by -</span>
          Thamarai Kannan
        </h3>
      </div>
    </>
  );
}
