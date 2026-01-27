import React from "react";
import { assets } from "../assets/assets";
import Title from "./Title";

const cardsData = [
  {
    name: "Emma Rodriguez",
    location: "Barcelona, Spain",
    image: assets.testimonial_image_1,
    testimonial:
      "Exceptional service and attention to detail. Everything was handled professionally and efficiently from start to finish. Highly recommended!",
  },
  {
    name: "Liam Johnson",
    location: "New York, USA",
    image: assets.testimonial_image_2,
    testimonial:
      "I’m truly impressed by the quality and consistency. The entire process was smooth, and the results exceeded all expectations. Thank you!",
  },
  {
    name: "Liam Johnson",
    location: "New York, USA",
    image: assets.testimonial_image_1,
    testimonial:
      "I’m truly impressed by the quality and consistency. The entire process was smooth, and the results exceeded all expectations. Thank you!",
  },
];

export default function Testominal() {
  const doubledCards = [...cardsData, ...cardsData];

  return (
    <>
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .marquee-inner {
          animation: marqueeScroll 25s linear infinite;
        }

        .marquee-reverse {
          animation-direction: reverse;
        }
      `}</style>

      {/* Row 1 */}
      <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative mt-10">
        <Title
          title="What Our Customers Say"
          subTitle="Hear from our satisfied customers who have experienced the joy of renting with us."
        />
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-linear-to-r from-white to-transparent" />

        <div className="marquee-inner flex transform-gpu min-w-[200%] pt-10 pb-5">
          {doubledCards.map((card, index) => (
            <Card key={`row1-${index}`} card={card} />
          ))}
        </div>

        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-linear-to-l from-white to-transparent" />
      </div>

      {/* Row 2 */}
      <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-linear-to-r from-white to-transparent" />

        <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-5 pb-10">
          {doubledCards.map((card, index) => (
            <Card key={`row2-${index}`} card={card} />
          ))}
        </div>

        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-linear-to-l from-white to-transparent" />
      </div>
    </>
  );
}

/* Card Component */
function Card({ card }) {
  return (
    <div className="p-4 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0 bg-white">
      <div className="flex gap-2">
        <img
          className="size-11 rounded-full"
          src={card.image}
          alt={card.name}
        />

        <div className="flex flex-col">
          <p className="font-medium">{card.name}</p>
          <span className="text-xs text-slate-500">{card.testimonial}</span>
        </div>
      </div>

      <p className="text-sm py-4 text-gray-800">
        Radiant made undercutting all of our competitors an absolute breeze.
      </p>

      <div className="flex items-center justify-between text-slate-500 text-xs">
        <span>Posted on X</span>
        <p>{card.location}</p>
      </div>
    </div>
  );
}
