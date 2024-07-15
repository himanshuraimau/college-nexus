import React from 'react'

const Form = () => {
  return (
    <div className="relative">
    <form className="absolute top-4 right-20 p-6 bg-blue-400 text-card-foreground rounded-lg shadow-lg max-w-md mx-auto">
              <h2 className="text-2xl font-semibold mb-4">SELECT YOUR SEMESTER</h2>
              <div className="grid grid-cols-1 gap-4 mb-6">
                <label className="flex items-center space-x-2">
                  <span>First:</span>
                  <input type="checkbox" className="form-checkbox text-primary-foreground bg-input border-border rounded focus:ring-primary focus:ring-2" />
                </label>
                <label className="flex items-center space-x-2">
                  <span>Second:</span>
                  <input type="checkbox" className="form-checkbox text-primary-foreground bg-input border-border rounded focus:ring-primary focus:ring-2" />
                </label>
              </div>
              <button type="submit" className="bg-blue-500 text-secondary-foreground hover:bg-blue-600 px-4 py-2 rounded-md w-full transition-colors duration-300">
                Submit
              </button>
            </form>

            <form className="p-6 bg-blue-400 text-card-foreground rounded-lg shadow-lg max-w-md mx-auto">
              <h2 className="text-2xl font-semibold mb-4">SELECT YOUR BRANCH</h2>
              <div className="grid grid-cols-1 gap-4 mb-6">
                <label className="flex items-center space-x-2">
                  <span>Electronics & Communication:</span>
                  <input type="checkbox" className="form-checkbox text-primary-foreground bg-input border-border rounded focus:ring-primary focus:ring-2" />
                </label>
                <label className="flex items-center space-x-2">
                  <span>AI & DS:</span>
                  <input type="checkbox" className="form-checkbox text-primary-foreground bg-input border-border rounded focus:ring-primary focus:ring-2" />
                </label>
              </div>
              <button type="submit" className="bg-blue-500 text-secondary-foreground hover:bg-blue-600 px-4 py-2 rounded-md w-full transition-colors duration-300">
                Submit
              </button>
            </form>
  </div>
  )
}

export default Form