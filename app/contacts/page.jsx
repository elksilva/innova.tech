'use client'
import Espacioblanco from '@/componets/Espacioblanco'
import Formulario from '@/componets/Formulario'
import Slider from '@/componets/Slider'
import FacebookPixel from '@/componets/FacebookPixel'
import React from 'react'

import { useEffect } from 'react';

export const metadata = {
  title: 'Contacto - InnovaTech Quindío',
  description: 'Soporte y Desarrollo Informático - Diseño de páginas web - Aplicaciones Web - Reparación de Computadoras - Impresoras',
  keywords: 'Desarrollo Web, Aplicaciones web, e-commerce, soporte, reparación de computadores e impresoras, Quindío, Colombia',
}

const Contacto = () => {

  // //Se usa para captar clientes potenciales con el pixel de facebook cuando llegan a la página de contactos
  // useEffect(() => {
  //   function captureLead() {
  //     // Tu lógica para capturar un lead
  //     if (typeof window !== 'undefined' && window.fbq) {
  //       window.fbq('track', 'Lead');
  //     }
  //   }

  //   // Llamar a captureLead() cuando se carga la aplicación
  //   captureLead();
  // }, []);

  return (
    <>
      <div>
        <link
            rel="canonical"
            href="https://innovatechquindio.net/contacts"
            key="canonical"
        />
      </div>
      <Slider/>
      <Espacioblanco/>
      <Formulario/>
      <Espacioblanco/>
      <FacebookPixel/>
    </>
  )
}

export default Contacto
