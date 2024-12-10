import * as React from "react";
import { CompanyLogoProps } from "../app/brand/brand";

export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  src,
  alt,
  width,
  aspectRatio,
}) => {
  return (
    <div className="flex overflow-hidden flex-col items-center self-stretch my-auto w-[153px]">
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className={`object-contain max-w-full aspect-[${aspectRatio}] w-[${width}]`}
      />
    </div>
  );
};
