import Image from 'next/image'
import './globals.css'
import { Outfit, Ovo } from 'next/font/google'


const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400','500','600','700'],
  variable: '--font-outfit',
})

const ovo = Ovo({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-ovo',
})

export const metadata = {
  title: 'Nobledevstudio',
  description: ''
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="smooth-scroll duration-500">
       <head>
        <link rel="icon" type="image/jpeg" href="/logo.jpeg" />
      </head>
      <body
        className={`${outfit.variable} ${ovo.variable} font-Outfit min-h-screen dark:bg-dark-theme dark:text-white`}
      >
 
        {children}

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.link/wew6o2"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50"
          aria-label="Chat on WhatsApp"
        >
          <Image
            src="/whatsapp_icon.png"
            alt="WhatsApp"
            width={56}
            height={56}
            className="hover:scale-110 transition-transform duration-300"
            priority
          />
        </a>
        
      </body>
    </html>
  )
}
