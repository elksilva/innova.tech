
import BannerIntermix from '@/componets/BannerIntermix'
import HeaderIntermix from '@/componets/HeaderIntermix'
import Interfazintermix from '@/componets/Interfazintermix'
import MainIntermix from '@/componets/MainIntermix'

export const metadata = {
  title: 'InterMix App | Software de Reserva de Citas Online Barbería',
  description: 'Sistema para la gestión de reservas de citas de barbería, salón de belleza, Spa y cualquier negocio que maneje reservas de citas online. Software moderno.',
  keywords: 'Software reserva de citas online, sistema para reservas citas, sistema para barbería, sistema salón de belleza y spa, reservas online, toma de citas desde celular, aumenta tus ventas, sistema 100% online',
}

const Intermix = () => {
  return (
    <>
    <div>
        <link
            rel="canonical"
            href="https://innovatechquindio.net/intermix"
            key="canonical"
        />
      </div>
      <HeaderIntermix/>
      <MainIntermix/>
      <BannerIntermix/>
      <Interfazintermix/>
    </>
  )
}

export default Intermix