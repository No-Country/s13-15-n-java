
const ContactUs = () => {
  return (
    <div className="flex flex-col px-5 mt-24 items-center">
      <div className="self-center text-7xl font-semibold text-center leading-[70.35px] text-[#073A38] max-md:max-w-full max-md:text-4xl">
        <span className="text-[#073A38]">Contacto</span>
      </div>
      <div className="self-center mt-8 text-base font-medium leading-5 text-center md:w-[751px] max-md:max-w-full">
        Dejá toda la información en el formulario a continuación y esperá hasta 24 horas para recibir ayuda de nuestro Gerente de Atención al Cliente
      </div>
      


      <div className="mt-20 w-[400px] md:w-[750px] lg:w-[1000px] xl:w-[1260px] shadow-lg max-w-[1260px] max-md:mt-10 max-md:max-w-full">
        <div className="flex max-md:flex-col max-md:gap-0 max-md:w-full rounded-xl overflow-hidden">
          <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              className="flex-grow h-32 object-cover hidden lg:flex md:flex"
              src="/assets/images/image11.png"
              alt="Imagen 11"
            />
          </div>
          
          <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center self-stretch px-10 py-12 w-full text-xl font-semibold leading-6 text-white bg-[#53BC65] max-md:px-5 max-md:max-w-full">
              <div className="mt-1.5 max-md:max-w-full">Nombre completo</div>
              <input
                type="text"
                className="justify-center items-start py-4 pr-16 pl-4 mt-2 text-base font-medium leading-5 whitespace-nowrap rounded-xl border border-solid border-[color:var(--Colors-White,#FFF)] max-md:pr-5 max-md:max-w-full text-[#073A38]"
                placeholder="Ingresá tu nombre completo"
              />
              <div className="mt-4 max-md:max-w-full">E-mail</div>
              <input
                type="text"
                className="justify-center items-start py-4 pr-16 pl-4 mt-2 text-base font-medium leading-5 whitespace-nowrap rounded-xl border border-solid border-[color:var(--Colors-White,#FFF)] max-md:pr-5 max-md:max-w-full text-[#073A38]"
                placeholder="Ingresá tu mail"
              />
              <div className="mt-4 max-md:max-w-full">Mensaje</div>
              <textarea
                className="justify-center items-start py-4 pr-16 pl-4 mt-2 text-base font-medium leading-5 whitespace-nowrap rounded-xl border border-solid border-[color:var(--Colors-White,#FFF)] max-md:pr-5 max-md:max-w-full text-[#073A38]"
                placeholder="Ingresá tu mensaje"
              />

              <div className="justify-center items-center px-16 py-6 mt-10 text-[#53BC65] hover:bg-[#073A38] hover:text-white text-center cursor-pointer whitespace-nowrap bg-white rounded-xl max-md:px-5 max-md:max-w-full">
                Enviar
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs