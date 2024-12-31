import React from "react";
import Sidebar from "../../components/sidebar/sidebar";

const TermsAndAgreements = () => {
  const terms = [
    "Terms that govern use of ChatGPT, DALL·E and OpenAI's other services for individuals",
    "Terms that govern use of ChatGPT, DALL·E and OpenAI's other services for individuals",
    "Terms that govern use of ChatGPT, DALL·E and OpenAI's other services for individuals",
    "Terms that govern use of ChatGPT, DALL·E and OpenAI's other services for individuals",
    "Terms that govern use of ChatGPT, DALL·E and OpenAI's other services for individuals",
    "Terms that govern use of ChatGPT, DALL·E and OpenAI's other services for individuals",
  ];

  const agreements = [
    "Terms that govern use of ChatGPT, DALL·E and OpenAI's other services for individuals",
    "Terms that govern use of ChatGPT, DALL·E and OpenAI's other services for individuals",
    "Terms that govern use of ChatGPT, DALL·E and OpenAI's other services for individuals",
    "Terms that govern use of ChatGPT, DALL·E and OpenAI's other services for individuals",
    "Terms that govern use of ChatGPT, DALL·E and OpenAI's other services for individuals",
    "Terms that govern use of ChatGPT, DALL·E and OpenAI's other services for individuals",
  ];

  return (
    <div className="grid grid-cols-[0fr_5fr]">
      <Sidebar />
      <div className="mx-20 bg-white shadow-lg px-20 py-12 rounded-md my-20">
        <div className="mb-6">
          <h1 className="text-[24px] text-[#0A2540] font-semibold mb-2">
            Terms and Agreements
          </h1>
          <p className="text-textgray text-[16px]">
            Affordable Plans for Every Need! Choose from flexible options
            tailored to fit your budget and goals.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-[#0057FF] text-lg font-normal  mb-4">Terms</h2>
          <ul className="space-y-3">
            {terms.map((term, index) => (
              <li key={index} className="flex items-start">
                <a
                  href="#"
                  className="text-[#0A2540] text-[16px] font-medium hover:underline mr-2"
                >
                  Terms of use :
                </a>
                <span className="text-[#696969] text-[16px]">{term}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-blue-600 text-lg font-medium mb-4">Agreements</h2>
          <ul className="space-y-3">
            {agreements.map((agreement, index) => (
              <li key={index} className="flex items-start">
                <a href="#" className="text-blue-600 hover:underline mr-2">
                  Terms of use
                </a>
                <span className="text-gray-600 text-sm">{agreement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TermsAndAgreements;
