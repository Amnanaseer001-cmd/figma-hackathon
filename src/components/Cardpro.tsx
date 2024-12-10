// import Card from "../components/card";

// const cardData = [
//   {
//     imgSrc: "/images/model1.jpg",
//     title: "Graphic Design",
//     department: "English Department",
//     originalPrice: "$16.48",
//     discountedPrice: "$6.48",
//   },
//   {
//     imgSrc: "/images/model2.jpg",
//     title: "Web Development",
//     department: "Computer Science",
//     originalPrice: "$18.00",
//     discountedPrice: "$8.00",
//   },
//   {
//     imgSrc: "/images/model3.jpg",
//     title: "Digital Art",
//     department: "Art Department",
//     originalPrice: "$20.00",
//     discountedPrice: "$10.00",
//   },
//   {
//     imgSrc: "/images/model4.jpg",
//     title: "Photography",
//     department: "Photography Department",
//     originalPrice: "$25.00",
//     discountedPrice: "$12.00",
//   },
//   {
//     imgSrc: "/images/model5.jpg",
//     title: "UI/UX Design",
//     department: "Design Department",
//     originalPrice: "$30.00",
//     discountedPrice: "$15.00",
//   },
//   {
//     imgSrc: "/images/model6.jpg",
//     title: "Fashion Design",
//     department: "Fashion Department",
//     originalPrice: "$40.00",
//     discountedPrice: "$18.00",
//   },
//   {
//     imgSrc: "/images/model7.jpg",
//     title: "Graphic Design",
//     department: "English Department",
//     originalPrice: "$16.48",
//     discountedPrice: "$6.48",
//   },
//   {
//     imgSrc: "/images/model8.jpg",
//     title: "Web Development",
//     department: "Computer Science",
//     originalPrice: "$18.00",
//     discountedPrice: "$8.00",
//   },
//   {
//     imgSrc: "/images/model9.jpg",
//     title: "Digital Art",
//     department: "Art Department",
//     originalPrice: "$20.00",
//     discountedPrice: "$10.00",
//   },
//   {
//     imgSrc: "/images/model10.jpg",
//     title: "Photography",
//     department: "Photography Department",
//     originalPrice: "$25.00",
//     discountedPrice: "$12.00",
//   },
//   {
//     imgSrc: "/images/model11.jpg",
//     title: "UI/UX Design",
//     department: "Design Department",
//     originalPrice: "$30.00",
//     discountedPrice: "$15.00",
//   },
//   {
//     imgSrc: "/images/model12.jpg",
//     title: "Fashion Design",
//     department: "Fashion Department",
//     originalPrice: "$40.00",
//     discountedPrice: "$18.00",
//   },
// ];

// export default function NewCards() {
//   return (
//     <div className="min-h-screen bg-gray-100 ">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-8 w-[1200px]">
//         {cardData.map((card, index) => (
//           <Card
//             key={index}
//             imgSrc={card.imgSrc}
//             title={card.title}
//             department={card.department}
//             originalPrice={card.originalPrice}
//             discountedPrice={card.discountedPrice}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
import * as React from "react";
import { ProductCardProps } from "../app/types";

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  department,
  oldPrice,
  newPrice,
  imageUrl,
}) => {
  return (
    <>
      <div className="flex flex-col items-center w-[238px]">
        <div className="flex overflow-hidden flex-col max-w-full bg-white w-[239px]">
          <div className="flex overflow-hidden flex-col w-[239px] h-[300px]">
            <img
              loading="lazy"
              src={imageUrl}
              alt={title}
              className="object-contain w-full aspect-[0.56]"
            />
          </div>
          <div className="flex overflow-hidden flex-col items-center px-6 pt-6 pb-9 w-full max-md:px-5">
            <div className="text-base font-bold tracking-normal text-center text-slate-800">
              {title}
            </div>
            <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">
              {department}
            </div>
            <div className="flex gap-1.5 items-start px-1 py-1.5 mt-2.5 text-base font-bold tracking-normal text-center whitespace-nowrap">
              <div className="text-stone-300 w-[52px]">{oldPrice}</div>
              <div className="text-teal-700 w-[45px]">{newPrice}</div>
            </div>
            <div className="flex gap-1.5 items-center mt-2.5">
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 bg-sky-500 rounded-full fill-sky-500" />
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 bg-teal-700 rounded-full fill-teal-700" />
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 bg-orange-400 rounded-full fill-orange-400" />
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-slate-800 fill-slate-800" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}