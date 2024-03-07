'use client'
import { useState } from 'react';
import * as styles from "./styles.module.css"
import { postOffer } from '@/queries/propietario';

export default function PostOffer() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [complexity, setComplexity] = useState('');
  const [startDate, setStartDate] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [paymentDue, setPaymentDue] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!title.trim()) {
      errors.title = 'Por favor ingresa un título.';
    }
    if (!description.trim()) {
      errors.description = 'Por favor ingresa una descripción.';
    }
    // Aquí puedes agregar más validaciones según tus necesidades

    // Si hay errores, detén el proceso y muestra los errores
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    const {userToken} = JSON.parse(localStorage.getItem('user'))
    const offerBody = {
      nombre: title,
      descripcion: description,
      gradoComplejidad: complexity,
      fechaInicio: startDate,
      fechaFin: expirationDate,
      fotoOferta: "foto",
      direccion: "direccion",
      precio: paymentDue
    }
    postOffer(offerBody, userToken).then((res) => {
    })
  };

  return (
    <main className='h-[100vh] w-[80%] bg-[#EDFBF2] ml-auto flex flex-col p-10'>
      <h5 className={styles.title}>Publicar oferta</h5>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formCol}>
          <label>
            Titulo
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            {errors.title && <span className="text-red-500">{errors.title}</span>}
          </label>
          <label>
            Descripcion de la oferta
            <textarea type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            {errors.description && <span className="text-red-500">{errors.description}</span>}
          </label>
          <label>
            Complejidad
            <select type="text" value={complexity} onChange={(e) => setComplexity(e.target.value)} >
              <option value="Fácil">Fácil</option>
              <option value="Medio">Medio</option>
              <option value="Difícil">Difícil</option>
            </select>
            {errors.complexity && <span className="text-red-500">{errors.complexity}</span>}
          </label>
        </div>
        <div className={styles.formCol}>
          <label>
            Fecha inicio
            <input type="datetime-local" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            {errors.startDate && <span className="text-red-500">{errors.startDate}</span>}
          </label>
          <label>
            Fecha expiracion
            <input type="datetime-local" value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)} />
            {errors.expirationDate && <span className="text-red-500">{errors.expirationDate}</span>}
          </label>
          <label>
            Pago hasta:
            <input type="text" value={paymentDue} onChange={(e) => setPaymentDue(e.target.value)} />
            {errors.paymentDue && <span className="text-red-500">{errors.paymentDue}</span>}
          </label>
          <button type="submit">Publicar oferta</button>
        </div>
      </form>
    </main>
  );
}
