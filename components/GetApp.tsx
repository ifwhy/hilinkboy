'use client';

import Image from 'next/image';
import Button from './Button';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const GetApp = () => {

  useEffect(() => {
    Aos.init({
      once: false,
      delay: 500,
      duration: 1000,
      easing: 'ease-in-out',
    });
  });

  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12" data-aos="fade-up">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Unduh Aplikasinya Sekarang!</h2>
          <p className='regular-16 text-gray-10' >Tersedia di iOS dan Android</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="btn_white"
              full
              data-aos="fade-up"
            />
            <Button
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              data-aos="fade-up"
            />
          </div>
        </div>

        <div className='flex flex-1 items-center justify-end'>
          <Image
            src="/phones.png"
            alt="phones"
            width={550}
            height={870}
            data-aos="fade-up"
          />
        </div>
      </div>
    </section>
  );
};

export default GetApp;