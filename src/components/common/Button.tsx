import React from "react";

export type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  variant = "primary",
  onClick,
  className = "",
  disabled = false,
}) => {
  const baseClasses =
    "px-4 py-2 cursor-pointer rounded-md transition-colors duration-300 font-medium";

  const variantClasses = {
    primary: "bg-primary-marine-blue hover:bg-primary-pastel-blue text-white",
    secondary:
      "bg-transparent text-neutral-cool-gray hover:text-primary-marine-blue",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
