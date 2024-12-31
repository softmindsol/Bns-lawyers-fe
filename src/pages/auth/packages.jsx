import React from "react";
import { BsCheckLg } from "react-icons/bs";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaFire } from "react-icons/fa6";
import { RiRocketFill } from "react-icons/ri";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";

const Packages = () => {
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

  return (
    <div className="grid grid-cols-[0fr_5fr]">
      <Sidebar />
      <div>
      <Navbar/>
      <div className="min-h-screen px-4 sm:px-6 my-24">
   
   <h1 className="text-[#0A2540] text-[24px] mb-2 font-semibold">
     Upgrade your plan
   </h1>
   <span className="text-[16px] font-normal text-[#696969]">
     {" "}
     Affordable Plans for Every Need! Choose from flexible options tailored
     to fit your budget and goals.{" "}
   </span>
   <div className="container mx-auto pr-20">
     <div className="grid lg:grid-cols-3 pb-10 gap-6">
       {pricingPlan.map((item, index) => (
         <div
           key={index}
           className={`bg-white shadow-lg rounded-2xl overflow-hidden relative ${
             item.mostPopular
               ? "border-4 border-[#0A2540] scale-105"
               : item.recommended
               ? "border-2 border-[#0A2540]"
               : "border-2 border-transparent hover:border-[#0A2540]"
           }`}
         >
           {item.mostPopular && (
             <div className="absolute top-1 left-1 bg-[#e5e4e2] text-[#0a2540] px-3 py-1 rounded-full font-medium text-sm flex items-center gap-2">
               <FaFire />
               Most Popular
             </div>
           )}
           {item.recommended && (
             <div className="absolute top-1 left-1 bg-[#ffbf00] text-white px-3  py-1 rounded-full font-medium text-sm flex items-center gap-2">
               <RiRocketFill />
               Recommended
             </div>
           )}
           <div
             className={`py-8 px-6 text-center ${
               item.mostPopular || item.recommended
                 ? "bg-[#0A2540] text-white"
                 : "bg-[#d1d1d1] text-[#0A2540]"
             }`}
           >
             <h2 className="text-2xl font-bold mb-2">{item.package}</h2>
             <div className="text-5xl font-bold mb-4">{item.price}</div>
             <button
               className={`text-sm font-medium py-3 px-6 rounded-full transition-colors ${
                 item.mostPopular || item.recommended
                   ? "bg-white text-[#0A2540] hover:bg-[#0A2540] border  hover:border hover:border-white  hover:text-white"
                   : "bg-[#0A2540]rounded-full border bg-[#0A2540] text-white hover:bg-white hover:border hover:border-[#0A2540] hover:text-[#0A2540]"
               }`}
             >
               Get Started
             </button>
           </div>
           <div className="p-6">
             <h3 className="text-lg font-bold mb-4">What you will get:</h3>
             <ul className="space-y-3">
               {item.featurelist.map((feature, index) => (
                 <li key={index} className="flex items-center gap-3">
                   <BsCheckLg className="text-green-500" />
                   <span className="text-gray-600">{feature}</span>
                 </li>
               ))}
             </ul>
             <div className="flex justify-center mt-4">
               {[...Array(5)].map((_, i) =>
                 i < 4 ? (
                   <FaStar key={i} className="text-yellow-400 mr-1" />
                 ) : (
                   <FaRegStar key={i} className="text-yellow-400 mr-1" />
                 )
               )}
             </div>
           </div>
         </div>
       ))}
     </div>
   </div>
 </div>
      </div>
    
    </div>
  );
};

export default Packages;
