import { MenuIcon } from '@/components/atoms/menu-icon';
import { LogoIcon } from '@/components/atoms/logo-icon';
import Link from 'next/link';

export function Header() {
  return (
    <header className='fixed z-30 top-0 left-0 w-full md:bg-black md:bg-opacity-60'>
      <div className='container h-14 flex items-center justify-between gap-x-4 md:h-20'>
        <Link href='/'>
          <LogoIcon className='w-auto h-8 text-white md:h-12' />
        </Link>

        <nav className='hidden md:block h-full'>
          <ul className='h-full flex items-center gap-8 relative'>
            <li className='nav__item nav__item--active'>
              <Link href='#'>Home</Link>
            </li>
            <li className='nav__item'>
              <Link href='#'>Games</Link>
            </li>
            <li className='nav__item'>
              <Link href='#'>News</Link>
            </li>
            <li className='nav__item'>
              <Link href='#'>Match</Link>
            </li>
            <li className='nav__item'>
              <Link href='#'>Company</Link>
            </li>
            <li className='nav__item'>
              <Link href='#'>Events</Link>
            </li>
            <li className='nav__item'>
              <Link href='#'>Partners</Link>
            </li>
          </ul>
        </nav>

        <button className='md:hidden'>
          <MenuIcon className='w-8 h-8 text-white' />
        </button>
      </div>
    </header>
  );
}
