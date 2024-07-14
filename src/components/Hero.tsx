import React from 'react'

const Hero = () => {
  return (
    <div >
         <div className="flex space-x-4 p-10 m-10">
              <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-primary-foreground py-3 px-40 rounded-none shadow-lg transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl hover:from-blue-600 hover:to-blue-400">
               First Year
              </button>
        </div>
        <div className="flex space-x-4 p-10 m-8">
              <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-primary-foreground py-3 px-40 rounded-none shadow-lg transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl hover:from-blue-600 hover:to-blue-400">
                Second Year
              </button>
        </div>
        <div className="flex space-x-4 p-10 m-10">
              <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-primary-foreground py-3 px-40 rounded-none shadow-lg transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl hover:from-blue-600 hover:to-blue-400">
                Third Year
              </button>
        </div>
        <div className="flex space-x-4 p-10 m-10">
              <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-primary-foreground py-3 px-40 rounded-none shadow-lg transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl hover:from-blue-600 hover:to-blue-400">
                Fourth Year
              </button>
        </div>
    </div>
  )
}

export default Hero