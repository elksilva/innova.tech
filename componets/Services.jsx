"use client"
import Image from 'next/image'
import servimgweb from '../public/img/servimgweb.jpg'
import servimgtec from '../public/img/servimgtec.jpg'
import servimgdev from '../public/img/servimgdev.jpg'
import servimgremoto from '../public/img/servimgremoto.jpg'
import Link from 'next/link'
import styles from '@/app/Styles/services.module.css'
import { motion } from "framer-motion";

const Services = () => {
  return (
    <>
        <div className={styles.bloqueServicios}>
            <div className={styles.encabezadoservicio}>
                <h2><span>Razones para Elegirnos</span>Lista de Servicios</h2>
                <Link className={styles.botonServicios} href="/contacts">Cotiza tu Proyecto 
                </Link>
            </div>

            <div className={styles.bloqueServicio}>
                <motion.div 
                    className={`${styles.descripcionServicios} ${styles.box}`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <Image 
                        className={styles.imagenServicio}
                        src={servimgweb}
                        width={150}
                        height={150}
                        alt="Imagen Servicios"
                        unoptimized
                    />
                    <h3>Diseño de Páginas Web</h3>
                    <p>Desarrollamos y diseñamos el sitio web que tu empresa o proyecto necesita adaptado a cualquier dispositivo.</p>
                    <Link className={styles.enlaceServicio} href="/contacts">Solicite el Servicio →</Link>
                </motion.div>

                <motion.div 
                    className={`${styles.descripcionServicios} ${styles.box}`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <Image 
                        className={styles.imagenServicio}
                        src={servimgtec}
                        width={150}
                        height={150}
                        alt="Imagen Servicios"
                        unoptimized
                    />
                    <h3>Soporte Informático</h3>
                    <p>Instalación, mantenimiento y reparación de equipos de cómputos (Computadores - Impresoras)</p>
                    <Link className={styles.enlaceServicio} href="/contacts">Solicite el Servicio</Link>
                </motion.div>

                <motion.div 
                    className={`${styles.descripcionServicios} ${styles.box}`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <Image 
                        className={styles.imagenServicio}
                        src={servimgdev}
                        width={150}
                        height={150}
                        alt="Imagen Servicios"
                        unoptimized
                    />
                    <h3>Desarrollo de Software</h3>
                    <p>Creamos Aplicaciones de Escritorio, diseños de bases de datos, creación de tienda virtual (e-commerce)</p>
                    <Link className={styles.enlaceServicio} href="/contacts">Solicite el Servicio</Link>
                </motion.div>

                <motion.div 
                    className={`${styles.descripcionServicios} ${styles.box}`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <Image 
                        className={styles.imagenServicio}
                        src={servimgremoto}
                        width={150}
                        height={150}
                        alt="Imagen Servicios"
                        unoptimized
                    />
                    <h3>Asistencia Remota</h3>
                    <p>Ofrecemos el primer nivel de soporte informático a través de cualquier medio de comunicación, dando soluciones efectivas.</p>
                    <Link className={styles.enlaceServicio} href="/contacts">Solicite el Servicio</Link>
                </motion.div>
            </div>
        </div>
    </>
  )
}

export default Services