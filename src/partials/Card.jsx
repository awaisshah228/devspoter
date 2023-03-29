// servicesData.js

export const servicesData = [
    {
      id: 1,
      title: "DevOps Consulting",
      description: "Our team of experts will help you implement and optimize your DevOps practices to improve your software delivery.",
      image: "/images/devops-consulting.jpg"
    },
    {
      id: 2,
      title: "eCommerce Development",
      description: "We specialize in building scalable and secure eCommerce platforms that provide a seamless shopping experience for your customers.",
      image: "/images/ecommerce-development.jpg"
    },
    {
      id: 3,
      title: "Maintenance & Support",
      description: "We offer ongoing maintenance and support services to ensure your applications and infrastructure are always up-to-date and running smoothly.",
    //   image: "/images/maintenance-support.jpg"
    },
    {
      id: 4,
      title: "Validation",
      description: "We offer ongoing maintenance and support services to ensure your applications and infrastructure are always up-to-date and running smoothly.",
    //   image: "/images/maintenance-support.jpg"
    },
    // Add more services as needed
  ];
  
  // Card.js
  
  import React from 'react';
  
  export const Card = ({ service }) => {
    return (
      <div className="bg-gray-800 rounded-lg shadow-md flex flex-col justify-center items-center my-4  ">
        {/* <img src={service.image} alt={service.title} className="object-cover rounded-t-lg" /> */}
        <div className="p-6 text-center">
          <h2 className="text-white md:text-2xl text-lg font-bold mb-2">{service.title}</h2>
          <p className="text-gray-400 md:text-lg text-sm">{service.description}</p>
          {/* <a href="#" className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">Learn More</a> */}
        </div>
      </div>
    );
  };
  
  