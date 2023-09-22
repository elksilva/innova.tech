'use client' 
import React from "react"
import Link from "next/link"
import ReactPlayer from "react-player"
import Image from "next/image"
import logo from "../public/img/fcm.png"
import logo1 from "../public/img/ptt.png"
import logo2 from "../public/img/LogoInnovaTech.png"
import logo3 from "../public/img/fcm.png"
import { useState, useEffect } from "react";

import styles from '@/app/Styles/proyectos.module.css'

const Proyectos = () => {
    const [hasWindow, setHasWindow] = useState(false);
        useEffect(() => {
            if (typeof window !== "undefined") {
            setHasWindow(true);
            }
        }, []);
  return (
    <>
        <div className={styles.contenedoProyecto}>
            <h2>Algunos de nuestros <span>Proyectos</span></h2>
            <div className={styles.contenidoProyecto}>
                <div className={styles.videoProyecto}>
                    {hasWindow &&
                        <ReactPlayer
                            className={styles.bloquevideo}
                            url="https://www.youtube.com/watch?v=Z5GHn39fMuk"
                            rel="nofollow"
                            width="100%" 
                            height="350px"
                            controls={true}
                            light={true}
                        ></ReactPlayer>
                    }
                    <div className={styles.bloqueDescriccion}>
                        <Link href="https://fundacioneducativacarlomagno.com.co/" rel="nofollow">
                            <Image className={styles.logoEmpresa} src={logo} width={150} height={120} alt='Logo Empresa' unoptimized/>
                        </Link>
                        <div className={styles.textoProyecto}>
                            <h3>Página Web - <span>Fundación Educativa Carlo Magno</span></h3>
                        </div>
                    </div>
                </div>

                <div className={styles.videoProyecto}>
                    {hasWindow &&
                        <ReactPlayer
                            className={styles.bloquevideo}
                            url="https://youtu.be/a1ONgOVcfUk"
                            rel="nofollow"
                            width="100%" 
                            height="350px"
                            controls={true}
                            light={true}
                        ></ReactPlayer>
                    }
                    <div className={styles.bloqueDescriccion}>
                        <Link href="https://innovatechquindio.net/intermix">
                            <Image className={styles.logoEmpresa} src={logo2} width={150} height={120} alt='Logo Empresa' unoptimized/>
                        </Link>
                        <div className={styles.textoProyecto}>
                            <h3>Sistema de Reservas para Cita Online - <span>Barbería - Salón de Belleza - Spa</span></h3>
                        </div>
                    </div>
                </div>

                <div className={styles.videoProyecto}>
                    {hasWindow &&
                        <ReactPlayer
                            className={styles.bloquevideo}
                            url="https://youtu.be/6dSxWWeu0AM"
                            rel="nofollow"
                            width="100%" 
                            height="350px"
                            controls={true}
                            light={true}
                        ></ReactPlayer>
                    }
                    <div className={styles.bloqueDescriccion}>
                        <Link href="https://fundacioneducativacarlomagno.com.co/" rel="nofollow">
                            <Image className={styles.logoEmpresa} src={logo3} width={150} height={120} alt='Logo Empresa' unoptimized/>
                        </Link>
                        <div className={styles.textoProyecto}>
                            <h3>DashBoard - <span>Fundación Educativa Carlo Magno</span></h3>
                        </div>
                    </div>
                </div>

                <div className={styles.videoProyecto}>
                    {hasWindow &&
                        <ReactPlayer
                            className={styles.bloquevideo}
                            url="https://youtu.be/mssiupYAT2M"
                            rel="nofollow"
                            width="100%" 
                            height="350px"
                            controls={true}
                            light={true}
                        ></ReactPlayer>
                    }
                    <div className={styles.bloqueDescriccion}>
                        <Link href="https://pilotto.co/es/" rel="nofollow">
                            <Image className={styles.logoEmpresa} src={logo1} width={150} height={120} alt='Logo Empresa' unoptimized/>
                        </Link>
                        <div className={styles.textoProyecto}>
                            <h3>Menú Interactivo - <span>Pilotto App Sistema para Restaurantes</span></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Proyectos