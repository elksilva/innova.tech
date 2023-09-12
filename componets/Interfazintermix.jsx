import Link from 'next/link'
import styles from '@/app/Styles/intermix.module.css'
import {FaTags} from 'react-icons/fa'
import Image from 'next/image'
import imagen1 from '../public/img/intermixovahorizontal.jpg'

const Interfazintermix = () => {
  return (
    <>
        <div className={styles.textomovil}>
            <h2>Interfaz de Usuario</h2>
            <p>Acá su cliente podrá gestionar la toma de citas desde su dispositivo móvil, desde la comodidad de su hogar o cualquier sitio que se encuentre.</p>
            <Link className={styles.boton1} href="https://api.whatsapp.com/send?phone=573022016786">Contáctanos</Link>
        </div>
        <div className={styles.interfazcontenedor}>
            <div className={styles.bloquetexto}>
                <h2>Interfaz de Usuario</h2>
                <p>Acá su cliente podrá gestionar la toma de citas desde su dispositivo móvil, desde la comodidad de su hogar o cualquier sitio donde se encuentre.</p>
                <Link className={styles.boton1} href="https://api.whatsapp.com/send?phone=573022016786">Contáctanos</Link>
            </div>
            <div className={styles.bloquevacio}>

            </div>
        </div> 

        {/* Interfaz del Propietario */}
        
        <div className={styles.franja}> 
        </div> 

        <div className={styles.contenedorpropietario}> 
          <div className={styles.interfazpropietario}>   
          </div>

          <div className={`${styles.textomovil} ${styles.botonpropietario}`}>
              <h2>DashBoard</h2>
              <p>Panel administrativo o interfaz donde usted como propietario del negocio podrá gestionar diferentes actividades. Esta cuenta con 6 módulos funcionales los cuales le permiten automatizar las actividades de su empresa.</p>
              <Link className={styles.boton1} href="https://api.whatsapp.com/send?phone=573022016786">Contáctanos</Link>
          </div>
        </div>
        
        <div className={`${styles.contenedormodulos} ${styles.textomovil}`}>
          <h2>Módulos</h2>

          <div className={styles.modulos}>
            <div className={`${styles.modulo} ${styles.modulo1} ${styles.grid1}`}>
              <div className={styles.iconmodulo}>
                  <FaTags className={styles.iconfatags}/>
              </div>
              <div className={`${styles.descripcionmodulo}`}>
                <h3>Inicio</h3>
                <p>Permite ver información en tiempo real desde total de ingresos facturados, total de citas concretadas, datos del cliente y empleados registrados.</p>
              </div>
            </div>

            <div className={`${styles.modulo} ${styles.modulo2} ${styles.grid2}`}>
              <div className={styles.iconmodulo}>
                  <FaTags className={styles.iconfatags}/>
              </div>
              <div className={`${styles.descripcionmodulo}`}>
                <h3>Servicios</h3>
                <p>Permite crear los servicios prestados a tus clientes, al igual también podrás editarlos y eliminarlos en el momento que se requiera.</p>
              </div>
            </div>

            <div className={`${styles.modulo} ${styles.modulo3} ${styles.grid3}`}>
              <div className={styles.iconmodulo}>
                  <FaTags className={styles.iconfatags}/>
              </div>
              <div className={`${styles.descripcionmodulo}`}>
                <h3>Facturación</h3>
                <p>Muestra el historial de pago en relación a las ventas del día, permite ver de forma detallada los servicios realizados, facturados y más.</p>
              </div>
            </div>

            <div className={`${styles.modulo} ${styles.modulo1} ${styles.grid4}`}>
              <div className={styles.iconmodulo}>
                  <FaTags className={styles.iconfatags}/>
              </div>
              <div className={`${styles.descripcionmodulo}`}>
                <h3>Citas</h3>
                <p>Podrás ver todas las citas reservadas por fecha, profesional, estado y otras funcionalidades que le ofrece este módulo.</p>
              </div>
            </div>

            <div className={`${styles.modulo} ${styles.modulo2} ${styles.grid5}`}>
              <div className={styles.iconmodulo}>
                  <FaTags className={styles.iconfatags}/>
              </div>
              <div className={`${styles.descripcionmodulo}`}>
                <h3>Fidelización</h3>
                <p>Te permite la creación de ofertas y promociones, de esta manera podrás poner en práctica estrategias para hacer crecer las ventas de tu negocio y captar nuevos clientes.</p>
              </div>
            </div>

            <div className={`${styles.modulo} ${styles.modulo3} ${styles.grid6}`}>
              <div className={styles.iconmodulo}>
                  <FaTags className={styles.iconfatags}/>
              </div>
              <div className={`${styles.descripcionmodulo}`}>
                <h3>Administrador</h3>
                <p>Su función es configurar diferentes tareas, desde la información del negocio, creación de empleados, malla horaria, medios de pagos, y más.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Poqué InterMix */}
        <div className={`${styles.poqueintermix}`}>
            <div className={`${styles.descripcionporqueintermix} ${styles.textomovil}`}>
                <h2>¿POR QUÉ ELEGIR INTERMIX?</h2>
                <p>Nuestro objetivo es automatizar los procesos de tu negocio y que tomes el control de este, aportando eficiencia operativa, mayor consistencia y calidad, reducción de costos, tiempos más rápidos en la atención de clientes.</p>
                <p>Queremos que cuentes con un software donde tengas las herramientas necesarias que contribuyan al éxito y la competitividad de tu empresa con tecnología a la vanguardia. 
                No queremos vender un software por vender, queremos que tengas un software que te sea útil y te haga la vida laboral más fácil. Esto es lo que encuentras en InterMix App de Reservas.</p>
                <Link className={styles.boton1} href="https://api.whatsapp.com/send?phone=573022016786">Contáctanos</Link>
            </div>
            <div className={styles.divimagen}>
              <Image 
                className={styles.imagen1} 
                src={imagen1} 
                width={1100} 
                height={800} 
                alt='imagen InterMix App' 
                unoptimized
              />
            </div>
        </div>
    </>
  )
}

export default Interfazintermix