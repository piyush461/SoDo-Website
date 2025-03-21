import { useRef, useState, useEffect } from "react";
import Heading from "../Components/Heading";
import emailjs from "@emailjs/browser";
import { ToastContainer, Bounce, toast } from "react-toastify";
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactUs = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const form = useRef();
  const submitButton = useRef();

  const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    const allFieldsFilled = name && company && email && number && message;
    const emailValid = isEmailValid(email);
    setIsFormValid(allFieldsFilled && emailValid);

    if (allFieldsFilled && emailValid) {
      submitButton.current.classList.add("animate-contactButton");
    } else {
      submitButton.current.classList.remove("animate-contactButton");
    }
  }, [name, company, email, number, message]);

  const showToast = (type, message) => {
    if (!isToastVisible) {
      setIsToastVisible(true);
      toast[type](message, {
        autoClose: 3000,
        onClose: () => setIsToastVisible(false),
      });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!name) {
      showToast("error", "Full Name is required.");
      return;
    }
    if (!company) {
      showToast("error", "Company Name is required.");
      return;
    }
    if (!email || !isEmailValid(email)) {
      showToast("error", "Please enter a valid email address.");
      return;
    }
    if (!number) {
      showToast("error", "Phone Number is required.");
      return;
    }
    if (!message) {
      showToast("error", "Message is required.");
      return;
    }

    setName("");
    setCompany("");
    setEmail("");
    setNumber("");
    setMessage("");

    toast.promise(
      emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      }),
      {
        pending: "Sending message...",
        success: "Message sent successfully!",
        error: "Failed to send message. Please try again.",
      }
    );
  };

  return (
    <div
      id="contact"
      className="md:mt-24 mt-8 h-auto flex justify-between max-md:flex-col">
      <div className="md:w-[35%] mt-4">
        <Heading head="Contact us today" />
        <h3 className="my-2">
          Ready for your next perfect hire? Reach out to us to explore how SoDo
          can elevate and support your hiring needs.
        </h3>
        <ToastContainer
        limit={2}
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={true}
          draggable
          pauseOnHover={true}
          theme="light"
          transition={Bounce}
        />
      </div>
      <div className="contactForm h-fit mt-4 border md:w-[50vw] p-9 rounded-[30px]">
        <form ref={form} onSubmit={submitHandler}>
          <div className="h-[100%] w-[100%] flex flex-col gap-6">
            <div className="flex flex-wrap font-poppins max-md:flex-col gap-2 md:gap-8">
              <div className="h-fit md:w-[44%]">
                <label className="block md:text-lg text-sm ml-1">Name</label>
                <input
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border outline-[#0B99FF] my-2 py-3 md:py-[17px] placeholder:text-[#B7B7B7] px-4 md:w-[100%] w-full text-sm font-normal rounded-[7px] md:rounded-xl"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className="h-fit md:w-[44%]">
                <label className="block md:text-lg text-sm ml-1">Company</label>
                <input
                  name="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="border outline-[#0B99FF] my-2 py-3 md:py-[17px] placeholder:text-[#B7B7B7] px-4 w-[100%] text-sm font-normal rounded-[7px] md:rounded-xl"
                  type="text"
                  placeholder="Enter company name"
                />
              </div>
              <div className="h-fit md:w-[44%]">
                <label className="block md:text-lg text-sm ml-1">Business email</label>
                <input
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border outline-[#0B99FF] my-2 py-3 md:py-[17px] px-4 placeholder:text-[#B7B7B7] w-[100%] text-sm font-normal rounded-[7px] md:rounded-xl"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="h-fit md:w-[44%]">
                <label className="block md:text-lg text-sm ml-1">Contact number</label>
                <input
                  name="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="border outline-[#0B99FF] my-2 py-3 md:py-[17px] w-[100%] placeholder:text-[#B7B7B7] px-4 text-sm font-normal rounded-[7px] md:rounded-xl"
                  type="tel"
                  placeholder="Enter your number"
                />
              </div>
            </div>
            <div className="">
              <label className="md:text-lg text-sm font-poppins block ml-1">
                What are you looking forward to hire?
              </label>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your requirements. . ."
                className="border outline-[#0B99FF] mb-7 mt-2 py-3 md:py-[17px] px-4 text-sm placeholder:text-[#B7B7B7] font-normal h-[95px] resize-none w-full rounded-[7px] md:rounded-xl"></textarea>
              <button
                type="submit"
                ref={submitButton}
                className="submitButton contactButton w-32 h-12 rounded-xl before:rounded-xl text-white bg-black">
                Start Hiring
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
