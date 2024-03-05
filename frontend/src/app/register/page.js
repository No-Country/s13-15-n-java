'use client'
import { registroJardinero } from "@/queries/jardinero";
import { registroPropietario } from "@/queries/propietario";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as styles from "./styles.module.css"

export default function Register() {

  const router = useRouter()

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    ciudadId: 2,
    clave: '',
  });
  const [rol, setRol] = useState()
  const [errors, setErrors] = useState({});
  const [showForm, setShowForm] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    // Validaciones básicas
    if (!formData.nombre.trim()) {
      newErrors.name = 'El nombre es requerido';
    }
    if (!formData.apellido.trim()) {
      newErrors.lastName = 'El apellido es requerido';
    }
    if (!formData.correo.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.correo)) {
      newErrors.email = 'Ingrese un email válido';
    }
    if (!formData.clave.trim()) {
      newErrors.password = 'La contraseña es requerida';
    } else if (formData.clave.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Enviar formulario si no hay errores
      console.log('Formulario enviado:', formData);
      // Aquí podrías enviar los datos a tu servidor o hacer otra acción
      if(rol ==="jardinero"){
        registroJardinero(formData);
      }else if(rol ==="propietario"){
        registroPropietario(formData);
      }
      router.push("/profile");
    }
  };

  const handleClick = (e) => {
    setRol(e.target.value)
    setShowForm(!showForm)
  }

  return (
    <main className={styles.wrap}>
      <section className={`${styles.step} ${showForm ? '' : styles.active}`}>
        <h4 className="-m-3">Soy</h4>
        <button id="rol" value="jardinero" onClick={(handleClick)} className={styles.buttonRol}>JARDINERO</button>
        <button id="rol" value="propietario" onClick={handleClick} className={styles.buttonRol}>PROPIETARIO</button>
      </section>

      <section className={`${styles.step} ${showForm ? styles.active : ''}`}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <header className={styles.headerForm}>
            <h4>Ingresa tus datos</h4>
            <p>Completa la información requerida</p>
          </header>
          <div className={styles.inputsContainer}>
            <div className={styles.inputContainer}>
              <label htmlFor="nombre">Nombre</label>
              <input
                id="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className={styles.input}
              />
              {errors.name && <p className="text-red-500 relative bottom-0">{errors.name}</p>}
            </div>
            <div className={`${styles.inputContainer} relative`}>
              <label htmlFor="apellido">Apellido</label>
              <input
                id="apellido"
                value={formData.apellido}
                onChange={handleChange}
                className={styles.input}
              />
              {errors.lastName && <p className="text-red-500 absolute bottom-0">{errors.lastName}</p>}
            </div>
          </div>
          <div className={styles.inputsContainer}>
            <div className={styles.inputContainer}>
              <label htmlFor="correo">E-mail</label>
              <input
                id="correo"
                value={formData.correo}
                onChange={handleChange}
                className={`${styles.input} ${errors.email && 'border-red-500'}`}
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="clave">Contraseña</label>
              <input
                id="clave"
                type="password"
                value={formData.clave}
                onChange={handleChange}
                className={`${styles.input} ${errors.password && 'border-red-500'}`}
              />
              {errors.password && <p className="text-red-500">{errors.password}</p>}
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="ciudad">País</label>
              <select
                id="ciudad"
                value={formData.ciudad}
                onChange={handleChange}
                className={styles.input}
              >
                <option value={2}>Argentina</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Chile">Chile</option>
                <option value="Colombia">Colombia</option>
                <option value="Perú">Perú</option>
                <option value="Venezuela">Venezuela</option>
              </select>
            </div>
          </div>
          <button type="submit" className={styles.buttonForm} >
            Registrarse
          </button>
        </form>
      </section>
    </main>
  );
}