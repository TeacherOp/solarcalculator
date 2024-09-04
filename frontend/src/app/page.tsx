"use client"

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [roofArea, setRoofArea] = useState("");
  const [solarPanelEfficiency, setSolarPanelEfficiency] = useState("");
  const [result, setResult] = useState(null);

  const calculateCapacity = (e) => {
    e.preventDefault();
    const capacity = parseFloat(roofArea) * (parseFloat(solarPanelEfficiency) / 100);
    setResult(capacity.toFixed(2));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow overflow-y-auto p-8 bg-gradient-to-b from-gray-900 to-black">
        <header className="w-full text-center mb-12">
          <h1 className="text-4xl font-bold text-yellow-400 mb-4">AI Solar Roof Capacity Calculator</h1>
          <p className="text-xl text-gray-300">Discover your roof's solar potential with our advanced AI technology</p>
        </header>

        <section className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-3xl w-full mb-12 mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">How It Works</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li>Upload an image of your roof or drop google maps pin location</li>
            <li>Our AI analyzes the roof area and orientation</li>
            <li>Get an estimate of your solar panel capacity</li>
            <li>Receive a detailed report on potential energy savings</li>
          </ol>
        </section>

        <section className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-3xl w-full mb-12 mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Solar Capacity Calculator</h2>
          <form onSubmit={calculateCapacity} className="space-y-4">
            <div className="relative">
              <label htmlFor="roofArea" className="block mb-2 text-gray-300">
                Roof Area (m²):
                <span className="ml-2 inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <span className="absolute z-10 p-2 -mt-1 text-sm text-white bg-gray-900 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                    Enter only the free roof area. 1 m² ≈ 10.764 sq ft
                  </span>
                </span>
              </label>
              <input
                type="number"
                id="roofArea"
                value={roofArea}
                onChange={(e) => setRoofArea(e.target.value)}
                className="w-full p-2 border rounded bg-gray-700 text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="solarPanelCompany" className="block mb-2 text-gray-300">Solar Panel Company:</label>
              <select
                id="solarPanelCompany"
                value={solarPanelEfficiency}
                onChange={(e) => setSolarPanelEfficiency(e.target.value)}
                className="w-full p-2 border rounded bg-gray-700 text-white"
                required
              >
                <option value="">Select a company</option>
                <option value="20">Adani Solar (20% efficiency)</option>
                <option value="19">Tata Solar (19% efficiency)</option>
                <option value="21">Waaree Solar (21% efficiency)</option>
                <option value="18">Vikram Solar (18% efficiency)</option>
                <option value="22">Renewsys (22% efficiency)</option>
              </select>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded">
                Generate Report
              </button>
            </div>
          </form>
          {result && (
            <div className="mt-4">
              <p className="font-bold text-yellow-400">Estimated Solar Capacity: {result} kW</p>
            </div>
          )}
        </section>

        <section className="mt-12 text-center">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-full text-lg transition duration-300">
            Start Your Solar Assessment
          </button>
        </section>
      </main>

      <footer className="w-full bg-gray-800 text-gray-300 text-center py-4">
        <p>&copy; 2024 AI Solar Roof Calculator. All rights reserved.</p>
        <p>Powered by <a href="https://incubatorop.com" className="underline text-yellow-400">incubatorop.com</a></p>
      </footer>
    </div>
  );
}
