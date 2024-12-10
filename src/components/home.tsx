// import Navbar from "@/components/navbar";
// export default function Main() {
//   return (
//     <>
//       <Navbar />
import React from "react";
import { ProductCard } from "@/components/productCard";
import { FeaturedPost } from "@/components/feature";
import CategoryCard from "./categoryCard";
import { products, featuredPosts, categories } from "../app/data/product";

import Navbar from "./navbar";

const EcommercePage: React.FC = () => {
  return (
    <>
      <div className="flex overflow-hidden flex-col bg-black">
        <div className="flex overflow-hidden flex-col pb-28 max-w-full font-bold tracking-normal text-white bg-neutral-50 w-[1440px] max-md:pb-24">
          <div className="flex overflow-hidden relative flex-col mb-0 w-full min-h-[747px] max-md:mb-2.5 max-md:max-w-full">
            <Navbar />

            <div className="flex relative z-10 flex-col mb-0 bg-white rounded-md border border-solid border-neutral-200 max-md:mb-2.5 max-md:max-w-full">
              <div className="flex overflow-hidden relative flex-col items-center px-20 pt-12 pb-4 w-full min-h-[716px] max-md:px-5 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/432f1ffd29e77bd1275f6ae9e178c673f9a0ff7b6e60a98c5f4de05af8569f27?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c"
                  alt=""
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="flex overflow-hidden relative flex-col justify-center items-center py-28 max-md:py-24 max-md:max-w-full">
                  <div className="flex overflow-hidden flex-wrap gap-8 items-center py-12 max-md:max-w-full">
                    <div className="flex overflow-hidden flex-col self-stretch my-auto min-w-[240px] w-[599px] max-md:max-w-full">
                      <div className="text-base">SUMMER 2020</div>
                      <div className="mt-9 text-6xl tracking-wide leading-none max-md:max-w-full max-md:text-4xl">
                        NEW COLLECTION
                      </div>
                      <div className="mt-9 text-xl tracking-wide leading-8 text-neutral-50">
                        We know how large objects will act, <br />
                        but things on a small scale.
                      </div>
                      <button className="flex gap-2.5 items-start self-start mt-9 text-2xl leading-none text-center overflow-hidden px-10 py-4 bg-green-500 rounded-md max-md:px-5">
                        SHOP NOW
                      </button>
                    </div>
                    <div className="flex shrink-0 self-stretch my-auto h-[280px] min-w-[240px] w-[415px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex overflow-hidden flex-col items-center px-20 w-full bg-neutral-50 max-md:px-5 max-md:max-w-full">
          <div className="flex overflow-hidden flex-col items-center py-20 max-md:max-w-full">
            <div className="flex overflow-hidden flex-col items-center max-w-full w-[607px]">
              <div className="flex overflow-hidden flex-col items-center w-full">
                <div className="text-2xl font-bold tracking-normal leading-none text-slate-800">
                  EDITOR'S PICK
                </div>
                <div className="mt-2.5 text-sm tracking-wide leading-none text-center text-neutral-500">
                  Problems trying to resolve the conflict between{" "}
                </div>
              </div>
            </div>
            <div className="flex gap-8 mt-10">
              <img src="col-md-6.png" className="w-[400px]" />
              <img src="card-item.png" className="w-[240px]" />
              <img src="col-md-3.png" className="w-[240px]" />
            </div>
          </div>

          <div className="flex overflow-hidden flex-col justify-center items-end px-20 max-w-full bg-white w-[1440px] max-md:px-5">
            <div className="flex overflow-hidden flex-col items-center py-20 w-full max-w-[1124px] max-md:max-w-full">
              <div className="flex overflow-hidden flex-col items-center max-w-full tracking-wide text-center text-neutral-500 w-[692px]">
                <div className="flex overflow-hidden flex-col items-center w-full">
                  <div className="text-xl">Featured Products</div>
                  <div className="mt-2.5 text-2xl font-bold tracking-normal leading-none text-slate-800">
                    BESTSELLER PRODUCTS
                  </div>
                  <div className="mt-2.5 text-sm leading-none">
                    Problems trying to resolve the conflict between{" "}
                  </div>
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
      </div>

      
        
<div className="flex bg-[#23856D] mb-20 text-white flex-col lg:flex-row items-center lg:items-start lg:justify-between px-6 lg:px-32 py-10 lg:py-20">
  {/* Text Section */}
  <div className="lg:w-1/2 text-center lg:text-left pt-20">
    <p className="text-sm uppercase tracking-widest mb-2 ">
      Summer 2020
    </p>
    <h1 className="text-4xl lg:text-6xl font-bold mb-4">
      Vita Classic Product
    </h1>
    <p className="text-base lg:text-lg mb-6">
      We know how large objects will act. We know how are objects will act. We know.
    </p>
    <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-10">
      <p className="text-2xl font-bold mb-4 lg:mb-0">$16.48</p>
      <button className="bg-green-700 hover:bg-green-500 text-white font-semibold py-2 px-6 rounded-md">
        ADD TO CART
      </button>
    </div>
  </div>

  {/* Image Section */}
  <div className="lg:w-1/2 flex justify-center lg:justify-center">
    <img
      src="74.png"
      alt="Product Image"
      className="w-[300px] h-auto lg:w-[610px] lg:h-[625px]"
    />
  </div>
</div>


      
       
       <div className="flex flex-col-reverse lg:flex-row items-center justify-between bg-white w-screen h-auto lg:h-screen px-6 lg:px-10">
  {/* Image Section */}
  <div className="w-full lg:w-1/2 flex justify-center">
    <img src="88.png" alt="Product Image" className="w-[300px] h-auto lg:w-auto" />
  </div>

  {/* Text Section */}
  <div className="w-full lg:w-1/2 text-center lg:text-left text-gray-900">
    <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">
      Summer 2020
    </p>
    <h1 className="text-3xl lg:text-4xl font-bold mb-4">
      Part of the Neural Universe
    </h1>
    <p className="text-base lg:text-3xl mb-6 text-gray-600">
      We know how large objects will act, <br />
      but things on a small scale.
    </p>
    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-4 space-y-4 lg:space-y-0">
      <button className="bg-green-500 hover:bg-green-400 text-white font-semibold py-2 px-6 rounded-md">
        BUY NOW
      </button>
      <button className="border border-green-500 text-green-500 font-semibold py-2 px-6 rounded-md hover:bg-green-100">
        READ MORE
      </button>
    </div>
  </div>
</div>

      <div>
        <div>
          {/* Rest of the components follow the same structure */}
          <div className="flex flex-col max-w-full bg-white rounded-md border border-solid border-neutral-200 w-[1440px]">
            {/* Featured section content */}
          </div>

          <div className="flex overflow-hidden flex-col justify-center items-center px-20 max-w-full tracking-wide bg-white w-[1440px] max-md:px-5">
            <div className="flex flex-col items-center py-28 w-full max-w-[1050px] max-md:py-24 max-md:max-w-full">
              <div className="flex overflow-hidden flex-col items-center max-w-full text-sm font-bold text-center w-[692px]">
                <div className="flex overflow-hidden flex-col items-center w-full">
                  <div className="leading-6 text-sky-500">Practice Advice</div>
                  <div className="mt-2.5 text-4xl leading-none text-slate-800">
                    Featured Posts
                  </div>
                  <div className="mt-2.5 leading-5 text-neutral-500 max-md:max-w-full">
                    Problems trying to resolve the conflict between <br />
                    the two major realms of Classical physics: Newtonian
                    mechanics{" "}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 justify-center items-start mt-20 max-md:mt-10 max-md:max-w-full">
                {featuredPosts.map((post, index) => (
                  <FeaturedPost key={index} {...post} />
                ))}
              </div>
            </div>
          </div>

          <div className="flex overflow-hidden flex-col w-full bg-white max-md:max-w-full">
            <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-0.5 bg-neutral-50 max-md:px-5 max-md:max-w-full">
              <div className="flex flex-col w-full max-w-[1057px] max-md:max-w-full">
                <div className="flex overflow-hidden flex-col justify-center py-10 w-full max-md:mr-2 max-md:max-w-full">
                  <div className="flex overflow-hidden flex-wrap gap-10 items-center max-md:max-w-full">
                    <div className="flex overflow-hidden flex-col items-start self-stretch my-auto text-2xl font-bold tracking-normal leading-none whitespace-nowrap text-slate-800 w-[236px]">
                      <div className="overflow-hidden py-3.5 max-w-full w-[187px] max-md:pr-5">
                        Bandage
                      </div>
                    </div>
                    <div className="flex overflow-hidden flex-col items-center self-stretch my-auto w-[236px]">
                      <div className="flex overflow-hidden gap-5 justify-center items-center">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/73a8af30986f4cdec89866eb74d2209743ea7d08b1f244141ae20e583b07f342?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c"
                          alt="Social media icon"
                          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e897c1f3a1f8008bde7968e495d3e68e77d05bd27a1742e2aef5609971cc9b5?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c"
                          alt="Social media icon"
                          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1cb0f4d234a968c0c99fff2e49489cdb7125fb1bbcef3d3188424193e00696c?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c"
                          alt="Social media icon"
                          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-[1.2]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="z-10 shrink-0 h-px border border-solid border-neutral-200 max-md:max-w-full" />
              </div>
            </div>
            <div className="flex overflow-hidden flex-col items-center px-20 bg-white max-md:px-5 max-md:max-w-full">
              <div className="flex shrink-0 py-12 max-w-full h-3 w-[1050px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EcommercePage;
