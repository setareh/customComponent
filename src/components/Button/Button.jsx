import React from "react";

export default function Button({ children, className, ...events }) {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer ${className}`}
      {...events}
    >
      {children}
    </button>
  );
}
