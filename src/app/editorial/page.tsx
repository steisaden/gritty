"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function EditorialPage() {
  return (
    <main className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2">
        {/* Left: Gritty Cinematography */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative h-[60vh] md:h-screen overflow-hidden group"
        >
          <img 
            alt="Brutalist Architecture" 
            className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 transition-transform duration-[2000ms] ease-out" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcUWHjOgu3ut_-57DdIgJN2-g_viGw0GtJ3N0-PzZ8SRUcE9pJnzEdIb9jpUmzfrr4h41W5HtHocFuzPE5fijysF8a4ckD7WZ0O86dVz6tf_vj5ESU5QJZVNTTpPns5rPqVdnYl4W6bwSmbuHehCoMqUpz5-5PzodfUnYKUv0Jwgx1mc10S4agf_aewsQbldau5Dcg6Lmzp8Ym-ZiOeBDL6bWLE2ivRKtB8K-08pN0jc_Dp3cCB5_-ggGADNL5zEyW36zYzOfWZFk"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute bottom-12 left-10">
            <span className="font-label text-[10px] tracking-[0.3em] text-primary mb-4 block">Issue No. 042</span>
            <h2 className="font-serif text-5xl md:text-7xl font-light italic text-white leading-tight">Concrete as a <br/> Second Skin</h2>
          </div>
        </motion.div>

        {/* Right: Minimalist Typography */}
        <div className="relative flex flex-col justify-center px-10 md:px-20 py-20 bg-surface-container-lowest">
          <div className="absolute inset-0 overflow-hidden flex items-center justify-center pointer-events-none select-none">
            <span className="font-serif text-[15rem] text-primary opacity-5 -rotate-12 translate-x-20 italic">GLORY</span>
          </div>
          <div className="relative z-10 max-w-xl">
            <motion.span 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-label text-[11px] tracking-[0.4em] text-primary mb-8 block"
            >
              Narrative / 01
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-5xl md:text-6xl text-on-surface mb-10 leading-[1.1] italic tracking-tight"
            >
              The weight of the city is our only comfort.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-on-surface-variant font-sans font-light leading-relaxed text-lg mb-12"
            >
              In the intersection of raw industrialism and high-fashion silhouette, we find the "Grit & Glory" ethos. This collection is not merely worn; it is inhabited. We treat raw concrete not as a backdrop, but as a biological imperative.
            </motion.p>
            
            {/* Integrated Product Card */}
            <motion.div 
              whileHover={{ x: 10 }}
              className="group flex items-center gap-8 border-l border-primary/20 pl-8 py-4 hover:border-primary transition-all duration-700 cursor-pointer"
            >
              <div>
                <span className="font-label text-[10px] text-on-surface-variant">Featured Item</span>
                <h3 className="font-serif text-2xl text-primary mt-1 italic">Brutalist Trousers</h3>
                <p className="font-sans text-on-surface/50 text-sm mt-1">$920.00 USD</p>
              </div>
              <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-3 font-label tracking-widest uppercase hover:brightness-110 transition-all duration-500">
                BUY NOW
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Asymmetric Detail Section */}
      <section className="py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-7 relative h-[80vh]"
            >
              <img 
                alt="Textured Silk" 
                className="w-full h-full object-cover grayscale brightness-75 transition-all duration-1000" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZlidnUYeS3es1Gdu_uF3jRXqrflUi1MeVepZp-WIswdmOlQuYyYs_HWv3_MRACpkCOvIkEMBmCkN7hIQ9QORyLya8FUkiA84podgicemF7vt8Y5KXkoie3wVMEhvKyy36MjU5sQUFhcdb4hOqyhgReKkOYs_JgVN6FmNNgXZzowBD_YNz0f2QploVLCHkyGuGqr6mX2zbKe-lyqOgsRL6p6zrKPLtVeHwZ89NMHMUlzv69W2_sNPTlhp3Y1t2LbVEDw5pm-XG1YA"
              />
              <div className="absolute top-10 -right-10 hidden md:block w-64 h-80 bg-surface-container-high p-8 shadow-2xl border border-outline-variant/10">
                <span className="font-label text-[10px] text-primary block mb-4">Specs</span>
                <p className="font-sans text-xs text-on-surface-variant leading-loose font-light">
                  100% Vantablack silk weave. Light absorption at 99.96%. Tailored in the shadows of Milan. Limited run of 50 units.
                </p>
              </div>
            </motion.div>
            <div className="md:col-span-5 flex flex-col justify-end pb-12">
              <span className="font-label text-[10px] tracking-[0.4em] text-primary mb-6">Archive Piece</span>
              <h2 className="font-serif text-4xl md:text-5xl text-on-surface mb-8 italic">Vantablack Silk Scarf</h2>
              <p className="text-on-surface-variant font-sans text-sm leading-relaxed mb-10 max-w-sm font-light">
                Absorbing light to create a void. The Vantablack Silk Scarf is a statement of absence.
              </p>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-3xl font-serif text-primary italic">$450</span>
                <span className="text-on-surface-variant line-through text-sm font-label">$620</span>
              </div>
              <button className="w-full md:w-fit border border-primary/30 hover:border-primary text-primary px-12 py-4 font-label tracking-widest uppercase transition-all duration-500">
                ACQUIRE PIECE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Story Quote */}
      <section className="relative h-[60vh] flex items-center justify-center bg-surface-container-lowest overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-serif text-[25rem] text-primary opacity-[0.03] uppercase tracking-tighter italic">SKIN</span>
        </div>
        <div className="relative z-10 text-center max-w-4xl px-10">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-label text-[11px] tracking-[0.5em] text-primary mb-12 uppercase"
          >
            Philosophy
          </motion.p>
          <motion.h3 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="font-serif text-4xl md:text-6xl italic text-on-surface leading-tight tracking-tight"
          >
            "Softness is a temporary state. Concrete is the eventual truth of all structure."
          </motion.h3>
        </div>
      </section>

      {/* Product Grid (Asymmetric) */}
      <section className="py-32 px-6 md:px-10 bg-background">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3 mt-20">
            <h4 className="font-label text-[11px] text-primary uppercase mb-6 tracking-widest">The Essentials</h4>
            <p className="font-sans text-on-surface-variant text-sm leading-relaxed mb-12 font-light">
              Our core collection elements are built to outlast the season. Functional brutalism applied to the daily uniform.
            </p>
            <a className="group flex items-center gap-4 text-on-surface font-label text-[11px] tracking-widest" href="#">
              EXPLORE COLLECTION
              <span className="w-12 h-[1px] bg-primary group-hover:w-20 transition-all duration-500"></span>
            </a>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/10">
            {/* Product 1 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-surface-container p-10 group cursor-pointer"
            >
              <div className="aspect-[4/5] bg-surface-container-lowest overflow-hidden mb-8">
                <img 
                  alt="Product Item" 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 transition-all duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMhBlcCIXJupdm3RBJCxam0aANjzEFtovAJJYGW4TJCOe7rjoB93LaDt_gelsnngvvsBlJ0_RAAeCz9Ha3BzvXGnEWU7wUvv8fLTCaDMHboFCMxoGjPoEZ9q0xtcONdDMcWRWkiRYz8J2Xe4O7r8VDwV3q78hGhPzUJPbwgGIJTi6vG9TbKKTTmX9F5wwFQDFgT4b4nZSRhqbj2lMRDGGy1vlt9_LMsrryCePHnaujCP7ECAyJA55aedaEruexjUXp6AOyIAmHos8"
                />
              </div>
              <h5 className="font-serif text-xl text-on-surface italic tracking-tight">Monolithic Overcoat</h5>
              <p className="font-label text-[10px] text-primary mt-2">$1,450</p>
            </motion.div>
            {/* Product 2 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-surface-container p-10 group cursor-pointer md:translate-y-20"
            >
              <div className="aspect-[4/5] bg-surface-container-lowest overflow-hidden mb-8">
                <img 
                  alt="Product Item" 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 transition-all duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwbswmNAtNmWYuHuhWnlxF9NzwuPL7LeopploPsbZ4olT4qFC1qX5xfoz-D_G51KUIzokgZvJ1CACTJ8HqebrpUYEQtoWdoVs1Yt5Kwxl_C6fKIInExqJ1-uDTUzXw3vGIHSSJdjIqjxlTYKIfYo8Bxsr7fX1W8LfNTxzHppZyhKncUceObY4s2fmJ4lsuLDtYkZEJzYrQaGt08Rbd8yj7sZ4rJZ-mjYrJbm505Yw0kvDct9Evy1cHoIMXCS3f_XdmlMtk5j44cGA"
                />
              </div>
              <h5 className="font-serif text-xl text-on-surface italic tracking-tight">Asphalt Boots</h5>
              <p className="font-label text-[10px] text-primary mt-2">$780</p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
