import React from 'react';

import Header from '../partials/Header';
import HeroAbout from '../partials/HeroAbout';
import FeaturesGallery from '../partials/FeaturesGallery';
import Timeline from '../partials/Timeline';
import Career from '../partials/Career';
import FeaturesAnimation from '../partials/FeaturesAnimation';
import Team from '../partials/Team';
import CtaContact from '../partials/CtaContact';
import Footer from '../partials/Footer';
import Mission from '../partials/Mission';

import Career1 from '../images/career-01.jpg'
import Career2 from '../images/career-02.jpg'
import Career3 from '../images/career-03.jpg'
import Career4 from '../images/career-04.jpg'

function About() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page sections */}
        <HeroAbout />
        <FeaturesGallery />
        <Timeline />
        <Mission title="Mission" desc="Our Mission “Adding value to your business.”

Our mission is to enable access to high-quality IT services for small start-ups to large firms at a reasonable cost. We believe, in today's world, it's highly imperative to build technology-driven products and services and to also digitize the currently non-digitized systems and processes to increase their efficiency and productivity.

We want to leverage the best of the technologies to help our clients excel in their businesses. We strive to timely deliver the best quality product to the client with the most competitive price-to-quality ratio found in the industry" image={Career1}
        />
        <Mission  title="Vision" desc="Our Vision “Aim of giving back to the society.”

Our Vision is to be the leading IT Services company and export our services to clients from all over the globe enabling the modernization of the economy throughout the world.

We believe that our growth is firmly attached to the growth of our customers, therefore we have resolutely committed to the success and growth of our clients. We plan to exceed the expectations of our clients by creating first-rate software solutions to solve their business problems and build mutually beneficial relationships with them.

We want to be known in the industry as the most reliable, competent, and customer-friendly software service providers." image={Career2}
        />
        {/* <Career /> */}
        {/* <FeaturesAnimation /> */}
        {/* <Team /> */}
        {/* <CtaContact /> */}

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default About;