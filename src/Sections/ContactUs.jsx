import { useRef, useState, useEffect } from "react";
import Heading from "../Components/Heading";
import emailjs from "@emailjs/browser";
import { ToastContainer, Bounce, toast } from "react-toastify";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
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
      submitButton.current.classList.add('contactButton');
    } else {
      submitButton.current.classList.remove('contactButton');
    }
  }, [name, company, email, number, message]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!name) {
      toast.error("Full Name is required.", { autoClose: 3000 });
      return;
    }
    if (!company) {
      toast.error("Company Name is required.", { autoClose: 3000 });
      return;
    }
    if (!email || !isEmailValid(email)) {
      toast.error("Please enter a valid email address.", { autoClose: 3000 });
      return;
    }
    if (!number) {
      toast.error("Phone Number is required.", { autoClose: 3000 });
      return;
    }
    if (!message) {
      toast.error("Message is required.", { autoClose: 3000 });
      return;
    }

    setName("");
    setCompany("");
    setEmail("");
    setNumber("");
    setMessage("");

    toast.promise(
      emailjs.sendForm("service_qdehk46", "template_6jmdjjh", form.current, {
        publicKey: "XleSx7EXHqSVDXTmm",
      }),
      {
        pending: "Sending message...",
        success: "Message sent successfully!",
        error: "Failed to send message. Please try again.",
      }
    );
  };

  return (
    <div id="contact" className="mt-24 h-auto flex justify-between max-md:flex-col">
      <div className="md:w-[35%] mt-4">
        <Heading head="Contact us today" />
        <h3>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius sint at
          accusamus, quasi deserunt maiores.
        </h3>
        <ToastContainer
          position="top-right"
          autoClose={3000}
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
                <label className="block md:text-lg ml-4">Name</label>
                <input
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border outline-[#0B99FF] my-2 py-2 md:py-[17px] placeholder:text-[#B7B7B7] px-4 md:w-[100%] w-full text-sm font-normal rounded-[12px] md:rounded-[16px]"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className="h-fit md:w-[44%]">
                <label className="block md:text-lg ml-4">Company</label>
                <input
                  name="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="border outline-[#0B99FF] my-2 py-2 md:py-[17px] placeholder:text-[#B7B7B7] px-4 w-[100%] text-sm font-normal rounded-[12px] md:rounded-[16px]"
                  type="text"
                  placeholder="Enter company name"
                />
              </div>
              <div className="h-fit md:w-[44%]">
                <label className="block md:text-lg ml-4">Business Email</label>
                <input
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border outline-[#0B99FF] my-2 py-2 md:py-[17px] px-4 placeholder:text-[#B7B7B7] w-[100%] text-sm font-normal rounded-[12px] md:rounded-[16px]"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="h-fit md:w-[44%]">
                <label className="block md:text-lg ml-4">Phone Number</label>
                <input
                  name="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="border outline-[#0B99FF] my-2 py-2 md:py-[17px] w-[100%] placeholder:text-[#B7B7B7] px-4 text-sm font-normal rounded-[12px] md:rounded-[16px]"
                  type="tel"
                  placeholder="Enter your number"
                />
              </div>
            </div>
            <div className="">
              <label className="md:text-lg font-poppins ml-4 block">Message</label>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message..."
                className="border outline-[#0B99FF] mb-7 mt-2 py-2 md:py-[17px] px-4 text-sm placeholder:text-[#B7B7B7] font-normal h-[95px] resize-none w-full rounded-[12px] md:rounded-[16px]"
              ></textarea>
              <button
                type="submit"
                ref={submitButton}
                className="submitButton w-32 h-12 rounded-xl before:rounded-xl text-white bg-black"
              >
                Hire Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
