"use client";
import "./page.css";
import Link from "next/link";
import { loginUser } from "@/queries/usuario";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {  useDispatch } from 'react-redux';

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();


  const handleData = (e) => {
    e.preventDefault()
    //loginUser()
    localStorage.setItem('user', JSON.stringify({correo: email}));
    console.log(JSON.parse(localStorage.getItem('user')));
    router.push("/profile");
  };

  return (
    <main className="flex min-h-screen overflow-hidden bg-[url('/imgLogin.png')] bg-no-repeat bg-cover ">
      <section className="flex items-center m-auto justify-between w-[80%] ">
        <div>
          <h2 className="text-6xl font-medium text-white">Bienvenido@ a </h2>
          <p className="text-3xl text-white">Encontra tu jardinero</p>
        </div>

        <div>
          <form
            onSubmit={handleData}
            className="flex flex-col gap-4 text-center "
          >
            <fieldset className="fieldset">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="inputForm"
              />
              <div className="boxIconInput">
                <img src="/Mail.svg" alt="" />
              </div>
            </fieldset>

            <fieldset className="fieldset">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
                className="inputForm"
              />
              <div className="boxIconInput">
                <img src="/Eye.svg" alt="" />
              </div>
            </fieldset>

            <p className="paragraph">Olvidaste la contraseña ?</p>
            <button type="submit" className="bg-[#53BC65] text-black rounded p-2">
              Iniciar Sesión
            </button>
            <p className="paragraph">No tienes cuenta ?</p>
            <Link href="/register" className="text-[#53BC65] font-medium">
              REGISTRATE AHORA
            </Link>
          </form>
        </div>
      </section>
    </main>
  );
}
