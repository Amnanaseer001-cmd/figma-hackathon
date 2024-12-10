import React from "react";

interface CardProps {
  imgSrc: string;
  title: string;
  department: string;
  originalPrice: string;
  discountedPrice: string;
}

const Card: React.FC<CardProps> = ({ imgSrc, title, department, originalPrice, discountedPrice }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg w-screen gap-8">
      <img
        className="w-[100px] h-64 object-cover rounded-t-lg gap-8"
        src={imgSrc}
        alt="Product"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500 text-sm">{department}</p>
        <div className="flex justify-between items-center mt-2">
          <div>
            <span className="text-gray-400 line-through">{originalPrice}</span>
            <span className="text-teal-500 font-bold ml-2">{discountedPrice}</span>
          </div>
        </div>
        <div className="flex space-x-2 mt-3">
          <div className="w-4 h-4 rounded-full bg-teal-500"></div>
          <div className="w-4 h-4 rounded-full bg-orange-500"></div>
          <div className="w-4 h-4 rounded-full bg-gray-500"></div>
          <div className="w-4 h-4 rounded-full bg-blue-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
