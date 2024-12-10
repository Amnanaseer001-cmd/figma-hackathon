import * as React from "react";
import { ProductCardProps } from "../app/types";

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  department,
  oldPrice,
  newPrice,
  imageUrl,
}) => {
  return (
    <>
      <div className="flex flex-col items-center w-[238px]">
        <div className="flex overflow-hidden flex-col max-w-full bg-white w-[239px]">
          <div className="flex overflow-hidden flex-col w-full ">
            <img
              loading="lazy"
              src={imageUrl}
              alt={title}
              className="object-contain w-full aspect-[0.56]"
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
              <div className="text-stone-300 w-[52px]">{oldPrice}</div>
              <div className="text-teal-700 w-[45px]">{newPrice}</div>
            </div>
            <div className="flex gap-1.5 items-center mt-2.5">
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 bg-sky-500 rounded-full fill-sky-500" />
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 bg-teal-700 rounded-full fill-teal-700" />
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 bg-orange-400 rounded-full fill-orange-400" />
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-slate-800 fill-slate-800" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}