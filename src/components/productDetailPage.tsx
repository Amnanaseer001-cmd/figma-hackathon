// import * as React from "react";
// import { ProductCard } from "./productDetailCard";
// import { BrandLogo } from "./productDetailLogo";
// import { FooterLinkGroup } from "./prodDetailFooter";

// const bestsellerProducts = [
//   {
//     title: "Graphic Design",
//     department: "English Department",
//     price: { original: 16.48, discounted: 6.48 },
//     imageUrl:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/77e0b7acbd08fe4f22dffcb07f496e6ee3b4b09117c274f281f91e420ffe5ed7?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
//   },
//   // ... repeat for all 8 products with their respective image URLs
// ];

// const brandLogos = [
//   {
//     imageUrl:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/0318d420b2839915b2a57d888526340f60aca90af3ca8001ee815ac4e2199ce8?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
//     alt: "Brand Logo 1",
//     width: "aspect-[3.03] w-[103px]",
//   },
//   // ... repeat for all 6 logos
// ];

// const footerGroups = [
//   {
//     title: "Company Info",
//     links: ["About Us", "Carrier", "We are hiring"],
//   },
//   // ... repeat for all footer groups
// ];

// const ProductDetails: React.FC = () => {
//   return (
//     <div className="flex overflow-hidden flex-col bg-white">
//       {/* Original header section */}
//       <img
//         loading="lazy"
//         src="https://cdn.builder.io/api/v1/image/assets/TEMP/9037b8e4f9be997882d3cf4103b1d404eb08d6e0a3a56ede41916c5206278a9e?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c"
//         alt="Header banner"
//         className="object-contain w-full aspect-[10.64] max-md:max-w-full"
//       />

//       {/* Navigation breadcrumb */}
//       <div className="flex overflow-hidden flex-col justify-center items-center py-6 w-full text-sm font-bold tracking-wide leading-6 text-center whitespace-nowrap bg-neutral-50 max-md:max-w-full">
//         {/* ... rest of navigation code ... */}
//       </div>

//       {/* Main product section */}
//       <div className="flex overflow-hidden flex-col items-center px-20 w-full bg-neutral-50 max-md:px-5 max-md:max-w-full">
//         {/* ... main product details ... */}
//       </div>

//       {/* Bestseller products section */}
//       <div className="flex overflow-hidden flex-col justify-end items-end px-20 w-full bg-neutral-50 max-md:px-5 max-md:max-w-full">
//         <div className="flex overflow-hidden flex-col items-center py-12 w-full max-w-[1124px] max-md:max-w-full">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             {bestsellerProducts.map((product, index) => (
//               <ProductCard key={index} {...product} />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Brand logos section */}
//       <div className="flex overflow-hidden flex-col justify-center items-center px-20 w-full bg-neutral-50 max-md:px-5 max-md:max-w-full">
//         <div className="flex flex-wrap gap-8 justify-center items-center py-12">
//           {brandLogos.map((logo, index) => (
//             <BrandLogo key={index} {...logo} />
//           ))}
//         </div>
//       </div>

//       {/* Footer section */}
//       <footer className="flex overflow-hidden flex-col items-center w-full bg-white max-md:max-w-full">
//         {/* ... footer content ... */}
//         <div className="flex flex-wrap gap-8 justify-between w-full max-w-[1050px] py-12">
//           {footerGroups.map((group, index) => (
//             <FooterLinkGroup key={index} {...group} />
//           ))}

//           {/* Newsletter subscription form */}
//           <div className="flex overflow-hidden flex-col min-w-[240px] w-[321px]">
//             <div className="text-base font-bold tracking-normal text-slate-800">
//               Get In Touch
//             </div>
//             <form className="flex flex-col mt-5 w-full tracking-wide leading-7 max-w-[321px]">
//               <div className="flex overflow-hidden gap-5 justify-between pl-5 rounded-md border border-solid bg-stone-50 border-neutral-200">
//                 <label htmlFor="emailSubscribe" className="sr-only">
//                   Your Email
//                 </label>
//                 <input
//                   type="email"
//                   id="emailSubscribe"
//                   placeholder="Your Email"
//                   className="my-auto text-neutral-500 text-sm bg-transparent border-none outline-none"
//                   aria-label="Your Email"
//                 />
//                 <button
//                   type="submit"
//                   className="overflow-hidden px-6 py-4 text-center text-white whitespace-nowrap bg-sky-500 rounded-none border border-solid border-neutral-200 max-md:px-5">
//                   Subscribe
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };
// export default ProductDetails;