"use client"
import Image from "next/image"
import Link from "next/link"
// import styles from '../Styles/botonws.module.css'
import styles from '@/app/Styles/botonws.module.css'

const Btnwhastapp = () => {
  return (
    <div className={styles.btnflotante}>
        <Link href="https://api.whatsapp.com/send?phone=573022016786">
          <Image
            src="/img/iconwschatblack.png" 
            className={styles.boton}
            alt="icono de whatsapp"
            width={100} 
            height={100} 
          />
        </Link>
    </div>
  )
}

export default Btnwhastapp