import React from "react";
import Career1 from '../images/career-01.jpg'
import Career2 from '../images/career-02.jpg'
import Career3 from '../images/career-03.jpg'
import Career4 from '../images/career-04.jpg'

function ProjectItem({title,desc,image,tech,subtitle}) {
  return (
    <div className="flex flex-col  rounded overflow-hidden shadow-lg bg-zinc-400">
      <img className="w-full  h-80 " src={image} alt="Sunset in the mountains"  style={{objectFit:"cover"}}  />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="font-bold text-medium mb-2">{subtitle}</div>
        <p className="text-gray-700 text-base">
          {desc}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {
          tech?.map(item=>(
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{item}</span>


          ))
        }
        {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span> */}
      </div>
    </div>
  );
}

export default ProjectItem;
