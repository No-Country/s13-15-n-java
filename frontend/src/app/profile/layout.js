import Link from "next/link"

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>
        <li><Link href="/profile/post-offer">Publicar oferta</Link></li>
        <li><Link href="/profile/my-offers">Mis Ofertas</Link></li>
        <li><Link href="/profile/offers">Buscar ofertas</Link></li>
        <li><Link href="/profile/my-requests">Postulaciones</Link></li>
        <li><Link href="/profile">Postulaciones</Link></li>
      </nav>

      {children}
    </section>
  )
}