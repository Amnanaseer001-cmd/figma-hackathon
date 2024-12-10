import * as React from "react";
import { CategoryCard } from "./shopcategory";
import { ProductCard } from "../components/Cardpro";
import { products } from "@/app/shop/type";
import { BrandLogo } from "./brandlogo";

const categories = [
  {
    title: "CLOTHS",
    itemCount: 5,
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2aeceb7c356f543537d2cc1f8d98db206056da145fc49c84f89d465bacb54433?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
  },
  {
    title: "CLOTHS",
    itemCount: 5,
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1637535a74ef3747a32d4bbd3b83013af344e609fdfe671ef83bcbec60b05ed0?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
  },
  {
    title: "CLOTHS",
    itemCount: 5,
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ad5cdbc6d5b7cc4e0c523e09925d5cfffc02d81233e91a4c0d0f369cf6b7cff4?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
  },
  {
    title: "CLOTHS",
    itemCount: 5,
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3142d703a255b08b721a28fc7e664aafdf1ba19f01173974f3127a0a555d337c?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
  },
  {
    title: "CLOTHS",
    itemCount: 5,
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1397c44772c9d83b32666594a5fd359a1dffdc110674a331dcff2638cdea4c9a?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
  },
];

// const products = Array(1).fill({
//   title: "Graphic Design",
//   department: "English Department",
//   originalPrice: "$16.48",
//   salePrice: "$6.48",
//   imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/038603a0b1c6d15246abc461549da42a461ead8f4c4aab6fda2cad7a5cb7e745?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
//   colors: ["sky-500", "teal-700", "orange-400", "teal-700"]
// });

const brandLogos = [
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/79c0becab50aa6aa7aa0b58bb4dd2965c15c0b5733d537b99820dec68a2cd340?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
    width: "103px",
    aspectRatio: "3.03",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/23debb8021d3836d5f0f5cfb8880508bccc65d92c61ad531cac476e1485fab45?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
    width: "83px",
    aspectRatio: "1.41",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2f9fcbb47fdeb06ab75f1279422d71adc31fa11be081209f91d2ba3ca0170b84?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
    width: "102px",
    aspectRatio: "1.36",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5b7edbc1c0c3fa6e0e3ecc7f38f0a6a5122b0753eccf7a26651f69a7768e65bf?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
    width: "103px",
    aspectRatio: "2.45",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/dea202d6399c3b9fd79d44fe37df16454870b886261f3093127da9012ffe297d?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
    width: "104px",
    aspectRatio: "1.68",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/32fcab14114fcc235a573fd1df1436b803e925ce714530eb99922252b6a1687c?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
    width: "76px",
    aspectRatio: "1.06",
  },
];

const ShopPage: React.FC = () => {
  return (
    <>
      <div className="flex overflow-hidden flex-col items-start bg-white">
       
        <div className="flex overflow-hidden flex-col justify-center items-center py-6 w-full font-bold text-center whitespace-nowrap bg-neutral-50 max-w-[1440px] max-md:max-w-full">
          <div className="flex overflow-hidden flex-wrap gap-8 items-center max-md:max-w-full">
            <div className="overflow-hidden self-stretch my-auto text-2xl tracking-normal leading-none min-w-[240px] text-slate-800 w-[510px] max-md:max-w-full">
              Shop
            </div>
            <nav aria-label="Breadcrumb">
              <div className="flex overflow-hidden flex-col items-end self-stretch my-auto text-sm tracking-wide leading-6 min-w-[240px] w-[509px] max-md:max-w-full">
                <div className="flex overflow-hidden gap-4 items-center py-2.5">
                  <a href="/" className="self-stretch my-auto text-slate-800">
                    Home
                  </a>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/961ba9c713f2528056d4163a039c22fffc1dab655533f3f588d4d386563aa227?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto aspect-[0.56] w-[9px]"
                  />
                  <span className="self-stretch my-auto text-stone-300">
                    Shop
                  </span>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="flex overflow-hidden flex-col justify-center items-center self-stretch px-20 w-full text-white bg-neutral-50 max-md:px-5 max-md:max-w-full">
          <div className="flex overflow-hidden flex-col items-center pb-12 max-md:max-w-full">
            <div className="flex overflow-hidden flex-wrap gap-4 items-start max-md:max-w-full">
              {categories.map((category, index) => (
                <CategoryCard key={index} {...category} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden flex-col items-center self-stretch px-20 w-full bg-white max-md:px-5 max-md:max-w-full">
          <div className="flex overflow-hidden flex-col justify-center items-center py-6 w-full max-w-[1050px] max-md:max-w-full">
            <div className="flex overflow-hidden flex-wrap gap-10 justify-between items-center w-full max-w-[1049px] max-md:max-w-full">
              <div className="gap-4 self-stretch px-px my-auto text-sm font-bold tracking-wide leading-6 text-neutral-500">
                Showing all 12 results
              </div>
              <div className="flex gap-4 items-center self-stretch px-px my-auto">
                <div className="self-stretch my-auto text-sm font-bold tracking-wide leading-6 text-neutral-500">
                  Views:
                </div>
                <div className="flex gap-4 items-center self-stretch my-auto">
                  <button
                    className="flex overflow-hidden items-center self-stretch p-4 my-auto rounded-md border border-gray-200 border-solid h-[46px] w-[46px]"
                    aria-label="Grid view">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a3d26b4b8ef9b01153f9a9e3aaf5640efb1e25bcd5695f85df5f47e66a840ce?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c"
                      alt=""
                      className="object-contain self-stretch my-auto w-4 aspect-square"
                    />
                  </button>
                  <button
                    className="flex overflow-hidden items-center self-stretch p-4 my-auto rounded-md border border-gray-200 border-solid h-[46px] w-[46px]"
                    aria-label="List view">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f04d583400d49dd37a415a2393188266e3b09eff18047c9430503dcf3ba690af?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c"
                      alt=""
                      className="object-contain self-stretch my-auto w-4 aspect-square"
                    />
                  </button>
                </div>
              </div>
              <div className="flex gap-4 self-stretch px-px my-auto text-sm tracking-wide whitespace-nowrap min-w-[240px]">
                <div className="flex overflow-hidden flex-col my-auto leading-7 text-neutral-500 w-[141px]">
                  <select className="flex overflow-hidden gap-1.5 px-3.5 py-3 rounded-md border border-solid bg-stone-50 border-zinc-300 max-md:pr-5">
                    <option>Popularity</option>
                  </select>
                </div>
                <button className="overflow-hidden px-5 py-2.5 font-bold leading-6 text-center text-white bg-sky-500 rounded-md w-[94px]">
                  Filter
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden flex-col justify-center items-center px-20 max-w-full bg-neutral-50 w-[1440px] max-md:px-5">
          <div className="flex overflow-hidden flex-col items-center w-full max-w-[1050px] max-md:max-w-full">
            <div className="flex overflow-hidden flex-wrap gap-8 justify-center items-center py-12 max-md:max-w-full">
              {brandLogos.map((logo, index) => (
                <BrandLogo key={index} {...logo} />
              ))}
            </div>
          </div>
        </div>{" "}
        <div className="flex overflow-hidden flex-col justify-center items-end px-20 max-w-full bg-white w-[1440px] max-md:px-5">
          <div className="flex overflow-hidden flex-col items-center py-20 w-full max-w-[1124px] max-md:max-w-full">
            <div className="flex overflow-hidden flex-col items-center max-w-full tracking-wide text-center text-neutral-500 w-[692px]">
              <div className="flex overflow-hidden flex-col items-center w-full">
                {/* <div className="text-xl">Featured Products</div> */}
                {/* <div className="mt-2.5 text-2xl font-bold tracking-normal leading-none text-slate-800">
                  BESTSELLER PRODUCTS
                </div>
                <div className="mt-2.5 text-sm leading-none">
                  Problems trying to resolve the conflict between{" "}
                </div> */}
              </div>
            </div>
            <div className="flex flex-wrap gap-4 items-start mt-20 max-md:mt-10 max-md:max-w-full">
              {products.slice(0, 4).map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
            <div className="flex flex-wrap gap-4 items-start mt-20 max-md:mt-10 max-md:max-w-full">
              {products.slice(4).map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 
      //  <div className="flex overflow-hidden flex-col justify-center items-center px-20 max-w-full bg-white w-[1440px] max-md:px-5">
      //   <div className="flex overflow-hidden flex-col items-center py-12 w-full max-w-[1124px] max-md:max-w-full">
      //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      //       {products.map((product, index) => ( */}
      {/* //         <ProductCard key={index} {...product} />
      //       ))}
      //     </div> */}

      <footer className="flex overflow-hidden flex-col self-stretch w-full bg-white max-md:max-w-full">
        <div className="flex overflow-hidden flex-col justify-center self-center py-10 w-full max-w-[1050px] max-md:max-w-full">
          <div className="flex overflow-hidden flex-wrap gap-10 items-center max-md:max-w-full">
            <div className="flex overflow-hidden flex-col items-start self-stretch my-auto text-2xl font-bold tracking-normal leading-none whitespace-nowrap text-slate-800 w-[236px]">
              <div className="overflow-hidden py-3.5 max-w-full w-[187px] max-md:pr-5">
                Bandage
              </div>
            </div>
            <div className="flex overflow-hidden flex-col items-center self-stretch my-auto w-[236px]">
              <div className="flex overflow-hidden gap-5 justify-center items-center">
                <a href="#" aria-label="Facebook">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9c8ec6903d65fca276773848c10a70a83f605856070883b7654c63055409d1d?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  />
                </a>
                <a href="#" aria-label="Instagram">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c8e24362d2a3f8bdad4cf08e0380328ea517785b96f82d173411cc52cd28687?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  />
                </a>
                <a href="#" aria-label="Twitter">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a668e94116b65bdad87d9b02790e3b045780b119ecbd6fd4001d270c13b3fee5?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-[1.2]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-t border-neutral-200" />

        <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-px mt-1 w-full bg-white max-md:px-5 max-md:max-w-full">
          <div className="flex overflow-hidden flex-col justify-center py-12 ml-6 w-full max-w-[1050px] max-md:max-w-full">
            <div className="flex overflow-hidden flex-wrap gap-8 items-start max-md:max-w-full">
              <div className="flex overflow-hidden flex-col font-bold w-[148px]">
                <h2 className="text-base tracking-normal text-slate-800">
                  Company Info
                </h2>
                <nav className="flex flex-col self-start mt-5 text-sm tracking-wide leading-6 text-neutral-500">
                  <a href="#">About Us</a>
                  <a href="#" className="mt-2.5">
                    Carrier
                  </a>
                  <a href="#" className="mt-2.5">
                    We are hiring
                  </a>
                  <a href="#" className="mt-2.5">
                    Blog
                  </a>
                </nav>
              </div>
              <div className="flex overflow-hidden flex-col font-bold w-[152px]">
                <h2 className="text-base tracking-normal text-slate-800">
                  Legal
                </h2>
                <nav className="flex flex-col self-start mt-5 text-sm tracking-wide leading-6 text-neutral-500">
                  <a href="#">About Us</a>
                  <a href="#" className="mt-2.5">
                    Carrier
                  </a>
                  <a href="#" className="mt-2.5">
                    We are hiring
                  </a>
                  <a href="#" className="mt-2.5">
                    Blog
                  </a>
                </nav>
              </div>
              <div className="flex overflow-hidden flex-col font-bold w-[148px]">
                <h2 className="text-base tracking-normal text-slate-800">
                  Features
                </h2>
                <nav className="flex flex-col mt-5 text-sm tracking-wide leading-6 text-neutral-500">
                  <a href="#">Business Marketing</a>
                  <a href="#" className="mt-2.5">
                    User Analytic
                  </a>
                  <a href="#" className="mt-2.5">
                    Live Chat
                  </a>
                  <a href="#" className="mt-2.5">
                    Unlimited Support
                  </a>
                </nav>
              </div>
              <div className="flex overflow-hidden flex-col font-bold w-[152px]">
                <h2 className="text-base tracking-normal text-slate-800">
                  Resources
                </h2>
                <nav className="flex flex-col self-start mt-5 text-sm tracking-wide leading-6 text-neutral-500">
                  <a href="#">IOS & Android</a>
                  <a href="#" className="mt-2.5">
                    Watch a Demo
                  </a>
                  <a href="#" className="mt-2.5">
                    Customers
                  </a>
                  <a href="#" className="mt-2.5">
                    API
                  </a>
                </nav>
              </div>
              <div className="flex overflow-hidden flex-col min-w-[240px] w-[321px]">
                <h2 className="text-base font-bold tracking-normal text-slate-800">
                  Get In Touch
                </h2>
                <div className="flex flex-col mt-5 w-full tracking-wide leading-7 max-w-[321px]">
                  <form className="flex overflow-hidden gap-5 justify-between pl-5 text-sm rounded-md border border-solid bg-stone-50 border-neutral-200">
                    <label htmlFor="email" className="sr-only">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your Email"
                      className="my-auto bg-transparent text-neutral-500 border-none outline-none"
                    />
                    <button
                      type="submit"
                      className="overflow-hidden px-6 py-4 text-center text-white whitespace-nowrap bg-sky-500 rounded-none border border-solid border-neutral-200 max-md:px-5">
                      Subscribe
                    </button>
                  </form>
                  <div className="self-start text-xs text-neutral-500">
                    Lore imp sum dolor Amit
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden flex-col items-center px-20 w-full text-sm font-bold tracking-wide leading-6 bg-neutral-50 text-neutral-500 max-md:px-5 max-md:max-w-full">
          <div className="flex overflow-hidden flex-col justify-center items-start py-6 w-full max-w-[1050px] max-md:max-w-full">
            <div className="flex overflow-hidden gap-10 items-center max-w-full w-[600px]">
              <div className="overflow-hidden self-stretch my-auto min-w-[240px] w-[600px]">
                Made With Love By Finland All Right Reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default ShopPage;
