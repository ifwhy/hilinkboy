import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/' className='flex'>
      <p className='text-xl md:text-2xl lg:text-3xl font-bold text-black dark:text-white selection:bg-green-50 selection:text-white'>Hi
        <span className='text-green-50 selection:text-black'>link</span>
        <span className='text-black dark:text-white'>boy.</span>
      </p>
    </Link>
  );
};

export default Logo;