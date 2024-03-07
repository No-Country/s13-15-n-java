'use client'
import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { selectOffers } from "@/store/reducers/gardenerReducer";
import { useSelector } from "react-redux";
import { format } from 'date-fns';


export default function Offers() {

  const offers = useSelector(selectOffers)
  console.log(offers); 

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const [inputValue, setInputValue] = useState("Seleccionar: Fácil, Medio, Difícil");
  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const [showOptions, setShowOptions] = useState(false);
  const options = ["Fácil", "Medio", "Difícil"];

  const handleIconClick = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionClick = (option) => {
    handleInputChange(option);
    setShowOptions(false);
  };


  
  return (
    <main className="flex flex-col w-4/5 bg-[#edfbf2] max-md:ml-0 max-md:w-full">

      <div className="flex flex-col grow mt-20 max-md:mt-10 max-md:max-w-full xs:mx-10 md:mx-16 xl:mx-20">
        <div className="flex flex-col w-[16%] text-3xl font-semibold max-md:ml-0 max-md:w-full">
          BÚSQUEDA
        </div>
        <div className="mt-8 w-full text-base font-bold leading-5 max-md:max-w-full">
          FILTROS
        </div>
        <div className="flex gap-5 items-end pr-20 mt-5 w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">

          <div className="flex flex-col flex-1" style={{ maxWidth: '300px' }}>
            <div className="text-base font-medium font-semibold leading-5">
              Título
            </div>
            <div className="flex gap-5 justify-between py-6 pr-4 pl-8 mt-2.5 text-xs leading-4 bg-emerald-50 rounded-xl border border-solid border-[color:var(--Colors-Black,#1F1F1F)] text-cyan-950 max-md:pl-5">
              <input
                type="text"
                className="w-full outline-none focus:outline-none bg-transparent"
                placeholder="Poda de arbustos"
                onChange={handleSearch}
              />
            </div>
          </div>

          <div className="flex flex-col flex-1" style={{ maxWidth: '280px' }}>
            <div className="text-base font-medium font-semibold leading-5">
              Grado de complejidad
            </div>
            <div className="flex gap-5 justify-between py-6 pr-4 pl-8 mt-2.5 text-xs leading-4 bg-emerald-50 rounded-xl border border-solid border-[color:var(--Colors-Black,#1F1F1F)] text-cyan-950 max-md:pl-5 relative">
              <input
                type="text"
                className="flex-auto outline-none focus:outline-none bg-transparent"
                value={inputValue}
                readOnly
              />
              <div className="flex gap-2 cursor-pointer" onClick={handleIconClick}><Image src="/select.svg" width={12} height={12}/></div>
              {showOptions && (
                <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md mt-1 z-10">
                  {options.map((option) => (
                    <div
                      key={option}
                      className="px-4 py-1 cursor-pointer hover:bg-[#53BC65] hover:rounded-md"
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-center items-center px-5 mt-6 w-16 h-16 cursor-pointer rounded-xl aspect-square bg-[#073A38]">
            <div className="flex gap-2">
              <Image src="/search.svg" width={36} height={36} />
            </div>
          </div>
        </div>
      
      <div className="flex gap-2 self-start mt-8 text-base text-center whitespace-nowrap text-stone-900">
        <div className="grow font-semibold leading-[120%]">
          Ofertas en tu zona
        </div>
        <div className="font-medium leading-[135%]">(5)</div>
      </div>
      <div className="mt-4 w-full max-md:max-w-full">
        <div className="flex gap-12 max-md:flex-col max-md:gap-0">

          {/* Offers Cards */}
          {offers.slice(0, 2).map((offer, index) => (
            <div key={index} className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full bg-[#BBF7D1] rounded-xl">
              <div className="flex flex-col grow px-12 py-5 w-full text-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="text-base font-medium font-semibold text-lg leading-8">
                  {offer.nombre}
                </div>
                <div className="flex gap-1 justify-between mt-2 font-semibold leading-[120%]">
                  <div className="flex gap-1"><Image src="/locationIcon.svg" width={12} height={312}></Image><Link className="text-xl" href="/profile"></Link></div>
                  <div className="flex-auto text-sm">en {offer.direccion}</div>
                </div>
                <div className="flex gap-2 mt-3 whitespace-nowrap leading-[120%]">
                  <div className="self-start font-semibold leading-[120%]">Grado de Complejidad:</div>
                  <div className="flex-start">
                    {offer.gradoComplejidad}
                  </div>
                </div>
                <div className="flex gap-2 justify-between mt-2">
                  <div className="self-start font-semibold leading-[120%]"> Descripción:</div>
                  <div className="flex-auto leading-4">
                    {offer.descripcion}
                  </div>
                </div>
                <div className="flex gap-2 mt-3 whitespace-nowrap leading-[120%]">
                  <div className="self-start font-semibold leading-[120%]">Fecha de expiración:</div>
                  <div className="flex-start">
                    {format(new Date(offer.fechaFin), "dd/MM/yyyy - HH:mm")}
                  </div>
                </div>
                <div className="flex gap-2 mt-3 whitespace-nowrap leading-[120%]">
                  <div className="self-start font-semibold leading-[120%]">Pago hasta:</div>
                  <div className="flex-start">
                    ${offer.precio}
                  </div>
                </div>
                <div className="flex gap-2 mt-3 whitespace-nowrap leading-[120%]">
                  <div className="self-start font-semibold leading-[120%]"> Propietario:</div>
                  <div className="flex-start">
                    {offer.usuario.nombre} {offer.usuario.apellido}
                  </div>
                  <div className="flex gap-2"><Image src="/userIcon1.svg" width={12} height={12}/></div>
                </div>
                <div className="flex gap-5 justify-between self-center mt-6 font-medium leading-[120%]">
                  <div className="flex gap-2.5 justify-between px-3 py-2 rounded-md border border-solid border-[color:var(--Colors-Green,#53BC65)] text-cyan-950">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e3d20ff813c7d39af5e985ab67f3a1b044481f6bc526f12f9b3c089900f22c9?apiKey=5be09b09533c4e64a196bf72011dcfdb&"
                      className="w-4 aspect-square"
                    />
                    <div>Ver fotos</div>
                  </div>
                  <div className="flex gap-2.5 justify-between px-5 py-2.5 text-emerald-50 whitespace-nowrap rounded-md bg-[#073A38]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/70f72ac47b3cd8836d63a60f0baf7699588404119822d98c23869ba6ff1ae71a?apiKey=5be09b09533c4e64a196bf72011dcfdb&"
                      className="my-auto w-2 aspect-square"
                    />
                    <div>Postular</div>
                  </div>
                </div>
              </div>
            </div>
          ))}


          {/* <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full bg-[#BBF7D1] rounded-xl">
            <div className="flex flex-col grow px-12 py-5 w-full text-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-base font-medium font-semibold text-lg leading-8">
                Poda de arbustos
              </div>
              <div className="flex gap-1 justify-between mt-2 font-semibold leading-[120%]">
                <div className="flex gap-1"><Image src="/locationIcon.svg" width={12} height={312}></Image><Link className="text-xl" href="/profile"></Link></div>
                <div className="flex-auto text-sm">en Basavilbaso, Aguet 1234</div>
              </div>
              <div className="flex gap-2 mt-3 whitespace-nowrap leading-[120%]">
                <div className="self-start font-semibold leading-[120%]">Grado de Complejidad:</div>
                <div className="flex-start">Medio</div>
              </div>
              <div className="flex gap-2 justify-between mt-2">
                <div className="self-start font-semibold leading-[120%]"> Descripción:</div>
                <div className="flex-auto leading-4">Necesito podar dos libustros disciplinados de mi patio.</div>
              </div>
              <div className="flex gap-2 mt-3 whitespace-nowrap leading-[120%]">
                <div className="self-start font-semibold leading-[120%]">Fecha de expiración:</div>
                <div className="flex-start">28/02/2024 - 18:00</div>
              </div>
              <div className="flex gap-2 mt-3 whitespace-nowrap leading-[120%]">
                <div className="self-start font-semibold leading-[120%]">Pago hasta:</div>
                <div className="flex-start">$10.000</div>
              </div>
              <div className="flex gap-2 mt-3 whitespace-nowrap leading-[120%]">
                <div className="self-start font-semibold leading-[120%]"> Propietario:</div>
                <div className="flex-start">Pedro C.</div>
                <div className="flex gap-2"><Image src="/userIcon1.svg" width={12} height={12}/></div>
              </div>
              <div className="flex gap-5 justify-between self-center mt-6 font-medium leading-[120%]">
                <div className="flex gap-2.5 justify-between px-3 py-2 rounded-md border border-solid border-[color:var(--Colors-Green,#53BC65)] text-cyan-950">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e3d20ff813c7d39af5e985ab67f3a1b044481f6bc526f12f9b3c089900f22c9?apiKey=5be09b09533c4e64a196bf72011dcfdb&"
                    className="w-4 aspect-square"
                  />
                  <div>Ver fotos</div>
                </div>
                <div className="flex gap-2.5 justify-between px-5 py-2.5 text-emerald-50 whitespace-nowrap rounded-md bg-[#073A38]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/70f72ac47b3cd8836d63a60f0baf7699588404119822d98c23869ba6ff1ae71a?apiKey=5be09b09533c4e64a196bf72011dcfdb&"
                    className="my-auto w-2 aspect-square"
                  />
                  <div>Postular</div>
                </div>
              </div>
            </div>
          </div>


          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full bg-[#BBF7D1] rounded-xl">
            <div className="flex flex-col grow px-10 py-5 w-full text-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-base font-medium font-semibold text-lg leading-8">
                Corte de cesped
              </div>
              <div className="flex gap-1 justify-between mt-2 font-semibold leading-[120%]">
                <div className="flex gap-1"><Image src="/locationIcon.svg" width={12} height={312}></Image><Link className="text-xl" href="/profile"></Link></div>
                <div className="flex-auto text-sm">en Rosario del Tala, Invento 1234</div>
              </div>
              <div className="flex gap-2 mt-3 whitespace-nowrap leading-[120%]">
                <div className="self-start font-semibold leading-[120%]">Grado de Complejidad:</div>
                <div className="flex-start">Fácil</div>
              </div>
              <div className="flex gap-2 justify-between mt-2">
                <div className="self-start font-semibold leading-[120%] text-stone-900"> Descripción:</div>
                <div className="flex-auto leading-4 text-cyan-950">Necesito que corten el césped en mi terreno de 240 metros cuadrados.</div>
              </div>
              <div className="flex gap-2 mt-3 whitespace-nowrap leading-[120%]">
                <div className="self-start font-semibold leading-[120%]">Fecha de expiración:</div>
                <div className="flex-start">01/03/2024 - 14:00</div>
              </div>
              <div className="flex gap-2 mt-3 whitespace-nowrap leading-[120%]">
                <div className="self-start font-semibold leading-[120%]">Pago hasta:</div>
                <div className="flex-start">$15.000</div>
              </div>
              <div className="flex gap-2 mt-3 whitespace-nowrap leading-[120%]">
                <div className="self-start font-semibold leading-[120%]"> Propietario:</div>
                <div className="flex-start">Juan Z.</div>
                <div className="flex gap-2"><Image src="/userIcon1.svg" width={12} height={12}/></div>
              </div>
              <div className="flex gap-5 justify-between self-center mt-6 font-medium leading-[120%]">
                <div className="flex gap-2.5 justify-between px-3 py-2 rounded-md border border-solid border-[color:var(--Colors-Green,#53BC65)] text-cyan-950">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e3d20ff813c7d39af5e985ab67f3a1b044481f6bc526f12f9b3c089900f22c9?apiKey=5be09b09533c4e64a196bf72011dcfdb&"
                    className="w-4 aspect-square"
                  />
                  <div>Ver fotos</div>
                </div>
                <div className="flex gap-2.5 justify-between px-5 py-2.5 text-emerald-50 whitespace-nowrap rounded-md bg-[#073A38]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/70f72ac47b3cd8836d63a60f0baf7699588404119822d98c23869ba6ff1ae71a?apiKey=5be09b09533c4e64a196bf72011dcfdb&"
                    className="my-auto w-2 aspect-square"
                  />
                  <div>Postular</div>
                </div>
              </div>
            </div>
          </div> */}





        </div>
      </div>
      <div className="flex gap-5 justify-between self-start mt-6 text-base font-medium leading-5 text-green-400">
        <div className="flex-auto">Ver más ofertas</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d52666b18108735cbbc604806ac854ba5efabc6d497b0959422cc9d90829bca?apiKey=5be09b09533c4e64a196bf72011dcfdb&"
          className="my-auto w-4 aspect-square"
        />
      </div>
    </div>
    </main>

  );
}

