import Link from "next/link"
import { BsSearch } from "react-icons/bs";

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section className="flex " >
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav className="w-1/5 bg-black text-white h-screen lg:inline xl:inline md:hidden xs:hidden list-none ">
        <ul className="flex  flex-col ml-8 justify-around h-1/2">
        <li><Link className="text-xl" href="/profile/post-offer">+ PUBLICAR OFERTA</Link></li>
        <li><Link className="text-xl flex" href="/profile/my-offers"><BsSearch className="mr-2"/>VER OFERTAS</Link></li>
        <li><Link className="text-xl" href="/profile/offers">MI PERFIL</Link></li>
        </ul>
        <div className="h-1/2 ml-8 text-xl">SALIR</div>
      </nav>

      {children}
    </section>
  )
}