import Link from "next/link"
import {FaFacebook, FaInstagram, FaYoutube} from "react-icons/fa"
import styles from '@/app/Styles/barrainfo.module.css'

const BarraInfo = () => {
  return (
    <>
        <div className="header">
            <div className={styles.barrasuperior}>
                <div className={styles.infodireccion}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="12" cy="11" r="3" />
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                    </svg>
                    <p>Calle 10 #16-31</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <polyline points="3 7 12 13 21 7" />
                    </svg>
                    <Link href="#">info@innovatechquindio.net</Link>
                    <span className={styles.facebook}></span>
                    
                </div>
            
                <div className={styles.barraRight}>
                  <nav className={styles.telefono}>
                      <svg className={styles.svgphone} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#1B1C38" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                      </svg>
                      <Link href="tel:+573022016786">573022016786 </Link>
                      <Link href="tel:+573042029683">        
                          | 573042029683</Link>
                  </nav>
                
                  <nav className={styles.sociales}>   
                      <Link className={styles.socialesenlace} href="https://facebook.com">
                        <FaFacebook className={styles.iconfa} />
                        <span className={styles.socialesaccesible}>   
                            Facebook
                        </span> 
                      </Link>
                      
                      <Link className={styles.socialesenlace} href="https://instagram.com">
                            <FaInstagram className={styles.iconfa} />
                            <span className={styles.socialesaccesible}>
                                Instagram
                            </span> 
                      </Link>

                      <Link className={styles.socialesenlace} href="https://youtube.com">
                            <FaYoutube className={styles.iconfa} />
                            <span className={styles.socialesaccesible}>
                                YouTube
                            </span> 
                      </Link>
                  </nav>
                </div>
              </div>
          </div>
    </>
  )
}

export default BarraInfo
