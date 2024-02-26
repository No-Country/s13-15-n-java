
const Hero = () => {
  return (
    <div className="relative">
      
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-4 bg-transparent border-b border-gray-200 h-[104px]">
        <div className="flex items-center lg:ml-16">
          <h1 className="text-white font-montserrat" style={{fontSize: "38px"}}>GardenerGo</h1>
        </div>
        <div className="flex items-center lg:w-441">
          <button className="text-white text-lg bg-transparent mx-2 hover:bg-white hover:text-black px-6 py-2 rounded-md transition duration-300 ease-in-out">Inicio</button>
          <button className="text-white text-lg bg-transparent mx-2 hover:bg-white hover:text-black px-6 py-2 rounded-md transition duration-300 ease-in-out">Servicios</button>
          <button className="text-white text-lg bg-transparent mx-2 hover:bg-white hover:text-black px-6 py-2 rounded-md transition duration-300 ease-in-out">Saber más</button>
          <button className="text-white text-lg bg-transparent mx-2 hover:bg-white hover:text-black px-6 py-2 rounded-md transition duration-300 ease-in-out">Blog</button>
        </div>
        <div className="flex items-center space-x-12 lg:mr-16">
          <button className="bg-white text-[#073A38] hover:bg-[#53BC65] hover:text-white px-6 py-3 rounded-md transition duration-300 ease-in-out">Iniciar Sesión</button>
          <button className="bg-white text-[#073A38] hover:bg-[#53BC65] hover:text-white px-6 py-3 rounded-md transition duration-300 ease-in-out">Registrarse</button>
        </div>
      </nav>
      
      {/* Hero content */}
      <div className="bg-cover bg-center w-full h-[1024px]" style={{backgroundImage: "url('/assets/bg-heroo.png')"}}>
        <div className="flex flex-col items-center h-full">
          <h1 className="text-white text-[128px] lg:mx-100 mt-44 text-center font-semibold leading-[128px]">El jardín <br></br> como arte</h1>
          <div className="relative md:ml-52 md:mr-52 mt-12 text-3xl leading-9 text-center text-white max-md:max-w-full">
            Aprovechá el mantenimiento de jardines, el paisajismo, la cirugía de
            árboles y otros servicios más, brindados por profesionales capacitados
            y altamente experimentados.
          </div>
          <div className="flex space-x-12 mt-16">
            <button className="bg-white w-[238px] h-[80px] text-[#073A38] text-xl hover:bg-[#073A38] hover:text-white px-6 py-3 rounded-md transition duration-300 ease-in-out">Contacto</button>
            <button className="bg-white w-[238px] h-[80px] text-[#073A38] text-xl hover:bg-[#073A38] hover:text-white px-6 py-3 rounded-md transition duration-300 ease-in-out">Saber más</button>
          </div>

          {/* Card final */}
          <div className="hidden lg:flex relative gap-5 justify-between px-12 py-6 mt-14 mb-8 w-full text-center whitespace-nowrap bg-white rounded-xl max-w-[1278px] max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
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
                <span className="text-stone-900">20</span>
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

