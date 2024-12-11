import * as React from "react";
import { FAQ } from "../app/price/new";

interface FAQItemProps {
  faq: FAQ;
}

export function FAQItem({ faq }: FAQItemProps) {
  return (
    <div className="flex overflow-hidden flex-col grow shrink self-stretch my-auto min-w-[240px] w-[393px] max-md:max-w-full">
      <div className="flex overflow-hidden flex-col justify-center p-6 w-full rounded-lg max-w-[491px] max-md:px-5 max-md:max-w-full">
        <div className="flex overflow-hidden gap-5 items-start max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f1cae00bd84dc5d0a85fc72ffb5809d76cae410a37ae22da1a8fb577358bf78?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c"
            alt=""
            className="object-contain shrink-0 aspect-[0.56] w-[9px]"
          />
          <div className="flex flex-col min-w-[240px]">
            <div className="text-base font-bold tracking-normal text-slate-800">
              {faq.question}
            </div>
            <div className="mt-1.5 text-sm tracking-wide leading-5 text-neutral-500">
              {faq.answer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}