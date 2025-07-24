import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="w-full">
      <section className="relative h-screen bg-[url('/holding-burger-tray.jpg')] bg-cover bg-center">
        <div className="z-20 size-full flex flex-col items-center justify-center">
          <h1
            className="text-5xl md:text-9xl text-center font-heading text-background uppercase font-bold"
            style={{
              textShadow:
                "4px 4px 0 var(--color-foreground), 8px 8px 0 var(--color-background)",
            }}
          >
            Our Flame.
          </h1>
          <h2
            className="text-4xl md:text-8xl text-center font-heading text-background uppercase font-bold mb-12"
            style={{
              textShadow:
                "4px 4px 0 var(--color-foreground), 8px 8px 0 var(--color-background)",
            }}
          >
            Your Craving.
          </h2>
          <p
            className="text-xl text-background text-center"
            style={{
              textShadow: "1px 1px 1px var(--color-foreground)",
            }}
          >
            Born in Toronto. Built for burger lovers
          </p>
        </div>
      </section>
      <section className="min-h-screen px-4 md:px-16 py-32 flex flex-col gap-20 items-center">
        <div className="flex flex-col gap-8 items-center">
          <h2 className="text-center font-heading text-3xl md:text-6xl uppercase">
            the story behind the{" "}
            <span className="text-primary">blaze</span>
          </h2>
          <div className="w-full md:w-2/3 text-center flex flex-col gap-2">
            <p>
              Blaze Burger started with a simple idea — to bring real,
              halal gourmet burgers to the heart of Toronto without
              cutting corners. No frozen patties. No shortcuts. Just
              premium ingredients, bold flavours, and fire-grilled
              perfection in every bite.
            </p>
            <p>
              We&apos;re proud to be 100% halal, because quality and
              inclusivity are non-negotiable. Whether you&apos;re
              grabbing a quick lunch, a late-night bite, or treating
              your family to something better — Blaze Burger is where
              cravings meet craftsmanship.
            </p>
            <p>
              Every burger is built fresh to order, with ingredients
              we stand behind and flavour that speaks for itself. No
              fluff. Just fire.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Button className="font-bold">Explore our Menu</Button>
        </div>
      </section>
    </div>
  );
}
