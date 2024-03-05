'use client'
import Link from "next/link"
import Image from "next/image"
import { useDispatch } from "react-redux"
import { setUser } from "@/store/reducers/userReducer"
export default function LayoutPropietario({children}){
  const dispatch = useDispatch()
  const handleExit = () =>{
    localStorage.removeItem("user");
    dispatch(setUser(null))
  }
  return (
    <main className="flex">
      <nav className="flex flex-col justify-between w-1/5 bg-black p-10 text-white h-screen list-none">
        <div className="flex flex-col gap-10">
          <Image src="/logo.svg" width={274} height={38} className="mx-auto"></Image>
          <ul className="flex flex-col gap-8">
          <li className="flex gap-2"><Image src="/offerIcon.svg" width={36} height={36}></Image><Link className="text-xl" href="/profile/post-offer">PUBLICAR OFERTA</Link></li>
          <li className="flex gap-2"><Image src="/leafIcon.svg" width={36} height={36}></Image><Link className="text-xl" href="/profile/my-offers">VER POSTULANTES</Link></li>
          <li className="flex gap-2"><Image src="/userIcon.svg" width={36} height={36}></Image><Link className="text-xl" href="/profile">MI PERFIL</Link></li>
          </ul>
        </div>
        <div className="flex gap-2"><Image src="/exitIcon.svg" width={50} height={50}></Image><Link className="text-xl my-auto" href="/" onClick={handleExit}>SALIR</Link></div>
      </nav>

      {children}
    </main>
    )
}