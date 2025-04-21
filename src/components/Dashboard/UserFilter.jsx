import React from "react";

export default function UserFilter({ selected, onSelect }) {
  const types = ["Student", "Working Professional", "General User"];

  return (
    <div className="mb-6 flex flex-wrap gap-2">
      {types.map((type) => (
        <button
          key={type}
          onClick={() => onSelect(type)}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            selected === type
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {type}
        </button>
      ))}
    </div>
  );
}
