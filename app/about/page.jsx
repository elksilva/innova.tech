import Slider from "@/componets/Slider";
import We from "@/componets/We";

export const metadata = {
  title: 'Nosotros - InnovaTech Quindío Desarrollo de Aplicaciones Web',
  description: 'Soporte y Desarrollo Software - Diseño de páginas web - Aplicaciones Web - Reparación de Computadoras - Impresoras, Software para reserva de citas online.',
  keywords: 'Desarrollo Web, Aplicaciones web, e-commerce, soporte, reparación de computadores e impresoras, Quindío, Colombia',
}

const Nosotros = ({children}) => {
  return (
    <>
      <div>
        <link
            rel="canonical"
            href="https://innovatechquindio.net/about"
            key="canonical"
        />
      </div>
      <Slider/>
      <We/>
    </>
  )
}

export default Nosotros
