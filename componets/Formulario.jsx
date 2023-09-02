"use client"
import React, {useRef, useState} from 'react'
import '@/app/Styles/styles.css'
import styles from '@/app/Styles/formulario.module.css'
import { FaMailBulk, FaUser, FaPhone } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const Formulario = () => {
  const [formulario, setFormulario] = useState({
    username: '',
    telefono: '',
    email: '',
  });

// Función para manejar cambios en los campos del formulario
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormulario({
    ...formulario,
    [name]: value,
  });
};
//Mensaje de confirmación para el envío del formulario
const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
  
  const refForm = useRef();

  const habdleSubmit = (e) => {
    e.preventDefault();
    
    const serviceId = "service_faodjkp";
    const templateId = "template_ol1vlpo";
    //3er párametro
    const apikey = "xIY4Yl4QgWO1MwsW4"

    //Enviando la información por EmailJS
    emailjs.sendForm(serviceId, templateId, refForm.current, apikey)
    .then( result => console.log(result.text))
    .catch(error => console.error(error))
    
    // Limpia los valores del formulario
    setMostrarConfirmacion(true);


      // Limpia los valores del formulario
    setFormulario({
      nombre: '',
      telefono: '',
      email: '',
      // Restablece otros campos del formulario si es necesario
    });

    // Después de mostrar el mensaje de confirmación, ocúltalo después de 3 segundos
    setTimeout(() => {
      setMostrarConfirmacion(false);
    }, 3000); // 3000 milisegundos (3 segundos)
  }
   
  return ( 
    <div className={`${styles.contenedorFormulario}`}>
        
        <div className={styles.bloqueIzq}></div> 

        <form className={styles.formulario} ref={refForm} action="" onSubmit={habdleSubmit}>
            <div>
              <h2><span>"No dejes para mañana lo que puedes hacer hoy"</span>Solicita tu Servicio</h2>
              <p>Envíanos tus datos llenando el formulario y te contactaremos lo más pronto posible.</p>
            </div>

            <fieldset className={styles.inputBox}>
              <input 
                name='nombre' 
                type="text" 
                required autoComplete="off" 
                id='nombre' 
                value={formulario.nombre}
                onChange={handleInputChange}
              />
              <label 
                className='symbol-required name'
                htmlFor="nombre" 
                name='username'>
                  Nombre
                </label>
              <FaUser className={styles.icon}/>
            </fieldset>

            <fieldset className={styles.inputBox}>
              <input 
                name='telefono' 
                id='telefono' 
                type="number" 
                required autoComplete="off"
                value={formulario.telefono}
                onChange={handleInputChange}
              />
              <label 
                className='symbol-required'
                htmlFor="telefono"
                name='telefono'>
                  Teléfono
                </label>
              <FaPhone className={styles.icon}/>
            </fieldset>

            <fieldset className={styles.inputBox}>
              <input 
                name='email' 
                id='email' 
                type="email" 
                required autoComplete="off"
                value={formulario.email}
                onChange={handleInputChange}
              />
              <label className='symbol-required'
              htmlFor="email" 
              name='email'>
                Email
              </label>
              <FaMailBulk className={styles.icon}/>
            </fieldset>
            
            <button className='btn-form'>Enviar Formulario</button>

            {mostrarConfirmacion && (
              <div className={styles.mensajeconfirmacion}>
                <p>¡Los datos se han enviado con éxito! El equipo de InnovaTech pronto le estará contactando.</p> 
              </div>
            )}
        </form>
        <div className={styles.bloqueDer}></div>
    </div>
  )
}

export default Formulario