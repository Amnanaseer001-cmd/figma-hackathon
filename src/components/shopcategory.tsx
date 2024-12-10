import * as React from "react";
import { CategoryCardProps } from "../app/shop/type";

export const CategoryCard: React.FC<CategoryCardProps> = ({ title, itemCount, imageUrl }) => {
  return (
    <div className="flex overflow-hidden flex-col w-[205px]">
      <div className="flex overflow-hidden flex-col bg-white">
        <div className="flex overflow-hidden relative flex-col items-center px-5 py-20 aspect-[0.919] w-[205px] max-md:px-5">
          <img
            loading="lazy"
            src={imageUrl}
            alt={`${title} category`}
            className="object-cover absolute inset-0 size-full"
          />
          <div className="relative text-base font-bold tracking-normal text-center text-white">
            {title}
          </div>
          <div className="relative mt-2.5 text-sm tracking-wide leading-none text-white">
            {itemCount} Items
          </div>
        </div>
      </div>
    </div>
  );
};