'use client';

import Image from 'next/image';
import HadiCodeLabIcon from '@/public/codelabIcon.png';
import {
  HomeIcon,
  IdentificationIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/solid';
import type { INavbarPagesList } from './Navbar.type';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '../Button/Button';

const navbarPagesList: INavbarPagesList[] = [
  {
    id: 1,
    title: 'Home',
    href: '/',
    icon: <HomeIcon className='h-5 w-5' />,
  },
  {
    id: 1,
    title: 'Portfolio',
    href: '/portfolio',
    icon: <IdentificationIcon className='h-5 w-5' />,
  },
  {
    id: 1,
    title: 'Blog',
    href: '/blog',
    icon: <DocumentTextIcon className='h-5 w-5' />,
  },
  {
    id: 1,
    title: 'Contact Us',
    href: '/contact',
    icon: <ChatBubbleLeftRightIcon className='h-5 w-5' />,
  },
];
const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className='h-[60px] w-full bg-background'>
      {/* Wrapper */}
      <div className='flex h-full flex-row items-center justify-around  xl:container'>
        {/* Site Log */}
        <div>
          <Image src={HadiCodeLabIcon} alt='site logo' width={32} height={32} />
        </div>
        {/* End of Site Logo */}
        {/* Links */}
        <div className='flex w-[27rem] flex-row items-center justify-between'>
          {navbarPagesList.map((item) => {
            return (
              <Link
                className={`flex flex-row items-center justify-center gap-2 ${
                  pathname === item.href
                    ? 'font-bold text-primary'
                    : 'text-neutral_40'
                }`}
                key={item.id}
                href={item.href}
              >
                {item.icon}
                <p>{item.title}</p>
              </Link>
            );
          })}
        </div>
        {/* End of Links */}
        {/* Profile or Login Button */}
        <div>
          {/* <button className='w-[100px] rounded-full bg-primary py-2 text-onPrimary'>
            Login
          </button> */}
          <Button
            variant='tonal'
            icon={<ArrowRightOnRectangleIcon className='h-5 w-5' />}
          >
            Login
          </Button>
        </div>
        {/* End of Profile or Login Button */}
      </div>
      {/* End of the wrapper */}
    </nav>
  );
};

export default Navbar;
