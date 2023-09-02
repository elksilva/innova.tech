import Image from 'next/image'
import Link from 'next/link'
import logo from "/public/img/LogoInnovaTech.png"
import styles from '@/app/Styles/footer.module.css'

const Footer = () => {
  return (
    <div className={styles.contenedorFooter}>
        <Image 
          className={styles.imgmap} 
          src='/img/footer-map.png' 
          width={450} 
          height={200} 
          alt='imagen logotipo'
        />
        <div className={styles.bolquefooter}>
            <div className={styles.bloquelogo}>
              <Link href='/'>
                  <Image className={styles.logoimg} src={logo.src} width={200} height={200} alt='imagen logotipo'/>
              </Link>
            </div>
            
            <div className={styles.bloquecopyright}>
              <div className={styles.bloquepoliticas}>
                <p>| <Link href="/privacy">Política de Privaciodad</Link></p>
                {/* <p>| <Link href="#"> Términos y condiciones</Link></p> */}
                <p>| <Link href='/contacts'> Contantos</Link></p>
              </div>
              <div className={styles.copyright}>
                <p>© InnovaTech Quindío. Reservados todos los derechos.</p>
              </div>
            </div>
        </div>
        <Image 
          className={styles.imgmap1} 
          src='/img/footer-map.png' 
          width={450} 
          height={200} 
          alt='imagen logotipo'
        />
    </div>
  )
}

export default Footer