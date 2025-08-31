import React, { forwardRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { IoMenu } from "react-icons/io5";

import { useTranslation } from 'react-i18next';

const Navbar = forwardRef(() => {
    const { t,i18n } = useTranslation();

    const NavbarLinks = [
    { id: 1, title: t('navbar.home'), link: '/' },
    { id: 2, title: t('navbar.services'), link: 'services' },
    { id: 3, title: t('navbar.projects'), link: 'projects' },
    { id: 4, title: t('navbar.about_us'), link: 'about' },
    {id: 5,title: t('navbar.contact_us'),link: 'contact_us'}
    ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll to a section 
  const handleScroll = (id) => {
    if (id === '/') {
      return; 
    }
    const section = document.getElementById(id);
    if (section) {
      const offset = 80; 
      const yCoordinate = section.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: yCoordinate, behavior: 'smooth' });
      setIsMenuOpen(false); 
    } else {
      console.warn(`Section with id ${id} not found`);
    }
  };


  return (
    <nav  role="navigation" className="relative heading  h-28 flex justify-between items-center py-6 px-8 md:px-32">
      {/* Logo Section */}
      <div className=' flex items-center gap-2  font-bold py-8 uppercase'>
        <img src={logo}  loading="lazy" className='lg:w-40 w-40' alt="Logo" />
      </div>

      {/* Links Section */}
            <ul className='hidden xl:flex items-center gap-6 text-green-950'>
        {NavbarLinks.map(links => (
          <li key={links.id}>

            {/* handle scroll */}
            {links.link === '/' ? (
              <Link 
                href={links.link} 
                data-testid={`navbar-link-${links.id}`} 
                className={`inline-block py-1 px-1 
                font-semibold ${i18n.language === 'ar' ? 'text-xl' : 'text-[12px]'}
                 hover:text-[#012948] transition-all cursor-pointer`}>
                {links.title}
              </Link>
            ) : links.type === 'external' ? (
              <a
                href={links.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block py-1 px-1 
                font-semibold ${i18n.language === 'ar' ? 'text-xl' : 'text-[12px]'}
                 hover:text-[#012948] transition-all cursor-pointer`}>
                {links.title}
              </a>
            ) : (
              <button 
                data-testid={`navbar-link-${links.id}`} 
                onClick={() => handleScroll(links.link)} 
                className={`inline-block py-1 px-1 
                font-semibold ${i18n.language === 'ar' ? 'text-xl' : 'text-[12px]'}

                 hover:text-[#012948] transition-all cursor-pointer`}>
                {links.title}
              </button>
            )}
          </li>
        ))}
      </ul>

      {/* Buttons Section */}
      
      <div className='relative hidden md:flex gap-2'>
        <a href='' target='_blank' className={`text-[#022138] hover:text-white rounded-md 
        ${i18n.language === 'ar' ? 'text-xl' : 'text-[14px]'}
        bg-transparent   border border-[#022138] px-6 py-2 duration-200 hover:bg-[#022138]  hidden md:block`}>
         {t('navbar.get_guote')}
        </a>
        <a href='http://localhost:5173/create_your_elevator' target='_blank' className={`text-neutral-50 rounded-md 
        ${i18n.language === 'ar' ? 'text-xl' : 'text-[14px]'}
        bg-[#022138] px-6 py-2 duration-200 hover:bg-[#075fa3]  hidden md:block`}>
         {t('navbar.create_your_lift')}
        </a>
        
      
      </div>

 {/* Mobile icons: language + menu */}
      <div className="flex items-center gap-3 md:hidden">
        
        <IoMenu 
          role="menu" 
          className="text-4xl text-blue-950 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
        />
      </div>

      {/* Mobile Menu */}
    <div 
      role="menu-icon"
      className={`
        absolute xl:hidden w-full z-30 top-28 left-0 
        bg-white flex flex-col items-center gap-2
        origin-top transform transition-all duration-500 
        ${isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}
      `}
>

        {NavbarLinks.map(links => (
          <li className='list-none w-full text-center p-4 transition-all cursor-pointer' key={links.id}>
            {/* handle scroll */}
            {links.link === '/' ? (
              <Link 
                href={links.link} 
                data-testid={`Hamburger-link-${links.id}`} 
                className={`inline-block py-1 px-1 
                font-semibold ${i18n.language === 'ar' ? 'text-xl' : 'text-[12px]'}
                 hover:text--[#012948] transition-all cursor-pointer`}>
                {links.title}
              </Link>
            ) : links.type === 'external' ? (
              <a
                href={links.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block py-1 px-1 
                font-semibold ${i18n.language === 'ar' ? 'text-xl' : 'text-[12px]'}
                 hover:text-[#012948] transition-all cursor-pointer`}>
                {links.title}
              </a>
            ) : (

              <button 
                onClick={() => handleScroll(links.link)} 
                className={`inline-block py-1 px-1 
                font-semibold ${i18n.language === 'ar' ? 'text-xl' : 'text-[12px]'}
                 hover:text-[#012948] transition-all cursor-pointer`}>
                {links.title}
              </button>
            )}
          </li>
        ))}
      
      </div>
    </nav>
  );
});

export default Navbar;
