const WhoWeAre = () => {
  return (
    <div className="flex flex-col px-20 py-12 max-md:px-5 bg-[#edfbf2]">
      <div className="mx-2.5 mt-8 text-7xl font-semibold leading-[70px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
      <span className="text-[#53BC65]">Miles de jardineros{" "}</span>
        <span className="text-cyan-950">
          eligen este sitio web para trabajar{" "}
        </span>
      </div>
      <div className="mx-2.5 mt-8 text-3xl font-semibold leading-9 text-stone-900 max-md:max-w-full">
        GardenerGo es uno de los proveedores líderes de mantenimiento de exteriores con más de 1500 jardines atendidos y un 93,83% de comentarios positivos según nuestro sistema de calificación.
      </div>


      <div className="mx-2.5 mt-28 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:flex-grow">
          {/* Contenedor izquierdo */}
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-6 max-md:max-w-full">
              <div className="flex flex-col px-6 py-10 text-white rounded-2xl shadow-lg bg-[#073a38] max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5 justify-between text-3xl font-semibold leading-8 max-md:flex-wrap max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/813f20f900dc830dd4b53062fad26ae8fdd77e2a5c108c3c5fe49da4dbe6d906?"
                    className="w-16 aspect-square"
                  />
                  <div className="grow my-auto max-md:max-w-full">
                    <span className="text-[#53BC65]">Quiénes</span>{" "}
                    <span className="text-white">Somos?</span>
                  </div>
                </div>
                <div className="mt-6 text-base font-medium leading-6 max-md:max-w-full">
                  En GardenerGo los profesionales brindan todo tipo de servicios
                  de jardinería, paisajismo, poda de árboles y mantenimiento de
                  exteriores en todos los aspectos en todas las ciudades del
                  mundo, en constante expansión a nuevos territorios.
                </div>
              </div>
              <div className="flex flex-col px-6 py-10 mt-6 text-white rounded-2xl shadow-lg bg-[#073a38] max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5 justify-between text-3xl font-semibold leading-8 max-md:flex-wrap max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/08fdfd21a6e62f6f41ab73d884363029f96968dce53b21b24c9cc9326d6302f4?"
                    className="w-16 aspect-square"
                  />
                  <div className="grow my-auto max-md:max-w-full">
                    <span className="text-[#53BC65]">Qué</span>{" "}
                    <span className="text-white">hacemos?</span>
                  </div>
                </div>
                <div className="mt-6 text-base font-medium leading-6 max-md:max-w-full">
                  Más de 15 servicios de jardinería, paisajismo, cuidado de
                  árboles y mantenimiento de exteriores de profesionales,
                  utilizando la más alta tecnología e innovación. Por ello, los
                  profesionales con los que cuenta el sitio web siguen los
                  estándares de calidad, lo que garantiza a los clientes un
                  servicio sin complicaciones y con grandes resultados.
                </div>
              </div>
              <div className="flex flex-col px-6 py-10 mt-6 rounded-2xl shadow-lg bg-[#073a38] max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5 justify-between text-3xl font-semibold leading-8 text-green-400 max-md:flex-wrap max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab55536e7d4e2a88682cd6d4c6ac7fd540b8ff0826f50e6fba2da16392c4d9e9?"
                    className="w-16 aspect-square"
                  />
                  <div className="flex-auto my-auto max-md:max-w-full">
                    <span className="text-white">Nuestra</span>{" "}
                    <span className="text-[#53BC65]">Misión</span>
                  </div>
                </div>
                <div className="mt-6 text-base font-medium leading-6 text-white max-md:max-w-full">
                  Como proveedor de servicios líder de jardinería, siempre
                  tenemos como objetivo mejorar la experiencia de los clientes.
                  Llevamos ese esfuerzo al siguiente nivel y lo hemos convertido
                  en nuestra filosofía de felicidad de 360 grados. Eso significa
                  que siempre nos esforzamos por facilitar la vida de los
                  clientes, creando un servicio sin complicaciones para todas
                  las partes involucradas.
                </div>
              </div>
            </div>
          </div>

          {/* Contenedor derecho, oculto en pantallas pequeñas */}
          <div className="hidden md:flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-6 max-md:max-w-full">
              <div className="flex flex-col h-full">
                <img
                  className="flex-grow h-32 object-cover rounded-lg"
                  src="/assets/images/image1.png"
                  alt="Imagen 1"
                />
                <img
                  className="flex-grow h-32 object-cover rounded-lg mt-5"
                  src="/assets/images/image2.png"
                  alt="Imagen 2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;




