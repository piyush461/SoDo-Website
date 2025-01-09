import { useRef, useState } from "react";
import Heading from "../Components/Heading";
import emailjs from "@emailjs/browser";
import { ToastContainer, Bounce, toast } from "react-toastify";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

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
    if (!email) {
      toast.error("Business Email is required.", { autoClose: 3000 });
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
      emailjs.sendForm("service_aor59y6", "template_g0tltf8", form.current, {
        publicKey: "-ks_e6AfytaMAlQBG",
      }),
      {
        pending: "Sending mail...",
        success: "Mail sent successfully!",
        error: "Failed to send mail. Please try again.",
      }
    );
  };

  return (
    <div id="contact" className="mt-24 h-auto flex justify-between">
      <div className="w-[35%] mt-4">
        <Heading head="Contact us today" />
        <h3>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius sint at
          accusamus, quasi deserunt maiores.
        </h3>
        <ToastContainer
          position="top-right"
          autoClose={5000}
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
      <div className="contactForm h-fit mt-4 border w-[50vw] p-9 rounded-[30px]">
        <form ref={form} onSubmit={submitHandler}>
          <div className="h-[100%]  w-[100%] flex flex-col gap-6">
            <div className="flex flex-wrap gap-8">
              <div className="h-fit w-[44%]">
                <label className="block text-lg ml-4">Full Name</label>
                <input
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border outline-[#0B99FF] mt-2 py-[17px] placeholder:text-[#B7B7B7] px-4 w-[100%] text-sm font-normal rounded-[16px]"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className="h-fit w-[44%]">
                <label className="block text-lg ml-4">Company</label>
                <input
                  name="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="border outline-[#0B99FF] mt-2 py-[17px] placeholder:text-[#B7B7B7] px-4 w-[100%] text-sm font-normal rounded-[16px]"
                  type="text"
                  placeholder="Enter company name"
                />
              </div>
              <div className="h-fit w-[44%]">
                <label className="block text-lg ml-4">Business Email</label>
                <input
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border outline-[#0B99FF] mt-2 py-[17px] px-4 placeholder:text-[#B7B7B7] w-[100%] text-sm font-normal rounded-[16px]"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="h-fit w-[44%]">
                <label className="block text-lg ml-4">Phone Number</label>
                <input
                  name="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="border outline-[#0B99FF] mt-2 py-[17px] w-[100%] placeholder:text-[#B7B7B7] px-4 text-sm font-normal rounded-[16px]"
                  type="tel"
                  placeholder="Enter your number"
                />
              </div>
            </div>
            <div className="">
              <label className="text-lg ml-4 block">Message</label>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message..."
                className="border outline-[#0B99FF] mb-7 mt-2 py-[17px] px-4 text-sm placeholder:text-[#B7B7B7] font-normal h-[95px] resize-none w-full rounded-[16px]"
              ></textarea>
              <button
                type="submit"
                className="hover:bg-gray-850 w-32 h-12 rounded-xl text-white bg-black"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
