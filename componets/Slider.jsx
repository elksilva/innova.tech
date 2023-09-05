"use client"
import Link from "next/link";
import Image from "next/image";
import slider1 from '../public/img/slider1.jpg';
import slider2 from '../public/img/dev2.jpg';
import slider3 from '../public/img/slider2.jpg';
import {Rubik} from 'next/font/google';
import styles from '@/app/Styles/slider.module.css'
import { Swiper, SwiperSlide } from "swiper/react";

//Fuente 
const fuenteRubik = Rubik({ 
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'] 
})

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import "@/app/Styles/styles.css"

const Slider = () => {
  return (
    <>
        <Swiper 
          spaceBetween={0}
          centeredSlides={true} 
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
            <SwiperSlide className={`${fuenteRubik.className} ${styles.contenedorslider}`}>
              <div className={styles.bloquetexto}>
                  <Image 
                    className={styles.imgslider} 
                    src={slider1}  
                    width={1200} 
                    height={600} 
                    alt="Imagen Header" 
                    priority
                  />
                  <h2 className={styles.textoencima1}>Potencia hoy el crecimiento y la innovación de tu empresa</h2>
                  <Link className={styles.anlaceslider} href="https://api.whatsapp.com/send?phone=573022016786">Contáctanos</Link>
              </div>
            </SwiperSlide>

            <SwiperSlide className={styles.contenedorslider}>
                <div className={styles.bloquetexto}>
                    <Image 
                        className={styles.imgslider} 
                        src={slider2}  
                        width={1200} 
                        height={600} 
                        alt="Imagen Header"
                        priority
                    />
                    <h2 className="texto-encima3">Servicio Profesional para tus equipos  de cómputos</h2>
                    <Link className={styles.anlaceslider} href="https://api.whatsapp.com/send?phone=573022016786">Contáctanos</Link>
                </div>
            </SwiperSlide>

            <SwiperSlide className={styles.contenedorslider}>
                <div className={styles.bloquetexto}>
                    <Image 
                        className={styles.imgslider} 
                        src={slider3}  
                        width={1200} 
                        height={600} 
                        alt="Imagen Header" 
                        priority
                    />
                    <h2 className={styles.textoencima2}>Optimiza tu actividad y gana eficiencia  en tu servicio</h2>
                    <Link className={styles.anlaceslider} href="https://api.whatsapp.com/send?phone=573022016786">Contáctanos</Link>
                </div>
            </SwiperSlide>
        </Swiper>
    </>
  )
}

export default Slider