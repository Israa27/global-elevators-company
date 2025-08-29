import React from 'react'
import img2 from '../assets/logo3.png'
export default function PartnersLogo() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-4">Our Partners</h2>
      <p className="text-gray-600 max-w-xl mb-8">
        We are proud to collaborate with leading companies and organizations that trust our services and solutions.
      </p>

      {/* Logos Grid */}
      <div className="flex flex-wrap justify-center gap-6">
        <img src={img2} alt="Partner 1" className="h-32 bg-gray-50 rounded mx-auto" />
        <img src={img2} alt="Partner 2" className="h-32 bg-gray-50 rounded mx-auto" />
        <img src={img2} alt="Partner 3" className="h-32 bg-gray-50 rounded mx-auto" />
        <img src={img2} alt="Partner 4" className="h-32 bg-gray-50 rounded mx-auto" />
        <img src={img2} alt="Partner 5" className="h-32 bg-gray-50 rounded mx-auto" />
        <img src={img2} alt="Partner 6" className="h-32 bg-gray-50 rounded mx-auto" />
        <img src={img2} alt="Partner 7" className="h-32 bg-gray-50 rounded mx-auto" />
        <img src={img2} alt="Partner 8" className="h-32 bg-gray-50 rounded mx-auto" />
        <img src={img2} alt="Partner 9" className="h-32 bg-gray-50 rounded mx-auto" />
      </div>
    </section>
  )
}
