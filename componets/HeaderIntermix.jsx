import styles from '@/app/Styles/intermix.module.css'
import Image from 'next/image'
import logointermix from '../public/img/logomix.png'
import Link from 'next/link'

const HeaderIntermix = () => {
  return (
    <div className={styles.headerintermix}>
        <div className={styles.bloqueizq}>
            <Image 
            className={styles.imgmap} 
            src={logointermix}
            width={185} 
            height={200} 
            alt='imagen logotipo'
            unoptimized
            />
            {/* <h1><span>InterMix</span>App de Reservas</h1> */}
            <h3>Sistema para reservas de citas</h3>
            <p>Automatiza la gestión de reservas de citas de tu negocio con este moderno software. Haz que tus clientes tomen su cita previa desde su celular o cualquier dispositivo con conexión a internet.</p>
            <Link className={styles.boton} href="https://api.whatsapp.com/send?phone=573022016786">Contáctanos</Link>
        </div>
        <div className={styles.bloqueder}>

        </div>
    </div>
  )
}

export default HeaderIntermix