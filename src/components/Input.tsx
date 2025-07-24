import React from "react";
import { COLORS } from "@/Constants/colors";

interface InputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({ label, ...props }) => (
  <div className="space-y-1">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl shadow-sm outline-none"
      style={{
        borderColor: COLORS.primary,
      }}
      {...props}
    />
  </div>
);
