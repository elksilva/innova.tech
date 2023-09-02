import Slider from "@/componets/Slider";
import We from "@/componets/We";

export const metadata = {
  title: 'Nosotros - InnovaTech Quindío',
  description: 'Soporte y Desarrollo Informático - Diseño de páginas web - Aplicaciones Web - Reparación de Computadoras - Impresoras',
  keywords: 'Desarrollo Web, Aplicaciones web, e-commerce, soporte, reparación de computadores e impresoras, Quindío, Colombia',
}

const Nosotros = ({children}) => {
  return (
    <>
      <Slider/>
      <We/>
    </>
  )
}

export default Nosotros
