import * as React from "react";
import { ProductCardProps } from "../app/shop/type";

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  department,
  originalPrice,
  salePrice,
  imageUrl,
  colors
}) => {
  return (
    <div className="flex flex-col items-center w-[238px]">
      <div className="flex overflow-hidden flex-col max-w-full bg-white w-[239px]">
        <div className="flex overflow-hidden flex-col w-full">
          <img
            loading="lazy"
            src={imageUrl}
            alt={title}
            className="object-contain w-full aspect-[0.8]"
          />
        </div>
        <div className="flex overflow-hidden flex-col items-center px-6 pt-6 pb-9 w-full max-md:px-5">
          <div className="text-base font-bold tracking-normal text-center text-slate-800">
            {title}
          </div>
          <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">
            {department}
          </div>
          <div className="flex gap-1.5 items-start px-1 py-1.5 mt-2.5 text-base font-bold tracking-normal text-center whitespace-nowrap">
            <div className="text-stone-300 w-[52px]">{originalPrice}</div>
            <div className="text-teal-700 w-[45px]">{salePrice}</div>
          </div>
          <div className="flex gap-1.5 items-center mt-2.5">
            {colors.map((color, index) => (
              <div
                key={index}
                className={`flex shrink-0 self-stretch my-auto w-4 h-4 bg-${color} rounded-full fill-${color}`}
                role="button"
                tabIndex={0}
                aria-label={`Select ${color} color`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};