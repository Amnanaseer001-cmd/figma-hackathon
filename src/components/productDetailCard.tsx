import * as React from 'react';
import { ProductCardProps } from '../app/productsdetail/types';

export const ProductCard: React.FC<ProductCardProps> = ({ title, department, price, imageUrl }) => {
  return (
    <div className="flex flex-col items-center w-60">
      <div className="flex overflow-hidden flex-col max-w-full bg-white w-[239px]">
        <div className="flex overflow-hidden flex-col w-full">
          <img
            loading="lazy"
            src={imageUrl}
            alt={title}
            className="object-contain w-full aspect-[0.85]"
          />
        </div>
        <div className="flex overflow-hidden flex-col px-6 pt-6 pb-9 w-full text-base font-bold tracking-normal max-md:px-5">
          <div className="text-slate-800">{title}</div>
          <div className="mt-2.5 text-sm tracking-wide leading-6 text-neutral-500">
            {department}
          </div>
          <div className="flex gap-1.5 items-start self-start px-1 py-1.5 mt-2.5 text-center whitespace-nowrap">
            <div className="text-stone-300 w-[52px]">${price.original.toFixed(2)}</div>
            <div className="text-teal-700 w-[45px]">${price.discounted.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};