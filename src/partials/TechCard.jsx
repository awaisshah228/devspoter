import React from 'react';
import PropTypes from 'prop-types';

const TechStackCard = ({ name, Logo, description, color ,className }) => {
  return (
    <div className="tech-stack-card   my-12 text-black flex flex-col items-center justify-center  p-4">
      {/* <img src={logo} alt={`${name} logo`} /> */}
      <Logo size={90} color={color} className={className} />
      <h3 className='mt-4'>{name}</h3>
      <p>{description}</p>
    </div>
  );
};
export default TechStackCard;