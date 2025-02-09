import React from "react";
import ReactDOM from "react-dom";

export default function Modal({ title, content, onClose, isOpen }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-lg shadow-lg z-10 max-w-lg mx-auto relative w-80 sm:w-96">
        <button
          className="absolute text-2xl top-0 left-2 m-2 text-gray-950 hover:text-gray-900 cursor-pointer"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="py-4">
          <div className="py-2 px-6 font-semibold text-gray-800 text-2xl border-b border-b-gray-200">
            {title}
          </div>
          <div className="py-2 px-6 text-gray-700">{content}</div>
        </div>
      </div>
    </div>,
    document.body
  );
}
