import { useState } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import { FaCheck, FaChevronDown } from "react-icons/fa6";

const PrepareContract = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("");

  const contractForms = {
    "Service Agreement": {
      fields: [
        { type: "text", label: "Company Name", placeholder: "Company Details" },
        {
          type: "text",
          label: "Service Provider",
          placeholder: "Provider Details",
        },
        {
          type: "textarea",
          label: "Service Description",
          placeholder: "Detailed service description",
        },
        { type: "date-range", label: "Service Duration" },
        {
          type: "text",
          label: "Payment Terms",
          placeholder: "Payment details",
        },
      ],
      buttonText: "Create Service Agreement",
    },
    "Sales Contract": {
      fields: [
        {
          type: "textarea",
          label: "Product Details",
          placeholder: "Product specifications",
        },
        {
          type: "number-pair",
          label: "Pricing",
          placeholders: ["Unit Price", "Total Quantity"],
        },
        {
          type: "text",
          label: "Delivery Terms",
          placeholder: "Shipping and delivery details",
        },
      ],
      buttonText: "Create Sales Contract",
    },
    "Business Agreement": {
      fields: [
        {
          type: "textarea",
          label: "Business Relationship",
          placeholder: "Nature of relationship",
        },
        {
          type: "textarea",
          label: "Scope of Collaboration",
          placeholder: "Roles and objectives",
        },
        {
          type: "text",
          label: "Financial Terms",
          placeholder: "Cost sharing and revenue split",
        },
      ],
      buttonText: "Create Business Agreement",
    },
    "Supply Agreement": {
      fields: [
        {
          type: "textarea",
          label: "Product Details",
          placeholder: "Goods or services to be provided",
        },
        {
          type: "number-pair",
          label: "Pricing and Quantity",
          placeholders: ["Price per Unit", "Total Quantity"],
        },
        {
          type: "text",
          label: "Delivery Terms",
          placeholder: "Shipping and timeline",
        },
        {
          type: "text",
          label: "Payment Terms",
          placeholder: "Invoicing and due dates",
        },
      ],
      buttonText: "Create Supply Agreement",
    },
    "License Agreement": {
      fields: [
        {
          type: "text",
          label: "Licensed Product",
          placeholder: "Name and description of licensed product",
        },
        {
          type: "text",
          label: "Licensor",
          placeholder: "Company or individual granting the license",
        },
        {
          type: "text",
          label: "Licensee",
          placeholder: "Company or individual receiving the license",
        },
        { type: "date-range", label: "License Duration" },
        {
          type: "text",
          label: "Royalty Payments",
          placeholder: "Licensing fees and payment terms",
        },
      ],
      buttonText: "Create License Agreement",
    },
    "Commercial Lease Agreement": {
      fields: [
        { type: "text", label: "Landlord", placeholder: "Lessor details" },
        { type: "text", label: "Tenant", placeholder: "Lessee details" },
        {
          type: "text",
          label: "Leased Premises",
          placeholder: "Address and description of the property",
        },
        { type: "date-range", label: "Lease Term" },
        {
          type: "text",
          label: "Rent and Security Deposit",
          placeholder: "Monthly rent and deposit amount",
        },
      ],
      buttonText: "Create Commercial Lease Agreement",
    },
    "Rental Agreement": {
      fields: [
        { type: "text", label: "Landlord", placeholder: "Lessor details" },
        { type: "text", label: "Tenant", placeholder: "Lessee details" },
        {
          type: "text",
          label: "Rented Property",
          placeholder: "Address and description of the property",
        },
        { type: "date-range", label: "Rental Period" },
        {
          type: "text",
          label: "Rent and Security Deposit",
          placeholder: "Monthly rent and deposit amount",
        },
      ],
      buttonText: "Create Rental Agreement",
    },
    "Contracting Agreement": {
      fields: [
        { type: "text", label: "Client", placeholder: "Name of the client" },
        {
          type: "text",
          label: "Contractor",
          placeholder: "Name of the contractor",
        },
        {
          type: "textarea",
          label: "Scope of Work",
          placeholder: "Detailed description of the work to be performed",
        },
        { type: "date-range", label: "Contract Term" },
        {
          type: "text",
          label: "Compensation",
          placeholder: "Payment terms and schedule",
        },
      ],
      buttonText: "Create Contracting Agreement",
    },
    "Partnership Agreement": {
      fields: [
        {
          type: "text",
          label: "Partners",
          placeholder: "Names of the partners",
        },
        {
          type: "textarea",
          label: "Business Purpose",
          placeholder: "Description of the business",
        },
        {
          type: "text",
          label: "Capital Contribution",
          placeholder: "Initial investments by each partner",
        },
        {
          type: "text",
          label: "Profit and Loss Sharing",
          placeholder: "Percentage split of profits and losses",
        },
        { type: "date-range", label: "Partnership Term" },
      ],
      buttonText: "Create Partnership Agreement",
    },
    "Privacy Agreement": {
      fields: [
        {
          type: "textarea",
          label: "Data Collection",
          placeholder: "Types of personal data collected",
        },
        {
          type: "textarea",
          label: "Data Usage",
          placeholder: "How the data will be used",
        },
        {
          type: "text",
          label: "Data Sharing",
          placeholder: "With whom the data will be shared",
        },
        {
          type: "text",
          label: "Data Retention",
          placeholder: "How long the data will be kept",
        },
        {
          type: "text",
          label: "User Rights",
          placeholder: "Users rights regarding their data",
        },
      ],
      buttonText: "Create Privacy Agreement",
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
      case "date-range":
        return (
          <div key={field.label}>
            <label className="mb-2 block text-[18px] text-sm font-medium">
              {field.label}:
            </label>
            <div className="flex space-x-4">
              <input
                type="date"
                placeholder="Start Date"
                className="w-1/2 rounded-md border border-[#CCCCCC] px-3 py-2"
              />
              <input
                type="date"
                placeholder="End Date"
                className="w-1/2 rounded-md border border-[#CCCCCC] px-3 py-2"
              />
            </div>
          </div>
        );
      case "number-pair":
        return (
          <div key={field.label}>
            <label className="mb-2 block text-[18px] text-sm font-medium">
              {field.label}:
            </label>
            <div className="flex space-x-4">
              <input
                type="number"
                placeholder={field.placeholders[0]}
                className="w-1/2 rounded-md border border-[#CCCCCC] px-3 py-2"
              />
              <input
                type="number"
                placeholder={field.placeholders[1]}
                className="w-1/2 rounded-md border border-[#CCCCCC] px-3 py-2"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderContractForm = () => {
    if (!selectedType) return null;

    const contractForm = contractForms[selectedType];
    return (
      <div className="space-y-6">
        {contractForm.fields?.map(renderField)}
        <button className="rounded bg-[#0057ff] px-6 py-2 text-white hover:bg-orange-600">
          {contractForm.buttonText}
        </button>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-[0fr_5fr]">
      <Sidebar />
      <div className="mx-20 my-20 rounded-md bg-white px-20 py-12 shadow-lg">
        <div>
          <h1 className="mb-5 text-[24px] text-[#0A2540]">
            Welcome to the Contract Creation Tool!
          </h1>
          <p className="mb-5 text-[14px] text-[#0A2540]">
            Welcome to our platform that offers 10 different contract types that
            can be customized for your different needs. From Service Agreement
            to Commercial Lease Agreement, you can easily prepare the contract
            you are looking for in just a few clicks.
          </p>
        </div>
        <h1 className="mb-5 text-[24px] text-[#0A2540]">
          Select Contract Type:
        </h1>
        <div className="space-y-6">
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex w-full items-center justify-between rounded-lg bg-blue-600 px-4 py-2 text-white shadow-md transition-colors duration-300 hover:bg-blue-700"
            >
              {selectedType || "Select Contract Type"}
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="absolute top-full z-10 mt-1 max-h-60 w-full overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg">
                {Object.keys(contractForms).map((type) => (
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
          {renderContractForm()}
        </div>
      </div>
    </div>
  );
};

export default PrepareContract;
