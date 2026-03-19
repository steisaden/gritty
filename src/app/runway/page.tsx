"use client";

import { motion } from "framer-motion";
import { ArrowRight, Box, LayoutGrid, Layers, Archive } from "lucide-react";

export default function RunwayPage() {
  return (
    <main className="relative pt-24 overflow-x-hidden">
      {/* Hero / Runway Title Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[25vw] font-serif opacity-5 leading-none tracking-tighter italic text-primary">GRIT & GLORY</span>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-8">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-label text-primary uppercase mb-4 block"
            >
              FALL/WINTER 2024
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[12vw] md:text-[8vw] font-serif leading-[0.85] italic tracking-tighter text-on-surface"
            >
              THE MONOLITH SERIES
            </motion.h2>
          </div>
          <div className="col-span-12 md:col-span-4 self-end mt-12 md:mt-0">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-on-surface-variant font-sans text-lg leading-relaxed max-w-sm mb-8 font-light"
            >
              Architectural silhouettes forged from heavy wools and industrial steel. A study in obsidian geometry.
            </motion.p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-12 py-5 font-label font-bold transition-all duration-700"
            >
              EXPLORE COLLECTION
            </motion.button>
          </div>
        </div>
      </section>

      {/* Product Highlight 01: Monolith Overcoat */}
      <section className="min-h-screen py-32 px-6 md:px-10 bg-surface-container/10 relative">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="order-2 md:order-1 relative z-20">
            <div className="sticky top-40">
              <span className="font-label text-primary/40 mb-2 block tracking-[0.5em]">ITEM_091 // OUTERWEAR</span>
              <h3 className="text-7xl font-serif italic mb-8 text-on-surface">MONOLITH OVERCOAT</h3>
              <p className="text-on-surface-variant font-sans text-base max-w-md mb-12 leading-loose font-light">
                Double-faced brushed cashmere and structural wool. Internal steel stays maintain the brutalist shoulder line. Hand-finished in our obsidian atelier.
              </p>
              <div className="flex items-baseline gap-4 mb-12">
                <span className="text-4xl font-serif text-primary">$1,850</span>
                <span className="text-on-surface-variant font-label text-xs">USD</span>
              </div>
              <div className="group inline-flex flex-col gap-1 cursor-pointer">
                <span className="font-label text-xs text-on-surface">ACQUIRE PIECE</span>
                <div className="h-[1px] w-full bg-primary origin-left scale-x-100 group-hover:scale-x-110 transition-transform duration-500"></div>
              </div>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 relative aspect-[3/4] bg-surface-container overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />
            <img 
              className="w-full h-full object-cover grayscale brightness-75 hover:scale-110 hover:brightness-100 transition-all duration-[2000ms] ease-out" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2NfnKFrebgUvdxRIHP44paJmePIi0M8-T4rSrybzGcaj13zuOgcvwq9NKz9EX0NKUibjuIG0SYehjscP6KGw8l8kLKLFpsIbgkAvMjT6X5qEb0rfQ0wEDZLlGArcLtwvEK0Loo1FpOnU21OflCtOfaTjx_aGMpF6xnAulTHTa0MtWfiQO6l41lEFGEo0ruTcm-KsXj57F7OHVfvzIFBdjgxAowFVi-6jrt03vTUlwlSoEAuqDXLlC7c2MFQv686UJUKw22v86uaM"
              alt="Monolith Overcoat"
            />
            <div className="absolute bottom-10 -left-20 z-0 pointer-events-none">
              <span className="text-[12rem] font-serif italic text-primary opacity-5 leading-none">GRIT</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Highlight 02: Chelsea Boots */}
      <section className="min-h-screen py-32 px-6 md:px-10 bg-surface relative">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[1/1] bg-surface-container-high overflow-hidden"
          >
            <img 
              className="w-full h-full object-cover grayscale brightness-90 hover:scale-105 transition-all duration-[2000ms] ease-out" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgeM_NHJGyTJGai7zGzB8bGzmzdd-HjfwxsMCuopNG4QjIXsd7ZWepC0P2X1iVjWUGsKHNA2gYKGJDNPCMn8o_jJPlG0pM0pEIyipn2260OCbY347v2iH5NTHHBRVANo62vvJnKr8dzH6iuCBM7B88g96ImNSj7RThqUWXxwNkeYMZxL6kLnEaBAKE7uYK1yWwsdiTM70IolsrLAyEKQ0nFLFlhZWoUAlPPp0eb0ZSEMqM5JMtaSdeYDzz8NJRA5Vh28rQDrPDWvw"
              alt="Ironwork Chelsea Boots"
            />
            <div className="absolute top-10 -right-20 z-0 rotate-90 pointer-events-none">
              <span className="text-[12rem] font-serif italic text-primary opacity-5 leading-none">GLORY</span>
            </div>
          </motion.div>
          <div className="relative z-20">
            <div className="sticky top-40">
              <span className="font-label text-primary/40 mb-2 block tracking-[0.5em]">ITEM_214 // FOOTWEAR</span>
              <h3 className="text-7xl font-serif italic mb-8 text-on-surface">IRONWORK CHELSEA BOOTS</h3>
              <p className="text-on-surface-variant font-sans text-base max-w-md mb-12 leading-loose font-light">
                Vegetable-tanned calfskin with a custom-forged steel shank and oversized heel stack. Industrial elegance for the urban nomad.
              </p>
              <div className="flex items-baseline gap-4 mb-12">
                <span className="text-4xl font-serif text-primary">$920</span>
                <span className="text-on-surface-variant font-label text-xs">USD</span>
              </div>
              <div className="group inline-flex flex-col gap-1 cursor-pointer">
                <span className="font-label text-xs text-on-surface">ACQUIRE PIECE</span>
                <div className="h-[1px] w-full bg-primary origin-left scale-x-100 group-hover:scale-x-110 transition-transform duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Transition */}
      <section className="h-screen bg-surface-container-lowest flex items-center justify-center relative overflow-hidden group">
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen overflow-hidden">
          <div className="w-full h-full bg-gradient-to-tr from-surface-container via-primary/5 to-surface-container-high scale-150 animate-pulse" />
        </div>
        <div className="relative z-10 text-center">
          <span className="font-label text-primary tracking-[0.6em] mb-8 block">NEXT CHAPTER</span>
          <div className="flex items-center justify-center gap-8">
            <h4 className="text-[10vw] font-serif italic leading-none tracking-tighter text-on-surface hover:text-primary transition-colors duration-1000 cursor-pointer">ARCHIVE.04</h4>
            <ArrowRight className="w-[6vw] h-[6vw] text-primary" strokeWidth={1} />
          </div>
          <p className="text-on-surface-variant font-sans text-sm tracking-widest mt-12 uppercase">Transitioning to previous collections...</p>
        </div>
      </section>

      {/* Bento Editorial Grid */}
      <section className="py-32 px-6 md:px-10 bg-background">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <h2 className="text-6xl font-serif italic text-on-surface">EDITORIAL MOMENTS</h2>
            <div className="text-right">
              <span className="font-label text-on-surface-variant block mb-2">CURATED BY</span>
              <span className="font-label text-primary tracking-[0.3em]">ARCHITECTURAL AUTHORITY</span>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-7 aspect-video bg-surface-container relative overflow-hidden">
              <img 
                className="w-full h-full object-cover grayscale hover:scale-105 transition-transform duration-[3000ms]" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDDJfyf8xDVFyRPunyeubvMQlgKYBSWy9ukbEfKbMw5Gn4pzT9wgXMFIw-JhR3hFAN22PJhAyO7nEx_sveTTuyeehLVpAwL3aq5jqnCqz0Kzm3JXF5ywbtKnMRyhIDwwRW4EFzxcchIAUYGzfpsDSWhdJ4326Ii3kK1o7m2LNNaiceOR3e3HxdZtd5fKpMSUn6LHIlY08XMUrFOHpjoB-ey6ElTVCuPbOLGRS-OpAGS7uaW9n_E50BjIC_dZjfOYzOzfBD2t1mkOc"
                alt="Editorial Moment"
              />
            </div>
            <div className="col-span-12 md:col-span-5 aspect-square bg-surface-container flex flex-col items-center justify-center p-12 text-center">
              <Layers className="w-16 h-16 text-primary mb-6 stroke-[1px]" />
              <h5 className="text-3xl font-serif italic mb-4">DIGITAL TWIN</h5>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-8 font-light">Access our showroom in the digital plane. Interactive silhouettes in 8K fidelity.</p>
              <button className="border border-outline hover:border-primary px-8 py-3 text-xs font-label tracking-widest text-on-surface transition-colors duration-500">ENTER METAVERSE</button>
            </div>
            <div className="col-span-12 md:col-span-4 aspect-square bg-surface-container overflow-hidden">
              <img 
                className="w-full h-full object-cover grayscale brightness-50" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA25ppBDKgcvqEpyxqbMDqueDIt-dwT_pmEUcYWiGYfsrGCA9mMmGVjYWi_Fja0Hnih_MwXi9n6OOa8ayUj-wCypo2HJtb4nByC_e3ioMbDG5haUAgwSnbt3VKBbCUZxx_kNF2g477imKG-OsYbeDIOMhjMLjXeeu2uzUOncTrfMFU7nswyqjsvq82yyvictYtJQZ0LHt_jQMDfuaPaV2N_ibyyzA7x8bS1VJSGxQcubx01qrQec8RhSi2u-sG3ubdxdDJTEPjEdy4"
                alt="Texture Detail"
              />
            </div>
            <div className="col-span-12 md:col-span-8 aspect-[16/6] bg-surface-container-lowest border border-outline-variant/10 flex items-center px-12">
              <div className="flex-1">
                <h5 className="text-4xl font-serif italic text-on-surface mb-2 tracking-tight">RAW_MATERIALS.JSON</h5>
                <p className="text-on-surface-variant font-label tracking-[0.2em]">SOURCING THE OBSIDIAN EARTH</p>
              </div>
              <Archive className="w-12 h-12 text-primary stroke-[1px]" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
