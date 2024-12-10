import * as React from "react";
import { TeamMemberProps } from "../app/brand/brand";

export const TeamMember: React.FC<TeamMemberProps> = ({
  imageSrc,
  name,
  profession,
  socialIcons,
}) => {
  return (
    <div className="flex overflow-hidden flex-col self-stretch my-auto min-w-[240px] w-[316px]">
      <div className="flex overflow-hidden flex-col max-w-full bg-white w-[316px]">
        <div className="flex overflow-hidden flex-col w-full">
          <img
            loading="lazy"
            src={imageSrc}
            alt={`${name} - ${profession}`}
            className="object-contain w-full aspect-[1.37]"
          />
        </div>
        <div className="flex overflow-hidden flex-col items-center self-center p-8 w-full max-w-[316px] max-md:px-5">
          <div className="text-base font-bold tracking-normal text-center text-slate-800">
            {name}
          </div>
          <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">
            {profession}
          </div>
          <div className="flex overflow-hidden gap-5 justify-center items-center mt-2.5">
            {socialIcons.map((icon, index) => (
              <img
                key={index}
                loading="lazy"
                src={icon.src}
                alt={icon.alt}
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

