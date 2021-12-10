import React from "react";

export const TextInput = (props) => {
  return (
    <div>
      {props.label && (
        <label htmlFor={props.id} className="leading-7 text-sm text-gray-600">
          {props.label}
        </label>
      )}
      <input
        type={ props.type ? props.type : "text"}
        value={props.value}
        onChange={props.onChange}
        id={props.id}
        name={props.name}
        className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
  );
};
