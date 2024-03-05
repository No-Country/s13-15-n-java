export default function MyOffers() {

  return (

    <main className="p-7 md:pt-9 w-full">
      <h1 className="text-xl md:text-3xl">OFERTAS</h1>
       <h2 className="text-xs md:text-xl font-light">FILTROS</h2>
     
      <section className="">
        <fieldset>
          <label htmlFor="">Titulo</label>
          <input type="text" />
        </fieldset>

        <fieldset>
          <label htmlFor="">grado de complejidad</label>
          <input type="text" />
        </fieldset>

        <button>
          search
        </button>
      </section>

      <div className="w-full h-[1px] bg-black"></div>

    
    </main>

  );
}