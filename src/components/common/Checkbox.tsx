import React from "react";

interface CheckboxProps {
  checked: boolean;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  className = "",
}) => {


  return (
    <div
      className={`flex items-center justify-center size-5 rounded transition-colors cursor-pointer ${
        checked ? "bg-primary-purplish-blue" : "border border-neutral-light-gray"
      } ${className}`}
    >
      {checked && (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="12" 
          height="9" 
          viewBox="0 0 12 9"
          className="text-white"
        >
          <path 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            d="M1 4.304L3.696 7l7-7" 
          />
        </svg>
      )}
    </div>
  );
};

export default Checkbox;
