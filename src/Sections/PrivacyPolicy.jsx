import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-6 max-w-3xl">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-gray-600 mb-4">Last updated on 21st March 2025</p>

      <h2 className="text-2xl font-semibold mt-6">1. Introduction</h2>
      <p className="text-gray-700 mt-2">
        We at <strong>SoDo</strong> value your trust and are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or engage with our services. By using our website, you acknowledge and agree to the terms outlined in this policy.
      </p>

      <h2 className="text-2xl font-semibold mt-6">2. Information We Collect</h2>
      <ul className="list-disc list-inside text-gray-700 mt-2">
        <li><strong>Client Information:</strong> Your name, email address, phone number, company details, and hiring requirements when you inquire about our services.</li>
        <li><strong>Non-Personal Information:</strong> Your browser type, IP address, device information, pages visited, and browsing patterns collected via cookies and similar technologies.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">3. How We Use Your Information</h2>
      <ul className="list-disc list-inside text-gray-700 mt-2">
        <li>Connecting you with the right talent for your hiring needs.</li>
        <li>Providing support, responding to inquiries, and improving client service and relations.</li>
        <li>Sending relevant updates, insights, and industry trends (with the option to opt out at any time).</li>
        <li>Enhancing website security, functionality, and user experience.</li>
        <li>Complying with legal and regulatory requirements.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">4. Sharing of Information</h2>
      <p className="text-gray-700 mt-2">
        We respect your privacy and do not sell or trade your information. However, we may share data with:
      </p>
      <ul className="list-disc list-inside text-gray-700 mt-2">
        <li><strong>Recruitment consultants and candidates:</strong> To execute recruitment and hiring processes.</li>
        <li><strong>Service Providers:</strong> Who help us with website maintenance, analytics, and marketing.</li>
        <li><strong>Legal Authorities:</strong> If required by law or to protect our legal rights.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">5. Data Security</h2>
      <p className="text-gray-700 mt-2">
        We implement strict security measures to protect your information from unauthorized access. However, as no system is completely secure, we encourage you to take precautions in protecting your personal data.
      </p>

      <h2 className="text-2xl font-semibold mt-6">6. Your Rights and Choices</h2>
      <ul className="list-disc list-inside text-gray-700 mt-2">
        <li>You can request access, updates, or deletion of your personal data.</li>
        <li>You may opt out of marketing communications by clicking “unsubscribe.”</li>
        <li>You can disable cookies through your browser settings.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">7. Cookies and Tracking Technologies</h2>
      <p className="text-gray-700 mt-2">
        Our website uses cookies and analytics tools to improve user experience and track performance. You have control over your cookie preferences through your browser settings.
      </p>

      <h2 className="text-2xl font-semibold mt-6">8. Updates to This Policy</h2>
      <p className="text-gray-700 mt-2">
        We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated effective date.
      </p>

      <h2 className="text-2xl font-semibold mt-6">9. Contact Us</h2>
      <p className="text-gray-700 mt-2">
        For any questions or concerns regarding this policy, please contact us:
      </p>
      <p className="text-gray-700 font-semibold">Email: <a href="mailto:client@sodohire.com" className="text-blue-600">client@sodohire.com</a></p>
    </div>
  );
};

export default PrivacyPolicy;