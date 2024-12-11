import * as React from "react";
import { PricingCard } from "./pricingCard";
import { FAQItem } from "./fAQs";
import { Footer } from "./pricingFooter";
import { PricingPlan, FAQ, FooterSection, SocialLink } from "../app/price/new";

const pricingPlans: PricingPlan[] = [
  {
    title: "FREE",
    description: "Organize across all apps by hand",
    price: "0",
    buttonText: "Try for free",
    features: [
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/33ddf456908689b4a95eff277b19f9f36bda41b2eece356a0f390c24f8ee155d?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
        text: "Unlimited product updates",
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1973c5acb6f701d0fe2455203922400031b0a5e936083a3abfbe164ec21eb147?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
        text: "Unlimited product updates",
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e023fc50c21f4aa85fb51f92d9654db660be099ae44b35850c1a425d58288804?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
        text: "Unlimited product updates",
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/685b89c3165bae12019561e4642207f0f708cce125f6b200107c93201e0d293f?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
        text: "1GB Cloud storage",
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7f4904761d6263f8c127af932ad31e57fd7f4ded0bcfe2c2e01934355a6d647d?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
        text: "Email and community support",
      },
    ],
  },
  {
    title: "STANDARD",
    description: "Organize across all apps by hand",
    price: "9.99",
    buttonText: "Try for free",
    isPopular: true,
    features: [
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7b0a2ebfdbf41544bebb61f134db5d806a9bbd7e99a49dfdc36a190d0a08f7ba?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
        text: "Unlimited product updates",
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e4037c68e23a9ec31eba88e99b2576a4490f080ee8f240c36c7f0a57f8893305?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
        text: "Unlimited product updates",
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/deee690a361e77df92ee91fce3ff076e0d509e2438cf55b820878dddcb89c754?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
        text: "Unlimited product updates",
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/df632ae086f23f8371aedea4e87dbab74f8838b88e0f5d9f5720a6fd5a31de29?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
        text: "1GB Cloud storage",
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0286307aad55e718cda471bee397d3de246208094cddb8a5797206b6a868319c?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
        text: "Email and community support",
      },
    ],
  },
  {
    title: "PREMIUM",
    description: "Organize across all apps by hand",
    price: "19.99",
    buttonText: "Try for free",
    features: [
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/397a74947b88ababe369bc9cc1a8c653662eddc59f4a4828c8ae129a761c8f68?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
        text: "Unlimited product updates",
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a418fc2ad07b2138ef89f6b9c3e546f3b6c7c3a74e32f9127e10d7abc9e86288?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
        text: "Unlimited product updates",
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6c5a2fd0ca89dff2a95fde4675adb08b8082c2e79986516201d7640e45fba0fa?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
        text: "Unlimited product updates",
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8decbd25c11114fe68e5a10652ca9c0b7e0d3465f0b5f70f7f2f61c671f5e052?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
        text: "1GB Cloud storage",
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/954b383eac054f357dc03e75b0cc5890d4e7c7c07e3f056ef15e6cb4de0c8b97?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
        text: "Email and community support",
      },
    ],
  },
];

const faqs: FAQ[] = [
  {
    question: "the quick fox jumps over the lazy dog",
    answer:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
  },
  {
    question: "the quick fox jumps over the lazy dog",
    answer:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
  },
];

const footerSections: FooterSection[] = [
  {
    title: "Company Info",
    links: [
      { text: "About Us", url: "#" },
      { text: "Carrier", url: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { text: "About Us", url: "#" },
      { text: "Carrier", url: "#" },
    ],
  },
  {
    title: "Features",
    links: [
      { text: "Business Marketing", url: "#" },
      { text: "User Analytic", url: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { text: "IOS & Android", url: "#" },
      { text: "Watch a Demo", url: "#" },
    ],
  },
];

const socialLinks: SocialLink[] = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1f8fcf6198b05a1ab2af1de358e72985136e2384be102d83c852e59f6f274007?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
    url: "#",
    alt: "Facebook",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ed9bee97b533fda69787fc00b4d7c5d79b537ae669fb3ae5683fa582edac2d87?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
    url: "#",
    alt: "Instagram",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/06b4789ba3427d1db79eb7481994b8af15ae63a947b57c3f248b4afc6faa0813?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
    url: "#",
    alt: "Twitter",
  },
];

function PricingPage() {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      {/* Header section */}
      <div className="flex overflow-hidden flex-col pb-8 w-full font-bold bg-white max-md:max-w-full">
        <div className="flex overflow-hidden flex-col items-center px-20 pt-5 w-full bg-white bg-opacity-50 max-md:px-5 max-md:max-w-full">
          <div className="flex z-10 flex-col -mb-8 w-full max-w-[1043px] max-md:mb-2.5 max-md:max-w-full">
            <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
              <div className="flex flex-wrap gap-10 my-auto whitespace-nowrap max-md:max-w-full">
                <div className="text-2xl tracking-normal leading-none text-slate-800">
                  Bandage
                </div>
                <nav className="flex overflow-hidden gap-5 items-center my-auto text-sm tracking-wide leading-6 text-center text-neutral-500">
                  <a
                    href="#"
                    className="overflow-hidden self-stretch my-auto w-[43px]">
                    Home
                  </a>
                  <a
                    href="#"
                    className="overflow-hidden self-stretch my-auto w-[59px]">
                    Product
                  </a>
                  <a
                    href="#"
                    className="overflow-hidden self-stretch my-auto w-[52px]">
                    Pricing
                  </a>
                  <a
                    href="#"
                    className="overflow-hidden self-stretch my-auto w-[58px]">
                    Contact
                  </a>
                </nav>
              </div>
              <div className="flex gap-10 items-center text-sm tracking-wide leading-loose">
                <button className="overflow-hidden self-stretch my-auto text-right text-sky-500 whitespace-nowrap w-[41px]">
                  Login
                </button>
                <button className="flex overflow-hidden flex-col self-stretch my-auto text-white w-[214px]">
                  <div className="flex overflow-hidden gap-4 items-center px-6 py-4 bg-sky-500 rounded-md max-md:px-5">
                    <div className="self-stretch my-auto">Become a member</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c152f92f54a8f41b19c9289a26fae22ce81d4d4d3f2c89b334f618412de73b7d?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c"
                      alt=""
                      className="object-contain shrink-0 self-stretch my-auto w-3 aspect-[1.2]"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards Section */}
      <div className="flex overflow-hidden flex-col justify-center items-center px-20 w-full bg-neutral-50 max-md:px-5 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col items-center py-28 w-full max-w-[1050px] max-md:py-24 max-md:max-w-full">
          <div className="flex overflow-hidden flex-col items-center max-w-full tracking-wide w-[633px]">
            <div className="flex overflow-hidden flex-col items-center w-full">
              <h1 className="text-4xl font-bold leading-none text-slate-800">
                Pricing
              </h1>
              <p className="mt-2.5 text-sm leading-5 text-center text-neutral-500 max-md:max-w-full">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-center mt-12 max-md:mt-10">
            <div className="flex gap-2.5 self-stretch py-px my-auto w-[186px]">
              <div className="grow text-base font-bold tracking-normal text-slate-800">
                Monthly
              </div>
              <div className="flex flex-col justify-center items-start self-start px-1 py-1 border border-sky-500 border-solid fill-white stroke-[1px] stroke-sky-500">
                <div className="flex shrink-0 bg-gray-200 rounded-full border border-solid border-stone-300 h-[19px] w-[19px]" />
              </div>
              <div className="text-base font-bold tracking-normal text-slate-800">
                Yearly
              </div>
            </div>
            <div className="overflow-hidden self-stretch px-5 py-2.5 my-auto text-sm font-bold tracking-wide leading-6 text-center text-sky-500 bg-sky-200 rounded-[37px]">
              Save 25%
            </div>
          </div>

          <div className="flex flex-wrap items-end mt-12 font-bold max-md:mt-10 max-md:max-w-full">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} />
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="flex overflow-hidden flex-col justify-center items-center px-20 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-center py-20 w-full max-w-[1056px] max-md:max-w-full">
          <div className="flex overflow-hidden flex-col justify-center items-center py-11 w-full tracking-wide">
            <div className="flex overflow-hidden flex-col items-center max-w-full w-[651px]">
              <div className="flex overflow-hidden flex-col items-center max-w-full w-[607px]">
                <h2 className="text-4xl font-bold leading-none text-slate-800">
                  Pricing FAQs
                </h2>
                <p className="mt-2.5 text-xl leading-8 text-center text-neutral-500 max-md:max-w-full">
                  Problems trying to resolve the conflict between the two major
                  realms of Classical physics
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center mt-12 w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-wrap gap-8 items-center w-full">
              {faqs.map((faq, index) => (
                <FAQItem key={index} faq={faq} />
              ))}
            </div>
          </div>

          <p className="mt-12 text-xl tracking-wide text-center text-neutral-500 max-md:mt-10 max-md:max-w-full">
            Haven't got your answer? Contact our support
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex overflow-hidden flex-col justify-center items-center px-20 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col justify-center items-center py-40 w-full max-w-[1050px] max-md:py-24 max-md:max-w-full">
          <div className="flex flex-col items-center max-w-full w-[607px]">
            <div className="flex overflow-hidden flex-col items-center max-md:max-w-full">
              <h2 className="text-4xl font-bold tracking-wide leading-none text-center text-slate-800 max-md:max-w-full">
                Start your 14 days free trial
              </h2>
              <p className="mt-8 text-sm tracking-wide leading-5 text-center text-neutral-500">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent.
              </p>
              <div className="flex gap-2.5 items-start mt-8 text-sm font-bold tracking-wide leading-loose text-center text-white">
                <button className="overflow-hidden px-10 py-4 bg-sky-500 rounded-md min-h-[52px] max-md:px-5">
                  Try it free now
                </button>
              </div>
              <div className="flex overflow-hidden gap-9 items-start p-2.5 mt-8">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      loading="lazy"
                      src={link.icon}
                      alt={link.alt}
                      className="object-contain shrink-0 aspect-square w-[30px]"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer sections={footerSections} socialLinks={socialLinks} />
    </div>
  );
}
export default PricingPage;