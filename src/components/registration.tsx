"use client"

import { useState } from "react"
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
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md border-0 shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center font-bold text-blue-600">
            Registration Form
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                Your Name <span className="text-red-500">*</span>
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border-gray-200"
                placeholder="Enter your full name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="usn" className="text-sm font-medium text-gray-700">
                USN <span className="text-red-500">*</span>
              </Label>
              <Input
                type="text"
                id="usn"
                name="usn"
                value={formData.usn}
                onChange={handleChange}
                required
                className="w-full border-gray-200"
                placeholder="Enter your USN"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-gray-200"
                placeholder="Enter your email address"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                Phone Number <span className="text-red-500">*</span>
              </Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border-gray-200"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="branch" className="text-sm font-medium text-gray-700">
                Branch
              </Label>
              <Select onValueChange={handleBranchChange} value={formData.branch}>
                <SelectTrigger id="branch" className="w-full bg-white border-gray-200">
                  <SelectValue placeholder="Select your branch" />
                </SelectTrigger>
                <SelectContent className="bg-white">
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

            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Register
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}