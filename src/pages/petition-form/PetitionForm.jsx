import React, { useState } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import { FaCheck, FaChevronDown } from "react-icons/fa6";

const PetitionForm = () => {
  const [selectedType, setSelectedType] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const petitionTypes = [
    "Court Petitions",
    "Enforcement and Bankruptcy Petitions",
    "Petitions of Objection and Appeal",
    "Other Legal Petitions",
    "Notice",
  ];

  const renderCourtPetitionsForm = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm text-[18px] font-medium mb-2">
          Summary of the incident:
        </label>
        <textarea
          placeholder="Write a brief summary of the event"
          className="w-full p-2 border border-[#cccc] rounded-md min-h-[70px]"
        ></textarea>
      </div>
      <div>
        <label className="block text-sm text-[18px] font-medium mb-2">
          Plaintiff/Defendant Information:
        </label>
        <textarea
          placeholder="Enter the defendant's name, surname and contact information."
          className="w-full p-2 border border-[#cccc] rounded-md min-h-[70px]"
        ></textarea>
      </div>
      <div>
        <label className="block text-sm text-[18px] font-medium mb-2">
          Request:
        </label>
        <textarea
          placeholder="Please indicate your request regarding this petition (for example, request for compensation)"
          className="w-full p-2 border border-[#cccc] rounded-md min-h-[70px]"
        ></textarea>
      </div>

      <div className=" ">
        <label className="block text-sm text-[18px] font-medium mb-2">
          Scene:
        </label>
        <input
          type="text"
          placeholder="Enter the scene
"
          className="w-full flex justify-between items-center px-3  py-2 text-textblack border border-[#CCCCCC] rounded-md"
        />
      </div>

      <div className=" ">
        <label className="block text-sm text-[18px] font-medium mb-2">
          Date of the incident:
        </label>
        <input
          type="date"
          placeholder="Enter the scene
"
          className="w-full items-center px-3  py-2 text-textblack border border-[#CCCCCC] rounded-md"
        />
      </div>
      <button className=" px-6 bg-[#0057ff] text-white py-2 rounded hover:bg-orange-600">
        Create a Petition Draft
      </button>
    </div>
  );

  const renderEnforcementForm = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm text-[18px] font-medium mb-2">
          Enforcement Information:
        </label>
        <textarea
          placeholder="Provide details about the enforcement case."
          className="w-full p-2 border border-[#cccc] rounded-md min-h-[70px]"
        ></textarea>
      </div>
      <div>
        <label className="block text-sm text-[18px] font-medium mb-2">
          Debtor Information:
        </label>
        <textarea
          placeholder="Enter the debtor's name, surname and contact information."
          className="w-full p-2 border border-[#cccc] rounded-md min-h-[70px]"
        ></textarea>
      </div>
      <button className=" px-6 bg-[#0057ff] text-white py-2 rounded hover:bg-orange-600">
        Create a Petition Draft
      </button>
    </div>
  );

  const renderForm = () => {

  
    switch (selectedType) {
      case "Court Petitions":
        return renderCourtPetitionsForm();
      case "Enforcement and Bankruptcy Petitions":
        return renderEnforcementForm();
      case "Petitions of Objection and Appeal":
        return renderCourtPetitionsForm();
      case "Other Legal Petitions":
        return renderCourtPetitionsForm();
      case "Notice":
        return renderCourtPetitionsForm();
      default:
        return <div className="p-4 text-gray-500"></div>;
    }
  };

  return (
    <div className="grid grid-cols-[0fr_5fr]">
      <Sidebar />
      <div className="mx-20 bg-white shadow-lg px-20 py-12 rounded-md my-20">
        <h1 className="text-[24px] text-[#0A2540] mb-5">
          Select Petition Type{" "}
        </h1>
        <div className="space-y-6">
          <div className="relative">
            {/* Dropdown Trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="
          w-full 
          flex items-center justify-between 
          px-4 py-2 
          bg-blue-600 text-white 
          rounded-lg 
          shadow-md 
          hover:bg-blue-700 
          transition-colors 
          duration-300
        "
            >
              {selectedType || "Select Petition Type"}
              <FaChevronDown
                className={`
            transition-transform 
            duration-300 
            ${isOpen ? "rotate-180" : ""}
          `}
              />
            </button>

            {/* Dropdown List */}
            {isOpen && (
              <div
                className="
            absolute 
            top-full 
            mt-1 
            w-full 
            bg-white 
            border 
            border-gray-200 
            rounded-lg 
            shadow-lg 
            z-10 
            max-h-60 
            overflow-y-auto
          "
              >
                {petitionTypes.map((type) => (
                  <div
                    key={type}
                    onClick={() => {
                      setSelectedType(type);
                      setIsOpen(false);
                    }}
                    className="
                px-4 
                py-2 
                hover:bg-blue-50 
                cursor-pointer 
                flex 
                items-center 
                justify-between
                group
              "
                  >
                    <span
                      className={`
                  ${
                    selectedType === type
                      ? "text-blue-600 font-semibold"
                      : "text-gray-700"
                  }
                `}
                    >
                      {type}
                    </span>
                    {selectedType === type && (
                      <FaCheck className="text-blue-600" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          {renderForm()}
        </div>
      </div>
    </div>
  );
};

export default PetitionForm;
