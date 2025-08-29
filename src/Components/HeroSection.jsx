import { useTranslation } from "react-i18next";
import img from '../assets/Desktop.png'

export default function HeroSection() {
  const { t } = useTranslation();
  return (
    <section className="w-full bg-[#F2F2F2] mt-6 px-5 py-3 rounded overflow-hidden flex flex-col md:flex-row justify-between items-center">
        
      <div className="hero text-left p-8 w-full md:w-96">
        <h1 className="text-4xl text-[#0E324D] font-bold">{t("hero.title")}</h1>
        <p className="mt-4 text-gray-600">{t("hero.subtitle")}</p>
        <button className="mt-6 px-10 py-2 bg-[#0E324D] text-white rounded hover:bg-blue-700">
          {t("hero.button")}
        </button>
      </div>

      <div className="w-full md:w-[50%] p-4">
        <img src={img} className="w-full h-auto" alt=''/>
      </div>

    </section>
  );
}
