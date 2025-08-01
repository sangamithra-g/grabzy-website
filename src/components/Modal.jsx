import React from "react";

const Modal = ({ show, onClose, plan }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-semibold mb-4">Plan Selected</h2>
        <p className="mb-4">You’ve selected the <strong>{plan}</strong> plan.</p>
        <button
          onClick={onClose}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
