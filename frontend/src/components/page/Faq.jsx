import { useState } from "react";

const Faq = () => {
  // Estado para controlar la visibilidad de la respuesta
  const [isOpen, setIsOpen] = useState(false);
  // Función para alternar la visibilidad de la respuesta
  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col px-5 mt-24">
      <div className="self-center text-7xl font-semibold text-center leading-[70.35px] text-[#073A38] max-md:max-w-full max-md:text-4xl">
        <span className="text-[#073A38]">FAQ Preguntas frecuentes</span>
      </div>
      <div className="self-center mt-8 text-base font-medium leading-5 text-center md:w-[651px] max-md:max-w-full">
        En esta sección podés encontrar todas las respuestas que probablemente estés buscando. Si todavía tienes dificultades para encontrar una, no dudes en contactarnos directamente.
      </div>

      {/* Pregunta 1 */}
      <div className="flex gap-5 justify-between px-16 py-10 mt-20 w-full hover:bg-[#53BC65] rounded-2xl shadow-lg max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col flex-1 max-md:max-w-full xl:w-[1100px] mx-auto">
          <div className="text-3xl font-semibold leading-8 max-md:max-w-full">
            ¿Puedo publicar ofertas de cuidado de mi jardín?
          </div>
          <div
            className={`mt-4 text-base font-medium leading-6 max-md:max-w-full ${
              isOpen ? 'block' : 'hidden'
            }`}
          >
            Los propietarios pueden publicar cuántas ofertas quieran, solamente
            deben esperar a que los jardineros cercanos postulen para poder
            brindar el trabajo a quien el propietario considere.
          </div>
        </div>
        <button onClick={toggleAnswer}>
          {isOpen ? (
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/366488deba444fe3b65834f021284360c388ed0c1b7fc82c1bd4f720e7fa3410?"
              className="w-16 aspect-square"
            />
          ) : (
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/273977220f51f37d5161080e28a575eabc90c24e361513bebb918031a0388033?"
              className="w-16 aspect-square"
            />
          )}
        </button>
      </div>

      {/* Pregunta 2 */}
      <div className="flex gap-5 justify-between px-16 py-10 mt-6 w-full hover:bg-[#53BC65] text-3xl font-semibold leading-8 bg-white rounded-2xl shadow-lg max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="grow my-auto max-md:max-w-full">
          ¿Cuál es el tiempo de espera para el propietario?
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/273977220f51f37d5161080e28a575eabc90c24e361513bebb918031a0388033?"
          className="w-16 aspect-square"
        />
      </div>

      {/* Pregunta 3 */}
      <div className="flex gap-5 justify-between px-16 py-10 mt-6 w-full hover:bg-[#53BC65] text-3xl font-semibold leading-8 bg-white rounded-2xl shadow-lg max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="grow my-auto max-md:max-w-full">
          ¿El propietario puede sugerir un presupuesto?
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/273977220f51f37d5161080e28a575eabc90c24e361513bebb918031a0388033?"
          className="w-16 aspect-square"
        />
      </div>

      {/* Pregunta 4 */}
      <div className="flex gap-5 justify-between px-16 py-10 mt-6 w-full hover:bg-[#53BC65] text-3xl font-semibold leading-8 bg-white rounded-2xl shadow-lg max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="grow my-auto max-md:max-w-full">
          ¿Puedo dejar una reseña a los jardineros?
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/273977220f51f37d5161080e28a575eabc90c24e361513bebb918031a0388033?"
          className="w-16 aspect-square"
        />
      </div>

      {/* Pregunta 5 */}
      <div className="flex gap-5 justify-between px-16 py-10 mt-6 w-full hover:bg-[#53BC65] text-3xl font-semibold leading-8 bg-white rounded-2xl shadow-lg max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="grow my-auto max-md:max-w-full">
          ¿A cuántas ofertas puedo postular como jardinero?{" "}
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/273977220f51f37d5161080e28a575eabc90c24e361513bebb918031a0388033?"
          className="w-16 aspect-square"
        />
      </div>

    </div>
  );
}

export default Faq;
