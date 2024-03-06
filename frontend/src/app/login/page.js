"use client";
import "./page.css";
import Link from "next/link";
import { loginUser } from "@/queries/usuario";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPassword,setIspassword] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault()
    await loginUser({email, password}).then((res) => {
      localStorage.setItem('user', JSON.stringify({userToken: res.data.token}));
      console.log(res.data.token);
      router.push("/profile");
    }) 
  };

  return (
    <main className="container-screen">
      <section className="container-content">
        <div className="sm text-center lg:text-start">
          <h2 className="hidden sm:block font-medium text-[var(--white)]">
            Bienvenido@ a{" "}
          </h2>
          <img
            src="/logo.svg"
            alt="img"
            className="m-auto sm:my-2 lg:mx-0 lg:w-[500px]"
          />
          <p className="hidden sm:block text-2xl text-[var(--white)]">
            Encontra tu jardinero
          </p>
        </div>

        <div className="self-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 text-center "
          >
            <fieldset className="flex">
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

            <fieldset className="flex">
              <input
                type={isPassword?'password':'text'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
                className="inputForm"
              />
              <div className="boxIconInput cursor-pointer">
                <button type="button" onClick={()=>setIspassword(!isPassword)} >
                <img  src="/Eye.svg" alt="" />
                </button>
              </div>
            </fieldset>

            <p className="paragraph text-[var(--white)]">
              Olvidaste la contraseña ?
            </p>
            <button className="bg-[#53BC65] text-black rounded p-2">
              Iniciar Sesión
            </button>
            <p className="paragraph text-[var(--white)]">No tienes cuenta ?</p>
            <Link href="/register" className="text-[#53BC65] font-medium">
              REGISTRATE AHORA
            </Link>
          </form>
        </div>
      </section>
    </main>
  );
}
