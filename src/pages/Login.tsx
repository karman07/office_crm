import React, { useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { loginUser } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { COLORS } from "@/Constants/colors";

export const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await loginUser(form);
      alert("Login successful");
      console.log(res.data);
    } catch (error: any) {
      alert("Login failed");
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
          Login
        </h2>
        <Input label="Gmail" name="email" type="email" value={form.email} onChange={handleChange} />
        <Input label="Password" name="password" type="password" value={form.password} onChange={handleChange} />
        <Button onClick={handleLogin} label="Login" />
        <p className="text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <button className="underline" style={{ color: COLORS.primary }} onClick={() => navigate("/signup")}>
            Sign Up
          </button>
        </p>
      </motion.div>
    </div>
  );
};
