import * as React from "react";
import { BrandLogoProps } from "../app/shop/type";

export const BrandLogo: React.FC<BrandLogoProps> = ({ imageUrl, width, aspectRatio }) => {
  return (
    <div className="flex overflow-hidden flex-col items-center self-stretch my-auto w-[153px]">
      <img
        loading="lazy"
        src={imageUrl}
        alt="Brand logo"
        className={`object-contain max-w-full aspect-[${aspectRatio}] w-[${width}]`}
      />
    </div>
  );
};