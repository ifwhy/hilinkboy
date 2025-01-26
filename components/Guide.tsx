'use client';

import Aos from 'aos';
import Image from 'next/image';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const Guide = () => {

  useEffect(() => {
    Aos.init({
      once: false,
      delay: 500,
      duration: 1000,
      easing: 'ease-in-out',
    });
  });

  return (
    <section id='services' className="flexCenter flex-col md:pt-20">
      <div className="padding-container max-container w-full pb-24">
        <Image src='/camp.svg' alt='camp' width={50} height={50} data-aos="fade-up" />
        <p className="regular-18 uppercase -mt-1 mb-3 text-green-700 dark:text-green-50" data-aos="fade-up">
          Kami Hadir untuk anda
        </p>

        <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
          <h2 className='bold-40 lg:bold-64 xl:max-w-[45%]' data-aos="fade-up">Panduan Mudah Menuju Jalur Terbaik</h2>
          <p className='regular-16 dark:text-white text-gray-30 xl:max-w-[520px]' data-aos="fade-up">
            Dengan aplikasi Hilink, Anda tak perlu khawatir tersesat di Selo! Kami menyediakan peta offline yang tetap bisa digunakan meskipun tanpa koneksi internet di area pegunungan.
            Ajak teman, keluarga, dan kerabat Anda menikmati petualangan seru menjelajahi lembah hingga mencapai puncak keindahan alam Selo, Boyolali.
          </p>
        </div>
      </div>

      <div className='flexCenter max-container relative w-full'>
        <Image
          src='/bg-1.jpg'
          alt='Bukit Sanjaya'
          width={1440}
          height={580}
          className='w-full object-cover min-h-[350px] object-center 2xl:rounded-5xl'
          data-aos="fade-up"
        />

        <div
          className='absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl shadow-md md:left-[5%] lg:top-20 dark:bg-green-90'
          data-aos="fade-up"
        >
          <Image
            src='/meter.svg'
            alt='meter'
            width={16}
            height={158}
            className='h-full w-auto'
          />
          <div className='flexBetween flex-col'>
            <div className='flex w-full flex-col'>
              <p className='regular-16 text-gray-20 dark:text-white'>Destinasi wisata</p>
              <p className='bold-16 text-green-50'>30 Menit</p>
              <h4 className='bold-20 mt-2 dark:text-white'>Selo</h4>
            </div>

            <div className='flex w-full flex-col'>
              <p className='regular-16 text-gray-20'>Start Track</p>
              <h4 className='bold-20 mt-2 whitespace-nowrap dark:text-white'>Boyolali</h4>
              <p className='regular-16 text-gray-20'>Finish Track</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Guide;