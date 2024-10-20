import { ThreeCardsInterface } from "@/app/interfaces";
import Image from "next/image";
import React from "react";

export default function ThreeCards(props: ThreeCardsInterface) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col text-center w-[50rem] leading-[4rem]">
        <div>{props.section_header}</div>
        <div className="text-[4rem] font-bold tracking-tighter py-2">
          {props.section_title}
        </div>
        <div>{props.section_description}</div>
      </div>
      <div className="flex w-[100%] max-md:flex-col justify-center gap-[2rem] max-md:space-y-[2rem] px-10">
        {props.cards.map((card, index) => (
          <div
            key={index}
            className=" border-[1px] border-gray-400 rounded-xl p-8 space-y-8 md:w-1/3 "
          >
            <span className="flex justify-center">
              <Image
                src={card.card_image}
                alt=""
                height={48}
                width={48}
                className=""
              />
            </span>
            <div className="text-3xl font-bold overflow-hidden">
              {card.card_title}
            </div>
            <div className="text-center">{card.card_description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
