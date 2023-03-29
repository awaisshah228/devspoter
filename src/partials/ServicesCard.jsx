import React from 'react';
import {SiAngular,SiPhp,SiPython,SiReact,SiWordpress,SiShopify,SiJavascript,SiTypescript,SiVuedotjs} from 'react-icons/si'
import ServiceItem from './ServiceItem';
import {DiNodejs,DiNodejsSmall} from 'react-icons/di'



function ServiceCard() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* Items */}
          <div className="grid gap-2 grid-cols-2 md:grid-cols-4" data-aos-id-clients>

            {/* Item */}
            <ServiceItem  Icon={SiPython}/>
            <ServiceItem  Icon={DiNodejsSmall}/>
            <ServiceItem  Icon={SiReact}/>
            <ServiceItem  Icon={SiVuedotjs}/>
            <ServiceItem  Icon={SiPhp}/>
            <ServiceItem  Icon={SiWordpress}/>
            <ServiceItem  Icon={SiShopify}/>
            {/* <ServiceItem  Icon={SiTypescript}/> */}
            <ServiceItem  Icon={SiAngular}/>
            
      

          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceCard;