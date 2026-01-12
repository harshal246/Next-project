"use client"
import React, { useState } from 'react';
import { Mail, Lock, User, Calendar, Eye, EyeOff, Package } from 'lucide-react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { redirect } from 'next/navigation';
export default function signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,}$/;
  const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    const { username, email, password, confirmPassword, age } = formData;

    if (!username.trim()) {
      newErrors.username = 'username is required';
    } else if (!usernameRegex.test(username)) {
      newErrors.username = 'Username must be 3-20 characters, alphanumeric and underscores only';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!age.trim()) {
      newErrors.age = 'age is required';
    } else if (isNaN(parseInt(age)) || parseInt(age) < 13 || parseInt(age) > 120) {
      newErrors.age = 'age must be between 13 and 120';
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else if (!passwordRegex.test(password)) {
      newErrors.password = 'Password must be at least 8 characters with uppercase, lowercase, number, and special character';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const existingUsers = localStorage.getItem('users');
      const usersArray = existingUsers ? JSON.parse(existingUsers) : [];
      localStorage.setItem("currentUser",formData.username)
      usersArray.push(formData);
      localStorage.setItem('users', JSON.stringify(usersArray));
      toast.success("Successfully registered the user")
      redirect("/")
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        age: '',
      });
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 overflow-y-scroll flex flex-col">
      <div className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-6 py-3">
        <div className="max-w-full mx-auto flex flex-row gap-2">
          <Package size={30} />
          <span className="font-semibold text-2xl pl-2">Inventory management</span>
        </div>
      </div>

      <div className="flex items-center justify-center p-4 py-12">
        <div className="w-full max-w-lg">
          <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-5">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Create Account</h1>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Username</label>
              <div className="relative">
                <User className="absolute left-4 top-3.5 text-violet-500" size={20} />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Enter username"
                  className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all ${
                    errors.username ? 'border-red-500' : 'border-violet-200'
                  }`}
                />
              </div>
              {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
              <p className="text-xs text-gray-500 mt-1">3-20 characters, alphanumeric and underscores</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-3.5 text-violet-500" size={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter email"
                  className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all ${
                    errors.email ? 'border-red-500' : 'border-violet-200'
                  }`}
                />
              </div>
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Age</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-3.5 text-violet-500" size={20} />
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  placeholder="Enter your age"
                  min="13"
                  max="120"
                  className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all ${
                    errors.age ? 'border-red-500' : 'border-violet-200'
                  }`}
                />
              </div>
              {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-3.5 text-violet-500" size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter password"
                  className={`w-full pl-12 pr-12 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all ${
                    errors.password ? 'border-red-500' : 'border-violet-200'
                  }`}
                />
                {/* <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3.5 text-violet-500 hover:text-violet-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button> */}
              </div>
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              <p className="text-xs text-gray-500 mt-1">Minimum 8 characters including uppercase lowercase letters</p>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
            >
              Create Account
            </button>

            <p className="text-center text-gray-600 text-sm">
              Already have an account?{' '}
              <Link href={"/login"} className="text-violet-600 hover:text-violet-700 font-semibold">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}