import Hero from "@/components/Hero";
import NewProducts from "@/components/NewProducts";
import Testimonials from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <NewProducts />
      <Testimonials />
    </main>
  );
}
