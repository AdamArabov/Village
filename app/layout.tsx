import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Village Square Pharmacy',
  description: 'Welcome to Village Square Pharmacy, your trusted source for high-quality pharmaceutical products and personalized healthcare solutions. As a leading pharmacy in Glen Cove, we are dedicated to providing our community with top-notch service, expert guidance, and a wide range of prescription and over-the-counter medications.',
  keywords: ['Pharmacy Glen Cove', 'Village Square Pharmacy','Prescription medications',' Over-the-counter (OTC) drugs', 'Health and wellness products',' Medication counseling', 'Medication synchronization',' Online prescription refills', 'Home delivery pharmacy', 'Pharmaceutical services',' Trusted pharmacy',' Expert pharmacists',' Medication management', 'Personalized healthcare', 'Prescription savings',' Medical supplies', 'Vitamins and supplements', 'Health advice', 'Family pharmacy', 'Prescription transfer', 'Pharmacy near me',' Drug interactions',' Immunizations and vaccinations',' Chronic disease management',' Senior care pharmacy', 'Pharmacy rewards program', 'OTC recommendations', 'Affordable medications', 'Prescription consultations'],
  openGraph: {
    images: '/Photo (14).jpg',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<html lang="en">
  <body className={inter.className} style={{ display: "grid", gridTemplateRows: "auto 1fr auto", minHeight: "100vh" }}>
    <Navbar />
    <div className="mx-4">
      {children}
    </div>
    <Footer />
  </body>
</html>
  )
}
