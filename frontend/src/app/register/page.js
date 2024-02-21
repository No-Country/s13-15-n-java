'use client'
import { registerUser } from "@/queries/usuario";
import { userLogin } from "@/store/reducers/userReducer";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Register() {

  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    country: 'Argentina',
  });
  const [errors, setErrors] = useState({});

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
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header>
        <h1>Ingresa tus datos</h1>
        <h2>Completa la información requerida</h2>
      </header>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-x-8">
        <div className="flex flex-col w-full md:w-1/2">
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            value={formData.name}
            onChange={handleChange}
            className={`form-input ${errors.name && 'border-red-500'}`}
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}

          <label htmlFor="last-name">Apellido</label>
          <input
            id="last-name"
            value={formData.lastName}
            onChange={handleChange}
            className={`form-input ${errors.lastName && 'border-red-500'}`}
          />
          {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
        </div>
        <div className="flex flex-col w-full md:w-1/2">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={`form-input ${errors.email && 'border-red-500'}`}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}

          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className={`form-input ${errors.password && 'border-red-500'}`}
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}

          <label htmlFor="country">País</label>
          <select
            id="country"
            value={formData.country}
            onChange={handleChange}
            className="form-select"
          >
            <option value="Argentina">Argentina</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Chile">Chile</option>
            <option value="Colombia">Colombia</option>
            <option value="Perú">Perú</option>
            <option value="Venezuela">Venezuela</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-center mt-4 md:mt-0">
          Registrarse
        </button>
      </form>
    </main>
  );
}