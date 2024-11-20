import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/sidebar';
import { FaCheck, FaChevronDown } from 'react-icons/fa6';

const PrepareContract = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedType, setSelectedType] = useState('');

    const renderForm = () => {
        switch (selectedType) {
            case "Service Agreement":
                return renderServiceAgreementForm();
            case "Sales Contract":
                return renderSalesContractForm();
            case "Business Agreement":
                return renderBusinessAgreementForm();
            case "Supply Agreement":
                return renderSupplyAgreementForm();
            case "License Agreement":
                return renderLicenseAgreementForm();
            case "Commercial Lease Agreement":
                return renderCommercialLeaseForm();
            case "Rental Agreement":
                return renderRentalAgreementForm();
            case "Contracting Agreement":
                return renderContractingAgreementForm();
            case "Partnership Agreement":
                return renderPartnershipAgreementForm();
            case "Privacy Agreement":
                return renderPrivacyAgreementForm();
            default:
                return <div className="p-4 text-gray-500">Select a contract type to begin</div>;
        }
    };

    const petitionTypes = [
        'Service Agreement',
        'Sales Contract',
        'Business Agreement',
        'Supply Agreement',
        'License Agreement',
        'Commercial Lease Agreement',
        'Rental Agreement',
        'Contracting Agreement',
        'Partnership Agreement',
        'Privacy Agreement',
    ];

    const renderServiceAgreementForm = () => (
        <div className="space-y-6">

<div>
                <label className="block text-sm text-[18px] font-medium mb-2">Company Name:</label>
                <input
                    type="text"
                    placeholder="Total Contract Value, Payment Schedule"
                    className="w-full px-3 py-2 border border-[#CCCCCC] rounded-md"
                />
            </div>
            <div>
                <label className="block text-sm text-[18px] font-medium mb-2">Service Provider</label>
                <input
                    type="text"
                    placeholder="Total Contract Value, Payment Schedule"
                    className="w-full px-3 py-2 border border-[#CCCCCC] rounded-md"
                />
            </div>
            <div>
                <label className="block text-sm text-[18px] font-medium mb-2">Service Description:</label>
                <textarea
                    placeholder="Describe the services to be provided in detail"
                    className="w-full p-2 border border-[#cccc] rounded-md min-h-[70px]"
                ></textarea>
            </div>
            <div>
                <label className="block text-sm text-[18px] font-medium mb-2">Service Duration:</label>
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
            <div>
                <label className="block text-sm text-[18px] font-medium mb-2">Payment Terms:</label>
                <input
                    type="text"
                    placeholder="Total Contract Value, Payment Schedule"
                    className="w-full px-3 py-2 border border-[#CCCCCC] rounded-md"
                />
            </div>
            <button className="px-6 bg-[#0057ff] text-white py-2 rounded hover:bg-orange-600">
                Create Service Agreement
            </button>
        </div>
    );

    const renderSalesContractForm = () => (
        <div className="space-y-6">
            <div>
                <label className="block text-sm text-[18px] font-medium mb-2">Product Details:</label>
                <textarea
                    placeholder="Describe the products being sold, quantities, specifications"
                    className="w-full p-2 border border-[#cccc] rounded-md min-h-[70px]"
                ></textarea>
            </div>
            <div>
                <label className="block text-sm text-[18px] font-medium mb-2">Pricing:</label>
                <div className="flex space-x-4">
                    <input
                        type="number"
                        placeholder="Unit Price"
                        className="w-1/2 px-3 py-2 border border-[#CCCCCC] rounded-md"
                    />
                    <input
                        type="number"
                        placeholder="Total Quantity"
                        className="w-1/2 px-3 py-2 border border-[#CCCCCC] rounded-md"
                    />
                </div>
            </div>
            <div>
                <label className="block text-sm text-[18px] font-medium mb-2">Delivery Terms:</label>
                <input
                    type="text"
                    placeholder="Shipping, Delivery Date, Location"
                    className="w-full px-3 py-2 border border-[#CCCCCC] rounded-md"
                />
            </div>
            <button className="px-6 bg-[#0057ff] text-white py-2 rounded hover:bg-orange-600">
                Create Sales Contract
            </button>
        </div>
    );

    const renderBusinessAgreementForm = () => (
        <div className="space-y-6">
            <div>
                <label className="block text-sm text-[18px] font-medium mb-2">Business Relationship:</label>
                <textarea
                    placeholder="Describe the nature of the business relationship"
                    className="w-full p-2 border border-[#cccc] rounded-md min-h-[70px]"
                ></textarea>
            </div>
            <div>
                <label className="block text-sm text-[18px] font-medium mb-2">Scope of Collaboration:</label>
                <textarea
                    placeholder="Define responsibilities, roles, and objectives"
                    className="w-full p-2 border border-[#cccc] rounded-md min-h-[70px]"
                ></textarea>
            </div>
            <div>
                <label className="block text-sm text-[18px] font-medium mb-2">Financial Terms:</label>
                <input
                    type="text"
                    placeholder="Cost sharing, revenue split, investment details"
                    className="w-full px-3 py-2 border border-[#CCCCCC] rounded-md"
                />
            </div>
            <button className="px-6 bg-[#0057ff] text-white py-2 rounded hover:bg-orange-600">
                Create Business Agreement
            </button>
        </div>
    );

    const renderSupplyAgreementForm = () => (
        <div className="space-y-6">
            <div>
                <label className="block text-sm text-[18px] font-medium mb-2">Supplier Information:</label>
                <textarea
                    placeholder="Supplier details, contact information"
                    className="w-full p-2 border border-[#cccc] rounded-md min-h-[70px]"
                ></textarea>
            </div>
            <div>
                <label className="block text-sm text-[18px] font-medium mb-2">Supply Details:</label>
                <textarea
                    placeholder="Products/materials, quantities, quality standards"
                    className="w-full p-2 border border-[#cccc] rounded-md min-h-[70px]"
                ></textarea>
            </div>
            <div>
                <label className="block text-sm text-[18px] font-medium mb-2">Delivery Schedule:</label>
                <div className="flex space-x-4">
                    <input
                        type="date"
                        placeholder="First Delivery Date"
                        className="w-1/2 px-3 py-2 border border-[#CCCCCC] rounded-md"
                    />
                    <input
                        type="text"
                        placeholder="Frequency (e.g., monthly)"
                        className="w-1/2 px-3 py-2 border border-[#CCCCCC] rounded-md"
                    />
                </div>
            </div>
            <button className="px-6 bg-[#0057ff] text-white py-2 rounded hover:bg-orange-600">
                Create Supply Agreement
            </button>
        </div>
    );

    // Additional form renderers can be added similarly for other contract types

    return (
        <div className="grid grid-cols-[0fr_5fr]">
            <Sidebar />
            <div className="mx-20 bg-white shadow-lg px-20 py-12 rounded-md my-20">
                <div>
                    <h1 className="text-[24px] text-[#0A2540] mb-5">Welcome to the Contract Creation Tool!</h1>
                    <p className="text-[14px] text-[#0A2540] mb-5">
                        Welcome to our platform that offers 10 different contract types that can be customized for your different needs. From Service Agreement to Commercial Lease Agreement, you can easily prepare the contract you are looking for in just a few clicks.

                        We are excited to present you this module, which is in beta. Our module is in development and will soon have the ability to create professional-scale contracts. 
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
                            {selectedType || 'Select Contract Type'}
                            <FaChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isOpen && (
                            <div className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                                {petitionTypes.map((type) => (
                                    <div
                                        key={type}
                                        onClick={() => {
                                            setSelectedType(type);
                                            setIsOpen(false);
                                        }}
                                        className="px-4 py-2 hover:bg-blue-50 cursor-pointer flex items-center justify-between group"
                                    >
                                        <span className={`${selectedType === type ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}>
                                            {type}
                                        </span>
                                        {selectedType === type && <FaCheck className="text-blue-600" />}
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

export default PrepareContract;