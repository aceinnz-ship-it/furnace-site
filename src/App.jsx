import { useState } from "react";
import { Flame, Trees, Hammer, Image as ImageIcon, Mail, Phone, MapPin, ChevronRight, Star, ExternalLink, Menu, X, ShoppingBag, Lightbulb, Bird, Clock, Key, Award } from "lucide-react";
import keal_img  from "./assets/images/The Kea and Curve-4235.jpg";
import curve_img from "./assets/images/The Kea and Curve-4253.jpg";
import chess_img      from "./assets/images/furnACE NZ Bird Chess Set-4211.jpg";
import kidlit_img     from "./assets/images/Kids night light-4309.jpg";
import tf_img         from "./assets/images/FA-TF1.jpg";
import acrled_img     from "./assets/images/acrled_kea.jpg";
import clock_img      from "./assets/images/fantail_wall_clock.jpg";
import kingfisher_img from "./assets/images/kingfisher.jpg";
import key_img        from "./assets/images/fantail_keyholder.jpg";
import key_bee_img    from "./assets/images/bee_keyholder.jpg";
import coasters_img   from "./assets/images/coasters.jpg";
import candles_img    from "./assets/images/Bird_Candle_Holder_Set.jpg";
import nesteg_img     from "./assets/images/nesteg.jpg";
import lantern_img    from "./assets/images/lantern.jpg";
import pet_img        from "./assets/images/rasied_feeder.jpg";
import logo           from "./assets/images/furnace-logo.png";
import fantail_a4_img   from "./assets/images/fantail_a4_walnut.jpg";
import morepork_a4_img  from "./assets/images/morepork_a4_walnut.jpg"

// ── IMAGE PLACEHOLDER ──────────────────────────────────────────
// Replace these with: <img src={yourImport} alt="..." className="..." />
// Each PlaceholderImg has a unique gradient so they look intentional until real photos are in
const IMGS = {
  keal: keal_img, curve: curve_img, chess: chess_img,
  kidlit: kidlit_img, tf_series: tf_img, acrled: acrled_img,
  clock: clock_img, kingfisher: kingfisher_img, key: key_img, key_bee: key_bee_img,
  coasters: coasters_img, candles: candles_img, nesteg: nesteg_img,
  lantern: lantern_img, pet: pet_img, fantail_a4:  fantail_a4_img, morepork_a4: morepork_a4_img
};

function Img({ slug, alt, className }) {
  const src = IMGS[slug];
  if (!src) return <div className={`bg-stone-800 ${className}`} />;
  return <img src={src} alt={alt} className={className} />;
}

// ── DATA ───────────────────────────────────────────────────────
const PRODUCTS = [
  {
    slug: "keal", sku: "FA-KEAL", badge: "Flagship",
    name: "Kea Alpine Landscape",
    sub: "Statement Wall Art · 750×490mm",
    desc: "Two-layer Okoume plywood. Walnut-stained silhouette floating above a warm natural backer. Solid black walnut frame. Shadow lines shift as light moves through the day.",
    price: 349,
  },
  {
    slug: "curve", sku: "FA-CURVE", badge: "New",
    name: "The Curve - Diptych Pair",
    sub: "Contemporary Wall Art · 2 panels",
    desc: "Laser-cut Okoume ply strips assembled into a continuous wave form across two panels. Pine frame, painted black matte. No comparable piece exists online.",
    price: 299,
    priceSuffix: "pair",
  },
  {
    slug: "chess", sku: "FA-CHESS", badge: "Collector",
    name: "NZ Native Bird Chess Set",
    sub: "Collector Piece · 32 hand-cast pieces",
    desc: "Hand-cast resin from original sculpts. White antique + jade green resin. Black walnut board with pāua shell inlay. Koru storage box. King=Falcon, Queen=Kiwi, Pawn=Fantail.",
    price: 795,
  },
  {
    slug: "kidlit", sku: "FA-KIDLIT", badge: "New",
    name: "Kids Night Light",
    sub: "Lighting · Fantail or Tui · USB",
    desc: "Cartoon-cute NZ bird laser-cut in two layers of Okoume plywood. 3000K warm-white LED strip runs the full perimeter creating a golden halo on the wall. USB powered, inline switch.",
    price: 95,
  },
  {
    slug: "tf_series", sku: "FA02",
    name: "Tui & Fantail Twilight Series",
    sub: "Statement Wall Art · A3 Landscape",
    desc: "Sunset ombré background from deep red to charcoal. Float-mounted silhouettes with koru-scroll detail. Black walnut frame. Two colourways: matte black or natural timber.",
    price: 189,
  },
  {
    slug: "acrled", sku: "FA-ACRLED",
    name: "Acrylic LED Bird Lights",
    sub: "Lighting · 6 Designs · Matai Base",
    desc: "10mm cast acrylic, laser-engraved NZ native bird, shape-cut to silhouette. Every fine line glows in warm-white edge-lit LED. Recycled Matai base. USB powered.",
    price: 99,
    priceSuffix: "Kiwi $109",
  },
  {
    slug: "clock", sku: "FA03",
    name: "NZ Bird Wall Clock",
    sub: "Functional Art · Silent Sweep Movement",
    desc: "4mm walnut-stained Okoume ply bird on 7mm pine backer. Macrocarpa frame. Silent sweep quartz movement. Choose Fantail, Morepork, or Tui. AA battery not included.",
    price: 139,
  },
  {
    slug: "kingfisher", sku: "FA01",
    name: "Kingfisher Wall Art",
    sub: "Wall Art · A3 Portrait · Macrocarpa Frame",
    desc: "Multi-layer plywood with oak and NZ hardwood veneer layers. NZ map outline and koru motif woven through the design. Grey-stained plywood backing.",
    price: 179,
  },
  {
    slug: "fantail_a4", sku: "FA04",
    name: "Fantail (Pīwakawaka) Wall Art",
    sub: "Wall Art · A4 · Macrocarpa Frame · 2 Colourways",
    desc: "Layered Fantail with cherry blossom design on stained backer. Macrocarpa frame with hardwax oil finish. Artwork finished with Cabothane clear coat. Available in dark walnut or charcoal.",
    price: 95,
  },
  {
    slug: "morepork_a4", sku: "FA05",
    name: "Morepork (Ruru) Wall Art",
    sub: "Wall Art · A4 · Macrocarpa Frame · 2 Colourways",
    desc: "NZ's only surviving native owl, layered plywood with floral motif on stained backer. Macrocarpa frame with hardwax oil finish. Cabothane clear coat. Dark walnut or charcoal colourway.",
    price: 95,
  },
  {
    slug: "key", sku: "FA06",
    name: "Fantail Key Holder",
    sub: "Functional Wall Art · 5 Bronze Hooks",
    desc: "Three-layer painted plywood Fantail with cherry blossom arch. 5 solid bronze hooks. Wall-mount hardware included. Perfect for entry halls and kitchens.",
    price: 85,
  },
  {
    slug: "key_bee", sku: "FA07",
    name: "Bee & Manuka Key Holder",
    sub: "Functional Wall Art · 7 Black Hooks",
    desc: "Three-layer painted plywood Bee and Manuka blossom arch. 7 solid black hooks. Wall-mount hardware included. A garden-inspired entry piece.",
    price: 85,
  },
  {
    slug: "coasters", sku: "FA16",
    name: "Birds of Aotearoa Coasters",
    sub: "Giftware · Set of 5 + A-Frame Holder",
    desc: "Five solid Macrocarpa coasters, each laser-engraved with a NZ native bird. Bird names and collection engraved on the back. Four themed collections. Matching A-frame holder.",
    price: 79,
  },
  {
    slug: "candles", sku: "FA11b",
    name: "NZ Bird Candle Holders",
    sub: "Gifting · Macrocarpa · Tealight Included",
    desc: "Solid Macrocarpa candle holder, laser-engraved NZ native bird. Scented glass tealight included. Finished with Cabothane clear coat. Five designs: Fantail · Morepork · Kereru · Tui · Weka.",
    price: 59,
    priceSuffix: "Large",
  },
  {
    slug: "nesteg", sku: "FA17",
    name: "The Nest Egg",
    sub: "Unique Gift · Kiwi Coin Bank",
    desc: "Kiwi-silhouette coin bank. Pine centre, maple-stained Okoume ply faces, clear acrylic window to watch your savings grow. Coin slot on top, removable disk at rear.",
    price: 59,
  },
  {
    slug: "lantern", sku: "FA10",
    name: "NZ Bird Lantern",
    sub: "Lighting · Japanese Style · Macrocarpa",
    desc: "Macrocarpa frame with two sets of 4 unique NZ bird panel designs. Washi paper diffuser. USB warm-white LED. Set 1: Tui, Fantail, Kiwi, NZ Falcon. Set 2: Morepork, Kererū, Weka, Kingfisher.",
    price: 149,
  },
  {
    slug: "pet", sku: "FA09",
    name: "Elevated Pet Feeder",
    sub: "Pet Homewares · Bowls Included",
    desc: "Solid white oak top, pine base. Routed bowl recesses. Two stainless steel bowls included. Gilly's food-safe Hard Wax Oil. Rubber non-slip feet.",
    price: 175,
  },
];

const CATS = [
  { icon: Bird,      label: "Wall Art",       filter: (p) => ["FA-KEAL","FA-CURVE","FA02","FA01","FA06","FA07","FA04","FA05","FA03"].includes(p.sku) },
  { icon: Lightbulb, label: "Lighting",       filter: (p) => ["FA-KIDLIT","FA-ACRLED","FA10"].includes(p.sku) },
  { icon: Trees,     label: "Gifting",        filter: (p) => ["FA16","FA11b","FA17","FA09"].includes(p.sku) },
  { icon: Award,     label: "Collector",      filter: (p) => p.badge === "Collector" },
  { icon: Clock, label: "Clocks", filter: (p) => p.sku === "FA03" },
  { icon: Hammer,    label: "All Products",   filter: () => true },
];

const WHY = [
  { title: "Designed & made in Helensville", body: "Every piece cut, assembled, and finished in-house on our CO₂ laser and in the workshop. No outsourcing." },
  { title: "Real timber. No MDF kits.", body: "Macrocarpa, black walnut, Okoume plywood, pine, Matai. Each piece unique in grain and character." },
  { title: "Layered construction", body: "Depth, shadow, and texture that flat prints and import décor can't match. The shadow lines shift as light moves." },
  { title: "Not AI generated", body: "Every product photo is real, shot on my Canon 5D Mk III. What you see on this site is exactly what arrives at your door." },
  { title: "Small-batch production", body: "Limited runs. No two pieces identical. Grain varies, character is guaranteed. Not a seasonal product." },
  { title: "Built to last", body: "Hardwax oil and Cabothane clear coat finishes. Heirloom quality made to be passed down, not thrown out." },
];

// ── COMPONENT ──────────────────────────────────────────────────
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState(5); // All Products
  const filtered = PRODUCTS.filter(CATS[activeFilter].filter);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100" style={{ fontFamily: "'Georgia', serif" }}>

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 border-b border-stone-800/60 bg-stone-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <img src={logo} alt="furnACE" className="h-10" />
          <div className="hidden items-center gap-8 text-sm text-stone-400 md:flex" style={{ fontFamily: "Arial, sans-serif" }}>
            {["Products","About","Contact"].map(s => (
              <a key={s} href={`#${s.toLowerCase()}`} className="hover:text-white transition-colors">{s}</a>
            ))}
            <a href="https://furnacedecor.etsy.com" target="_blank" rel="noreferrer"
              className="flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold transition-colors"
              style={{ background: "#C4882F", color: "#000", fontFamily: "Arial, sans-serif" }}>
              <ShoppingBag className="h-3.5 w-3.5" /> Shop Etsy
            </a>
          </div>
          <button className="md:hidden text-stone-400" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-stone-800 bg-stone-950 px-6 pb-6 md:hidden" style={{ fontFamily: "Arial, sans-serif" }}>
            {["Products","About","Contact"].map(s => (
              <a key={s} href={`#${s.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                className="block py-3 text-stone-300 border-b border-stone-800 hover:text-white transition-colors">{s}</a>
            ))}
            <a href="https://furnacedecor.etsy.com" target="_blank" rel="noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-xl py-3 font-semibold"
              style={{ background: "#C4882F", color: "#000" }}>
              <ShoppingBag className="h-4 w-4" /> Shop on Etsy
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden border-b border-stone-800">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950" />
        {/* Copper accent line */}
        <div className="absolute left-0 top-0 h-full w-1" style={{ background: "linear-gradient(to bottom, transparent, #C4882F 30%, #C4882F 70%, transparent)" }} />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid gap-16 md:grid-cols-2 md:gap-20 items-center">

            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-widest"
                style={{ borderColor: "rgba(196,136,47,0.3)", background: "rgba(196,136,47,0.08)", color: "#C4882F", fontFamily: "Arial, sans-serif" }}>
                <Flame className="h-3.5 w-3.5" /> Handmade in New Zealand
              </div>

              <h1 className="text-5xl font-black leading-[1.08] md:text-6xl text-white">
                Designed to last.<br />
                <span style={{ color: "#C4882F" }}>Made to be noticed.</span>
              </h1>

              <p className="mt-6 text-lg text-stone-400 leading-relaxed max-w-lg" style={{ fontFamily: "Arial, sans-serif" }}>
                furnACE creates handcrafted timber art and décor inspired by Aotearoa, laser-cut, hand-assembled, and finished in our Helensville workshop.
              </p>

              <div className="mt-8 flex flex-wrap gap-4" style={{ fontFamily: "Arial, sans-serif" }}>
                <a href="#products" className="rounded-xl px-6 py-3 font-semibold transition-all hover:brightness-110"
                  style={{ background: "#C4882F", color: "#000" }}>
                  Browse the collection
                </a>
                <a href="https://furnacedecor.etsy.com" target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl border px-6 py-3 text-stone-300 hover:text-white transition-colors"
                  style={{ borderColor: "#555" }}>
                  Shop on Etsy <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-3" style={{ fontFamily: "Arial, sans-serif" }}>
                {["Designed & made in Helensville NZ","Real timber, no MDF kits","Original furnACE designs","Real photos. Real products. No surprises."].map(p => (
                  <div key={p} className="flex items-start gap-2 rounded-lg border border-stone-800 bg-stone-900/60 px-4 py-3 text-sm text-stone-300">
                    <span style={{ color: "#C4882F" }} className="mt-0.5 flex-shrink-0">✦</span> {p}
                  </div>
                ))}
              </div>
            </div>

            {/* Hero product grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { slug: "keal", label: "Kea Alpine Landscape", note: "Flagship · $349" },
                { slug: "curve", label: "The Curve Diptych", note: "New · $299/pair" },
                { slug: "chess", label: "NZ Bird Chess Set", note: "Collector · $795" },
                { slug: "kidlit", label: "Kids Night Light", note: "New · $95" },
              ].map(({ slug, label, note }) => (
                <div key={slug} className="relative overflow-hidden rounded-2xl aspect-square">
                  <Img slug={slug} alt={label} className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-950 to-transparent px-3 pb-3 pt-8">
                    <div className="text-xs font-bold text-white" style={{ fontFamily: "Arial, sans-serif" }}>{label}</div>
                    <div className="text-xs mt-0.5" style={{ color: "#C4882F", fontFamily: "Arial, sans-serif" }}>{note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section id="products" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <div className="text-xs tracking-widest uppercase mb-3" style={{ color: "#C4882F", fontFamily: "Arial, sans-serif" }}>The Range</div>
          <h2 className="text-4xl font-black text-white">Product Collection</h2>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10" style={{ fontFamily: "Arial, sans-serif" }}>
          {CATS.map((cat, i) => {
            const Icon = cat.icon;
            const active = i === activeFilter;
            return (
              <button key={cat.label} onClick={() => setActiveFilter(i)}
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all"
                style={{
                  background: active ? "#C4882F" : "rgba(255,255,255,0.05)",
                  color: active ? "#000" : "#999",
                  border: active ? "none" : "1px solid #333",
                }}>
                <Icon className="h-4 w-4" />
                {cat.label}
              </button>
            );
          })}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((p) => (
            <div key={p.sku} className="group overflow-hidden rounded-2xl border border-stone-800 bg-stone-900 transition-all hover:border-stone-600">
              <div className="aspect-[4/3] overflow-hidden">
                <Img slug={p.slug} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    {p.badge && (
                      <span className="inline-block mb-2 rounded-md px-2 py-0.5 text-xs font-bold"
                        style={{ background: "rgba(196,136,47,0.15)", color: "#C4882F", fontFamily: "Arial, sans-serif" }}>
                        {p.badge}
                      </span>
                    )}
                    <h3 className="text-base font-black text-white leading-tight">{p.name}</h3>
                    <div className="text-xs text-stone-500 mt-0.5" style={{ fontFamily: "Arial, sans-serif" }}>{p.sub}</div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-xl font-black" style={{ color: "#C4882F" }}>${p.price}</div>
                    {p.priceSuffix && <div className="text-xs text-stone-500" style={{ fontFamily: "Arial, sans-serif" }}>{p.priceSuffix}</div>}
                  </div>
                </div>
                <p className="text-sm text-stone-400 leading-relaxed" style={{ fontFamily: "Arial, sans-serif" }}>{p.desc}</p>
                <div className="mt-4 flex items-center justify-between" style={{ fontFamily: "Arial, sans-serif" }}>
                  <span className="text-xs text-stone-600 font-mono">{p.sku}</span>
                  <a href="https://furnacedecor.etsy.com" target="_blank" rel="noreferrer"
                    className="flex items-center gap-1 text-sm font-semibold transition-colors hover:brightness-110"
                    style={{ color: "#C4882F" }}>
                    Buy on Etsy <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY furnACE ── */}
      <section className="border-y border-stone-800" style={{ background: "#111319" }}>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2 md:gap-20 items-center">
            <div>
              <div className="text-xs tracking-widest uppercase mb-3" style={{ color: "#C4882F", fontFamily: "Arial, sans-serif" }}>Why furnACE</div>
              <h2 className="text-4xl font-black text-white mb-6">Real timber.<br />Real craft.<br />Real difference.</h2>
              <p className="text-stone-400 leading-relaxed" style={{ fontFamily: "Arial, sans-serif" }}>
                We're not a dropshipper. Not a print shop. furnACE is a home workshop in Helensville, Auckland. One maker, one laser, one bench. Every piece cut, assembled, and finished by hand.
              </p>
              <div className="mt-8 flex flex-wrap gap-3" style={{ fontFamily: "Arial, sans-serif" }}>
                {["Black Walnut","Macrocarpa","Okoume Ply","Matai","White Oak","Cast Acrylic","Pāua Shell"].map(m => (
                  <span key={m} className="rounded-full border border-stone-700 px-3 py-1.5 text-xs text-stone-400">{m}</span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4" style={{ fontFamily: "Arial, sans-serif" }}>
              {WHY.map((w) => (
                <div key={w.title} className="rounded-xl border border-stone-800 p-4" style={{ background: "rgba(255,255,255,0.02)" }}>
                  <div className="mb-2 text-sm font-bold text-white leading-snug">{w.title}</div>
                  <div className="text-xs text-stone-500 leading-relaxed">{w.body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-3 md:gap-16">
          <div className="md:col-span-2">
            <div className="text-xs tracking-widest uppercase mb-3" style={{ color: "#C4882F", fontFamily: "Arial, sans-serif" }}>About</div>
            <h2 className="text-4xl font-black text-white mb-6">The furnACE story</h2>
            <div className="space-y-4 text-stone-400 leading-relaxed" style={{ fontFamily: "Arial, sans-serif" }}>
              <p>furnACE is a New Zealand handcrafted timber art and décor brand, designed and produced from a home workshop in Helensville, Auckland. Every product is original, designed here, cut here, built here.</p>
              <p>The range covers statement wall art, collector chess sets, backlit feature lights, kids night lights, NZ bird clocks, key holders, coaster sets, candle holders, and more, all celebrating Aotearoa's native birds and natural character.</p>
              <p>No AI-generated imagery. No mass-produced imports. No MDF kits. Real timber, layered construction, and finishes built to last decades, not seasons.</p>
            </div>
            <div className="mt-8" style={{ fontFamily: "Arial, sans-serif" }}>
              <div className="text-sm font-bold text-white mb-3">Custom Commissions</div>
              <p className="text-sm text-stone-400 leading-relaxed">We take custom orders; personalised engravings, one-off wall art, corporate gifts, wedding pieces, and large-format commissions. MOQ 1 unit for most custom work. Get in touch.</p>
            </div>
          </div>
          <div className="space-y-4" style={{ fontFamily: "Arial, sans-serif" }}>
            {[
              { n: "23+", l: "Product SKUs" },
              { n: "100%", l: "Made in NZ" },
              { n: "8+", l: "Years combined craft experience" },,
              { n: "0", l: "AI-generated images" },
            ].map(s => (
              <div key={s.l} className="rounded-xl border border-stone-800 p-5">
                <div className="text-3xl font-black" style={{ color: "#C4882F" }}>{s.n}</div>
                <div className="text-sm text-stone-500 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="border-t border-stone-800 bg-stone-900/30">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="text-xs tracking-widest uppercase mb-3" style={{ color: "#C4882F", fontFamily: "Arial, sans-serif" }}>Get in touch</div>
          <h2 className="text-4xl font-black text-white mb-10">Contact furnACE</h2>

          <div className="grid gap-6 md:grid-cols-3 mb-8" style={{ fontFamily: "Arial, sans-serif" }}>
            {[
              { Icon: Mail, label: "Email", value: "andrew@furnace.co.nz", href: "mailto:andrew@furnace.co.nz" },
              { Icon: Phone, label: "Phone", value: "021 149 9447", href: "tel:02114994477" },
              { Icon: MapPin, label: "Location", value: "Helensville, Auckland NZ", href: null },
            ].map(({ Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4 rounded-xl border border-stone-800 p-5">
                <Icon className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: "#C4882F" }} />
                <div>
                  <div className="text-xs text-stone-500 uppercase tracking-wider mb-1">{label}</div>
                  {href ? (
                    <a href={href} className="font-semibold text-white hover:brightness-110 transition-all">{value}</a>
                  ) : (
                    <div className="font-semibold text-white">{value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-stone-800 p-6">
              <h3 className="text-lg font-black text-white mb-2" style={{ fontFamily: "Georgia, serif" }}>Shop Online</h3>
              <p className="text-sm text-stone-400 mb-4 leading-relaxed" style={{ fontFamily: "Arial, sans-serif" }}>
                Shop the full furnACE range online. Free tracked delivery within New Zealand. International shipping available on selected products, contact us for details.
              </p>
              <div className="flex flex-wrap gap-3" style={{ fontFamily: "Arial, sans-serif" }}>
                <a href="https://furnacedecor.etsy.com" target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl px-5 py-2.5 font-semibold text-sm transition-all hover:brightness-110"
                  style={{ background: "#C4882F", color: "#000" }}>
                  <ShoppingBag className="h-4 w-4" /> furnacedecor.etsy.com
                </a>
                <a href="https://www.trademe.co.nz/stores/furnace" target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-stone-700 px-5 py-2.5 font-semibold text-sm text-stone-300 transition-colors hover:text-white">
                  Trade Me Store
                </a>
              </div>
            </div>

            <div className="rounded-2xl p-6" style={{ background: "rgba(196,136,47,0.08)", border: "1px solid rgba(196,136,47,0.2)" }}>
              <h3 className="text-lg font-black text-white mb-2" style={{ fontFamily: "Georgia, serif" }}>Wholesale Enquiries</h3>
              <p className="text-sm text-stone-400 mb-4 leading-relaxed" style={{ fontFamily: "Arial, sans-serif" }}>
                Wholesale at 50% of RRP. Zoo/chain accounts at 45% of RRP. Minimum first order NZ$500. Payment 30 days from invoice. Exclusivity zones available.
              </p>
              <a href="mailto:andrew@furnace.co.nz?subject=Wholesale Enquiry"
                className="inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 font-semibold text-sm transition-colors hover:text-white"
                style={{ borderColor: "#C4882F", color: "#C4882F", fontFamily: "Arial, sans-serif" }}>
                <Mail className="h-4 w-4" /> Email for wholesale terms
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-stone-800 bg-stone-950" style={{ fontFamily: "Arial, sans-serif" }}>
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="text-xl font-black" style={{ fontFamily: "Georgia, serif" }}>
              furn<span style={{ color: "#C4882F" }}>ACE</span>
            </span>
            <span className="ml-3 text-xs text-stone-600">Helensville, Auckland · Handmade in New Zealand · April 2026</span>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-stone-500">
            <a href="https://furnacedecor.etsy.com" target="_blank" rel="noreferrer" className="hover:text-stone-300 transition-colors">Etsy</a>
            <a href="https://www.trademe.co.nz/stores/furnace" target="_blank" rel="noreferrer" className="hover:text-stone-300 transition-colors">Trade Me</a>
            <a href="mailto:andrew@furnace.co.nz" className="hover:text-stone-300 transition-colors">andrew@furnace.co.nz</a>
            <span>All prices NZD incl. GST</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
