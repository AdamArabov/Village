'use client'

import Link from "next/link"

export default function Banner() {
    return(
         <section>
      <div
        className="bg-cover bg-center h-96"
        style={{
          backgroundImage: 'url(https://lh3.googleusercontent.com/p/AF1QipMF4Ol0QJx45FzdCodAwPQJTHcBvmOMZlGM1BV7=s1360-w1360-h1020)',
          margin: '50px',backgroundColor: '#ffffff'
        }}
      >
        <div className="bg-black bg-opacity-40 h-full flex flex-col items-center justify-center text-white">
          <div className="text-4xl font-bold tracking-wide mb-4">Village Square Pharmacy</div>
          <div className="text-2xl font-bold mb-4">Prescription for Wellness, Care You Can Trust</div>
          <div className="mb-4">
            <Link href="/contact" className="text-white bg-rounded bg-vill px-6 py-2 rounded-full font-bold hover:bg-accent-dark">
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>
    </section>
    )
}
