import React, { useState } from "react";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { Button } from "../components/Button";
import { signupUser } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { COLORS } from "@/Constants/colors";

export const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "", role: "incubator" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    try {
      const res = await signupUser(form);
      alert("Signup successful");
      console.log(res.data);
    } catch (error: any) {
      alert("Signup failed");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: COLORS.secondary }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md space-y-6"
      >
        <h2 className="text-3xl font-bold text-center" style={{ color: COLORS.primary }}>
          Sign Up
        </h2>
        <Input label="Gmail" name="email" type="email" value={form.email} onChange={handleChange} />
        <Input label="Password" name="password" type="password" value={form.password} onChange={handleChange} />
        <Select label="Role" name="role" value={form.role} onChange={handleChange} options={["incubator", "startup", "member"]} />
        <Button onClick={handleSignup} label="Sign Up" />
        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <button className="underline" style={{ color: COLORS.primary }} onClick={() => navigate("/login")}>
            Login
          </button>
        </p>
      </motion.div>
    </div>
  );
};
