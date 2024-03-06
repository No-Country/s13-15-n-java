"use client";
import Link from "next/link";
import Image  from "next/image";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/reducers/userReducer";
import { useEffect, useState } from "react";
import '../../components/profile/profile.css'
export default function LayoutPropietario({ children }) {
  const dispatch = useDispatch();

  const handleExit = () => {
    localStorage.removeItem("user");
    dispatch(setUser(null));
  };

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 700);
    };

    // Llamamos a la función handleResize al cargar la página
    handleResize();

    // Añadimos un event listener para manejar los cambios de tamaño de la pantalla
    window.addEventListener("resize", handleResize);

    // Removemos el event listener al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="flex flex-col md:flex">
      <section className="w-full flex justify-between p-3 bg-black sm:hidden">
        <Image  src="/logo.svg" width={130} height={5} alt="img"/>
        <button onClick={() => setIsOpen(!isOpen)}>
          <Image src="/bars-solid.svg"  width={35} height={5} alt="img" />
        </button>
      </section>

      {isOpen && (
        <nav className="container-nav">
          <div className="flex flex-col gap-10">
            <Image 
              src="/logo.svg"
              width={130}
              height={38}
              className="md:w-[250px]"
              alt="img"
            />
            <ul className="flex flex-col gap-8">
              <li className="link-nav">
                <Image  src="/offerIcon.svg" width={30} height={36} alt="img"/>
                <Link className="text-sm" href="/profile/post-offer">
                  PUBLICAR OFERTA
                </Link>
              </li>
              <li className="link-nav">
                <Image  src="/leafIcon.svg" width={30} height={36} alt="img" />
                <Link className="text-sm" href="/profile/my-offers">
                  VER POSTULANTES
                </Link>
              </li>
              <li className="link-nav">
                <Image  src="/userIcon.svg" width={30} height={20} alt="img"/>
                <Link className="text-sm" href="/profile">
                  MI PERFIL
                </Link>
              </li>
            </ul>
          </div>
          <div className=" flex gap-2 mb-2">
            <Image  src="/exitIcon.svg" width={50} height={50} alt="img" />
            <Link className="text-sm my-auto" href="/" onClick={handleExit}>
              SALIR
            </Link>
          </div>
        </nav>
      )}


      {children}
    </main>
  );
}
