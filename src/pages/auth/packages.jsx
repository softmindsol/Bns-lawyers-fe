import Layout from "../../layout";
import { BsCheckLg } from "react-icons/bs";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaFire } from "react-icons/fa6";
import { RiRocketFill } from "react-icons/ri";
import { useEffect } from "react";
import usePlanStore from "../../stores/plan.store";

const Packages = () => {
  const { getAllPlans, plans } = usePlanStore();
  const pricingPlan = [
    {
      package: "Basic Plan",
      price: "£500",
      featurelist: [
        "AI Prompts: 10 prompts per month",
        "Turnaround Time: 48 hours",
        "Legal Categories: Basic (e.g., Contracts, Employment Law)",
        "Revisions: 1 round",
        "Document Formats: PDF & Word",
        "Dedicated Support: Email only",
        "Data Storage: 1 month",
      ],
      mostPopular: false,
      recommended: false,
    },
    {
      package: "Standard Plan",
      price: "£1,200",
      featurelist: [
        "AI Prompts: 25 prompts per month",
        "Turnaround Time: 24 hours",
        "Legal Categories: Standard (e.g., Property, Family, Corporate Law)",
        "Revisions: 2 rounds",
        "Document Formats: PDF, Word & Google Docs",
        "Dedicated Support: Priority email & chat",
        "Data Storage: 3 months",
      ],
      mostPopular: false,
      recommended: true,
    },
    {
      package: "Premium Plan",
      price: "£2,500",
      featurelist: [
        "AI Prompts: Unlimited prompts per month",
        "Turnaround Time: 12 hours",
        "Legal Categories: All Categories + Specialized Fields (e.g., International, Intellectual Property)",
        "Revisions: Unlimited",
        "Document Formats: PDF, Word, Google Docs & Custom",
        "Dedicated Support: 24/7 VIP support (email, chat, phone)",
        "Data Storage: 1 year",
        "Customizable AI Responses: Yes",
      ],
      mostPopular: true,
      recommended: false,
    },
  ];

  useEffect(() => {
    getAllPlans();
  }, []);

  return (
    <Layout>
      <div>
        <div className="my-24 min-h-screen px-4 sm:px-6">
          <h1 className="mb-2 text-[24px] font-semibold text-[#0A2540]">
            Upgrade your plan
          </h1>
          <span className="text-[16px] font-normal text-[#696969]">
            {" "}
            Affordable Plans for Every Need! Choose from flexible options
            tailored to fit your budget and goals.{" "}
          </span>
          <div className="container mx-auto pr-20">
            <div className="grid gap-6 pb-10 lg:grid-cols-3">
              {pricingPlan.map((item, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-2xl bg-white shadow-lg ${
                    item.mostPopular
                      ? "scale-105 border-4 border-[#0A2540]"
                      : item.recommended
                        ? "border-2 border-[#0A2540]"
                        : "border-2 border-transparent hover:border-[#0A2540]"
                  }`}
                >
                  {item.mostPopular && (
                    <div className="absolute left-1 top-1 flex items-center gap-2 rounded-full bg-[#e5e4e2] px-3 py-1 text-sm font-medium text-[#0a2540]">
                      <FaFire />
                      Most Popular
                    </div>
                  )}
                  {item.recommended && (
                    <div className="absolute left-1 top-1 flex items-center gap-2 rounded-full bg-[#ffbf00] px-3 py-1 text-sm font-medium text-white">
                      <RiRocketFill />
                      Recommended
                    </div>
                  )}
                  <div
                    className={`px-6 py-8 text-center ${
                      item.mostPopular || item.recommended
                        ? "bg-[#0A2540] text-white"
                        : "bg-[#d1d1d1] text-[#0A2540]"
                    }`}
                  >
                    <h2 className="mb-2 text-2xl font-bold">{item.package}</h2>
                    <div className="mb-4 text-5xl font-bold">{item.price}</div>
                    <button
                      className={`rounded-full px-6 py-3 text-sm font-medium transition-colors ${
                        item.mostPopular || item.recommended
                          ? "border bg-white text-[#0A2540] hover:border hover:border-white hover:bg-[#0A2540] hover:text-white"
                          : "bg-[#0A2540]rounded-full border bg-[#0A2540] text-white hover:border hover:border-[#0A2540] hover:bg-white hover:text-[#0A2540]"
                      }`}
                    >
                      Get Started
                    </button>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-4 text-lg font-bold">
                      What you will get:
                    </h3>
                    <ul className="space-y-3">
                      {item.featurelist.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <BsCheckLg className="text-green-500" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex justify-center">
                      {[...Array(5)].map((_, i) =>
                        i < 4 ? (
                          <FaStar key={i} className="mr-1 text-yellow-400" />
                        ) : (
                          <FaRegStar key={i} className="mr-1 text-yellow-400" />
                        ),
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Packages;
