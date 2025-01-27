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

export default function Registration() {
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
    <div className="flex min-h-screen items-center justify-center w-full max-w-md mx-auto p-2">
      <Card className="w-full shadow-xl bg-[var(--nav-bg)] backdrop-blur-md border border-[var(--nav-border)]">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-white text-glow flex items-center justify-center">
            <Leaf className="w-8 h-8 mr-2 text-[var(--nav-hover)]" />
            Registration Form
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              {["name", "usn", "email", "phone"].map((field) => (
                <div key={field}>
                  <Label htmlFor={field} className="text-sm font-medium text-white">
                    {field.charAt(0).toUpperCase() + field.slice(1)} <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                    id={field}
                    name={field}
                    value={formData[field as keyof typeof formData]}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border-[var(--nav-border)] rounded-xl bg-[rgba(56,189,248,0.1)] hover:bg-[rgba(56,189,248,0.15)] text-white backdrop-blur-sm focus:ring-2 focus:ring-[var(--nav-hover)] transition-all duration-200"
                    placeholder={`Enter your ${field}`}
                  />
                </div>
              ))}

              <div>
                <Label htmlFor="branch" className="text-sm font-medium text-white">
                  Branch
                </Label>
                <Select onValueChange={handleBranchChange} value={formData.branch}>
                  <SelectTrigger id="branch" className="w-full p-4 border-[var(--nav-border)] rounded-xl bg-[rgba(56,189,248,0.1)] hover:bg-[rgba(56,189,248,0.15)] text-white">
                    <SelectValue placeholder="Select your branch" />
                  </SelectTrigger>
                  <SelectContent className="bg-[var(--nav-bg)] border border-[var(--nav-border)] rounded-xl shadow-lg">
                    {["CSE", "ECE", "ME", "EEE", "CE", "AI_DS", "BT", "CHE", "CSE_AI_ML", "EIE", "ETE", "IEM", "ISE"].map((branch) => (
                      <SelectItem 
                        key={branch} 
                        value={branch} 
                        className="p-3 text-white hover:bg-[rgba(56,189,248,0.2)] transition-colors duration-200"
                      >
                        {branch.replace('_', ' ')}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <Button 
                type="submit" 
                className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-[var(--workshop-gradient-from)] to-[var(--workshop-gradient-to)] rounded-full button-glow transition-all duration-300 transform hover:-translate-y-1"
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