import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_881p8rp",
      "template_sfttams",
      formRef.current,
      "Qp9OUT4G1ZWhWCmbg"
    )
    .then(() => {
      setStatus("Message sent successfully!");
      e.target.reset(); // Reset form
    })
    .catch(() => setStatus("Failed to send message. Try again later."));
  };

  return (
    <div className="border-b border-neutral-900 pb-20 flex flex-col items-center justify-center min-h-screen">
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>

      <form ref={formRef} onSubmit={handleSubmit} className="w-full max-w-lg bg-gray-900 p-6 rounded-lg shadow-lg">
        <input type="text" name="from_name" placeholder="Name" required className="w-full p-2 mb-4 rounded bg-gray-800 text-white"/>
        <input type="email" name="from_email" placeholder="Email" required className="w-full p-2 mb-4 rounded bg-gray-800 text-white"/>
        <textarea name="message" placeholder="Message" required className="w-full p-2 mb-4 rounded bg-gray-800 text-white h-24"></textarea>
        <button type="submit" className="w-full p-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded">Send Message</button>
      </form>

      {status && <p className="mt-4 text-white">{status}</p>}

      <div className="mt-8 text-center">
        <a href="https://www.linkedin.com/in/sreekar-simha-narahari-798b39249" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline mx-4">LinkedIn</a>
        <a href="https://wa.me/905947621" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline mx-4">WhatsApp</a>
      </div>
    </div>
  );
};

export default Contact;
