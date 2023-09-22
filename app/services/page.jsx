import Espacioblanco from "@/componets/Espacioblanco";
import Services from "@/componets/Services";
import Slider from "@/componets/Slider";

export const metadata = {
  title: 'Servicios | Software de Reserva de Citas Online Barbería',
  description: 'Soporte y Desarrollo Software - Diseño de páginas web - Aplicaciones Web - Reparación de Computadoras - Impresoras',
  keywords: 'Desarrollo Web, Aplicaciones web, e-commerce, soporte, reparación de computadores e impresoras, Quindío, Colombia',
}

export default function page() {
  return (
    <>
    <div>
        <link
            rel="canonical"
            href="https://innovatechquindio.net/services"
            key="canonical"
        />
      </div>
      <Slider/>
      <Espacioblanco/>
      <Services/>
      <Espacioblanco/>
    </>
  )
}
