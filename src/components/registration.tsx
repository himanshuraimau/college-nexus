"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    usn: "",
    email: "",
    phone: "",
    branch: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBranchChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      branch: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-2xl rounded-lg px-8 pt-6 pb-8 mb-4 transition-all duration-300 hover:shadow-green-200"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-green-800 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
            Registration Form
          </h2>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-green-700 font-semibold">
                YOUR NAME <span className="text-red-500">*</span>
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                placeholder="Enter your full name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="usn" className="text-green-700 font-semibold">
                USN <span className="text-red-500">*</span>
              </Label>
              <Input
                type="text"
                id="usn"
                name="usn"
                value={formData.usn}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                placeholder="Enter your USN"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-green-700 font-semibold">
                EMAIL <span className="text-red-500">*</span>
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                placeholder="Enter your email address"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-green-700 font-semibold">
                PHONE NUMBER <span className="text-red-500">*</span>
              </Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="branch" className="text-green-700 font-semibold">
                BRANCH
              </Label>
              <Select
                onValueChange={handleBranchChange}
                value={formData.branch}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select your branch" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CSE">
                    Computer Science Engineering
                  </SelectItem>
                  <SelectItem value="ECE">
                    Electronics and Communication Engineering
                  </SelectItem>
                  <SelectItem value="ME">Mechanical Engineering</SelectItem>
                  <SelectItem value="EEE">
                    Electrical and Electronics Engineering
                  </SelectItem>
                  <SelectItem value="CE">Civil Engineering</SelectItem>
                  <SelectItem value="AI_DS">
                    Artificial Intelligence & Data Science
                  </SelectItem>
                  <SelectItem value="BT">Biotechnology</SelectItem>
                  <SelectItem value="CHE">Chemical Engineering</SelectItem>
                  <SelectItem value="CSE_AI_ML">
                    CSE (Artificial Intelligence & Machine Learning)
                  </SelectItem>
                  <SelectItem value="EIE">
                    Electronics and Instrumentation Engineering
                  </SelectItem>
                  <SelectItem value="ETE">
                    Electronics & Telecommunication Engineering
                  </SelectItem>
                  <SelectItem value="IEM">
                    Industrial Engineering and Management
                  </SelectItem>
                  <SelectItem value="ISE">
                    Information Science and Engineering
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center">
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Register
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
