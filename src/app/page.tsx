import * as motion from "motion/react-client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { imageSizes } from "@/lib/image-sizes";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { StarIcon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import { TextAnimate } from "@/components/magicui/text-animate";
import { BlurFade } from "@/components/magicui/blur-fade";
import { menuItems } from "@/lib/menu-items";

const popularItems = menuItems["beef-burgers"].slice(0, 4);

export default function Home() {
  return (
    <div className="w-full">
      <section
        id="hero"
        className="w-full h-screen bg-foreground text-background relative overflow-hidden"
      >
        <div className="flex flex-col z-50 items-center gap-14 justify-center h-full absolute inset-0 px-4">
          <h1 className="sr-only">Savour the blaze you crave</h1>
          <div>
            <TextAnimate
              as="h2"
              animation="blurIn"
              by="word"
              delay={0.4}
              className="text-5xl md:text-9xl font-bold font-heading uppercase text-center leading-none"
              style={{
                textShadow:
                  "4px 4px 0 var(--color-foreground), 8px 8px 0 var(--color-background)",
              }}
            >
              Savour the
            </TextAnimate>
            <TextAnimate
              as="h2"
              animation="blurIn"
              by="word"
              delay={0.4}
              className="text-3xl md:text-8xl font-bold font-heading uppercase text-center leading-none"
              style={{
                textShadow:
                  "4px 4px 0 var(--color-foreground), 8px 8px 0 var(--color-background)",
              }}
            >
              blaze you crave
            </TextAnimate>
          </div>
          <div className="flex flex-col items-center gap-8">
            <TextAnimate
              as="p"
              className="text-center text-base md:text-xl"
              style={{
                textShadow: "2px 2px 0 var(--color-foreground)",
              }}
              by="character"
              animation="blurIn"
              delay={0.6}
            >
              Gourmet halal burgers, flame-grilled to perfection in
              the heart of downtown Toronto.
            </TextAnimate>
            <div className="flex gap-2 items-center">
              <BlurFade delay={0.8} inView>
                <Button
                  asChild
                  variant="secondary"
                  className="font-bold"
                >
                  <Link href="/about">About Us</Link>
                </Button>
              </BlurFade>
              <BlurFade delay={0.8} inView>
                <Button
                  asChild
                  variant="default"
                  className="font-bold"
                >
                  <Link href="/menu">View Menu</Link>
                </Button>
              </BlurFade>
            </div>
          </div>
        </div>
        <motion.div
          className="z-10 absolute top-1/4 md:top-1/2 left-1/2 rotate-12 h-96 md:h-[1000px] transform -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0, rotate: -12, scale: 0.8 }}
          whileInView={{
            opacity: 1,
            rotate: 0,
            scale: 1,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 0.8,
            },
          }}
          viewport={{ once: true }}
        >
          <Image
            src="/flying-burger.png"
            width={imageSizes.flyingBurger.width}
            height={imageSizes.flyingBurger.height}
            alt="Juicy flying burger"
            priority
            className="h-full w-auto object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, rotate: 12, scale: 0.8 }}
          whileInView={{
            opacity: 1,
            rotate: 0,
            scale: 1,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 0.8,
              delay: 0.2,
            },
          }}
          viewport={{ once: true }}
          className="z-10 absolute bottom-0 md:-bottom-1/2 h-96 md:h-[1000px] -left-1/6 -rotate-12 transform"
        >
          <Image
            src="/flying-burger.png"
            alt="Juicy flying burger"
            width={imageSizes.flyingBurger.width}
            height={imageSizes.flyingBurger.height}
            className="h-full w-auto object-cover"
            priority
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, rotate: -12, scale: 0.8 }}
          whileInView={{
            opacity: 1,
            rotate: 0,
            scale: 1,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 0.8,
              delay: 0.4,
            },
          }}
          viewport={{ once: true }}
          className="z-10 absolute bottom-0 md:-bottom-1/2 h-96 md:h-[1000px] -right-1/6 rotate-12 transform"
        >
          <Image
            src="/flying-burger.png"
            alt="Juicy flying burger"
            width={imageSizes.flyingBurger.width}
            height={imageSizes.flyingBurger.height}
            className="h-full w-auto object-cover"
            priority
          />
        </motion.div>
      </section>
      <section id="about" className="min-h-screen max-w-7xl mx-auto">
        <div className="flex items-center h-full p-4">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex flex-col justify-center gap-8">
              <h2 className="font-heading text-4xl md:text-6xl uppercase">
                Premium. Halal. Unforgettable.
              </h2>
              <p className="text-lg">
                At Blaze Burger, we don’t just make burgers — we craft
                experiences. Every patty is 100% halal, made from
                premium cuts, and seared to smoky perfection over an
                open flame. With bold flavours, gourmet toppings, and
                buns baked fresh daily, we bring you burgers worth the
                obsession
              </p>
              <p className="text-lg">
                Whether you’re craving a classic cheeseburger or one
                of our signature fire-stacked creations, we serve it
                hot, fast, and dripping with flavour.
              </p>
            </div>
            <div className="grid grid-cols-2 md:h-[600px] h-96 gap-4">
              <div className="flex h-full">
                <Image
                  src="/cheeseburger.jpg"
                  alt="Delicious cheeseburger"
                  height={imageSizes.cheeseburger.height}
                  width={imageSizes.cheeseburger.width}
                  priority
                  className="md:h-[547px] md:w-[415px] h-80 w-72 object-cover rounded-xl"
                />
              </div>
              <div className="flex h-full items-end">
                <Image
                  src="/double-cheeseburger.jpg"
                  alt="Delicious cheeseburger"
                  height={imageSizes.doubleCheeseburger.height}
                  width={imageSizes.doubleCheeseburger.width}
                  priority
                  className="md:h-[547px] md:w-[415px] h-80 w-72 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="popular-menu"
        className="min-h-screen max-w-7xl mx-auto p-4"
      >
        <h2 className="text-center font-heading text-4xl md:text-6xl uppercase mb-20">
          <span
            className="text-primary"
            style={{ textShadow: "2px 2px 0 #000" }}
          >
            Popular
          </span>{" "}
          Items{" "}
          <span
            className="text-primary"
            style={{ textShadow: "2px 2px 0 #000" }}
          >
            From
          </span>{" "}
          Our{" "}
          <span
            className="text-primary"
            style={{ textShadow: "2px 2px 0 #000" }}
          >
            Menu
          </span>
        </h2>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-8">
          {popularItems.map((item, index) => {
            const price = item.options?.[0]?.price || undefined;
            return (
              <div key={index} className="w-full flex flex-col gap-6">
                {item.image && (
                  <div className="relative h-[500px] md:h-96 w-full rounded-lg overflow-hidden bg-primary/75">
                    <Image
                      alt={item.name}
                      src={item.image}
                      fill
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                )}
                <div className="flex justify-between items-start gap-2">
                  <div className="flex flex-col h-full">
                    <div>
                      <h3 className="text-2xl leading-none font-bold mb-2">
                        {item.name}
                      </h3>
                      <p className="mb-4">{item.description}</p>
                    </div>
                    {price && (
                      <span className="text-3xl font-heading block">
                        ${price} CAD
                      </span>
                    )}
                  </div>
                  <Badge className="flex items-center gap-1">
                    <span className="block">{item.rating}</span>
                    <HugeiconsIcon
                      icon={StarIcon}
                      className="fill-foreground"
                    />
                  </Badge>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
