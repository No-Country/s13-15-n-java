"use client";

import Image from "next/image";
import { useState } from "react";
export default function MyOffers() {
  const ofertas = [
    {
      id: 1,
      title: "Poda de arbustos",
      ubication: "basavilbaso.Aguet 1234",
      complejidad: "Medio",
      descripcion: "Nesesito podar los libustros diciplinados de mi patio",
      exp: "28/02/2024-18:00",
      pago: "10.000",
      propietario: "pedro c",
    },
    {
      id: 2,
      title: "Mantenimiento de jardin",
      ubication: "basavilbaso.Aguet 1234",
      complejidad: "Facil",
      descripcion:
        "Quiero regar mi vivero todas las tardes alas 18hrs, revisar si hay rosas secas en mis plantas adema colocar tutores a medida que crezcan",
      exp: "2/01/2024-10:00",
      pago: "5000",
      propietario: "pedro c",
    },
  ];

  const [titlePost, setTitlePost] = useState("");

  const postulantes = [
    {
      id: 1,
      nombre: "Jose C",
      valoraciones: 10,
      img: "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      nombre: "Roberto E",
      valoraciones: 10,
      img: "https://www.mensjournal.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk2MTM2NTcwNDMxMjg0NzQx/man-taking-selfie.jpg",
    },
    {
      id: 3,
      nombre: "Jose Callao",
      valoraciones: 10,
      img: "https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg",
    },
  ];
  

  const [isHidden,setiSHidden] = useState(false)

  return (
    <main className=" relative p-7 md:pt-9 w-full md:w-[80%] md:ml-auto  md:p-16">
      <h1 className="text-xl md:text-3xl">OFERTAS</h1>
      <h2 className="text-xs md:text-xl font-light">FILTROS</h2>

      <section className=" flex gap-4 outline-none mb-4 items-center">
        <fieldset className="flex flex-col w-[150px]">
          <label htmlFor="">Titulo</label>
          <input 
          placeholder="poda de arbusto"
          type="text" className="border border-[#000] rounded-md text-xs p-2" />
        </fieldset>

        <fieldset className="flex flex-col w-[150px] ">
          <label htmlFor="">Grado de complejidad</label>
          <input 

          placeholder="menciona facil,medio,dificil"
          type="text" className="border border-[#000] rounded-md text-xs p-2" />
        </fieldset>

        <button className="bg-black p-2 text-xs self-end rounded-lg text-white">
          
        <Image src="/Search.svg" width={20} height={5} alt="img" className="" />
          
          </button>
      </section>

      <div className="w-full h-[1px] bg-black"></div>

      <p className="my-3 font-bold">Listado de ofertas ( 2 )</p>

      <section className="w-full  md:ml-auto  grid grid-cols-1 md:grid-cols-2  gap-10 ">
        {ofertas.map((oferta) => (
          <div className=" py-2 px-4 bg-[#BBF7D1] rounded-md" key={oferta.id}>
            <div className="flex  justify-between">
              <h3>{oferta.title}</h3>
              <span className=" flex gap-2 items-center text-[]">
                <Image src="/pencilGreen.svg" width={15} height={5} alt="img" />
                <p className="text-[7px]">Editar perfil</p>
              </span>
            </div>
            <div className="flex gap-2">
              <Image src="/ubication.svg" width={15} height={5} alt="img" />
              En {oferta.ubication}
            </div>
            <p>Grado de complejidad: {oferta.complejidad}</p>
            <p>Descripcion: {oferta.descripcion}</p>
            <p>Fecha de expiracion: {oferta.exp}</p>
            <p>Pago hasta: {oferta.pago}</p>
            <p>Propieario: {oferta.propietario}</p>

            <article className=" my-3 flex gap-2  items-center justify-center">
              <div className="border text-xs p-2 gap-2 rounded-md border-[#53BC65] flex w-[150px]">
                <Image src="/gallery.svg" width={15} height={5} alt="img" />
                Ver fotos
              </div>

              <button 
              onClick={()=>setiSHidden(!isHidden)}
              className="text-white text-xs flex gap-2 p-2 px-2 items-center bg-[#0E0E0E] rounded-md ">
                <Image src="/Leaf.svg" width={15} height={5} alt="img" />
                Ver postulantes
              </button>
            </article>
          </div>
        ))}
      </section>


{isHidden?(
  <section className="absolute top-0 left-0 right-0 bottom-0 m-auto  rounded-md  bg-[#EDFBF2] z-40 h-[500px]  w-[95%] py-7 px-5 ">
  <Image
    src="/arrowL.svg"
    width={30}
    height={5}
    alt="img"
    className="absolute left-2 bottom-[50%]"
  />
  <Image
    src="/arrowR.svg"
    width={30}
    height={5}
    alt="img"
    className="absolute right-2 bottom-[50%]"
  />
<button onClick={()=>setiSHidden(false)}>
<Image
    src="/x-solid.svg"
    width={15}
    height={5}
    alt="img"
    className="absolute right-3 top-3"
  />
</button>


  <p>{titlePost}</p>
  <p>Cantidad de postulantes ( 4 )</p>

  <div className="flex justify-center items-center h-[400px] gap-2">
    {postulantes.map((postulante) => (
      <div className=" rounded-md w-[290px] py-2 px-4 flex gap-2 flex-col text-center justify-center bg-[#BBF7D1]" key={postulante.id}>
        <div
          className=" m-auto bg-no-repeat bg-cover w-[50px] h-[50px] rounded-full"
          style={{ backgroundImage: `url(${postulante.img})` }}
        ></div>

        <p>{postulante.nombre}</p>
        <p>({postulante.valoraciones} valoraciones )</p>

<Image
    src="/Stars.svg"
    width={130}
    height={5}
    alt="img"
    className="m-auto"
  />

        <div className="flex gap-2 justify-center flex-col">
          <button className="flex justify-center gap 2 text-xs p-2 rounded-md border border-[#53BC65]">
          <Image
    src="/Profile.svg"
    width={20}
    height={5}
    alt="img"
    className=""
  />
            Ver perfil
          </button>
          <button className=" justify-center rounded-md bg-[#0E0E0E] p-2 flex items-center text-white">
          <Image
    src="/Check.svg"
    width={20}
    height={5}
    alt="img"
    className=""
  />
           <p className="text-xs ">

            Aceptar solicitud
           </p>
          </button>

        </div>
      </div>
    ))}
  </div>
</section>
):''

}
  




    </main>
  );
}
