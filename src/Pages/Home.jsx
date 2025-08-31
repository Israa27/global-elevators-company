import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import ServicesSection from '../Components/ServicesSection'
import ProjectsSection from '../Components/ProjectsSection'
import NewsSection from '../Components/NewsSection'
import ContcatSection from '../Components/ContcatSection'
import PartnersLogo from '../Components/PartnersLogo'
import BackToTop from '../Components/BackToTop'
import Footer from '../Components/Footer'
export default function Home() {
  return (
    <>
    <Navbar/>
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
      <BackToTop/>
      <Footer/>
    </>
  )
}
