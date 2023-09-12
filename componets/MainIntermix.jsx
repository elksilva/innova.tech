"use client"
import styles from '@/app/Styles/intermix.module.css'
import { FaMixcloud, FaUserFriends, FaSearchDollar, FaWhatsapp, FaRegGrin, FaHeadset } from 'react-icons/fa'

const MainIntermix = () => {
  return (
    <div className={styles.bloquemain}>
        <div className={styles.titulo}>
            <h2>Características de <span>InterMix</span></h2>
            <p>Veamos algunos de las caracteristicas principales que InterMix App, tiene para ofrecerte</p>
        </div>
        <div className={styles.caracteristicas}>
            <div className={styles.bloque}>
                <div className={styles.bloqueicon}>
                    <FaMixcloud className={styles.icon}/>
                </div>
                <h3>Sistema 100% Online</h3>
                <p>Todo está en la nube lo cual le permite poder ver la información de su negocio en tiempo real desde cualquier dispositivo y cualquier parte del mundo.</p>
            </div>
            <div className={styles.bloque}>
                <div className={styles.bloqueicon}>
                    <FaUserFriends className={styles.icon}/>
                </div>
                <h3>Redes Sociales</h3>
                <p>Unifica todas las redes sociales de tu negocio y permite que tus clientes accedan a ellas desde un solo lugar. Todo esto estará perfectamente integrado a InterMix.</p>
            </div>
            <div className={styles.bloque}>
                <div className={styles.bloqueicon}>
                    <FaSearchDollar className={styles.icon}/>
                </div>
                <h3>Aumenta tus Ventas</h3>
                <p>InterMix, te permite diseñar estrategias de marketing, creando ofertas y promociones. Una vez creadas podrás enviar un mensaje masivo para que tus clientes la conozcan.</p>
            </div>
            <div className={styles.bloque}>
                <div className={styles.bloqueicon}>
                    <FaWhatsapp className={styles.icon}/>
                </div>
                <h3>Notificación por WhatsApp</h3>
                <p>El cliente realiza una reservación, el sistema le envía automáticamente un mensaje de confirmación a su número de WhatsApp. Sus clientes y usted tendrán mensajes de confirmación y recordatorios de citas y mucho más.</p>
            </div>
            <div className={styles.bloque}>
                <div className={styles.bloqueicon}>
                    <FaRegGrin className={styles.icon}/>
                </div>
                <h3>Satisfacción del Cliente</h3>
                <p>Que mejor que tener un cliente satisfecho ofreciéndole una fidelización en su día de cumpleaños o por su fidelidad con su negocio, con InterMix podrás consentirlos en esos momentos especiales.</p>
            </div>
            <div className={styles.bloque}>
                <div className={styles.bloqueicon}>
                    <FaHeadset className={styles.icon}/>
                </div>
                <h3>Asistencia Excepcional</h3>
                <p>Nuestro equipo de trabajo está pendiente de ti para ayudarte en el momento que lo requieras, nuestro objetivo es brindarte un servicio de calidad.</p>
            </div>
        </div>
    </div>
  )
}

export default MainIntermix