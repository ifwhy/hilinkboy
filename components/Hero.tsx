'use client';

import Image from 'next/image';
import Button from './Button';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {

  const takeIsDarkModeFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
      const isDarkMode = localStorage.getItem('isDarkMode');
      return isDarkMode === 'true';
    }
    return false;
  };

  useEffect(() => {
    const isDarkMode = takeIsDarkModeFromLocalStorage();
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    Aos.init({
      once: false,
      delay: 500,
      duration: 1000,
      easing: 'ease-in-out',
    });
  });

  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row dark:bg-black dark:text-white">
      <div className="hero-map"/>

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2" data-aos="fade-up">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">Eksplor Indahnya Boyolali</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px] dark:text-white text-justify sm:text-left">
          Boyolali adalah sebuah kabupaten di Jawa Tengah, Indonesia. Kabupaten ini berbatasan dengan Kabupaten Semarang di utara, Kabupaten Magelang di barat, Kabupaten Klaten di selatan, dan Kota Solo di timur. Boyolali dikenal sebagai daerah yang kaya akan sejarah dan budaya, dengan banyak situs-situs bersejarah yang masih tersisa hingga saat ini.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70 dark:text-green-50">
            198k
            <span className="regular-16 lg:regular-20 ml-1 font-semibold">Excellent Reviews</span>
          </p>
        </div>

        <div className="flex justify-center items-center flex-col w-full gap-3 sm:flex-row">
          <Button
            type="button"
            title="Unduh Aplikasi"
            variant="btn_green w-[80%] h-12 sm:max-w-sm hover:bg-green-700 transition-all duration-400"
          />
          <Button
            type="button"
            title="Eksplor Selo"
            icon="/play.svg"
            variant="btn_white"
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start md:pr-5">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8" data-aos="fade-up">

          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Lokasi</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Selo, Boyolali</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Jarak</p>
              <p className="bold-20 text-white">47 km</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Ketinggian</p>
              <p className="bold-20 text-white">1.564 mdpl</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;