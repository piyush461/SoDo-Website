import React from "react";

const Terms = () => {
  return (
    <div className="container flex flex-col h-[100svh] overflow-hidden mx-auto p-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
        <p className="text-gray-600 mb-6">Last updated: 21st March 2025</p>
      </div>
      <div className="flex-1 h-full overflow-y-scroll pr-5">
        <h2 className="text-xl font-semibold mt-4">1. Introduction</h2>
        <p>
          Welcome to SoDo. As a client, these Terms of Service outline your
          rights and responsibilities when using our recruitment and talent
          acquisition solutions. By engaging with our services, you agree to
          abide by these terms.
        </p>

        <h2 className="text-xl font-semibold mt-4">2. Our Commitment to You</h2>
        <p>
          SoDo acts as your strategic hiring partner, helping you access
          top-tier talent efficiently. We connect you with qualified candidates
          based on your specific hiring needs, ensuring a seamless recruitment
          experience.
        </p>

        <h2 className="text-xl font-semibold mt-4">
          3. Your Responsibilities as a Client
        </h2>
        <ul className="list-disc ml-6">
          <li>
            Provide accurate and complete hiring requirements to help us find
            best-fit candidates.
          </li>
          <li>
            Maintain confidentiality of any candidate information shared with
            you.
          </li>
          <li>
            Adhere to fair hiring practices and comply with all applicable
            employment laws.
          </li>
          <li>
            Offer timely feedback on candidate submissions and interviews to
            optimize the hiring process.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-4">4. Fees and Payments</h2>
        <ul className="list-disc ml-6">
          <li>
            Service fees are mutually agreed upon before engagement and detailed
            in our contract.
          </li>
          <li>
            Payments must be made as per the agreed terms to ensure
            uninterrupted service.
          </li>
          <li>
            Late payments may result in additional charges or temporary
            suspension of services.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-4">
          5. Confidentiality and Data Protection
        </h2>
        <ul className="list-disc ml-6">
          <li>
            We respect your business privacy and handle your information in
            accordance with our Privacy Policy.
          </li>
          <li>
            Any candidate data provided to you must be treated confidentially
            and used solely for hiring purposes.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-4">
          6. Limitation of Liability
        </h2>
        <ul className="list-disc ml-6">
          <li>The final hiring decisions made by your company.</li>
          <li>
            The performance, actions, or conduct of candidates post-hiring.
          </li>
          <li>Any losses or damages arising from recruitment decisions.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4">
          7. Intellectual Property Rights
        </h2>
        <p>
          All content, tools, and proprietary materials used in our hiring
          process remain the exclusive property of SoDo. Unauthorized use,
          distribution, or reproduction is strictly prohibited.
        </p>

        <h2 className="text-xl font-semibold mt-4">8. Service Termination</h2>
        <ul className="list-disc ml-6">
          <li>There is a breach of contract.</li>
          <li>Payments are not made as per the agreed terms.</li>
          <li>
            Our services are misused in a manner that violates legal or ethical
            hiring practices.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-4">
          9. Governing Law and Disputes
        </h2>
        <p>
          These Terms of Service are governed by the laws of India. Any disputes
          will be subject to the jurisdiction of New Delhi.
        </p>

        <h2 className="text-xl font-semibold mt-4">10. Changes to Terms</h2>
        <p>
          We may update these terms as necessary. Any changes will be posted on
          our website, and continued use of our services implies acceptance of
          the revised terms.
        </p>

        <h2 className="text-xl font-semibold mt-4">11. Contact Information</h2>
        <p>For any inquiries, please reach out to us:</p>
        <p>
          Email:{" "}
          <a href="mailto:client@sodohire.com" className="text-blue-600">
            client@sodohire.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Terms;
