'use client'

import Link from "next/link"

export default function Banner() {
  return (
    <section>
      <div
        className="bg-cover bg-center min-h-[320px] md:min-h-[570px] h-auto mx-auto"
        style={{
          backgroundImage: 'url(https://lh3.googleusercontent.com/p/AF1QipMF4Ol0QJx45FzdCodAwPQJTHcBvmOMZlGM1BV7=s1360-w1360-h1020)',
          margin: '16px',
          backgroundColor: '#ffffff',
        }}
      >
        <div className="bg-black bg-opacity-40 h-full flex flex-col items-center justify-center text-white min-h-[320px] md:min-h-[570px] h-auto mx-auto">
          <div
            className="text-4xl md:text-7xl text-center font-bold tracking-wide mb-4"
            style={{
              textShadow: '2px 2px #cf2361',
              fontWeight: 700,
              textTransform: 'none',
            }}
          >
            Village Square Pharmacy
          </div>
          <div className="text-xl md:text-2xl text-center font-bold mb-4">Prescription for Wellness, Care You Can Trust</div>
          <div className="mb-4 text-center">
            <Link
              href="/contact"
              className="text-white bg-rounded bg-vill px-6 py-2 rounded-full font-bold hover:bg-accent-dark"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
