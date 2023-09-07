
import Image from "next/image"
import imageAbout from "/public/img/imgAbout.jpg"
import {Poppins} from 'next/font/google'
import {FaSearch, FaFolderOpen, FaHands, FaChartLine} from 'react-icons/fa'
import styles from '@/app/Styles/about.module.css'

const fuentePoppins = Poppins({ 
    weight: ['400', '600', '700'],
    subsets: ['latin'] 
  })

const We = () => {
  return (
    <>
      <div className={`${fuentePoppins.className} ${styles.contenedorAbout}`}>
        <div className={styles.bloqueImg}>
          <Image className={styles.imgAbout} src={imageAbout.src} width={800} height={900} alt='Imagen sobre InnovaTech' unoptimized/>
        </div>

        <div className={styles.textoAbout}>
            <div className={styles.textos}>
                <h2>¿Quiénes Somos? <span>InnovaTech</span></h2>
                <p>Soporte y Desarrollo Informático</p>
            </div>

            <p>Empresa dedicada al soporte y desarrollo informático, nuestra prioridad es atender las necesidades del cliente, aportando soluciones precisas y de esta forma garantizar un buen funcionamiento en sus actividades de su organización</p>

            <div className={styles.bloqueAbout}>
                <div className={styles.bloqueDescripAbout}>
                    <div className={styles.bloqueicon}>
                        <FaSearch className={`${styles.icon} ${styles.iconDesktop}`}/>
                    </div>
                    <div className={styles.bloquetexto}>
                      <h3>Soluciones</h3>
                      <p>Contamos con un amplio portafolio de servicios y productos informáticos, nuestro objetivo es trabajar en base a las tecnologías de última generación, con la capacidad de ofrecer todas las alternativas posibles de soluciones orientada a la transformación digital.</p>
                    </div>
                </div> 

                <div className={styles.bloqueDescripAbout}>
                    <div className={styles.bloqueicon}>
                        <FaFolderOpen className={`${styles.icon} ${styles.iconDesktop}`}/>
                    </div>
                    <div className={styles.bloquetexto}>
                      <h3>Optimización - Eficiencia</h3>
                      <p>Optimizamos su negocio construyendo un modelo de desarrollo eficiente que permita automatizar procesos para obtener eficiencia, eficacia y calidad en los servicios de su empresa.</p>
                    </div>
                    
                </div>

                <div className={styles.bloqueDescripAbout}>
                    <div className={styles.bloqueicon}>
                        <FaHands className={`${styles.icon} ${styles.iconDesktop}`}/>
                    </div>
                    <div className={styles.bloquetexto}>
                      <h3>Profesionalismo - Eficacia</h3>
                      <p>Somos un equipo de trabajo con personal calificado, dedicado a ofrecer una excelente calidad de servicio, respetando los tiempos establecidos y entregando un servicio y/o producto de alto nivel.</p>
                    </div>
                </div>

                <div className={styles.bloqueDescripAbout}>
                    <div className={styles.bloqueicon}>
                        <FaChartLine className={`${styles.icon} ${styles.iconDesktop}`}/>
                    </div>
                    <div className={styles.bloquetexto}>
                      <h3>Evolución - Tecnología</h3>
                      <p>Estamos en constante crecimiento, incorporando nuevas tecnologías acorde a las necesidades del mercado, construyendo soluciones modernas e innovadoras que permitan la optimización de los procesos de nuestros clientes.</p>
                    </div>
                    
                </div>
            </div> {/*Cierre de descripcion About*/}
        </div>
      </div> {/*Cierre contenedor About*/}
    </>
  )
}

export default We