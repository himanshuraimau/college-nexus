"use client"

import { useState } from "react"
import { Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Component() {
  const [formData, setFormData] = useState({
    name: "",
    usn: "",
    email: "",
    phone: "",
    branch: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleBranchChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      branch: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="flex items-center justify-center w-full max-w-md mx-auto">
      <Card className="w-full shadow-xl bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-green-700 flex items-center justify-center">
            <Leaf className="w-8 h-8 mr-2 text-green-600" />
            Registration Form
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-green-700">
                  Your Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-green-300 rounded-xl bg-green-50 hover:bg-green-100 text-green-900 focus:ring-2 focus:ring-green-500 transition-all duration-200"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <Label htmlFor="usn" className="text-sm font-medium text-green-700">
                  USN <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="text"
                  id="usn"
                  name="usn"
                  value={formData.usn}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-green-300 rounded-xl bg-green-50 hover:bg-green-100 text-green-900 focus:ring-2 focus:ring-green-500 transition-all duration-200"
                  placeholder="Enter your USN"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium text-green-700">
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-green-300 rounded-xl bg-green-50 hover:bg-green-100 text-green-900 focus:ring-2 focus:ring-green-500 transition-all duration-200"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-green-700">
                  Phone Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-green-300 rounded-xl bg-green-50 hover:bg-green-100 text-green-900 focus:ring-2 focus:ring-green-500 transition-all duration-200"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <Label htmlFor="branch" className="text-sm font-medium text-green-700">
                  Branch
                </Label>
                <Select onValueChange={handleBranchChange} value={formData.branch}>
                  <SelectTrigger id="branch" className="w-full p-4 border-green-300 rounded-xl bg-green-50 hover:bg-green-100 text-green-900">
                    <SelectValue placeholder="Select your branch" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="CSE">Computer Science Engineering</SelectItem>
                    <SelectItem value="ECE">Electronics and Communication Engineering</SelectItem>
                    <SelectItem value="ME">Mechanical Engineering</SelectItem>
                    <SelectItem value="EEE">Electrical and Electronics Engineering</SelectItem>
                    <SelectItem value="CE">Civil Engineering</SelectItem>
                    <SelectItem value="AI_DS">Artificial Intelligence & Data Science</SelectItem>
                    <SelectItem value="BT">Biotechnology</SelectItem>
                    <SelectItem value="CHE">Chemical Engineering</SelectItem>
                    <SelectItem value="CSE_AI_ML">CSE (Artificial Intelligence & Machine Learning)</SelectItem>
                    <SelectItem value="EIE">Electronics and Instrumentation Engineering</SelectItem>
                    <SelectItem value="ETE">Electronics & Telecommunication Engineering</SelectItem>
                    <SelectItem value="IEM">Industrial Engineering and Management</SelectItem>
                    <SelectItem value="ISE">Information Science and Engineering</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <Button 
                type="submit" 
                className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-green-500 to-blue-500 rounded-full shadow-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-300"
              >
                Register
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}