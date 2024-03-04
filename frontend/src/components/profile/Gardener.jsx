import React from 'react'


const Gardener = () => {
  return (
    <main className="flex flex-col w-4/5 bg-[#edfbf2] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow mt-20 max-md:mt-10 max-md:max-w-full xs:mx-10 md:mx-16 xl:mx-20">
            <div className="max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-[16%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-3xl font-semibold leading-8 text-center whitespace-nowrap text-stone-900 max-md:mt-8">
                    <div>MI PERFIL</div>
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/38ef5921ee1cee5d910f6d39cc0003b1ca4fd278cd16fea931cbdef5585751b7?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/38ef5921ee1cee5d910f6d39cc0003b1ca4fd278cd16fea931cbdef5585751b7?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/38ef5921ee1cee5d910f6d39cc0003b1ca4fd278cd16fea931cbdef5585751b7?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/38ef5921ee1cee5d910f6d39cc0003b1ca4fd278cd16fea931cbdef5585751b7?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/38ef5921ee1cee5d910f6d39cc0003b1ca4fd278cd16fea931cbdef5585751b7?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/38ef5921ee1cee5d910f6d39cc0003b1ca4fd278cd16fea931cbdef5585751b7?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/38ef5921ee1cee5d910f6d39cc0003b1ca4fd278cd16fea931cbdef5585751b7?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/38ef5921ee1cee5d910f6d39cc0003b1ca4fd278cd16fea931cbdef5585751b7?apiKey=5be09b09533c4e64a196bf72011dcfdb&"
                      className="mt-6 w-32 rounded-full aspect-square"
                    />
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[84%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow mt-1.5 max-md:mt-9 max-md:max-w-full">
                    <div className="text-base font-semibold leading-5 text-green max-md:max-w-full">
                      Jardinero
                    </div>
                    <div className="mt-7 max-md:max-w-full">
                      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                        <div className="flex flex-col w-[68%] max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                            <div className="flex gap-4 justify-between whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                              <div className="my-auto text-xl font-semibold leading-6 text-center text-stone-900">
                                José Callao
                              </div>
                              <div className="grow text-base font-medium leading-5 text-cyan-950">
                                Técnico en Gestión Ambiental / Viverista
                              </div>
                            </div>

                            <div className="flex gap-2 justify-between mt-3 max-md:flex-wrap max-md:max-w-full">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/256a695019e826e12ea009d4ba8055fde49886af4af2cae351c5b22d7e53de08?apiKey=5be09b09533c4e64a196bf72011dcfdb&"
                                className="w-6 aspect-square"
                              />
                              <div className="flex-auto self-start mt-2 text-base font-medium leading-5">
                                Rosario del tala, Entre Ríos
                              </div>
                              <div className="flex-auto my-auto text-xs leading-4">
                                Radio de cobertura: 88km
                              </div>
                            </div>

                            <div className="flex gap-2.5 justify-between mt-6 text-cyan-950 max-md:flex-wrap max-md:max-w-full">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/71b753e024d37f10bc78b0438a51433e3acfd484e68f98e9fcb9afac9e1bb04c?apiKey=5be09b09533c4e64a196bf72011dcfdb&"
                                className="w-12 aspect-square"
                              />
                              <div className="flex flex-col flex-1">
                                <div className="text-xs leading-4">
                                  Descripción:
                                </div>
                                <div className="mt-3 text-base font-medium leading-5">
                                  Jardinería general, poda y mantenimiento de
                                  jardín.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full items-center">
                          <div className="flex flex-col grow items-center max-md:mt-10">
                            <div className="flex gap-1 px-px max-w-full w-[157px]">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ff8d88b23ac3e58cd33714f341b664e3b82ae79a27d73e807a541eab5511f35?apiKey=5be09b09533c4e64a196bf72011dcfdb&"
                                className="flex-1 shrink-0 w-full aspect-square"
                              />
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ff8d88b23ac3e58cd33714f341b664e3b82ae79a27d73e807a541eab5511f35?apiKey=5be09b09533c4e64a196bf72011dcfdb&"
                                className="flex-1 shrink-0 w-full aspect-square"
                              />
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ff8d88b23ac3e58cd33714f341b664e3b82ae79a27d73e807a541eab5511f35?apiKey=5be09b09533c4e64a196bf72011dcfdb&"
                                className="flex-1 shrink-0 w-full aspect-square"
                              />
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ff8d88b23ac3e58cd33714f341b664e3b82ae79a27d73e807a541eab5511f35?apiKey=5be09b09533c4e64a196bf72011dcfdb&"
                                className="flex-1 shrink-0 w-full aspect-square"
                              />
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ff8d88b23ac3e58cd33714f341b664e3b82ae79a27d73e807a541eab5511f35?apiKey=5be09b09533c4e64a196bf72011dcfdb&"
                                className="flex-1 shrink-0 w-full aspect-square"
                              />
                            </div>
                            <div className="mt-2.5 text-xs leading-4 text-center whitespace-nowrap text-stone-900">
                              5 reseñas
                            </div>

                            <div className="flex w-[224px] h-[62px] gap-2.5 justify-between self-stretch px-12 py-5 mt-5 text-base font-semibold leading-5 text-center text-emerald-50 whitespace-nowrap rounded-xl bg-[#073A38] max-md:px-5">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0913691996b74c11a7c2683daba5e264a8ed39dcdc953573b8419ea0e306daa?apiKey=5be09b09533c4e64a196bf72011dcfdb&"
                                className="w-6 aspect-square"
                              />
                              <div className="grow self-start mt-1">
                                Editar perfil
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/764cf00557eecb45e007f4b9b3ad6008941727d482bdc5fa3fc975b6ae253da6?apiKey=5be09b09533c4e64a196bf72011dcfdb&"
              className="mt-11 w-full stroke-[0.5px] stroke-cyan-950 max-md:mt-10 max-md:max-w-full"
            />
            <div className="mt-8 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col max-md:mt-2.5 max-md:max-w-full">
                    <div className="flex gap-3 self-start text-base text-center whitespace-nowrap text-stone-900">
                      <div className="font-semibold leading-[120%]">
                        Reseñas
                      </div>
                      <div className="font-medium leading-[135%]">(5)</div>
                    </div>
                    <div className="flex gap-4 justify-between mt-6 max-md:flex-wrap max-md:max-w-full">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2e444063e89ef493f30182f7c158691711ec2fef9697167b5c06d7e80582c522?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e444063e89ef493f30182f7c158691711ec2fef9697167b5c06d7e80582c522?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e444063e89ef493f30182f7c158691711ec2fef9697167b5c06d7e80582c522?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e444063e89ef493f30182f7c158691711ec2fef9697167b5c06d7e80582c522?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e444063e89ef493f30182f7c158691711ec2fef9697167b5c06d7e80582c522?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e444063e89ef493f30182f7c158691711ec2fef9697167b5c06d7e80582c522?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e444063e89ef493f30182f7c158691711ec2fef9697167b5c06d7e80582c522?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e444063e89ef493f30182f7c158691711ec2fef9697167b5c06d7e80582c522?apiKey=5be09b09533c4e64a196bf72011dcfdb&"
                        className="w-16 rounded-full aspect-square"
                      />
                      <div className="flex flex-col flex-1 self-start max-md:max-w-full">
                        <div className="flex gap-4 self-start">
                          <div className="grow my-auto text-base font-semibold leading-5 whitespace-nowrap text-stone-900">
                            Malena M.
                          </div>
                          <div className="flex gap-1">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/91b1fbea86561ac56f912fba9e7032611fc0978e78734b3e4fa26f677fef9e3e?apiKey=5be09b09533c4e64a196bf72011dcfdb&"
                              className="w-4 aspect-square"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/91b1fbea86561ac56f912fba9e7032611fc0978e78734b3e4fa26f677fef9e3e?apiKey=5be09b09533c4e64a196bf72011dcfdb&"
                              className="w-4 aspect-square"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/91b1fbea86561ac56f912fba9e7032611fc0978e78734b3e4fa26f677fef9e3e?apiKey=5be09b09533c4e64a196bf72011dcfdb&"
                              className="w-4 aspect-square"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/91b1fbea86561ac56f912fba9e7032611fc0978e78734b3e4fa26f677fef9e3e?apiKey=5be09b09533c4e64a196bf72011dcfdb&"
                              className="w-4 aspect-square"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/91b1fbea86561ac56f912fba9e7032611fc0978e78734b3e4fa26f677fef9e3e?apiKey=5be09b09533c4e64a196bf72011dcfdb&"
                              className="w-4 aspect-square"
                            />
                          </div>
                        </div>
                        <div className="mt-4 text-xs leading-4 text-stone-900 max-md:max-w-full">
                          Es un genio. Sabe un montón, te explica con paciencia, es prolijo y súper amable.
                        </div>
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b95ff136d73197df46a3088a99bf10a73ff0627b1eaa10726d10a66003a853f?apiKey=5be09b09533c4e64a196bf72011dcfdb&"
                      className="mt-3.5 w-full stroke-[0.5px] stroke-green-200 max-md:max-w-full"
                    />
                    <div className="flex gap-4 justify-between mt-3.5 max-md:flex-wrap max-md:max-w-full">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fd847bdfc43a36d31fe01e2f26023ca8211c5a2e31476bc12cde7c3297dfe2e1?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd847bdfc43a36d31fe01e2f26023ca8211c5a2e31476bc12cde7c3297dfe2e1?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd847bdfc43a36d31fe01e2f26023ca8211c5a2e31476bc12cde7c3297dfe2e1?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd847bdfc43a36d31fe01e2f26023ca8211c5a2e31476bc12cde7c3297dfe2e1?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd847bdfc43a36d31fe01e2f26023ca8211c5a2e31476bc12cde7c3297dfe2e1?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd847bdfc43a36d31fe01e2f26023ca8211c5a2e31476bc12cde7c3297dfe2e1?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd847bdfc43a36d31fe01e2f26023ca8211c5a2e31476bc12cde7c3297dfe2e1?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd847bdfc43a36d31fe01e2f26023ca8211c5a2e31476bc12cde7c3297dfe2e1?apiKey=5be09b09533c4e64a196bf72011dcfdb&"
                        className="w-16 rounded-full aspect-square"
                      />
                      <div className="flex flex-col flex-1 self-start max-md:max-w-full">
                        <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
                          <div className="flex-auto my-auto text-base font-semibold leading-5 text-stone-900">
                            Pedro C.
                          </div>
                          <div className="flex gap-1 pr-20">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/91b1fbea86561ac56f912fba9e7032611fc0978e78734b3e4fa26f677fef9e3e?apiKey=5be09b09533c4e64a196bf72011dcfdb&"
                              className="w-4 aspect-square"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/91b1fbea86561ac56f912fba9e7032611fc0978e78734b3e4fa26f677fef9e3e?apiKey=5be09b09533c4e64a196bf72011dcfdb&"
                              className="w-4 aspect-square"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/91b1fbea86561ac56f912fba9e7032611fc0978e78734b3e4fa26f677fef9e3e?apiKey=5be09b09533c4e64a196bf72011dcfdb&"
                              className="w-4 aspect-square"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/91b1fbea86561ac56f912fba9e7032611fc0978e78734b3e4fa26f677fef9e3e?apiKey=5be09b09533c4e64a196bf72011dcfdb&"
                              className="w-4 aspect-square"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/91b1fbea86561ac56f912fba9e7032611fc0978e78734b3e4fa26f677fef9e3e?apiKey=5be09b09533c4e64a196bf72011dcfdb&"
                              className="w-4 aspect-square"
                            />
                          </div>
                        </div>
                        <div className="mt-4 text-xs leading-4 text-stone-900 max-md:max-w-full">
                          Excelente trabajo, rápido y eficiente. Lo recomiendo.
                        </div>
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b95ff136d73197df46a3088a99bf10a73ff0627b1eaa10726d10a66003a853f?apiKey=5be09b09533c4e64a196bf72011dcfdb&"
                      className="mt-3.5 w-full stroke-[0.5px] stroke-green-200 max-md:max-w-full"
                    />
                    <div className="flex gap-2 self-start mt-5 text-base font-medium leading-5 text-green-400 whitespace-nowrap">
                      <div className="grow">Ver más opiniones</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d52666b18108735cbbc604806ac854ba5efabc6d497b0959422cc9d90829bca?apiKey=5be09b09533c4e64a196bf72011dcfdb&"
                        className="w-4 aspect-square"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col ml-5 w-[21%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-center text-base font-semibold leading-5 whitespace-nowrap text-cyan-950 max-md:mt-2.5">
                    <div className="self-stretch">Trabajos realizados</div>
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/808ebeddd32bc8da42d554eb2dbfaa32a9a689fe41a31235a4ffc977fa50f29a?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/808ebeddd32bc8da42d554eb2dbfaa32a9a689fe41a31235a4ffc977fa50f29a?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/808ebeddd32bc8da42d554eb2dbfaa32a9a689fe41a31235a4ffc977fa50f29a?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/808ebeddd32bc8da42d554eb2dbfaa32a9a689fe41a31235a4ffc977fa50f29a?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/808ebeddd32bc8da42d554eb2dbfaa32a9a689fe41a31235a4ffc977fa50f29a?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/808ebeddd32bc8da42d554eb2dbfaa32a9a689fe41a31235a4ffc977fa50f29a?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/808ebeddd32bc8da42d554eb2dbfaa32a9a689fe41a31235a4ffc977fa50f29a?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/808ebeddd32bc8da42d554eb2dbfaa32a9a689fe41a31235a4ffc977fa50f29a?apiKey=5be09b09533c4e64a196bf72011dcfdb&"
                      className="mt-6 aspect-[1.82] w-[200px]"
                    />
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/384298a7fd9c734a333348e48c34a88d96d6667f5efcc20cee27b02a09a630a2?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/384298a7fd9c734a333348e48c34a88d96d6667f5efcc20cee27b02a09a630a2?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/384298a7fd9c734a333348e48c34a88d96d6667f5efcc20cee27b02a09a630a2?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/384298a7fd9c734a333348e48c34a88d96d6667f5efcc20cee27b02a09a630a2?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/384298a7fd9c734a333348e48c34a88d96d6667f5efcc20cee27b02a09a630a2?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/384298a7fd9c734a333348e48c34a88d96d6667f5efcc20cee27b02a09a630a2?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/384298a7fd9c734a333348e48c34a88d96d6667f5efcc20cee27b02a09a630a2?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/384298a7fd9c734a333348e48c34a88d96d6667f5efcc20cee27b02a09a630a2?apiKey=5be09b09533c4e64a196bf72011dcfdb&"
                      className="mt-1.5 aspect-[1.11] w-[200px]"
                    />
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[21%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-center mt-10 max-md:mt-10">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c55f9cf4b334487f7699f7cb4c43e2e0ae3e7ada0c36cc213524efa908e6dfb4?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c55f9cf4b334487f7699f7cb4c43e2e0ae3e7ada0c36cc213524efa908e6dfb4?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c55f9cf4b334487f7699f7cb4c43e2e0ae3e7ada0c36cc213524efa908e6dfb4?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c55f9cf4b334487f7699f7cb4c43e2e0ae3e7ada0c36cc213524efa908e6dfb4?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c55f9cf4b334487f7699f7cb4c43e2e0ae3e7ada0c36cc213524efa908e6dfb4?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c55f9cf4b334487f7699f7cb4c43e2e0ae3e7ada0c36cc213524efa908e6dfb4?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c55f9cf4b334487f7699f7cb4c43e2e0ae3e7ada0c36cc213524efa908e6dfb4?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c55f9cf4b334487f7699f7cb4c43e2e0ae3e7ada0c36cc213524efa908e6dfb4?apiKey=5be09b09533c4e64a196bf72011dcfdb&"
                      className="aspect-[1.3] w-[199px]"
                    />
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/099cb43ee67ddc770d59539283b37fc705ccaa234792cf1aa0aa64ac27d0d74b?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/099cb43ee67ddc770d59539283b37fc705ccaa234792cf1aa0aa64ac27d0d74b?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/099cb43ee67ddc770d59539283b37fc705ccaa234792cf1aa0aa64ac27d0d74b?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/099cb43ee67ddc770d59539283b37fc705ccaa234792cf1aa0aa64ac27d0d74b?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/099cb43ee67ddc770d59539283b37fc705ccaa234792cf1aa0aa64ac27d0d74b?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/099cb43ee67ddc770d59539283b37fc705ccaa234792cf1aa0aa64ac27d0d74b?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/099cb43ee67ddc770d59539283b37fc705ccaa234792cf1aa0aa64ac27d0d74b?apiKey=5be09b09533c4e64a196bf72011dcfdb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/099cb43ee67ddc770d59539283b37fc705ccaa234792cf1aa0aa64ac27d0d74b?apiKey=5be09b09533c4e64a196bf72011dcfdb&"
                      className="mt-1.5 aspect-[1.49] w-[199px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
  )
}

export default Gardener