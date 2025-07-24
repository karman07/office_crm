import React from "react";
import { COLORS } from "@/Constants/colors";

interface SelectProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}

export const Select: React.FC<SelectProps> = ({ label, options, ...props }) => (
  <div className="space-y-1">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <select
      className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl shadow-sm outline-none"
      style={{
        borderColor: COLORS.primary,
      }}
      {...props}
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt.charAt(0).toUpperCase() + opt.slice(1)}
        </option>
      ))}
    </select>
  </div>
);
