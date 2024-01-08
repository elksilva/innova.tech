import Head from "next/head"
import Seccionintermix from "@/componets/Seccionintermix"
import Slider from "@/componets/Slider"
import We from "@/componets/We"
import FacebookPixel from "@/componets/FacebookPixel"
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
    <>
      <Head>
        {/* Agrega el código de Google Analytics aquí */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KWK9PMBHDR"></script>
        
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KWK9PMBHDR');
            `,
          }}
        />
        <FacebookPixel/>
      </Head>
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
    </> 
  )
}
