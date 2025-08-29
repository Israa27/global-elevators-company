import React from 'react'
import HeroSection from '../Components/HeroSection'
import ServicesSection from '../Components/ServicesSection'
import ProjectsSection from '../Components/ProjectsSection'
import NewsSection from '../Components/NewsSection'
import ContcatSection from '../Components/ContcatSection'
import PartnersLogo from '../Components/PartnersLogo'

export default function Home() {
  return (
    <>
    <div className='mx-10'>
      <HeroSection/>
      <PartnersLogo/>
      <ServicesSection/>
     
      </div>
     <div className="bg-gray-100 py-16">
       <ProjectsSection />
  </div>
  <div>
       <NewsSection/>
      <ContcatSection/>
      </div>
    </>
  )
}
