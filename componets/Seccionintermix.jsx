import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/img/logointermix.png'
import styles from '@/app/Styles/intermix.module.css'

const Seccionintermix = () => {
  return (
    <div className={styles.seccionintermix}>
      <div className={styles.secciontexto}>
        <div className={styles.logointermix}>
          <Image 
            className={styles.imagen1} 
            src={Logo} 
            width={244} 
            height={237} 
            alt='Logo InterMix App' 
            unoptimized 
          />
        </div>
        <div className={styles.bloquedescripcion}>
          <p>Nuestra Marca</p>
          <h2>InterMix</h2>
          <p><span>App de Reservas</span></p>
          <Link 
            className={styles.botonseccion} 
            href="/intermix">
              Saber más
          </Link>
        </div> 
      </div>
    </div>
  )
}

export default Seccionintermix