import * as React from "react";
import { TeamMember } from "./team";
import { Statistic } from "./static";
import { CompanyLogo } from "./companylogo";

const teamMembers = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/be8ba4673a2da777a61f355f821eee5c0d63bd852ac2d98659740a87be3bedd9?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
    name: "Username",
    profession: "Profession",
    socialIcons: [
      {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/35fc095409e6cd92cc94f62242a291dcd5747b02b1a8e2bd9fa035f7d7a9403f?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
        alt: "Social Media Icon 1",
      },
      {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/74f23e9f766b6291d1a73e368993c8c79c0f2c6cde5922da6daf8e6bda634526?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
        alt: "Social Media Icon 2",
      },
      {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6076b967e0f18786ff5e292bdad26ae4350a7bd6184bc6872dd12eb99b000b17?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
        alt: "Social Media Icon 3",
      },
    ],
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2f17ff5f0ec55fc411b2a127a0defbd01c2728a391e2e1e24fa9d99ce5f5a9f3?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
    name: "Username",
    profession: "Profession",
    socialIcons: [
      {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7ca91c5645938920ee358dd245bc83d737eafeba49d0a67c826d19477aa00463?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
        alt: "Social Media Icon 1",
      },
      {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e6a852f12f075b3390262891ac55158f79b9ffa0b8d9748fde1f5897c05be2ef?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
        alt: "Social Media Icon 2",
      },
      {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7dc21e42678f1f4da5d0ed4330e5719b126d0de0a35862d00a02837729e02ac3?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
        alt: "Social Media Icon 3",
      },
    ],
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/20e3ca4728eec7302620d282ce78f8e1f5800daa452742b5b2374acbd7ab844c?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
    name: "Username",
    profession: "Profession",
    socialIcons: [
      {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/32bce62084821bd112694de02de9a9e6290cbe055bd46249baacdce10ea5c50a?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
        alt: "Social Media Icon 1",
      },
      {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/128ce535134f5324550e17699281f2257d9d7d50c3e53d7bb35db90e5777ebfc?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
        alt: "Social Media Icon 2",
      },
      {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8128fa5ff79e1e74712fa40164b8f722e261b90925c09d411586d3044e395717?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
        alt: "Social Media Icon 3",
      },
    ],
  },
];

const statistics = [
  { value: "15K", label: "Happy Customers" },
  { value: "150K", label: "Monthly Visitors" },
  { value: "15", label: "Countries Worldwide" },
  { value: "100+", label: "Top Partners" },
];

const companyLogos = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0aa50839e5876328145612a754071165f410ac16dfc659c34e73b70722986536?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
    alt: "Company Logo 1",
    width: "103px",
    aspectRatio: "3.03",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0ce492b5dd71649942d8677244be52911da9db6da186bac8277f78498cdec3f4?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
    alt: "Company Logo 2",
    width: "83px",
    aspectRatio: "1.41",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/37865bec95b412c2b020fa9a394c5a9ef6731287a0dab2052910b460942c2f58?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
    alt: "Company Logo 3",
    width: "102px",
    aspectRatio: "1.36",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5ea95f27cbec542becf2f167319ef2e1d9fafee6fed9da05de0b24f4e9d071cb?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
    alt: "Company Logo 4",
    width: "103px",
    aspectRatio: "2.45",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/73729f0d9f6b19fb6f17e40fedd027f82a2aba52189a4079fd0c584defd22671?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
    alt: "Company Logo 5",
    width: "104px",
    aspectRatio: "1.68",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/144c99f2b8aa9b64092730e47b3a3dbbbf0d93328b595518fa11da22a1936952?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
    alt: "Company Logo 6",
    width: "76px",
    aspectRatio: "1.06",
  },
];
function AboutPage() {
  return (
    <div className="flex overflow-hidden flex-col items-start bg-white">
      {/* Navigation Section */}
      <div className="overflow-hidden px-20 pt-5 max-w-full bg-white w-[1440px] max-md:px-5">
        <nav className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
            <div className="flex z-10 flex-col mt-3 mr-0 w-full font-bold max-md:mt-8 max-md:max-w-full">
              <div className="flex flex-wrap gap-5 justify-between max-w-full whitespace-nowrap w-[503px]">
                <div className="text-2xl tracking-normal leading-none text-slate-800">
                  Bandage
                </div>
                <div className="flex overflow-hidden gap-5 items-center my-auto text-sm tracking-wide leading-6 text-center text-neutral-500">
                  <a
                    href="/home"
                    className="overflow-hidden self-stretch my-auto w-[43px]">
                    Home
                  </a>
                  <a
                    href="/shoppage"
                    className="overflow-hidden self-stretch my-auto w-[59px]">
                    Shop
                  </a>
                  <a
                    href="/pricepage"
                    className="overflow-hidden self-stretch my-auto w-[52px]">
                    Pricing
                  </a>
                  <a
                    href="/contactpage"
                    className="overflow-hidden self-stretch my-auto w-[58px]">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <section className="flex flex-col lg:flex-row justify-center pb-32 mt-11 w-full tracking-wide text-slate-800 max-md:py-24 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-md:max-w-full">
          <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[599px] lg:ml-48">
            <div className="text-extrabold tracking-normal">ABOUT COMPANY</div>
            <h1 className="mt-9 text-6xl leading-none max-md:max-w-full max-md:text-4xl">
              ABOUT US
            </h1>
            <p className="mt-9 text-xl leading-8 text-neutral-500">
              We know how large objects will act, <br />
              but things on a small scale
            </p>
            <button className="flex gap-2.5 items-start self-start mt-9 text-sm leading-loose text-center text-white overflow-hidden px-10 py-4 bg-sky-500 rounded-md max-md:px-5">
              Get Quote Now
            </button>
          </div>
          <img
            src="none.png"
            className="w-[700px] max-md:w-full"
            alt="About Us"
          />
        </div>
      </section>

      {/* Statistics Section */}
      <section className="flex overflow-hidden flex-col justify-center items-center px-20 max-w-full font-bold text-center bg-white w-[1440px] max-md:px-5">
        <div className="flex flex-col justify-center items-center py-20 w-full max-w-[1050px] max-md:max-w-full">
          <div className="flex flex-wrap gap-8 items-start max-md:max-w-full">
            {statistics.map((stat, index) => (
              <Statistic key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>
      <div>
        {" "}
        <img src="video card.png" className="ml-44" />
      </div>
      {/* Team Section */}
      <section className="flex overflow-hidden flex-col justify-center items-center px-20 pb-2 max-w-full bg-white w-[1440px] max-md:px-5">
        <div className="flex overflow-hidden flex-col items-center py-28 w-full max-w-[1050px] max-md:py-24 max-md:max-w-full">
          <div className="flex overflow-hidden flex-col items-center max-w-full tracking-wide w-[607px]">
            <h2 className="text-4xl font-bold leading-none text-slate-800">
              Meet Our Team
            </h2>
            <p className="mt-2.5 text-sm leading-5 text-center text-neutral-500">
              Problems trying to resolve the conflict between <br />
              the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          <div className="flex overflow-hidden flex-wrap gap-8 items-center mt-28 max-md:mt-10 max-md:max-w-full">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="flex overflow-hidden flex-col justify-center items-center px-20 max-w-full bg-neutral-50 w-[1440px] max-md:px-5">
        <div className="flex overflow-hidden flex-col items-center py-20 w-full max-w-[1050px] max-md:max-w-full">
          <h2 className="text-4xl font-bold leading-none text-slate-800 max-md:max-w-full">
            Big Companies Are Here
          </h2>
          <p className="mt-8 text-sm leading-5 text-center text-neutral-500 w-[547px] max-md:max-w-full">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
          <div className="flex overflow-hidden flex-wrap gap-8 items-center py-12 mt-6 max-md:max-w-full">
            {companyLogos.map((logo, index) => (
              <CompanyLogo key={index} {...logo} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="flex overflow-hidden flex-col items-center pr-9 max-w-full bg-white w-[1440px] max-md:pr-5">
        <div className="flex overflow-hidden flex-col justify-center py-10 w-full max-w-[1050px] max-md:max-w-full">
          <div className="flex overflow-hidden flex-wrap gap-10 items-center max-md:max-w-full">
            <div className="flex overflow-hidden flex-col items-start self-stretch my-auto text-2xl font-bold tracking-normal leading-none whitespace-nowrap text-slate-800 w-[236px]">
              <div className="overflow-hidden py-3.5 max-w-full w-[187px] max-md:pr-5">
                Bandage
              </div>
            </div>
            <div className="flex overflow-hidden flex-col items-center self-stretch my-auto w-[236px]">
              <div className="flex overflow-hidden gap-5 justify-center items-center">
                {[
                  {
                    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f9d8d94c38f99971128df89a5728b62777d0145b89ffdd6117334efaccf4915?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
                    alt: "Social Media 1",
                  },
                  {
                    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1333cccd5f8ec50cf7483b229c9b7f052d1f915353f1db2835c659b58ccb9be6?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
                    alt: "Social Media 2",
                  },
                  {
                    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4cf6762b111452f7f09e0061fef1f86359ee13a04b26c45c811e1dfb8143a28b?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
                    alt: "Social Media 3",
                  },
                ].map((icon, index) => (
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
      </footer>
    </div>
  );
}
export default AboutPage;
