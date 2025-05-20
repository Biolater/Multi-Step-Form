import React from "react";

interface FormInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  required = false,
  error,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <label className="text-sm text-primary-marine-blue" htmlFor={name}>
          {label}
        </label>
        {error && (
          <p className="text-red-500 text-xs mt-1 font-semibold">{error}</p>
        )}
      </div>
      <input
        className={`border ${
          error
            ? "border-red-500  focus:ring-red-500"
            : "border-neutral-light-gray"
        } rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary-purplish-blue transition-all duration-300`}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default FormInput;
