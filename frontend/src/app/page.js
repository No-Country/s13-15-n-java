'use client'
import Link from "next/link";
import { authUser } from "@/queries/usuario";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { userLogin } from "@/store/reducers/userReducer";
export default function Home() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const handleChange = (e) => {
    if (e.target.id == "email") {
      setEmail(e.target.value);
    } else if (e.target.id == "password") {
      setPassword(e.target.value);
    }
  }
  const handleClick = () => {
    try {
      authUser(password).then((res) => {
        dispatch(userLogin(...res.data))
        router.push('/profile')
      })
    } catch (error) {

    }
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Bienvenid@ a GreenGo</h1>
      <input placeholder="E-mail" id="email" onChange={(e) => handleChange(e)}></input>
      <input placeholder="contraseña" id="password" onChange={(e) => handleChange(e)}></input>
      <button onClick={() => handleClick()}>Iniciar sesion</button>
      <p>No tienes cuenta?</p>
      <Link href="/registro">Registrarse</Link>
    </main>
  );
}
