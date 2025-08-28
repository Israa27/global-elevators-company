import React from "react";
import {
  FaSquareInstagram,
  FaSquareXTwitter,
  FaSquareFacebook,
} from "react-icons/fa6";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png"
import img from "../assets/appStore.png";
import img2 from "../assets/googlePlay.png";

export default function Footer() {
  const { t, i18n } = useTranslation();
  const year = new Date().getFullYear();
  const isRTL = i18n.language === "ar";

  const sections = [
    {
      title: t("footer.company"),
      links: [
        { label: t("footer.links.home"), href: "/" },
        { label: t("footer.links.about"), href: "#about" },
        { label: t("footer.links.services"), href: "#services" },
      ],
    },
    {
      title: t("footer.contact"),
      links: [
        {
          label: t("footer.contactList.email"),
          href: "mailto:example@domain.com",
        },
        { label: t("footer.contactList.phone"), href: "tel:+964123456789" },
        {
          label: t("footer.contactList.address"),
          href: "123 Main Street, City, Country",
          external: true,
        },
      ],
    },
  ];


  const appLinks = [
    { img: img, label: "appStore", href: "https://apple.com" },
    { img: img2, label: "googlePlay", href: "https://play.google.com" },
  ];

  
  const socialLinks = [
    {
      icon: <FaSquareFacebook />,
      label: "Facebook",
      href: "https://facebook.com",
    },
    {
      icon: <FaSquareInstagram />,
      label: "Instagram",
      href: "https://instagram.com",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      href: "https://linkedin.com",
    },
    {
      icon: <FaSquareXTwitter />,
      label: "Twitter",
      href: "https://twitter.com",
    },
  ];

  return (
    <footer
      className={`bg-[#3F4A53] text-white pt-12 px-6 sm:px-10 lg:px-20`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="flex flex-row justify-between items-center">
        <img src={logo} className="w-40" alt=''/>
        <div className="flex flex-row items-start gap-3  w-[400px]">
        <div className="relative w-full">
          <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="email"
            placeholder="Enter your email..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300  text-gray-700 focus:outline-none"
          />
        </div>
        <button className="bg-[#0E324D] text-white px-6 py-2  hover:bg-blue-700 transition duration-200">
          Subscribe
        </button>
        </div>
    </div>

       <hr className="mt-10 border-gray-400 mb-6" />
       
      <div className="flex flex-wrap justify-between gap-y-10">
       
        {sections.map((section, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/4 min-w-[180px] px-2"
          >
            {section.title && (
              <h3
                className={`font-semibold text-lg mb-3 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {section.title}
              </h3>
            )}

            <div className="flex flex-col gap-2">
              {section.links.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target={link.external ? "_blank" : "_self"}
                  rel={link.external ? "noopener noreferrer" : ""}
                  className={`text-sm text-white hover:text-gray-300 transition duration-200 ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}

        
        <div className="w-full sm:w-1/2 lg:w-1/4 min-w-[200px] px-2">
          <div className="grid grid-cols-1 gap-6">
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-bold text-lg">Download App</h3>
              <div className="flex flex-row gap-3">
                {appLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={link.img} alt={link.label} className="w-32 h-10" />
                  </a>
                ))}
              </div>
            </div>

           
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-bold text-lg">Follow Us</h3>
              <div className="flex flex-row gap-4">
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-2xl text-white hover:text-gray-300 transition duration-200"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="mt-10 border-gray-400" />

      <div className="w-full flex justify-center mt-4">
        <p className="text-center text-sm text-gray-200 py-6">
          {t("footer.copyright", { year })}
        </p>
      </div>
    </footer>
  );
}
