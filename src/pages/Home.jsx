import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import HeroHome from '../partials/HeroHome';
import Stats from '../partials/Stats';
import Carousel from '../partials/Carousel';
import Tabs from '../partials/Tabs';
import Process from '../partials/Process';
import PricingTables from '../partials/PricingTables';
import TestimonialsBlocks from '../partials/TestimonialsBlocks';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Cta from '../partials/Cta';
import Footer from '../partials/Footer';
import HeroCarousel from '../partials/HeroCarousel';
import TechStack from '../partials/TechStack';
import ContactPart from '../partials/Contact';
// import TechStack from '../partials/TechStack';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
          <PageIllustration />
        </div>

        {/*  Page sections */}
        {/* <HeroHome /> */}
        <HeroCarousel />
        
        
        
        <Carousel />
        <Stats />
        <Tabs />
        <TechStack />
        {/* <TechStack /> */}
        {/* <Process /> */}
        {/* <PricingTables /> */}
        {/* <TestimonialsBlocks /> */}
        <FeaturesBlocks />
        {/* <Cta /> */}
        <ContactPart />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;