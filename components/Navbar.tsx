import { NAV_LINKS } from '@/constants';
import Link from 'next/link';
import Button from './Button';
import DrawerMobile from './DrawerMobile';
import Logo from './Logo';
import ToggleDarkMode from './ToggleDarkMode';

const Navbar = () => {
  return (
    <nav className="flexBetween min-w-[100%] z-50 max-container padding-container pt-5 relative py-3 md:sticky md:top-0 md:bg-white dark:bg-black">
      <Logo />

      <ul className="hidden h-full gap-12 lg:flex lg:items-center lg:justify-center">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all border-b-[3px] border-b-white duration-400 hover:border-b-green-50 hover:text-green-50 hover:dark:text-green-50 dark:border-b-black  dark:text-white hover:hover:dark:border-b-green-50 rounded
            selection:text-white selection:bg-green-50 selection:dark:text-black selection:dark:bg-green-50
            "
          >
            {link.label}
          </Link>
        ))}
        <ToggleDarkMode />
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green dark:bg-green-50"
        />
      </div>

      {/* Mobile Drawer */}
      <div className='lg:hidden flex flex-col items-end transition-all duration-500'>
        <DrawerMobile />
      </div>

    </nav>
  );
};

export default Navbar;