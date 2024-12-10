import * as React from "react";
import { FeaturedPostProps } from "../app/types";

export const FeaturedPost: React.FC<FeaturedPostProps> = ({
  image,
  date,
  comments,
  title,
  description
}) => {
  return (
    <div className="flex flex-col items-center min-w-[240px] w-[328px]">
      <div className="flex overflow-hidden flex-col max-w-full bg-white shadow-sm w-[348px]">
        <div className="flex overflow-hidden flex-col w-full text-sm font-bold leading-6 text-center text-white whitespace-nowrap">
          <div className="flex overflow-hidden relative flex-col items-start px-5 pt-5 pb-64 w-full aspect-[1.16] max-md:pb-24">
            <img
              loading="lazy"
              src={image}
              alt={title}
              className="object-cover absolute inset-0 size-full"
            />
            <div className="overflow-hidden relative self-stretch px-2.5 mb-0 bg-red-500 rounded shadow-sm max-md:mb-2.5">
              NEW
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden flex-col px-6 pt-6 pb-9 w-full text-xs text-neutral-500 max-md:px-5">
          <div className="flex overflow-hidden gap-4 items-center self-start leading-none whitespace-nowrap">
            <div className="self-stretch my-auto text-blue-300">Google</div>
            <div className="self-stretch my-auto">Trending</div>
            <div className="self-stretch my-auto">New</div>
          </div>
          <div className="mt-2.5 text-xl leading-8 text-slate-800">{title}</div>
          <div className="mt-2.5 text-sm leading-5">{description}</div>
          <div className="flex overflow-hidden gap-10 justify-between items-center py-4 mt-2.5 w-full leading-none">
            <div className="flex overflow-hidden gap-1.5 items-center self-stretch my-auto">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/079acee58ec2e9b0e3e77112198713f9ab6dca28d89e0167b56ebf32ad137e61?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
              />
              <div className="self-stretch my-auto">{date}</div>
            </div>
            <div className="flex overflow-hidden gap-1.5 items-center self-stretch my-auto">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/88ca83dbb22c1dbbe5a57df93e28761ef3ddb4058e83832ed936dfd93c08a928?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-4 aspect-[1.14]"
              />
              <div className="self-stretch my-auto">{comments} comments</div>
            </div>
          </div>
          <div className="flex overflow-hidden gap-2.5 items-center self-start mt-2.5 text-sm font-bold leading-6">
            <div className="self-stretch my-auto">Learn More</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8b5937e0e9e68c4bfb84c128ce677055824f04b76b51f282a86d9a6169d1ac1?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto aspect-[0.56] w-[9px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};