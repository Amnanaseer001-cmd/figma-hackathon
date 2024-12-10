import * as React from "react";
import { SocialIcon } from "./socialicons";
import { NavigationItem } from "./navigateItems";
import { ContactCard } from "./contactCard";
import { FooterLinkGroup } from "./contactFooter";
import Navbar from "./navbar";

const navigationItems = [
  { label: "Home", width: "43px" },
  { label: "Product", width: "59px" },
  { label: "Pricing", width: "52px" },
  { label: "Contact", width: "58px" },
];

const socialIcons = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f6c63e40304f5e3c44e9480f8838f0d55702449612cbf7bd9302e51023e8cd85?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
    alt: "Social media icon 1",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e7f432ccaffc8132877aad0af2d94e73f520dcd6eae0f08179d153ab3366f930?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
    alt: "Social media icon 2",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ad3b7f92fc6cb45e79f3d3f12abc79a43ee782fd7a7b900127e7c22664eeb771?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
    alt: "Social media icon 3",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/395c2f5175b67a248ef9cbcc4d1b38900ac02867682b2aa18647dd4b51763295?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
    alt: "Social media icon 4",
  },
];

const contactCards = [
  {
    email1: "georgia.young@example.com",
    email2: "georgia.young@ple.com",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9e2a77ecf38242afdc4aaa92ad2c9719b767f77f3140db1cf5e95783ae0e2001?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
  },
  {
    email1: "georgia.young@example.com",
    email2: "georgia.young@ple.com",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3a44adc610c518634214450e5729f190b0fa059554429f57164177dcde870f1b?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
    isDark: true,
  },
  {
    email1: "georgia.young@example.com",
    email2: "georgia.young@ple.com",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f4c0164e3e911b53d1b79c995a16f7faf6d172bc1e168c42d32472930d939595?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
  },
];

const footerGroups = [
  {
    title: "Company Info",
    links: ["About Us", "Carrier", "We are hiring", "Blog"],
  },
  { title: "Legal", links: ["About Us", "Carrier", "We are hiring", "Blog"] },
  {
    title: "Features",
    links: [
      "Business Marketing",
      "User Analytic",
      "Live Chat",
      "Unlimited Support",
    ],
  },
  {
    title: "Resources",
    links: ["IOS & Android", "Watch a Demo", "Customers", "API"],
  },
];

export const ContactPage: React.FC = () => {
  return (
    <>
    <Navbar/>
      <section className="flex flex-col lg:flex-row justify-center py-28 mt-11 w-full tracking-wide text-slate-800 max-md:py-24 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-md:max-w-full">
          <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[599px] lg:ml-48">
            <div className="text-extrabold tracking-normal font-bold">
              Contact Us
            </div>
            <h1 className="mt-9 text-6xl leading-none max-md:max-w-full max-md:text-4xl">
              Get in touch <br />
              today
            </h1>
            <p className="mt-9 text-xl  leading-8 text-neutral-500">
              We know how large objects will acts, <br /> but things on a small
              scale
            </p>
            <p className="mt-9 text-2xl font-bold leading-8 text-black">
              Phone ; 451 251 251
            </p>
            <p className="mt-9 text-2xl font-bold leading-8 text-black">
              Fax : 451 251 251
            </p>
          </div>
          <img
            src="n2.png"
            className="w-[700px] max-md:w-full mr-20"
            alt="About Us"
          />
        </div>
      </section>

      <div className="flex z-10 flex-col self-stretch my-auto mr-0 w-full max-md:mt-8 max-md:max-w-full mt-0">
        <div className="flex overflow-hidden flex-col justify-center items-center px-20 w-full font-bold tracking-wide text-center bg-white text-slate-800 max-md:px-5 max-md:max-w-full">
          <div className="flex overflow-hidden flex-col items-center py-28 w-full max-w-[1050px] max-md:py-24 max-md:max-w-full">
            <div className="flex overflow-hidden flex-col items-center max-w-full w-[633px]">
              <div className="flex overflow-hidden flex-col items-center w-full">
                <div className="text-sm leading-6">VISIT OUR OFFICE</div>
                <div className="mt-2.5 text-4xl leading-[50px] max-md:max-w-full">
                  We help small businesses <br />
                  with big ideas
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center mt-20 text-sm max-md:mt-10 max-md:max-w-full ml-10">
              {contactCards.map((card, index) => (
                <ContactCard key={index} {...card} />
              ))}

              <div className="flex overflow-hidden flex-col items-center px-20 w-full font-bold tracking-wide text-center bg-white text-slate-800 max-md:px-5 max-md:max-w-full">
                <div className="flex flex-col py-px w-full max-w-[1050px] max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/717130f70759ca6e35366fd9259cab0e1993323aa28efcc551e557a734658527?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c"
                    alt="Decorative icon"
                    className="object-contain z-10 self-center aspect-[1.02] mt-10 mr-10 stroke-[4px] stroke-sky-500 w-[62px]"
                  />
                  <div className="flex overflow-hidden flex-col justify-center items-center py-20 mt-0 max-md:max-w-full">
                    <div className="flex flex-col items-center max-w-full w-[607px]">
                      <div className="flex overflow-hidden flex-col items-center">
                        <div className="text-base tracking-normal mr-10">
                          WE Can't WAIT TO MEET YOU
                        </div>
                        <div className="mt-4 text-6xl leading-none max-md:text-4xl mr-10">
                          Let's Talk
                        </div>
                        <div className="flex gap-2.5 items-start mt-4 text-sm leading-loose text-white">
                          <button className="overflow-hidden mr-10 px-12 py-4 bg-sky-500 rounded-md min-h-[52px] max-md:px-5">
                            Try it free now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
