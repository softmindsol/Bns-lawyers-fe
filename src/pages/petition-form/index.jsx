import { useState } from "react";
import { FaCheck, FaChevronDown } from "react-icons/fa6";
import Layout from "../../layout";

const PetitionForm = () => {
  const [selectedType, setSelectedType] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const petitionForms = {
    "Court Petitions": {
      fields: [
        {
          type: "textarea",
          label: "Summary of the Incident",
          placeholder: "Write a brief summary of the event",
        },
        {
          type: "textarea",
          label: "Plaintiff/Defendant Information",
          placeholder:
            "Enter the defendant's name, surname, and contact information.",
        },
        {
          type: "textarea",
          label: "Request",
          placeholder:
            "Please indicate your request regarding this petition (e.g., request for compensation).",
        },
        {
          type: "text",
          label: "Scene",
          placeholder: "Enter the scene",
        },
        {
          type: "date",
          label: "Date of the Incident",
          placeholder: "Select date",
        },
        {
          type: "textarea",
          label: "Supporting Evidence",
          placeholder:
            "List any evidence that supports your petition (e.g., documents, photos).",
        },
        {
          type: "textarea",
          label: "Witness Information",
          placeholder:
            "Provide details of any witnesses, including their names and contact information.",
        },
      ],
      buttonText: "Create a Petition Draft",
    },
    "Enforcement and Bankruptcy Petitions": {
      fields: [
        {
          type: "textarea",
          label: "Enforcement Information",
          placeholder: "Provide details about the enforcement case.",
        },
        {
          type: "textarea",
          label: "Debtor Information",
          placeholder:
            "Enter the debtor's name, surname, and contact information.",
        },
        {
          type: "textarea",
          label: "Assets/Property Involved",
          placeholder: "Detail any assets or property involved in the case.",
        },
        {
          type: "textarea",
          label: "Payment History",
          placeholder:
            "Provide a summary of the payment history or arrears, if applicable.",
        },
      ],
      buttonText: "Create a Petition Draft",
    },
    "Petitions of Objection and Appeal": {
      fields: [
        {
          type: "textarea",
          label: "Summary of the Incident",
          placeholder: "Write a brief summary of the event.",
        },
        {
          type: "textarea",
          label: "Basis for Objection/Appeal",
          placeholder: "Provide detailed reasons for your objection or appeal.",
        },
        {
          type: "textarea",
          label: "Legal References",
          placeholder:
            "Cite any laws, rulings, or precedents that support your objection or appeal.",
        },
        {
          type: "text",
          label: "Court/Case Number",
          placeholder:
            "Provide the court or case number relevant to this objection or appeal.",
        },
      ],
      buttonText: "Submit Objection/Appeal",
    },
    "Other Legal Petitions": {
      fields: [
        {
          type: "textarea",
          label: "Petition Details",
          placeholder: "Provide comprehensive details of your legal petition.",
        },
        {
          type: "text",
          label: "Related Parties",
          placeholder: "List all parties involved in the petition.",
        },
        {
          type: "textarea",
          label: "Legal Grounds",
          placeholder: "Explain the legal basis for your petition.",
        },
        {
          type: "text",
          label: "Relevant Case Numbers",
          placeholder:
            "Include any relevant case numbers or docket information.",
        },
      ],
      buttonText: "Create Legal Petition",
    },
    Notice: {
      fields: [
        {
          type: "textarea",
          label: "Notice Content",
          placeholder: "Write the full content of the notice.",
        },
        {
          type: "text",
          label: "Recipient Details",
          placeholder: "Enter recipient's name and contact information.",
        },
        {
          type: "date",
          label: "Notice Date",
          placeholder: "Select date of notice.",
        },
        {
          type: "text",
          label: "Notice Reference Number",
          placeholder:
            "Provide a reference number for this notice, if applicable.",
        },
        {
          type: "textarea",
          label: "Additional Instructions",
          placeholder: "Include any specific instructions for the recipient.",
        },
      ],
      buttonText: "Issue Notice",
    },
  };

  const renderField = (field) => {
    switch (field.type) {
      case "text":
        return (
          <div key={field.label}>
            <label className="mb-2 block text-[18px] text-sm font-medium">
              {field.label}:
            </label>
            <input
              type="text"
              placeholder={field.placeholder}
              className="w-full rounded-md border border-[#CCCCCC] px-3 py-2"
            />
          </div>
        );
      case "textarea":
        return (
          <div key={field.label}>
            <label className="mb-2 block text-[18px] text-sm font-medium">
              {field.label}:
            </label>
            <textarea
              placeholder={field.placeholder}
              className="min-h-[70px] w-full rounded-md border border-[#cccc] p-2"
            ></textarea>
          </div>
        );
      case "date":
        return (
          <div key={field.label}>
            <label className="mb-2 block text-[18px] text-sm font-medium">
              {field.label}:
            </label>
            <input
              type="date"
              placeholder={field.placeholder}
              className="w-full rounded-md border border-[#CCCCCC] px-3 py-2"
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
        <button className="rounded bg-[#0057ff] px-6 py-2 text-white hover:bg-orange-600">
          {petitionForm.buttonText}
        </button>
      </div>
    );
  };

  return (
    <Layout>
      <div className="mx-20 my-20 rounded-md bg-white px-20 py-12 shadow-lg">
        <h1 className="mb-5 text-[24px] text-[#0A2540]">
          Select Petition Type
        </h1>
        <div className="space-y-6">
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex w-full items-center justify-between rounded-lg bg-mygradient1 px-4 py-4 text-white shadow-md transition-colors duration-300 hover:bg-blue-700"
            >
              {selectedType || "Select Petition Type"}
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="absolute top-full z-10 mt-1 max-h-60 w-full overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg">
                {Object.keys(petitionForms)?.map((type) => (
                  <div
                    key={type}
                    onClick={() => {
                      setSelectedType(type);
                      setIsOpen(false);
                    }}
                    className="group flex cursor-pointer items-center justify-between px-4 py-2 hover:bg-blue-50"
                  >
                    <span
                      className={`${
                        selectedType === type
                          ? "font-semibold text-blue-600"
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
    </Layout>
  );
};

export default PetitionForm;
