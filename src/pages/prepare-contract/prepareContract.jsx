import React, { useState } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import { FaCheck, FaChevronDown } from "react-icons/fa6";

const PrepareContract = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("");

  const contractForms = {
    "Service Agreement": {
      fields: [
        { type: 'text', label: 'Company Name', placeholder: 'Company Details' },
        { type: 'text', label: 'Service Provider', placeholder: 'Provider Details' },
        { type: 'textarea', label: 'Service Description', placeholder: 'Detailed service description' },
        { type: 'date-range', label: 'Service Duration' },
        { type: 'text', label: 'Payment Terms', placeholder: 'Payment details' }
      ],
      buttonText: 'Create Service Agreement'
    },
    "Sales Contract": {
      fields: [
        { type: 'textarea', label: 'Product Details', placeholder: 'Product specifications' },
        { type: 'number-pair', label: 'Pricing', placeholders: ['Unit Price', 'Total Quantity'] },
        { type: 'text', label: 'Delivery Terms', placeholder: 'Shipping and delivery details' }
      ],
      buttonText: 'Create Sales Contract'
    },
    "Business Agreement": {
      fields: [
        { type: 'textarea', label: 'Business Relationship', placeholder: 'Nature of relationship' },
        { type: 'textarea', label: 'Scope of Collaboration', placeholder: 'Roles and objectives' },
        { type: 'text', label: 'Financial Terms', placeholder: 'Cost sharing and revenue split' }
      ],
      buttonText: 'Create Business Agreement'
    },
    "Supply Agreement": {
      fields: [
        { type: 'textarea', label: 'Product Details', placeholder: 'Goods or services to be provided' },
        { type: 'number-pair', label: 'Pricing and Quantity', placeholders: ['Price per Unit', 'Total Quantity'] },
        { type: 'text', label: 'Delivery Terms', placeholder: 'Shipping and timeline' },
        { type: 'text', label: 'Payment Terms', placeholder: 'Invoicing and due dates' }
      ],
      buttonText: 'Create Supply Agreement'
    },
    "License Agreement": {
      fields: [
        { type: 'text', label: 'Licensed Product', placeholder: 'Name and description of licensed product' },
        { type: 'text', label: 'Licensor', placeholder: 'Company or individual granting the license' },
        { type: 'text', label: 'Licensee', placeholder: 'Company or individual receiving the license' },
        { type: 'date-range', label: 'License Duration' },
        { type: 'text', label: 'Royalty Payments', placeholder: 'Licensing fees and payment terms' }
      ],
      buttonText: 'Create License Agreement'
    },
    "Commercial Lease Agreement": {
      fields: [
        { type: 'text', label: 'Landlord', placeholder: 'Lessor details' },
        { type: 'text', label: 'Tenant', placeholder: 'Lessee details' },
        { type: 'text', label: 'Leased Premises', placeholder: 'Address and description of the property' },
        { type: 'date-range', label: 'Lease Term' },
        { type: 'text', label: 'Rent and Security Deposit', placeholder: 'Monthly rent and deposit amount' }
      ],
      buttonText: 'Create Commercial Lease Agreement'
    },
    "Rental Agreement": {
      fields: [
        { type: 'text', label: 'Landlord', placeholder: 'Lessor details' },
        { type: 'text', label: 'Tenant', placeholder: 'Lessee details' },
        { type: 'text', label: 'Rented Property', placeholder: 'Address and description of the property' },
        { type: 'date-range', label: 'Rental Period' },
        { type: 'text', label: 'Rent and Security Deposit', placeholder: 'Monthly rent and deposit amount' }
      ],
      buttonText: 'Create Rental Agreement'
    },
    "Contracting Agreement": {
      fields: [
        { type: 'text', label: 'Client', placeholder: 'Name of the client' },
        { type: 'text', label: 'Contractor', placeholder: 'Name of the contractor' },
        { type: 'textarea', label: 'Scope of Work', placeholder: 'Detailed description of the work to be performed' },
        { type: 'date-range', label: 'Contract Term' },
        { type: 'text', label: 'Compensation', placeholder: 'Payment terms and schedule' }
      ],
      buttonText: 'Create Contracting Agreement'
    },
    "Partnership Agreement": {
      fields: [
        { type: 'text', label: 'Partners', placeholder: 'Names of the partners' },
        { type: 'textarea', label: 'Business Purpose', placeholder: 'Description of the business' },
        { type: 'text', label: 'Capital Contribution', placeholder: 'Initial investments by each partner' },
        { type: 'text', label: 'Profit and Loss Sharing', placeholder: 'Percentage split of profits and losses' },
        { type: 'date-range', label: 'Partnership Term' }
      ],
      buttonText: 'Create Partnership Agreement'
    },
    "Privacy Agreement": {
      fields: [
        { type: 'textarea', label: 'Data Collection', placeholder: 'Types of personal data collected' },
        { type: 'textarea', label: 'Data Usage', placeholder: 'How the data will be used' },
        { type: 'text', label: 'Data Sharing', placeholder: 'With whom the data will be shared' },
        { type: 'text', label: 'Data Retention', placeholder: 'How long the data will be kept' },
        { type: 'text', label: 'User Rights', placeholder: 'Users rights regarding their data' }
      ],
      buttonText: 'Create Privacy Agreement'
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
      case 'date-range':
        return (
          <div key={field.label}>
            <label className="block text-sm text-[18px] font-medium mb-2">
              {field.label}:
            </label>
            <div className="flex space-x-4">
              <input
                type="date"
                placeholder="Start Date"
                className="w-1/2 px-3 py-2 border border-[#CCCCCC] rounded-md"
              />
              <input
                type="date"
                placeholder="End Date"
                className="w-1/2 px-3 py-2 border border-[#CCCCCC] rounded-md"
              />
            </div>
          </div>
        );
      case 'number-pair':
        return (
          <div key={field.label}>
            <label className="block text-sm text-[18px] font-medium mb-2">
              {field.label}:
            </label>
            <div className="flex space-x-4">
              <input
                type="number"
                placeholder={field.placeholders[0]}
                className="w-1/2 px-3 py-2 border border-[#CCCCCC] rounded-md"
              />
              <input
                type="number"
                placeholder={field.placeholders[1]}
                className="w-1/2 px-3 py-2 border border-[#CCCCCC] rounded-md"
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
        <button className="px-6 bg-[#0057ff] text-white py-2 rounded hover:bg-orange-600">
          {contractForm.buttonText}
        </button>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-[0fr_5fr]">
      <Sidebar />
      <div className="mx-20 bg-white shadow-lg px-20 py-12 rounded-md my-20">
        <div>
          <h1 className="text-[24px] text-[#0A2540] mb-5">
            Welcome to the Contract Creation Tool!
          </h1>
          <p className="text-[14px] text-[#0A2540] mb-5">
            Welcome to our platform that offers 10 different contract types that
            can be customized for your different needs. From Service Agreement
            to Commercial Lease Agreement, you can easily prepare the contract
            you are looking for in just a few clicks.
          </p>
        </div>
        <h1 className="text-[24px] text-[#0A2540] mb-5">
          Select Contract Type:
        </h1>
        <div className="space-y-6">
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full flex items-center justify-between px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
            >
              {selectedType || "Select Contract Type"}
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                {Object.keys(contractForms).map((type) => (
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
          {renderContractForm()}
        </div>
      </div>
    </div>
  );
};

export default PrepareContract;