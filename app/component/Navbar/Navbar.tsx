'use client'
import Link from "next/link"
import { usePathname} from "next/navigation"

export default function Navbar () {
    const pathname = usePathname();
    const activeElement = 'text-vill'
    const nonActiveElement = 'md:hover:text-vill'
    return(
<nav className="bg-white  dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-md sticky top-0 z-10">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link href="/" className="flex items-center">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Village Logo</span>
    </Link>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
        <Link href={"/"} className={pathname === '/' ? activeElement: nonActiveElement}>Home</Link>
        </li>
        <li>
        <Link href={"/services"} className= {pathname === '/services' ? activeElement:nonActiveElement}>Services</Link>
        </li>
        <li>
        <Link href={"/products"} className= {pathname === '/products' ? activeElement:nonActiveElement}>Products</Link>
        </li>
        <li>
        <Link href={"/photos"} className= {pathname === '/photos' ? activeElement:nonActiveElement}>Photos</Link>
        </li>
        <li>
                < Link href={"/contact" }className= {pathname === '/contact' ? activeElement:nonActiveElement}>Contact Us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    )
}
  
