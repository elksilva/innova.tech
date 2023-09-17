"use client"
import React, { useState, useEffect, useRef} from 'react'
import Image from 'next/image'
import logo from "/public/img/logo.png"
import styles from '@/app/Styles/barrainfo.module.css'
import '@/app/globals.css'
import {FaBars} from "react-icons/fa"
import Link from 'next/link'

const Logonav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isClickOutside, setIsClickOutside] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        // Agregar un event listener para detectar clics en el documento
        document.addEventListener('click', handleDocumentClick);
    
        // Limpiar el event listener cuando el componente se desmonta
        return () => {
          document.removeEventListener('click', handleDocumentClick);
        };
      }, []);
    
      const handleDocumentClick = (event) => {
        // Verificar si el clic se realizó dentro del menú o en su botón de activación
        console.log('Handle document click called');
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          closeMenu();
          setIsClickOutside(true); // Establecer la variable de estado en true
        }
      };

  return (
    <>
        <div className={styles.contenidoheader}>
            <div 
                className={styles.barra}
                ref={menuRef}
            >
                <div className={styles.logo}>
                    <Link href='/'>
                        <Image className={styles.logoimg} src={logo.src} width={300} height={140} alt='imagen logotipo' unoptimized/>
                    </Link>
                </div> 
                
                {/* DESDE ACÁ EL MENÚ HAMBURGUESA */}
                <div className={styles.menuhamburguesa}>
                    <div 
                        className={`${styles.iconburguer} ${isClickOutside ?  styles.open : ''}`}
                        onClick={toggleMenu}
                    >
                        <FaBars />
                    </div>
                </div>
                
                <nav 
                    id="menu-container"
                    className={`${styles.navmenuoculto} ${isOpen && `${styles.open}`}`}
                    ref={menuRef}
                >
                        <Link 
                            onClick={toggleMenu}
                            className={styles.btnneon} href='/'
                        >
                            <span id={styles.span1}></span>
                            <span id={styles.span2}></span>
                            <span id={styles.span3}></span>
                            <span id={styles.span4}></span>
                            Inicio
                        </Link>
                        <Link 
                            onClick={toggleMenu}
                            className={styles.btnneon} href='/about'
                        >
                            <span id={styles.span1}></span>
                            <span id={styles.span2}></span>
                            <span id={styles.span3}></span>
                            <span id={styles.span4}></span>
                            Nosotros
                        </Link>
                        <Link 
                            onClick={toggleMenu}
                            className={styles.btnneon} href='/services'
                        >
                            <span id={styles.span1}></span>
                            <span id={styles.span2}></span>
                            <span id={styles.span3}></span>
                            <span id={styles.span4}></span>
                            Servicios
                        </Link>
                        
                        <Link 
                            onClick={toggleMenu}
                            className={styles.btnneon} href='/contacts'
                        >
                            <span id={styles.span1}></span>
                            <span id={styles.span2}></span>
                            <span id={styles.span3}></span>
                            <span id={styles.span4}></span>
                            Contacto
                        </Link>
                    </nav>

                {/* VISTA MENÚ NAVEGACIÓN PARA DESKTOP */}
                <aside className={styles.panel}>
                    <nav className={`${styles.navprincipal} ${styles.menu}`}>
                        <Link className={styles.btnneon} href='/'>
                            <span id={styles.span1}></span>
                            <span id={styles.span2}></span>
                            <span id={styles.span3}></span>
                            <span id={styles.span4}></span>
                            Inicio
                        </Link>
                        <Link className={styles.btnneon} href='/about'>
                            <span id={styles.span1}></span>
                            <span id={styles.span2}></span>
                            <span id={styles.span3}></span>
                            <span id={styles.span4}></span>
                            Nosotros
                        </Link>
                        <Link className={styles.btnneon} href='/services'>
                            <span id={styles.span1}></span>
                            <span id={styles.span2}></span>
                            <span id={styles.span3}></span>
                            <span id={styles.span4}></span>
                            Servicios
                        </Link>
                        
                        <Link className={styles.btnneon} href='/contacts'>
                            <span id={styles.span1}></span>
                            <span id={styles.span2}></span>
                            <span id={styles.span3}></span>
                            <span id={styles.span4}></span>
                            Contacto
                        </Link>
                    </nav>
                </aside>
            </div>
        </div>
    </>
  )
}

export default Logonav