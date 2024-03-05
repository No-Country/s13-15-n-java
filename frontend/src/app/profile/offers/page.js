'use client'
import { selectOffers } from "@/store/reducers/gardenerReducer";
import { useSelector } from "react-redux";
export default function Offers() {
  const offers = useSelector(selectOffers)
  console.log(offers);
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Ver ofertas</h1>
      {offers.map((offer) => {
        return (
          <p>{offer.nombre}</p>
        )
      })}
    </main>

  );
}