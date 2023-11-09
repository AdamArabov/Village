'use client'
import Image from "next/image";
import Link from "next/link"
import Logo from '@/public/NavLogo.png'

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-2 sm:px-5 py-4 sm:py-8 mx-auto flex flex-col sm:flex-row items-center mt-auto">
        <div className="sm:w-1/4 sm:text-center text-center mb-4 sm:mb-0">
        <Link href="/" className="flex items-center">
        <Image
         src={Logo}
         alt="Logo" 
         className="self-center w-auto"
         width={200}
         />

          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
        </Link>
        </div>
        <div className="sm:w-1/2 text-center">
          <span className="inline-flex justify-center">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
        <div className="sm:w-1/4 sm:text-center sm:text-right text-center mt-4 sm:mt-0">
          <p className="text-sm text-vill">
            <span className="block">100 Village Sq suite 130</span>
            <span className="block">Glen Cove, NY 11542, USA</span>
            <span className="block">Phone | (516) 201-2820</span>
            <span className="block">Email | villagesquarerx@gmail.com</span>
            <span className="block">Hours of Operation:</span>
            <span className="block">Mon-Fri: 9:00 AM - 6:30 PM</span>
            <span className="block">Sat:9:00 AM - 5:00 PM</span>
            <span className="block">Sun: Closed</span>
          </p>
        </div>
      </div>
    </footer>
  );
}