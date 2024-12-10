import * as React from 'react';
import { ContactCardProps } from '../app/contact/types';

export const ContactCard: React.FC<ContactCardProps> = ({ email1, email2, icon, isDark }) => (
  <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[327px]">
    <div className={`flex overflow-hidden flex-col items-center px-10 py-12 max-w-full ${isDark ? 'bg-slate-800 text-white' : 'bg-white'} w-[328px] max-md:px-5`}>
      <img
        loading="lazy"
        src={icon}
        alt="Contact support icon"
        className="object-contain aspect-square w-[72px]"
      />
      <div className="flex overflow-hidden flex-col mt-4 max-w-full leading-6 whitespace-nowrap w-[216px]">
        <div>{email1}</div>
        <div className="self-center">{email2}</div>
      </div>
      <div className="mt-4 text-base tracking-normal">
        Get Support
      </div>
      <div className="overflow-hidden px-9 py-4 mt-4 leading-6 text-sky-500 border border-sky-500 border-solid rounded-[37px] max-md:px-5">
        Submit Request
      </div>
    </div>
  </div>
);