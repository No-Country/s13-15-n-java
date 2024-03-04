import { useState } from "react";
import Link from "next/link";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <nav className="absolute top-0 left-0 right-0 flex items-center justify-between border-b border-[#edfbf2] h-[104px]">
        <div className="flex items-center ml-10 sm:ml-20">
          <img
            loading="lazy"
            src="/logo.svg"
            className="w-auto"
          /> 
        </div>
        <div className="flex items-center lg:w-440 hidden xl:flex">
          <button className="text-white text-lg bg-transparent hover:bg-[#edfbf2] hover:text-black m-4 md:px-6 py-2 rounded-md transition duration-300 ease-in-out">Inicio</button>
          <button className="text-white text-lg bg-transparent hover:bg-[#edfbf2] hover:text-black m-4 md:px-6 py-2 rounded-md transition duration-300 ease-in-out">Servicios</button>
          <button className="text-white text-lg bg-transparent hover:bg-[#edfbf2] hover:text-black  m-4 md:px-6 py-2 rounded-md transition duration-300 ease-in-out whitespace-nowrap">Saber más</button>
          <button className="text-white text-lg bg-transparent hover:bg-[#edfbf2] hover:text-black m-4 md:px-6 py-2 rounded-md transition duration-300 ease-in-out">Blog</button>
        </div>
        <div className="flex items-center space-x-8 xl:mr-24 hidden xl:flex">
          <Link href="/login">
            <button className="bg-[#edfbf2] text-[#073A38] font-semibold h-[60px] hover:bg-[#53BC65] hover:text-white px-6 py-4 rounded-md transition duration-300 ease-in-out whitespace-nowrap">Iniciar Sesión</button>
          </Link>
          <Link href="/register">
            <button className="bg-[#edfbf2] text-[#073A38] font-semibold h-[60px] hover:bg-[#53BC65] hover:text-white px-6 py-4 rounded-md transition duration-300 ease-in-out">Registrarse</button>
          </Link>
        </div>

        {/* Menú de hamburguesa para pantallas pequeñas */}
        <div className="xl:hidden w-200 mr-10 flex items-center justify-center">
          <button
            className="text-white text-lg hover:text-[#53BC65] px-4 py-2 rounded-md focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {isOpen && (
            <div className="absolute top-[104px] right-10 bg-[#edfbf2] bg-opacity-80 w-80 px-4 py-2 shadow-xl rounded-md flex flex-col items-center justify-center">
              <button className="block text-[#073A38] hover:bg-[#edfbf2] px-4 py-0.5 my-1 rounded-md transition duration-300 ease-in-out">Inicio</button>
              <button className="block text-[#073A38] hover:bg-[#edfbf2] px-4 py-0.5 my-1 rounded-md transition duration-300 ease-in-out">Servicios</button>
              <button className="block text-[#073A38] hover:bg-[#edfbf2] px-4 py-0.5 my-1 rounded-md transition duration-300 ease-in-out">Saber más</button>
              <button className="block text-[#073A38] hover:bg-[#edfbf2] px-4 py-0.5 my-1 rounded-md transition duration-300 ease-in-out">Blog</button>
              <div className="flex flex-row mt-2">
                <Link href="/login">
                  <button className="block bg-[#53BC65] text-[#edfbf2] hover:bg-[#073A38] hover:text-white px-4 py-2 mx-1 rounded-md transition duration-300 ease-in-out">Iniciar Sesión</button>
                </Link>
                <Link href="/register">
                  <button className="block bg-[#53BC65] text-[#edfbf2] hover:bg-[#073A38] hover:text-white px-4 py-2 mx-1 rounded-md transition duration-300 ease-in-out">Registrarse</button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero content */}
      <div className="bg-cover bg-center w-full h-[1024px] bg-[url('/Placeholder.svg')]">
        <div className="flex flex-col items-center h-full">
          <h1 className="hidden xl:flex text-[#edfbf2] mt-48 text-[70px] lg:text-[128px] md:text-[100px] lg:mx-100 text-center font-semibold leading-[128px] max-lg:leading-[90px]">
            El jardín <br></br> como arte
          </h1>
          <p className="relative text-2xl md:text-3xl leading-9 text-center text-[#edfbf2] lg:mx-52 max-w-full max-w-[80%] mt-[330px] xl:mt-[38px]">
            Aprovechá el mantenimiento de jardines, el paisajismo, la cirugía de árboles y otros servicios más, brindados por profesionales capacitados y altamente experimentados.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-12 mt-16">
            <button className="bg-[#edfbf2] w-[238px] h-[80px] text-[#073A38] text-xl font-semibold hover:bg-[#073A38] hover:text-white px-6 py-3 rounded-lg transition duration-300 ease-in-out">
              Contacto
            </button>
            <button className="bg-[#edfbf2] w-[238px] h-[80px] text-[#073A38] text-xl font-semibold hover:bg-[#073A38] hover:text-white px-6 py-3 rounded-lg transition duration-300 ease-in-out">
              Saber más
            </button>
          </div>

          {/* Card final, oculto en pantallas pequeñas */}
          <div className="hidden lg:flex relative gap-5 justify-between px-12 py-6 mt-14 mb-8 w-full text-center whitespace-nowrap bg-[#edfbf2] rounded-xl max-w-[1278px] max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col flex-1">
              <div className="self-center text-5xl font-semibold text-green-400 leading-[61.2px] max-md:text-4xl">
                <span className="text-stone-900">5</span>
                <span className="text-[#53BC65]">+</span>
              </div>
              <div className="mt-3 text-base font-medium leading-5 text-stone-900">
                Años en el mercado
              </div>
            </div>
            <div className="flex flex-col flex-1 my-auto">
              <div className="self-center text-5xl font-semibold text-green-400 leading-[61.2px] max-md:text-4xl">
                <span className="text-stone-900">1.5m</span>
                <span className="text-[#53BC65]">+</span>
              </div>
              <div className="mt-3 text-base font-medium leading-5 text-stone-900">
                Clientes por todo el mundo
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="self-center text-5xl font-semibold text-green-400 leading-[61.2px] max-md:text-4xl">
                <span className="text-stone-900">1.5k</span>
                <span className="text-[#53BC65]">+</span>
              </div>
              <div className="mt-3 text-base font-medium leading-5 text-stone-900">
                Trabajos finalizados
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="text-5xl font-semibold text-green-400 leading-[61.2px] max-md:text-4xl">
                <span className="text-stone-900">30m</span>
                <span className="text-[#53BC65]">+</span>
              </div>
              <div className="self-center mt-3 text-base font-medium leading-5 text-stone-900">
                Jardineros
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="text-5xl font-semibold text-green-400 leading-[61.2px] max-md:text-4xl">
                <span className="text-stone-900">7m</span>
                <span className="text-[#53BC65]">+</span>
              </div>
              <div className="mt-3 text-base font-medium leading-5 text-stone-900">
                Árboles plantados
              </div>
            </div>
          </div>


        </div>

      </div>
    </div>
  );
};

export default Hero;
