import React from 'react';

const TermsAndAgreements = () => {
  const terms = [
    "Terms that govern use of ChatGPT, DALL·E and OpenAI's other services for individuals",
    "Terms that govern use of ChatGPT, DALL·E and OpenAI's other services for individuals",
    "Terms that govern use of ChatGPT, DALL·E and OpenAI's other services for individuals",
    "Terms that govern use of ChatGPT, DALL·E and OpenAI's other services for individuals",
    "Terms that govern use of ChatGPT, DALL·E and OpenAI's other services for individuals",
    "Terms that govern use of ChatGPT, DALL·E and OpenAI's other services for individuals"
  ];

  const agreements = [
    "Terms that govern use of ChatGPT, DALL·E and OpenAI's other services for individuals",
    "Terms that govern use of ChatGPT, DALL·E and OpenAI's other services for individuals",
    "Terms that govern use of ChatGPT, DALL·E and OpenAI's other services for individuals",
    "Terms that govern use of ChatGPT, DALL·E and OpenAI's other services for individuals",
    "Terms that govern use of ChatGPT, DALL·E and OpenAI's other services for individuals",
    "Terms that govern use of ChatGPT, DALL·E and OpenAI's other services for individuals"
  ];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-2">Terms and Agreements</h1>
        <p className="text-gray-600 text-sm">
          Affordable Plans for Every Need! Choose from flexible options tailored to fit your budget and goals.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-blue-600 text-lg font-medium mb-4">Terms</h2>
        <ul className="space-y-3">
          {terms.map((term, index) => (
            <li key={index} className="flex items-start">
              <a href="#" className="text-blue-600 hover:underline mr-2">Terms of use</a>
              <span className="text-gray-600 text-sm">{term}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-blue-600 text-lg font-medium mb-4">Agreements</h2>
        <ul className="space-y-3">
          {agreements.map((agreement, index) => (
            <li key={index} className="flex items-start">
              <a href="#" className="text-blue-600 hover:underline mr-2">Terms of use</a>
              <span className="text-gray-600 text-sm">{agreement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TermsAndAgreements;