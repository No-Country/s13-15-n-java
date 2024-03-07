'use client'
import { useSelector } from "react-redux";
import { selectOffers } from "@/store/reducers/gardenerReducer";

export default function MyRequests() {
  const offers = useSelector(selectOffers)
  const offer = offers[0];

  const handleSubmit = (e) =>{
    e.preventDefault()
   
    e.target.innerHTML = "Aceptado";
    console.log(e);
  }
  return (

    <main className="flex min-h-screen flex-col items-center p-24 w-4/5 bg-[#edfbf2]">
      <h2>Postulaciones</h2>
      <div className="bg-[#BBF7D1] flex justify-evenly w-full rounded-xl py-5">
        <div className="flex flex-col gap-4 h-auto">
          <h5>Propietario</h5>
          <p>{offer.usuario.nombre + " " + offer.usuario.apellido}</p>
        </div>
        <div className="flex flex-col gap-4 h-auto">
          <h5>Oferta</h5>
          <p>{offer.nombre}</p>
        </div>
        <div className="flex flex-col gap-4 h-auto">
          <h5>Status</h5>
          <button onClick={handleSubmit} className="px-5 py-2.5 text-emerald-50 whitespace-nowrap rounded-md bg-[#073A38]">Confirmar</button>
        </div>
      </div>
    </main>

  );
}