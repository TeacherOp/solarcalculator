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
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-gradient-to-b from-sky-400 to-blue-500">
      <header className="w-full text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">AI Solar Roof Capacity Calculator</h1>
        <p className="text-xl text-white">Discover your roof's solar potential with our advanced AI technology</p>
      </header>

      <section className="bg-white rounded-lg shadow-lg p-8 max-w-3xl w-full mb-12">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Upload an image of your roof or drop google maps pin location</li>
          <li>Our AI analyzes the roof area and orientation</li>
          <li>Get an estimate of your solar panel capacity</li>
          <li>Receive a detailed report on potential energy savings</li>
        </ol>
      </section>

      <section className="bg-white rounded-lg shadow-lg p-8 max-w-3xl w-full mb-12">
        <h2 className="text-2xl font-semibold mb-4">Solar Capacity Calculator</h2>
        <form onSubmit={calculateCapacity} className="space-y-4">
          <div>
            <label htmlFor="roofArea" className="block mb-2">Roof Area (m²):</label>
            <input
              type="number"
              id="roofArea"
              value={roofArea}
              onChange={(e) => setRoofArea(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="efficiency" className="block mb-2">Solar Panel Efficiency (%):</label>
            <input
              type="number"
              id="efficiency"
              value={solarPanelEfficiency}
              onChange={(e) => setSolarPanelEfficiency(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded">
            Calculate
          </button>
        </form>
        {result && (
          <div className="mt-4">
            <p className="font-bold">Estimated Solar Capacity: {result} kW</p>
          </div>
        )}
      </section>

      <section className="mt-12 text-center">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-6 rounded-full text-lg transition duration-300">
          Start Your Solar Assessment
        </button>
      </section>

      <footer className="w-full bg-blue-600 text-white text-center py-4 mt-auto">
        <p>&copy; 2024 AI Solar Roof Calculator. All rights reserved.</p>
        <p>Powered by <a href="https://incubatorop.com" className="underline">incubatorop.com</a></p>
      </footer>
    </main>
  );
}
