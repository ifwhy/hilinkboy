'use client';

import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import Logo from './Logo';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

  useEffect(() => {
    Aos.init({
      once: true,
      delay: 500,
      duration: 1000,
      easing: 'ease-in-out',
    });
  });

  return (
    <footer id='contact-us' className="flexCenter mt-3 md:mb-10 selection:dark:text-white" data-aos="fade-up">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <div className="mb-10">
            <Logo />
          </div>

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn
                title={columns.title}
                key={columns.title}
              >
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    <Link href="/" key={link} className='dark:text-white hover:dark:text-green-50 hover:text-black transition-all duration-300'>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row dark:text-white"
                  >
                    <p className="whitespace-nowrap text-sm">
                      {link.label}:
                    </p>
                    <p className="medium-14 whitespace-nowrap text-green-50 selection:dark:text-white">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map((link) => (
                    <Link href="/" key={link}>
                      <Image src={link} alt="logo" width={24} height={24} className='dark:bg-white dark:rounded-full dark:p-[2.5px]' />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className='text-center dark:text-white text-sm max-w-2xl mx-auto'>
          &quot;Website ini sepenuhnya dibuat sebagai proyek portofolio semata. Seluruh konten, informasi, dan layanan di dalamnya bersifat fiktif dan digunakan hanya untuk keperluan demonstrasi. Hak cipta gambar dan ikon milik pemilik aslinya.&quot;
        </p>
        <div className='flex mb-5 md:mb-0 flex-col justify-center items-center gap-2'>
          <p className='regular-14 w-full text-center text-gray-30 dark:text-white'>&copy; 2025 <span className=' text-black dark:text-white font-semibold'>Hi</span><span className=' text-green-50 font-semibold'>link</span><span className=' text-black dark:text-white font-semibold'>boy</span> | All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;