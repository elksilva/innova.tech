'use client' 
import BarraInfo from '@/componets/BarraInfo'
import Logonav from '@/componets/Logonav'
import Btnwhastapp from '@/componets/Btnwhastapp'
import Footer from '@/componets/Footer'
import React, {useState } from 'react';
import './globals.css'
import Spinner from "@/componets/Spinner"

import { Rubik, Mulish } from 'next/font/google'
import NextTopLoader from "nextjs-toploader"


const fuentePrimaria = Rubik({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'] 
}) 

export default function RootLayout({ children, pageProps }) {

  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simula la carga de contenido (esto puede ser una llamada a una API u otra carga de datos)
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000); // Simulamos una carga de 2 segundos
  // }, []);

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
      </body>
    </html>
  )
}
