import ContactForm from "@/components/form/contact-form";
import { Button } from "@/components/ui/button";
import {
  Call02Icon,
  HalalIcon,
  Mail01Icon,
  MapingIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

const displayItems = [
  {
    icon: HalalIcon,
    title: "Halal-Certifed",
    description: "Only serving halal",
  },
  {
    icon: Mail01Icon,
    title: "Email",
    description: "blazeburgerco@gmail.com",
  },
  {
    icon: Call02Icon,
    title: "Phone",
    description: "416-368-0796",
  },
  {
    icon: MapingIcon,
    title: "Location",
    description: "208 Queens Quay West, Toronto ON",
  },
];
export default function Contact() {
  return (
    <div className="w-full">
      <section className="w-full h-[50vh] bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-14 justify-center h-full">
          <h1 className="text-5xl font-bold font-heading uppercase text-center">
            Let&apos;s Get In Touch
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 w-full">
            {displayItems.map((item, index) => {
              return (
                <div key={index} className="flex flex-col gap-2">
                  <div className="flex items-center justify-center p-2 bg-primary rounded-lg w-fit">
                    <HugeiconsIcon
                      icon={item.icon}
                      className="text-foreground size-6"
                    />
                  </div>
                  <h2 className="font-bold text-2xl">{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="min-h-screen max-w-7xl mx-auto p-4 lg:p-24">
        <div className="shadow-none lg:shadow-2xl rounded-2xl p-2 lg:p-12 flex flex-col gap-12">
          <h2 className="text-4xl font-semibold font-heading text-center">
            Fill out the form to get in touch!
          </h2>
          <ContactForm />
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 lg:px-24 flex flex-col gap-12 pt-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col gap-8 mb-4">
            <h2 className="text-4xl font-semibold font-heading">
              Find Us at the Heart of the City
            </h2>
            <div className="flex items-center gap-2">
              <div className="text-3xl">📍</div>
              <div>
                <p>208 Queens Quay West, Toronto ON</p>
                <p>
                  Right infront of the Harbourfront, steps from Union
                  station
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start lg:justify-end">
            <Button asChild>
              <Link
                href="https://maps.app.goo.gl/7taXaXSM8JsuJkTa7"
                target="_blank"
              >
                Get Directions
              </Link>
            </Button>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.3925156639048!2d-79.38408852316233!3d43.6400012711027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b356aab0ceb5d%3A0xf72784b4ebec5e20!2sBlaze%20Burger!5e0!3m2!1sen!2sca!4v1752348548123!5m2!1sen!2sca"
          // width="100%"
          className="w-full h-[450px]"
          // height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}
