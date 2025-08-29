import { useEffect, useState, useRef } from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setVisible(window.scrollY > 300);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 z-[101] bg-[#012948] w-10 h-10 hover:bg-[#134b76] text-white p-3 rounded-full shadow-md transition-opacity duration-300"
      >
        <FaArrowUp />
      </button>
    )
  );
}
