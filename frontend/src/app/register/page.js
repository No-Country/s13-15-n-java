'use client'
import { registerUser } from "@/queries/usuario";
import { userLogin } from "@/store/reducers/userReducer";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as styles from "./styles.module.css"

export default function Register() {

  const router = useRouter()

  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    country: 'Argentina',
    rol: '',
  });
  const [errors, setErrors] = useState({});
  const [showForm, setShowForm] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    // Validaciones básicas
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'El apellido es requerido';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Ingrese un email válido';
    }
    if (!formData.password.trim()) {
      newErrors.password = 'La contraseña es requerida';
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Enviar formulario si no hay errores
      console.log('Formulario enviado:', formData);
      router.push("/profile");

      // Aquí podrías enviar los datos a tu servidor o hacer otra acción
    }
  };

  const handleClick = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    setShowForm(!showForm)
  }

  return (
    <main className={styles.wrap}>
      <section className={`${styles.step} ${showForm ? '' : styles.active}`}>
        <h4 className="-m-3">Soy</h4>
        <button id="rol" value="jardinero" onClick={handleClick} className={styles.buttonRol}>JARDINERO</button>
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
              <label htmlFor="name">Nombre</label>
              <input
                id="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
              />
              {errors.name && <p className="text-red-500 relative bottom-0">{errors.name}</p>}
            </div>
            <div className={`${styles.inputContainer} relative`}>
              <label htmlFor="last-name">Apellido</label>
              <input
                id="last-name"
                value={formData.lastName}
                onChange={handleChange}
                className={styles.input}
              />
              {errors.lastName && <p className="text-red-500 absolute bottom-0">{errors.lastName}</p>}
            </div>
          </div>
          <div className={styles.inputsContainer}>
            <div className={styles.inputContainer}>
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                value={formData.email}
                onChange={handleChange}
                className={`${styles.input} ${errors.email && 'border-red-500'}`}
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="password">Contraseña</label>
              <input
                id="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className={`${styles.input} ${errors.password && 'border-red-500'}`}
              />
              {errors.password && <p className="text-red-500">{errors.password}</p>}
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="country">País</label>
              <select
                id="country"
                value={formData.country}
                onChange={handleChange}
                className={styles.input}
              >
                <option value="Argentina">Argentina</option>
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