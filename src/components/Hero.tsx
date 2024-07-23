"use client";

import React, { useState } from 'react';

const App: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  const renderForm = () => {
    switch (selectedYear) {
      case 'First Year':
        return (
          <><div className="p-6 bg-blue-400 text-card-foreground rounded-lg shadow-lg max-w-md mx-2">
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
          </div>
          <div className="p-6 bg-blue-400 text-card-foreground rounded-lg shadow-lg max-w-md mx-2">
              <h2 className="text-2xl font-semibold mb-4">SELECT YOUR BRANCH</h2>
              <div className="grid grid-cols-1 gap-4 mb-6">
                <label className="flex items-center space-x-2">
                  <span>Electronics & Communication:</span>
                  <input type="checkbox" className="form-checkbox text-primary-foreground bg-input border-border rounded focus:ring-primary focus:ring-2" />
                </label>
                <label className="flex items-center space-x-2">
                  <span>Electronics & Communication:</span>
                  <input type="checkbox" className="form-checkbox text-primary-foreground bg-input border-border rounded focus:ring-primary focus:ring-2" />
                </label>
                <label className="flex items-center space-x-2">
                  <span>Electronics & Communication:</span>
                  <input type="checkbox" className="form-checkbox text-primary-foreground bg-input border-border rounded focus:ring-primary focus:ring-2" />
                </label>
                <label className="flex items-center space-x-2">
                  <span>Electronics & Communication:</span>
                  <input type="checkbox" className="form-checkbox text-primary-foreground bg-input border-border rounded focus:ring-primary focus:ring-2" />
                </label>
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
            </div></>



        );
      case 'Second Year':
        return (
          <><div className="p-6 bg-blue-400 text-card-foreground rounded-lg shadow-lg max-w-md mx-2">
            <h2 className="text-2xl font-semibold mb-4">SELECT YOUR SEMESTER</h2>
            <div className="grid grid-cols-1 gap-4 mb-6">
              <label className="flex items-center space-x-2">
                <span>Third:</span>
                <input type="checkbox" className="form-checkbox text-primary-foreground bg-input border-border rounded focus:ring-primary focus:ring-2" />
              </label>
              <label className="flex items-center space-x-2">
                <span>Fourth:</span>
                <input type="checkbox" className="form-checkbox text-primary-foreground bg-input border-border rounded focus:ring-primary focus:ring-2" />
              </label>
            </div>
            <button type="submit" className="bg-blue-500 text-secondary-foreground hover:bg-blue-600 px-4 py-2 rounded-md w-full transition-colors duration-300">
              Submit
            </button>
          </div>
          <div className="p-6 bg-blue-400 text-card-foreground rounded-lg shadow-lg max-w-md mx-2">
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
            </div></>
        );
      case 'Third Year':
        return (
          <><div className="p-6 bg-blue-400 text-card-foreground rounded-lg shadow-lg max-w-md mx-2">
          <h2 className="text-2xl font-semibold mb-4">SELECT YOUR SEMESTER</h2>
          <div className="grid grid-cols-1 gap-4 mb-6">
            <label className="flex items-center space-x-2">
              <span>Fifth:</span>
              <input type="checkbox" className="form-checkbox text-primary-foreground bg-input border-border rounded focus:ring-primary focus:ring-2" />
            </label>
            <label className="flex items-center space-x-2">
              <span>Sixth:</span>
              <input type="checkbox" className="form-checkbox text-primary-foreground bg-input border-border rounded focus:ring-primary focus:ring-2" />
            </label>
          </div>
          <button type="submit" className="bg-blue-500 text-secondary-foreground hover:bg-blue-600 px-4 py-2 rounded-md w-full transition-colors duration-300">
            Submit
          </button>
        </div>
        <div className="p-6 bg-blue-400 text-card-foreground rounded-lg shadow-lg max-w-md mx-2">
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
          </div></>
        );
      case 'Fourth Year':
        return (
          <><div className="p-6 bg-blue-400 text-card-foreground rounded-lg shadow-lg max-w-md mx-2">
          <h2 className="text-2xl font-semibold mb-4">SELECT YOUR SEMESTER</h2>
          <div className="grid grid-cols-1 gap-4 mb-6">
            <label className="flex items-center space-x-2">
              <span>Seventh:</span>
              <input type="checkbox" className="form-checkbox text-primary-foreground bg-input border-border rounded focus:ring-primary focus:ring-2" />
            </label>
            <label className="flex items-center space-x-2">
              <span>Eight:</span>
              <input type="checkbox" className="form-checkbox text-primary-foreground bg-input border-border rounded focus:ring-primary focus:ring-2" />
            </label>
          </div>
          <button type="submit" className="bg-blue-500 text-secondary-foreground hover:bg-blue-600 px-4 py-2 rounded-md w-full transition-colors duration-300">
            Submit
          </button>
        </div>
        <div className="p-6 bg-blue-400 text-card-foreground rounded-lg shadow-lg max-w-md mx-2">
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
          </div></>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex">
      <div className="flex flex-col space-y-4 p-10">
        {['First Year', 'Second Year', 'Third Year', 'Fourth Year'].map(year => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className="bg-gradient-to-r from-blue-400 to-blue-600 text-primary-foreground py-3 px-20 rounded-none shadow-lg transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl hover:from-blue-600 hover:to-blue-400"
          >
            {year}
          </button>
        ))}
      </div>
      <div className="flex justify-end p-10">
        {renderForm()}
      </div>
    </div>
  );
};

export default App;
