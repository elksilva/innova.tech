import Espacioblanco from "@/componets/Espacioblanco";
import Services from "@/componets/Services";
import Slider from "@/componets/Slider";

export const metadata = {
  title: 'Servicios - InnovaTech Quindío',
  description: 'Soporte y Desarrollo Informático - Diseño de páginas web - Aplicaciones Web - Reparación de Computadoras - Impresoras',
  keywords: 'Desarrollo Web, Aplicaciones web, e-commerce, soporte, reparación de computadores e impresoras, Quindío, Colombia',
}

export default function page() {
  return (
    <>
      <Slider/>
      <Espacioblanco/>
      <Services/>
      <Espacioblanco/>
    </>
  )
}
