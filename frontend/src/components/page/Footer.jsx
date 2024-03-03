
const Footer = () => {
  return (
    <div className="flex flex-col justify-center px-16 py-12 bg-[#073A38] max-md:px-5 mt-24 w-full">
      <div className="flex gap-5 justify-between mx-8 mt-8 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
        <div className="flex flex-col self-start pr-6 font-semibold text-white">
          <div className="text-4xl leading-10">GardenerGo</div>
          <div className="mt-14 text-xl leading-6 max-md:mt-10">
            Miles de jardineros eligen este sitio web para trabajar
          </div>
        </div>
        <div className="py-2 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:w-full">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center text-base font-medium leading-5 text-white max-md:mt-10">
                <div className="text-xl font-semibold leading-6">
                  Navegación
                </div>
                <div className="mt-10">Inicio</div>
                <div className="mt-6">Servicios</div>
                <div className="mt-6">Sobre Nosotros</div>
                <div className="mt-6">Blog</div>
                <div className="mt-6">FAQ</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col justify-center text-base font-medium leading-5 text-white max-md:mt-10">
                <div className="text-xl font-semibold leading-6">
                  Contacto
                </div>
                <div className="flex gap-4 justify-between mt-10 whitespace-nowrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/16116195a28648a28f7c54f1aa00bb42b3a10993ab395fc07f5003e4629c8d73?"
                    className="w-6 aspect-square"
                  />
                  <div className="grow">gardenergo@gmail.com</div>
                </div>
                <div className="flex gap-4 justify-between mt-6 leading-6">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a2a2936a9c488ab3ef664dddd8d5730647f4630e8ae6cc18605e13f8a6361c5?"
                    className="my-auto w-6 aspect-square"
                  />
                  <div>Calle 1234, Nombre inventado</div>
                </div>
                <div className="flex gap-4 justify-between mt-6">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/be85c0b27def465d2142b738bd7000e83f243a4e16b86b864b9f701712ecde9a?"
                    className="w-6 aspect-square"
                  />
                  <div className="flex-auto">+54 336 4123 456</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-10">
                <div className="text-xl font-semibold leading-6 text-white whitespace-nowrap">
                  Redes Sociales
                </div>
                <div className="flex gap-3.5 pr-16 mt-10 max-md:pr-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cc789027b669e8053e0529ff48990babdcc21b19b70c693b5b37f6ac580dee5?"
                    className="w-6 aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/eca0ab9bae127810eee849ce67a905051a6867925f89330afe85114aa1e2f2dc?"
                    className="w-6 aspect-square fill-white"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/01a824d2c68361387995ab3d641bbe22ae9830b45115a12e9e06fb1bae64714a?"
                    className="w-6 aspect-square"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer