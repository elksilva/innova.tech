
import Espacioblanco from '@/componets/Espacioblanco'
import Formulario from '@/componets/Formulario'
import Slider from '@/componets/Slider'
import React from 'react'

export const metadata = {
  title: 'Contacto - InnovaTech Quindío',
  description: 'Soporte y Desarrollo Informático - Diseño de páginas web - Aplicaciones Web - Reparación de Computadoras - Impresoras',
  keywords: 'Desarrollo Web, Aplicaciones web, e-commerce, soporte, reparación de computadores e impresoras, Quindío, Colombia',
}

const Contacto = () => {
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
    </>
  )
}

export default Contacto
