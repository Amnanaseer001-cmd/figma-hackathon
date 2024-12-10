import * as React from "react";
import { StatisticProps } from "../app/brand/page";

export const Statistic: React.FC<StatisticProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center w-[238px]">
      <div className="text-6xl tracking-wide leading-none text-slate-800 max-md:text-4xl">
        {value}
      </div>
      <div className="text-base tracking-normal text-neutral-500">{label}</div>
    </div>
  );
};
