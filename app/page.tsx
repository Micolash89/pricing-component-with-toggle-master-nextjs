"use client";
import CardComponent from "@/components/CardComponent";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { CARDSCONST } from "@/lib/definitions/const";

export default function Home() {
  return (
    <>
      <header className="flex flex-col gap-8">
        <h1 className="text-3xl font-bold text-center text-gray-neutral-650">
          Our Pricing
        </h1>

        <section className="flex items-center justify-center gap-8">
          <Label
            htmlFor="subscribe"
            className="text-gray-neutral-650/50 font-bold"
          >
            Annually
          </Label>
          <Switch
            id="subscribe"
            className="bg-linear-to-r from-violet-neutral to-violet-dark data-checked:bg-white"
            defaultChecked={true}
            onChange={() => {
              // Aquí puedes manejar el cambio del estado del Switch
              console.log("Estado del Switch:");
            }}
          />
          <Label
            htmlFor="subscribe"
            className="text-gray-neutral-650/50 font-bold "
          >
            Monthly
          </Label>
        </section>
      </header>

      <main>

            {
              CARDSCONST.map((card,index) => <CardComponent key={index+"CardComponent"} {...card} />)
            }

        <section className="flex flex-col gap-4  items-center">
          <h3 className="text-xl">Basic</h3>

          <h4 className="text-8xl flex items-center gap-2 font-semibold ">
            <span className="text-6xl">$</span>
            <span>19.99</span>
          </h4>
          
          <h4 className="text-8xl">$ 199.99</h4>

          <span>500 GB Storage</span>
          <span>2 Users Allowed</span>
          <span>Send up to 3 GB</span>

          <button>Learn More</button>
        </section>

        <section>
          Professional &dollar;24.99 &dollar;249.99 1 TB Storage 5 Users Allowed
          Send up to 10 GB Learn More
        </section>

        <section>
          Master &dollar;39.99 &dollar;399.99 2 TB Storage 10 Users Allowed Send
          up to 20 GB Learn More
        </section>
      </main>

      <footer className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </footer>
    </>
  );
}
