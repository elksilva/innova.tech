
import Seccionintermix from "@/componets/Seccionintermix"
import Slider from "@/componets/Slider"
import We from "@/componets/We"
import Formulario from "../componets/Formulario"
import Proyectos from "../componets/Proyectos"
import Services from "../componets/Services"

export const metadata = {
  title: 'InnovaTech Quindío | Software reserva de citas online',
  description: 'Sistema para reservas de citas online, desarrollo web, aplicaciones web, soporte y reparación de computadores e impresoras, Quindío, Colombia.',
  keywords: 'Reserva de citas online, Desarrollo Web, Aplicaciones web, e-commerce, soporte, reparación de computadores e impresoras Quindío',
}

export default function Home() {

  return (
    <main>
      <div>
        <link
            rel="canonical"
            href="https://innovatechquindio.net/"
            key="canonical"
        />
      </div>
      <Slider/>
      <We/>
      <Services/>
      <Proyectos/>
      <Seccionintermix/>
      <Formulario/>  
    </main> 
  )
}
