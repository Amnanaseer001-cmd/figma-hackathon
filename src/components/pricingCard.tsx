import * as React from "react";
import { PricingPlan } from "../app/price/new"

interface PricingCardProps {
  plan: PricingPlan;
}

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <div className="flex overflow-hidden flex-col items-center min-w-[240px]">
      <div className={`flex flex-col items-center px-10 py-12 rounded-xl border border-sky-500 border-solid ${plan.isPopular ? 'bg-slate-800' : 'bg-white'} max-md:px-5`}>
        <div className={`text-2xl tracking-normal leading-none ${plan.isPopular ? 'text-white' : 'text-slate-800'}`}>
          {plan.title}
        </div>
        <div className={`mt-9 text-base tracking-normal leading-6 text-center ${plan.isPopular ? 'text-white' : 'text-neutral-500'}`}>
          {plan.description}
        </div>
        <div className="flex overflow-hidden gap-2.5 items-center mt-9">
          <div className="self-stretch my-auto text-4xl tracking-wide leading-none text-sky-500">
            {plan.price}
          </div>
          <div className="flex flex-col self-stretch my-auto">
            <div className="text-2xl tracking-normal leading-none text-sky-500">
              $
            </div>
            <div className="text-sm tracking-wide leading-6 text-blue-300">
              Per Month
            </div>
          </div>
        </div>
        <div className={`flex overflow-hidden flex-col mt-9 text-sm tracking-wide leading-6 ${plan.isPopular ? 'text-white' : 'text-slate-800'}`}>
          {plan.features.map((feature, index) => (
            <div key={index} className="flex overflow-hidden gap-2.5 items-center mt-4 first:mt-0">
              <img
                loading="lazy"
                src={feature.icon}
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
              />
              <div className="self-stretch my-auto w-[205px]">
                {feature.text}
              </div>
            </div>
          ))}
        </div>
        <div className={`overflow-hidden px-10 py-4 mt-9 max-w-full text-sm tracking-wide leading-loose text-center text-white rounded-md ${plan.isPopular ? 'bg-sky-500' : 'bg-slate-800'} w-[246px] max-md:px-5`}>
          {plan.buttonText}
        </div>
      </div>
    </div>
  );
}