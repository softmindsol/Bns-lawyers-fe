import Sidebar from "../../components/sidebar/sidebar";
import Link from "react-router-dom";

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
      <div className="mx-20 my-20 rounded-md bg-white px-20 py-12 shadow-lg">
        <div className="mb-6">
          <h1 className="mb-2 text-[24px] font-semibold text-[#0A2540]">
            Terms and Agreements
          </h1>
          <p className="text-[16px] text-textgray">
            Affordable Plans for Every Need! Choose from flexible options
            tailored to fit your budget and goals.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="mb-4 text-lg font-normal text-[#0057FF]">Terms</h2>
          <ul className="space-y-3">
            {terms.map((term, index) => (
              <li key={index} className="flex items-start">
                <Link
                  href="#"
                  className="mr-2 text-[16px] font-medium text-[#0A2540] hover:underline"
                >
                  Terms of use :
                </Link>
                <span className="text-[16px] text-[#696969]">{term}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-medium text-blue-600">Agreements</h2>
          <ul className="space-y-3">
            {agreements.map((agreement, index) => (
              <li key={index} className="flex items-start">
                <a href="#" className="mr-2 text-blue-600 hover:underline">
                  Terms of use
                </a>
                <span className="text-sm text-gray-600">{agreement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TermsAndAgreements;
