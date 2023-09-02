'use client' 
import React from "react"
import Link from "next/link"
import ReactPlayer from "react-player"
import YouTubePlayer from "react-player/youtube";
import Image from "next/image"
import logo from "/public/img/fcm.png"
import logo1 from "/public/img/ptt.png"
import logo2 from "/public/img/LogoInnovaTech.png"
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
                            width="100%" 
                            height="350px"
                            controls={true}
                            light={true}
                        ></ReactPlayer>
                    }
                    <div className={styles.bloqueDescriccion}>
                        <Link href="https://fundacioneducativacarlomagno.com.co/">
                            <Image className={styles.logoEmpresa} src={logo.src} width={150} height={120} alt='Logo Empresa'/>
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
                            width="100%" 
                            height="350px"
                            controls={true}
                            light={true}
                        ></ReactPlayer>
                    }
                    <div className={styles.bloqueDescriccion}>
                        <Link href="#">
                            <Image className={styles.logoEmpresa} src={logo2.src} width={150} height={120} alt='Logo Empresa'/>
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
                            width="100%" 
                            height="350px"
                            controls={true}
                            light={true}
                        ></ReactPlayer>
                    }
                    <div className={styles.bloqueDescriccion}>
                        <Link href="https://fundacioneducativacarlomagno.com.co/">
                            <Image className={styles.logoEmpresa} src={logo.src} width={150} height={120} alt='Logo Empresa'/>
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
                            width="100%" 
                            height="350px"
                            controls={true}
                            light={true}
                        ></ReactPlayer>
                    }
                    <div className={styles.bloqueDescriccion}>
                        <Link href="https://pilotto.co/es/">
                            <Image className={styles.logoEmpresa} src={logo1.src} width={150} height={120} alt='Logo Empresa'/>
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