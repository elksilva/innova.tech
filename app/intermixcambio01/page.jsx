
import BannerIntermix from '@/componets/BannerIntermix'
import HeaderIntermix from '@/componets/HeaderIntermix'
import Interfazintermix from '@/componets/Interfazintermix'
import MainIntermix from '@/componets/MainIntermix'

export const metadata = {
  title: 'InterMix - App de Reservas',
  description: 'Sistema para la gestión de reservas de citas de barbería, salón de belleza, Spa y cualquier negocio que maneje reservas de citas online.',
  keywords: 'Software reserva de citas, software reservas citas, sistema para barbería, sistema salón de belleza y spa, reservas online',
}

const Intermix = () => {
  return (
    <>
      <HeaderIntermix/>
      <MainIntermix/>
      <BannerIntermix/>
      <Interfazintermix/>
    </>
  )
}

export default Intermix