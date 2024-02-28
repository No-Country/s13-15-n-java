export default function PostOffer() {

  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Publicar oferta</h1>
      <form>
        <label>Titulo<input></input></label>
        <label>Descripcion de la oferta<input></input></label>
        <label>Complejidad<input></input></label>
        <label>Fecha inicio<input></input></label>
        <label>Fecha expiracion<input></input></label>
        <label>Pago hasta:<input></input></label>
        <button>Publicar oferta</button>
      </form>
    </main>

  );
}