import React from "react";
import { COLORS } from "../Constants/colors";

interface ButtonProps {
  onClick: () => void;
  label: string;
}

export const Button: React.FC<ButtonProps> = ({ onClick, label }) => (
  <button
    onClick={onClick}
    className="w-full text-white font-semibold py-2 px-4 rounded-xl shadow-md transition"
    style={{
      backgroundColor: COLORS.primary,
    }}
    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = COLORS.accent)}
    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = COLORS.primary)}
  >
    {label}
  </button>
);
