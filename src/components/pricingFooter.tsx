import * as React from "react";
import { FooterSection, SocialLink } from "../app/price/new";

interface FooterProps {
  sections: FooterSection[];
  socialLinks: SocialLink[];
}

export function Footer({ sections, socialLinks }: FooterProps) {
  return (
    <div className="flex overflow-hidden flex-col items-center w-full bg-white max-md:max-w-full">
      <div className="flex overflow-hidden flex-col justify-center py-10 w-full max-w-[1050px] max-md:max-w-full">
        <div className="flex overflow-hidden flex-wrap gap-10 items-center max-md:max-w-full">
          <div className="flex overflow-hidden flex-col items-start self-stretch my-auto text-2xl font-bold tracking-normal leading-none whitespace-nowrap text-slate-800 w-[236px]">
            <div className="overflow-hidden py-3.5 max-w-full w-[187px] max-md:pr-5">
              Bandage
            </div>
          </div>
          <div className="flex overflow-hidden flex-col items-center self-stretch my-auto w-[236px]">
            <div className="flex overflow-hidden gap-5 justify-center items-center">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    loading="lazy"
                    src={link.icon}
                    alt={link.alt}
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="z-10 shrink-0 max-w-full h-px border border-solid border-neutral-200 w-[1057px]" />
      <div className="flex overflow-hidden flex-col items-center self-stretch px-20 mt-1 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col justify-center py-12 w-full max-w-[1050px] max-md:max-w-full">
          <div className="flex overflow-hidden flex-wrap gap-8 items-start max-md:max-w-full">
            {sections.map((section, index) => (
              <div key={index} className="flex overflow-hidden flex-col font-bold w-[148px]">
                <div className="text-base tracking-normal text-slate-800">
                  {section.title}
                </div>
                <div className="flex flex-col self-start mt-5 text-sm tracking-wide text-neutral-500">
                  {section.links.map((link, linkIndex) => (
                    <a 
                      key={linkIndex}
                      href={link.url}
                      className={`${linkIndex > 0 ? 'mt-2.5 leading-loose' : 'leading-6'}`}
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <div className="flex overflow-hidden flex-col min-w-[240px] w-[321px]">
              <div className="text-base font-bold tracking-normal text-slate-800">
                Get In Touch
              </div>
              <form className="flex flex-col mt-5 w-full text-sm tracking-wide leading-7 max-w-[321px]">
                <div className="flex overflow-hidden gap-5 justify-between pl-5 rounded-md border border-solid bg-stone-50 border-neutral-200">
                  <label htmlFor="emailInput" className="sr-only">Your Email</label>
                  <input
                    type="email"
                    id="emailInput"
                    placeholder="Your Email"
                    className="self-start mt-4 text-neutral-500 bg-transparent border-none outline-none"
                  />
                  <button type="submit" className="overflow-hidden px-6 pt-4 text-center text-white whitespace-nowrap bg-sky-500 rounded-none border border-solid border-neutral-200 max-md:px-5">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}