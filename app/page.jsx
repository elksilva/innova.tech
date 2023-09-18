
import Seccionintermix from "@/componets/Seccionintermix"
import Slider from "@/componets/Slider"
import We from "@/componets/We"
import Formulario from "../componets/Formulario"
import Proyectos from "../componets/Proyectos"
import Services from "../componets/Services"

export const metadata = {
  title: 'Home - InnovaTech Quindío',
  description: 'Soporte y Desarrollo Informático - Diseño de páginas web - Aplicaciones Web - Reparación de Computadoras - Impresoras',
  keywords: 'Desarrollo Web, Aplicaciones web, e-commerce, soporte, reparación de computadores e impresoras, Quindío, Colombia',
}

export default function Home() {

  return (
    <main>
      <Slider/>
      <We/>
      <Services/>
      <Proyectos/>
      <Seccionintermix/>
      <Formulario/>  
    </main> 
  )
}
