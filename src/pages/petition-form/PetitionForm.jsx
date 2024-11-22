import React, { useState } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import { FaCheck, FaChevronDown } from "react-icons/fa6";

const PetitionForm = () => {
  const [selectedType, setSelectedType] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const petitionForms = {
    "Court Petitions": {
      fields: [
        { 
          type: 'textarea', 
          label: 'Summary of the incident', 
          placeholder: 'Write a brief summary of the event' 
        },
        { 
          type: 'textarea', 
          label: 'Plaintiff/Defendant Information', 
          placeholder: 'Enter the defendant\'s name, surname and contact information.' 
        },
        { 
          type: 'textarea', 
          label: 'Request', 
          placeholder: 'Please indicate your request regarding this petition (for example, request for compensation)' 
        },
        { 
          type: 'text', 
          label: 'Scene', 
          placeholder: 'Enter the scene' 
        },
        { 
          type: 'date', 
          label: 'Date of the incident', 
          placeholder: 'Select date' 
        }
      ],
      buttonText: 'Create a Petition Draft'
    },
    "Enforcement and Bankruptcy Petitions": {
      fields: [
        { 
          type: 'textarea', 
          label: 'Enforcement Information', 
          placeholder: 'Provide details about the enforcement case.' 
        },
        { 
          type: 'textarea', 
          label: 'Debtor Information', 
          placeholder: 'Enter the debtor\'s name, surname and contact information.' 
        }
      ],
      buttonText: 'Create a Petition Draft'
    },
    "Petitions of Objection and Appeal": {
      fields: [
        { 
          type: 'textarea', 
          label: 'Summary of the incident', 
          placeholder: 'Write a brief summary of the event' 
        },
        { 
          type: 'textarea', 
          label: 'Basis for Objection/Appeal', 
          placeholder: 'Provide detailed reasons for your objection or appeal' 
        }
      ],
      buttonText: 'Submit Objection/Appeal'
    },
    "Other Legal Petitions": {
      fields: [
        { 
          type: 'textarea', 
          label: 'Petition Details', 
          placeholder: 'Provide comprehensive details of your legal petition' 
        },
        { 
          type: 'text', 
          label: 'Related Parties', 
          placeholder: 'List all parties involved in the petition' 
        }
      ],
      buttonText: 'Create Legal Petition'
    },
    "Notice": {
      fields: [
        { 
          type: 'textarea', 
          label: 'Notice Content', 
          placeholder: 'Write the full content of the notice' 
        },
        { 
          type: 'text', 
          label: 'Recipient Details', 
          placeholder: 'Enter recipient\'s name and contact information' 
        },
        { 
          type: 'date', 
          label: 'Notice Date', 
          placeholder: 'Select date of notice' 
        }
      ],
      buttonText: 'Issue Notice'
    }
  };

  const renderField = (field) => {
    switch (field.type) {
      case 'text':
        return (
          <div key={field.label}>
            <label className="block text-sm text-[18px] font-medium mb-2">
              {field.label}:
            </label>
            <input
              type="text"
              placeholder={field.placeholder}
              className="w-full px-3 py-2 border border-[#CCCCCC] rounded-md"
            />
          </div>
        );
      case 'textarea':
        return (
          <div key={field.label}>
            <label className="block text-sm text-[18px] font-medium mb-2">
              {field.label}:
            </label>
            <textarea
              placeholder={field.placeholder}
              className="w-full p-2 border border-[#cccc] rounded-md min-h-[70px]"
            ></textarea>
          </div>
        );
      case 'date':
        return (
          <div key={field.label}>
            <label className="block text-sm text-[18px] font-medium mb-2">
              {field.label}:
            </label>
            <input
              type="date"
              placeholder={field.placeholder}
              className="w-full px-3 py-2 border border-[#CCCCCC] rounded-md"
            />
          </div>
        );
      default:
        return null;
    }
  };

  const renderForm = () => {
    if (!selectedType) return null;

    const petitionForm = petitionForms[selectedType];
    return (
      <div className="space-y-6">
        {petitionForm?.fields?.map(renderField)}
        <button className="px-6 bg-[#0057ff] text-white py-2 rounded hover:bg-orange-600">
          {petitionForm.buttonText}
        </button>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-[0fr_5fr]">
      <Sidebar />
      <div className="mx-20 bg-white shadow-lg px-20 py-12 rounded-md my-20">
        <h1 className="text-[24px] text-[#0A2540] mb-5">
          Select Petition Type
        </h1>
        <div className="space-y-6">
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full flex items-center justify-between px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
            >
              {selectedType || "Select Petition Type"}
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                {Object.keys(petitionForms)?.map((type) => (
                  <div
                    key={type}
                    onClick={() => {
                      setSelectedType(type);
                      setIsOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-blue-50 cursor-pointer flex items-center justify-between group"
                  >
                    <span
                      className={`${
                        selectedType === type
                          ? "text-blue-600 font-semibold"
                          : "text-gray-700"
                      }`}
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