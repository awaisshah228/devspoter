import React from 'react'

const Mission = ({title,desc,image,dir}) => {
  return (
    <div className="bg-[#1D1D20] pb-8 sm:pb-12 lg:pb-12">
                <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
                  <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
                    <div>
                      <div>
                        {/* <img
                          className="h-11 w-auto"
                          src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                          alt="Workflow"
                        /> */}
                      </div>
                      <div className="mt-20">

                        <div className="mt-6 sm:max-w-xl">
                          <h1 className="text-2xl font-extrabold text-white-900 tracking-tight sm:text-large ">
                            {title}
                          </h1>
                          <p className="mt-6 text-sm text-slate-400">
                            {desc}
                          </p>
                        </div>


                      </div>
                    </div>
                  </div>

                  <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
                    <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                      <div className="hidden sm:block">
                        <div className="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full" />
                        <svg
                          className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                          width={404}
                          height={392}
                          fill="none"
                          viewBox="0 0 404 392"
                        >
                          <defs>
                            <pattern
                              id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                              x={0}
                              y={0}
                              width={20}
                              height={20}
                              patternUnits="userSpaceOnUse"
                            >
                              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                            </pattern>
                          </defs>
                          <rect width={404} height={392} fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
                        </svg>
                      </div>
                      <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
                        <img
                          className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                          src={image}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  )
}

export default Mission