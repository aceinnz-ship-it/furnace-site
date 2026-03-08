import { Flame, Trees, Hammer, Image as ImageIcon, Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import kingfisher from "./assets/images/kingfisher.png";
import tui_and_fantail_a3 from "./assets/images/tui_and_fantail_a3.png";
import fantail_wall_clock from "./assets/images/fantail_wall_clock.png";
import Fantail_Floral_Panel from "./assets/images/Fantail_Floral_Panel.png";
import bee_keyholder from "./assets/images/bee_keyholder.png";
import rasied_feeder from "./assets/images/rasied_feeder.png";
import Engraved_Candle_Holder from "./assets/images/Engraved_Candle_Holder.png";
import Bird_Candle_Holder_Set from "./assets/images/Bird_Candle_Holder_Set.png";
import logo from "./assets/images/furnace-logo.png";
export default function App() {
  const categories = [
    {
      icon: Flame,
      title: "Candle Holders",
      text: "Solid timber candle holders with warmth, weight, and a clean handcrafted finish.",
    },
    {
      icon: ImageIcon,
      title: "Wall Art & Clocks",
      text: "Layered native bird wall art, clocks, silhouette panels, and feature decor inspired by Aotearoa’s forests and wildlife.",
    },
    {
      icon: Trees,
      title: "Coasters & Giftware",
      text: "Laser-engraved coasters, small gift sets, and practical decor pieces designed to gift and ship well.",
    },
    {
      icon: Hammer,
      title: "Custom & Personalised",
      text: "Personalised engraving, one-off commissions, custom gifts, and made-to-order pieces.",
    },
  ];

  const gallery = [
    {
      title: "Kingfisher Feature Panel",
      desc: "Layered NZ bird wall art with warm timber tones and strong depth.",
      image: kingfisher,
    },
    {
      title: "Tūī & Fantail Panel",
      desc: "Bold framed piece combining native birds with sculptural styling.",
      image: tui_and_fantail_a3,
    },
    {
      title: "Fantail Wall Clock",
      desc: "Functional decor piece blending native bird design with everyday utility.",
      image: fantail_wall_clock,
    },
    {
      title: "Fantail Floral Panel",
      desc: "Clean layered panel with floral elements and strong contrast.",
      image: Fantail_Floral_Panel,
    },
    {
      title: "Bee Key Hanger",
      desc: "Entryway piece combining practical key hooks with decorative design.",
      image: bee_keyholder,
    },
    {
      title: "Raised Pet Feeder",
      desc: "Solid timber dog or cat feeder with a refined natural finish.",
      image: rasied_feeder,
    },
    {
      title: "Engraved Candle Holder",
      desc: "Detailed laser-engraved timber candle holder designed for gifting.",
      image: Engraved_Candle_Holder,
    },
    {
      title: "Bird Candle Holder Set",
      desc: "Grouped candle holder set ideal for gifts and market displays.",
      image: Bird_Candle_Holder_Set,
    },
  ];

  const points = [
    "Designed and made in New Zealand",
    "Handcrafted timber and laser-cut detail",
    "Original furnACE designs",
    "Small-batch production",
  ];

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <section className="relative overflow-hidden border-b border-stone-800">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-stone-950 to-stone-900" />

        <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-8">
          <header className="flex items-start justify-between">
            <div>
              <img src={logo} alt="furnACE" className="h-20 " />    
            </div>
            <nav className="hidden items-center gap-6 text-sm text-stone-300 md:flex">
              <a href="#products" className="hover:text-white">Products</a>
              <a href="#gallery" className="hover:text-white">Gallery</a>
              <a href="#about" className="hover:text-white">About</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </nav>
          </header>

          <div className="grid gap-10 pt-12 pb-8 md:grid-cols-2 md:pt-16 md:pb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center"
            >
              <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
                <Flame className="h-3.5 w-3.5" /> Handmade in New Zealand
              </div>

              <h1 className="text-5xl font-black leading-tight md:text-6xl">
                Distinctive timber decor for Kiwi homes
              </h1>

              <p className="mt-6 max-w-xl text-lg text-stone-300">
                furnACE creates handcrafted candle holders, wall art, clocks, and home decor inspired by Aotearoa’s natural character.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#gallery"
                  className="rounded-2xl bg-amber-500 px-6 py-3 font-semibold text-black"
                >
                  View gallery
                </a>

                <a
                  href="#contact"
                  className="rounded-2xl border border-stone-700 px-6 py-3"
                >
                  Enquire
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {points.map((p) => (
                  <div key={p} className="rounded-xl bg-stone-900 px-4 py-3 text-sm">
                    {p}
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl bg-stone-900 p-6">
                <div className="text-xs uppercase text-stone-400">Best Sellers</div>
                <div className="mt-2 text-xl font-bold">Candle Holders</div>
              </div>

              <div className="rounded-3xl bg-stone-900 p-6">
                <div className="text-xs uppercase text-stone-400">Decor</div>
                <div className="mt-2 text-xl font-bold">Wall Art</div>
              </div>

              <div className="rounded-3xl bg-stone-900 p-6">
                <div className="text-xs uppercase text-stone-400">Giftware</div>
                <div className="mt-2 text-xl font-bold">Coasters</div>
              </div>

              <div className="rounded-3xl bg-stone-900 p-6">
                <div className="text-xs uppercase text-stone-400">Custom</div>
                <div className="mt-2 text-xl font-bold">Engraving</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-black">Product Categories</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="rounded-3xl bg-stone-900 p-6">
                <Icon className="mb-4 text-amber-300" />
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm text-stone-300">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="gallery" className="border-y border-stone-800 bg-stone-900/40">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-black">Product Gallery</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {gallery.map((g) => (
              <div key={g.title} className="overflow-hidden rounded-3xl bg-stone-900">
                <img
                  src={g.image}
                  alt={g.title}
                  className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-105"
                />

                <div className="p-5">
                  <h3 className="font-bold">{g.title}</h3>
                  <p className="mt-2 text-sm text-stone-300">{g.desc}</p>

                  <a
                    href="#contact"
                    className="mt-3 inline-flex items-center text-sm text-amber-300"
                  >
                    Enquire <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-black">About furnACE</h2>

        <p className="mt-6 max-w-3xl text-stone-300 leading-8">
          furnACE is a New Zealand woodworking and laser-crafted decor brand producing original timber pieces designed, prototyped, and built in a real workshop environment.
        </p>
      </section>

      <section id="contact" className="border-t border-stone-800 bg-black">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-3xl font-black">Contact</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-stone-900 p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-amber-300" />
                  <div>
                    <div className="text-xs text-stone-400">Email</div>
                    <div className="font-semibold">info@furnace.nz</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-amber-300" />
                  <div>
                    <div className="text-xs text-stone-400">Phone</div>
                    <div className="font-semibold">021 1499 447</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-amber-300" />
                  <div>
                    <div className="text-xs text-stone-400">Location</div>
                    <div className="font-semibold">Helensville, Auckland</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-amber-500/10 p-8">
              <h3 className="text-xl font-bold">Enquiries</h3>
              <p className="mt-3 text-sm text-stone-200">
                For custom work, product availability, or retail enquiries please get in touch.
              </p>

              <a
                href="mailto:info@furnace.nz"
                className="mt-6 inline-flex items-center rounded-xl bg-amber-500 px-5 py-3 font-semibold text-black"
              >
                Email furnACE
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}