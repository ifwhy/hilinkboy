import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Logo from './Logo';
import { Menu } from 'lucide-react';
import ToggleDarkMode from './ToggleDarkMode';
import Link from 'next/link';
import { MEDIA_SOCIALS, NAV_LINKS } from '@/constants';
import React from 'react';

const DrawerMobile = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden dark:text-white"
        />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>
            <div className='flex items-center gap-2 justify-center flex-wrap'>
              <Logo />
              <Link href="/" className="font-bold text-xl">Boyolali Exploration</Link>
            </div>
          </SheetTitle>
          <div className='flex flex-col items-center'>
            <ul className='w-full flex justify-center items-center flex-col gap-2 my-3'>
              {NAV_LINKS.map((link) => (
                <Link href={link.href} className='flex font-semibold items-center gap-3 rounded-lg pl-3 py-2 w-full border-b-2 border-b-white dark:border-b-black hover:border-b-green-50 hover:dark:text-green-50 hover:text-green-50 hover:dark:border-b-green-50 transition-all duration-400' key={link.key}
                >
                  {React.createElement(link.icon)}
                  <p>{link.label}</p>
                </Link>
              ))}
            </ul>

            {/* Social Media */}
            <div className='mt-5 transition-all duration-500'>
              <p className='text-black text-lg dark:text-white font-semibold text-center border-b-2 border-b-black dark:border-b-white'>Follow Us</p>

              <div className='flex justify-evenly items-center gap-6 my-5'>
                {MEDIA_SOCIALS.map((media) => (
                  <Link
                    href={`${media.link}`}
                    key={`${media.name}`}
                    target='_blank'
                    className='text-black dark:text-white text-2xl transition-all duration-400 hover:text-green-50'
                  >
                    {React.createElement(media.icon)}
                  </Link>
                ))}
              </div>
            </div>

            {/* Toggle Dark Mode */}
            <div className='flex mt-5 flex-col flex-wrap justify-center items-center w-full gap-3'>
              <ToggleDarkMode />
            </div>

            {/* Copyright */}
            <div className='font-semibold text-sm p-2 absolute bottom-0 left-0 right-0 flex justify-center items-center flex-col gap-2 mb-2 dark:text-white rounded-t-lg'>
              <p>&copy; 2025 <span className=' text-black dark:text-white'>Hi</span><span className=' text-green-50'>link</span><span className=' text-black dark:text-white'>boy</span></p>
              <p className='dark:text-white'>All Rights Reserved</p>
            </div>

          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default DrawerMobile;
