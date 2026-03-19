import { PrompsCardComponent } from "@/lib/definitions/types";
import React from "react";
import { Button } from "./ui/button";
import DescriptionCard from "./DescriptionCard";

export default function CardComponent({
  name,
  priceAnnually,
  priceMonthly,
  storage,
  users,
  send,
}: PrompsCardComponent) {
  const descriptionArr: string[] = [storage, users, send];
  

  return (
    <section
      className={`flex flex-col gap-8  items-center  font-bold rounded-lg max-w-[450] p-5 text-gray-neutral-700`}
    >
      <h3 className="text-xl">{name}</h3>

      <h4 className="text-8xl flex items-center gap-2 font-semibold ">
        <span className="text-6xl">$</span>

        <span>{priceAnnually}</span>
        {/* <span>{priceMonthly}</span> */}
      </h4>

      <div className="flex flex-col w-full text-center">
        {/* <span>{storage}</span>
      <span>{users}</span>
      <span>{send}</span> */}
        {descriptionArr.map((description, index) => (
          <DescriptionCard
            key={index + "DescriptionCard"}
            {...{ description, last: index + 1 == descriptionArr.length }}
          />
        ))}
      </div>

      <Button>Learn More</Button>
    </section>
  );
}
