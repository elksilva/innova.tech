'use client' 
import BarraInfo from '@/componets/BarraInfo'
import Logonav from '@/componets/Logonav'
import Btnwhastapp from '@/componets/Btnwhastapp'
import Footer from '@/componets/Footer'
import FacebookPixel from '@/componets/FacebookPixel'
import React, {useState } from 'react';
import './globals.css'
import Spinner from "@/componets/Spinner"

import { Rubik, Mulish } from 'next/font/google'
import NextTopLoader from "nextjs-toploader"
import FacebookPixel from '@/componets/FacebookPixel'


const fuentePrimaria = Rubik({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'] 
}) 

export default function RootLayout({ children, pageProps }) {

  const [loading, setLoading] = useState(true);

  return (
    <html lang="es">
      <body className={fuentePrimaria.className}>
        {/* <div>
          {loading ? (
            <Spinner/>
          ) : (
            <div {...pageProps} />
          )}
        </div> */}
        <NextTopLoader  
          color='#ff0404'
          showSpinner={false}
        />
        <BarraInfo/>
        <Logonav/>
            {children}
        <Btnwhastapp/>
        <Footer/>
        <FacebookPixel/>
      </body>
    </html>
  )
}
