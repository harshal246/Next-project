"use client";
import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, Package } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
export default function login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    const { email, password } = formData;

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const existingUsers = localStorage.getItem("users");
      const usersArray = existingUsers ? JSON.parse(existingUsers) : [];
      const userFound = usersArray.find(
        (user: any) =>
          user.email === formData.email && user.password === formData.password
      );
      if (userFound) {
        localStorage.setItem("currentUser",userFound.username)
        redirect("/")
      } else {
        setErrors({
          email: "Invalid email or password",
        });
        toast.error("Invalid email or password")
      }
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 overflow-y-scroll flex flex-col">
      <div className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-6 py-3">
        <div className="max-w-full mx-auto flex flex-row gap-2">
          <Package size={30} />
          <span className="font-semibold text-2xl pl-2">
            Inventory management
          </span>
        </div>
      </div>

      <div className="flex items-center justify-center p-4 py-12">
        <div className="w-full max-w-lg">
          <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-5">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Welcome Back
              </h1> 
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-4 top-3.5 text-violet-500"
                  size={20}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all ${
                    errors.email ? "border-red-500" : "border-violet-200"
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-4 top-3.5 text-violet-500"
                  size={20}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className={`w-full pl-12 pr-12 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all ${
                    errors.password ? "border-red-500" : "border-violet-200"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3.5 text-violet-500 hover:text-violet-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
            >
              Sign In
            </button>

            <p className="text-center text-gray-600 text-sm">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="text-violet-600 hover:text-violet-700 font-semibold"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
