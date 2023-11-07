'use client'
import Link from "next/link"
import { usePathname} from "next/navigation"
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const activeElement = 'text-vill';
  const nonActiveElement = 'md:hover:text-vill';

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-md sticky top-0 z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Village Logo</span>
        </Link>

        { /* Mobile Menu Button (visible in mobile view) */ }
        <button
          onClick={toggleMobileMenu}
          className="md:hidden ml-auto text-gray-700 dark:text-gray-300 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        { /* Mobile Menu (visible in mobile view) */ }
        {isMobileMenuOpen && (
          <div className="w-full md:hidden">
            <ul className="font-medium flex flex-col p-4 mt-4 text-center rounded-lg bg-gray-50">
              <li>
                <Link href="/" className={pathname === '/' ? activeElement : nonActiveElement}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className={pathname === '/services' ? activeElement : nonActiveElement}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className={pathname === '/products' ? activeElement : nonActiveElement}>
                  Products
                </Link>
              </li>
              <li>
                <Link href="/photos" className={pathname === '/photos' ? activeElement : nonActiveElement}>
                  Photos
                </Link>
              </li>
              <li>
                <Link href="/contact" className={pathname === '/contact' ? activeElement : nonActiveElement}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}

        { /* Desktop Navigation Tabs (visible in desktop view) */ }
        <div className="hidden md:flex md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-row space-x-8 mt-4">
            <li>
              <Link href="/" className={pathname === '/' ? activeElement : nonActiveElement}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className={pathname === '/services' ? activeElement : nonActiveElement}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/products" className={pathname === '/products' ? activeElement : nonActiveElement}>
                Products
              </Link>
            </li>
            <li>
              <Link href="/photos" className={pathname === '/photos' ? activeElement : nonActiveElement}>
                Photos
              </Link>
            </li>
            <li>
              <Link href="/contact" className={pathname === '/contact' ? activeElement : nonActiveElement}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}