import React from 'react'
import ProjectItem from './ProjectItem'
import Career1 from '../images/career-01.jpg'
import Career2 from '../images/career-02.jpg'
import Career3 from '../images/career-03.jpg'
import Career4 from '../images/career-04.jpg'
import Career5 from '../images/career-05.jpg'
import Career6 from '../images/career-06.jpg'
import Career7 from '../images/career-07.jpg'
import Career8 from '../images/career-08.jpg'
import Career9 from '../images/career-09.jpg'
import Career10 from '../images/career-10.jpg'
import Career11 from '../images/career-11.jpg'
import Career12 from '../images/career-12.jpg'
import Career13 from '../images/career-13.jpg'
import Career14 from '../images/career-14.jpg'
import Career15 from '../images/career-15.jpg'
import Career16 from '../images/career-16.jpg'

const projects=[
    {
        title:"Debt Collection Software for Agencies",
        subtitle:"Web Development",
        desc:`With our highly skilled team of web developers, we designed a customized solution for a group of agencies to easily collect debt payments for their clients (banks).
        Our front-end developers used Angular to develop a reasonably customized and complex UI/UX to a pixel-perfect detail. The application's back-end was written in Python, and we deployed various data transformation and storage techniques/tools to deal with the high volume of data flow.`,
        image:"https://devdisruptors.com/static/media/pic4.ff8d51bf.jpg",
        tech:["Python","Django","Node","React","Mongodb"]
    },
    {
        title:"Video/Audio Calling Application",
        subtitle:"Ring a Doctor",
        image:Career15,
        desc:`We built a VOIP-based mobile app for one of our clients to enable patients to communicate with doctors over audio/video calls and share medical records securely back and forth. We had integrated multiple payment methods into the application, so that doctors could collect a small fee based on the number and duration of calls.
        Our developers designed the Front-end with React, and the back-end was written with NodeJS.`,
        tech:["Node","React","Mongodb"]

    },
    {
        title:"Residential Apartments Booking Website",
        subtitle:"Amli.com",
        image:Career8,
        tech:["React","Graphql","Prismic"],
        desc:`Our responsibilities were to build the site from scratch using the latest web technologies like React, GraphQL, and Prismic CMS. Multiple third-party APIs for maps, analytics, and tag management were integrated in this application.
        Our designers designed the front-end using Figma and interacted with the client to develop an appealing UI/UX experience. Our Back-end Developers set up Prismic CMS and exposed GraphQL endpoints for better management of data flow between client and server.`
    },
    {
        title:"Health Facilities Management System",
        subtitle:"Web & Mobile Design",
        image:Career10,
        tech:["Django","React","Python"],
        desc:`We designed a multi-platform health facilities management system for one of our clients, having 150+ health facilities under administration. The system was composed of many application components including a website dashboard, a desktop application, and an android application.
        Our developers designed the website with React, desktop application with .NET, and the mobile application with React Native. Back-end was a micro-services based RESTful API architecture built with Python`
    },
    {
        title:"Marketplace for Airplanes",
        subtitle:"E-commerce Development",
        image:Career10,
        tech:["Django","React","Python"],
        desc:`Overview
        Our responsibility was to develop the fully functioning web application for a marketplace of airplane,spare parts and accessories. We had implemented multiple payement methods so that it would be reliable and increasing usability.We have built it using Github for Continuous integration and development.
        Our development team developed the front end using Reactjs,Next Js and Django framework .
        Back-end Developers set up and exposed GraphQL endpoints for better management of data flow between client and server.`
    },
    {
        title:"Marketplace for Diners and Restaurants",
        subtitle:"E-commerce Development",
        image:Career16,
        tech:["Next Js","React","Express"],
        desc:`Overview
        We have developed a highly interactive, reliable, and maintainable full fledged marketplace for listing of local diners and restaurants for one of our most recurring client. It includes chat and calling widgets along with different payement options for both end users and clients. It took us a whole year until deployement to complete this masterpiece.
        Our developers developed frontend using reactJs,react bootstrap, NextJs, and jquery. Backend includes NodeJS, ExpressJS, MongoDB and we deployed various data transformation and storage techniques/tools to deal with the high volume of data flow`
    },
    {
        title:"WebApp for Solar Panel Company",
        subtitle:"Dynamic Websites",
        image:Career7,
        tech:["Django","React","Python"],
        desc:`We have induldged our best efforts to develop and deploy a web application for a solar panel selling organization having a prestigious name in the solar industry. Which have increased its chances of getting more leads than ever. It includes a chatting widget and a CMS along different login schemas for user and the admin.
        Front end was developed using HTML, SCSS, Bootstrap, Javascript and JQuery. Backend includes Python and dynamoDB.`
    },
    {
        title:"Tour Planner",
        subtitle:"Booking WebApp",
        image:Career13,
        tech:["Bootstrap","React","Python","MySql"],
        desc:`Overview
        One of our client wanted us to make a trip booking web appliction to allow people book their trips to heavenly lakes, and valleys of northern Pakistan internationally. Different trip organizers are previleged to add their pricing and accomodation details. Our responsibility was to follow the design and built it from scratch.
        Front End was designed in ReactJs,React Bootstrap, JQuery and SCSS. Backend was developed in PHP using Laravel and SQL.`
    },
]

const ProjectGrid = () => {
    return (
        <div className='grid md:grid-cols-2  grid-cols-1 md:gap-8 gap-4 justify-center md:p-16 p-4'>
            {projects.map(item=>(
                <ProjectItem {...item}></ProjectItem>
            ))}
            {/* <ProjectItem title='Debt Collection Software for Agencies' subtitle="Web Development" image={Career1} tech={["react", "node"]} desc="With our highly skilled team of web developers, we designed a customized solution for a group of agencies to easily collect debt payments for their clients (banks).
Our front-end developers used Angular to develop a reasonably customized and complex UI/UX to a pixel-perfect detail. The application's back-end was written in Python, and we deployed various data transformation and storage techniques/tools to deal with the high volume of data flow." />
            <ProjectItem title='Video/Audio Calling Application' subtitle="Ring a doctor" image={Career2} tech={["react", "node"]} desc="With our highly skilled team of web developers, we designed a customized solution for a group of agencies to easily collect debt payments for their clients (banks).
Our front-end developers used Angular to develop a reasonably customized and complex UI/UX to a pixel-perfect detail. The application's back-end was written in Python, and we deployed various data transformation and storage techniques/tools to deal with the high volume of data flow." />
            <ProjectItem title='Debt Collection Software for Agencies' image={Career3} tech={["react", "node"]} desc="With our highly skilled team of web developers, we designed a customized solution for a group of agencies to easily collect debt payments for their clients (banks).
Our front-end developers used Angular to develop a reasonably customized and complex UI/UX to a pixel-perfect detail. The application's back-end was written in Python, and we deployed various data transformation and storage techniques/tools to deal with the high volume of data flow." />
            <ProjectItem title='Debt Collection Software for Agencies' image={Career1} tech={["react", "node"]} desc="With our highly skilled team of web developers, we designed a customized solution for a group of agencies to easily collect debt payments for their clients (banks).
Our front-end developers used Angular to develop a reasonably customized and complex UI/UX to a pixel-perfect detail. The application's back-end was written in Python, and we deployed various data transformation and storage techniques/tools to deal with the high volume of data flow." />
            <ProjectItem title='Debt Collection Software for Agencies' image={Career4} tech={["react", "node"]} desc="With our highly skilled team of web developers, we designed a customized solution for a group of agencies to easily collect debt payments for their clients (banks).
Our front-end developers used Angular to develop a reasonably customized and complex UI/UX to a pixel-perfect detail. The application's back-end was written in Python, and we deployed various data transformation and storage techniques/tools to deal with the high volume of data flow." /> */}
            {/* <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem /> */}
        </div>
    )
}

export default ProjectGrid