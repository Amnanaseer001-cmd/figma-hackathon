import * as React from 'react';
import { BrandLogoProps } from '../app/productsdetail/types';

export const BrandLogo: React.FC<BrandLogoProps> = ({ imageUrl, alt, width }) => {
  return (
    <div className="flex overflow-hidden flex-col items-center self-stretch my-auto w-[153px]">
      <img
        loading="lazy"
        src={imageUrl}
        alt={alt}
        className={`object-contain max-w-full ${width}`}
      />
    </div>
  );
};