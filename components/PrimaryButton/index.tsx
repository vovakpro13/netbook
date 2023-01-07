import React, { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
  variant?: "primary" | "outlined";
  className?: string;
}

const PrimaryButton: FC<IProps> = ({
  children,
  className,
  variant = "primary",
}) => {
  return (
    <button
      className={`px-[44px] rounded-[14px] hover:translate-y-[-3px] transition active:opacity-80 whitespace-nowrap ${className} ${
        variant === "primary" ? "btn-primary" : "btn-outlined"
      }`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
