import React from 'react'

const CardService = () => {
    return (
        <div className="swiper-slide max-w-sm ">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                {/* <img className="h-48 w-full object-cover object-center" src={image} alt="Service Image" /> */}
                <div className="p-4 flex flex-col justify-center">
                    <h3 className="text-xl font-medium text-gray-900 mb-2 text-center">DevOps</h3>
                    <p className="text-gray-700 leading-snug text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sed, similique laborum adipisci ducimus dolorem blanditiis doloribus, facere dicta asperiores neque maiores eveniet nobis eos est, harum rem assumenda quibusdam!</p>
                </div>
            </div>
            {/* <div className='bg-white '>hi</div>
              <img className="transition-opacity duration-300" src={CarouselImage01} width="540" height="460" alt="Carousel item 01" />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">

                <div className="absolute bottom-0 right-0 p-6">
                  <a className="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out" href="#0">Creative Services</a>
                </div>
              </div> */}
        </div>
    )
}

export default CardService