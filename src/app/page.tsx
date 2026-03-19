"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Box } from "lucide-react";

const products = [
  {
    id: "01",
    title: "Monolith Overcoat",
    desc: "Obsidian / Wool Blend",
    price: "$1,850",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDABMUZlX1NBPEO7u_g3TvU-FtXJ1sSMiqUisfHzcFaVx0J8QQeNqkZcxsUnSLEhGvg98mTP6Rwlh4IZxnTH1XLCH0vuqAXv9Wf7WtwDAZKC3MfF3wPIZ6auPd7QrzaoDMSBqBKBQ5iDwJadhVJ9EtPubkNoxk2KzWfYdYvnT6JXcRwKvkn2F22urNDbg-eBZYSo4SPlZ8AkeFffLRcWN2dseJOd5M2Yh4C9RcwcpGZ3Wy9WCrv5BFx1dXWMEkkqoBwrC9K-efq5AA",
  },
  {
    id: "02",
    title: "Brutalist Trousers",
    desc: "Concrete Grey / Raw Silk",
    price: "$920",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLX14kMLzKMj2XWrRMR1enrW6pQM1PsAP62ZtNAtbBovY7El1Va_UmoC3xAFjt3uE_HPrezxnHsAbbjFr72H70pvzuTI5gSYKAq04_v05fVVbrehJQZ0kaU65vO4m1T3VLgEfn-0vkf1_LNprvFR3zTwCqGn7IxZyTGQzNDF58QnLiKgU_0rS1Pu8yH9hflwuK109BE61e8PlaSiH1ldJpejQ0he4pb0cbM96m7NfuZYvEb_WhHeJd-C5VW_hGKDSMD5go0psTG6U",
  },
  {
    id: "03",
    title: "Ironwork Chelsea Boot",
    desc: "Matte Black / Calf Leather",
    price: "$1,200",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWgxsBZ6SPNN5m_zg2IyNqI16v3UbfgT1RkciZNR0H8eKOfj4IST2jvYimgUQenv72tseHTeen3iXAx9YKk2TBipaVoaG7_WXaLfSD2gKN2yi59CkICyqAeG3q5TXZ4-Yc-KzHn5ePqh3KsKOSWxBFEv2EVfN1L7zUUpHLaoKDmlaQzomb6Ga8c-kA_5PhyfkxLDUbgIuJl0V3pRUVNxSdsh8YjJST6fKaJ8gFmtVVAyVnOHo--ceO9mrv33pYKhuHW1WpZUGBJ0A",
  },
];

export default function Home() {
  return (
    <main className="pt-24 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[92vh] w-full flex items-center px-6 md:px-[8.5rem] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="w-full h-full object-cover grayscale"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtwBugXxKlv-BRb2pdc0bBDH-fQf8z9T2qz0tTsG9onHbJG3MJFVvGkBpG-Qns5gBKXzSxj4jaSGMcNXU4mGdqrJ0AW5vy5MgvH4wFtuEAIeIyZ-z2HhmHtRquW3mZOsgJMRvWtYIAC33B7Gi0aYInWFARsXCoOCeSR2j9FFAJ7nO66Luz1YTQBkV21hPWi0zf7WWvf0Pp1ELYfD544VRAat3zPPMk-d562t-wlr4pbEyUgXeo1FWipuRWGh1zZIlN07tAyfjmz0A"
            alt="Hero editorial"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="font-label text-primary mb-4 block"
          >
            Seasonal Archive 01
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="font-serif italic text-7xl md:text-9xl text-on-surface leading-[0.9] tracking-tighter mb-12"
          >
            The Silent <br />Authority.
          </motion.h1>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-br from-primary to-primary-container text-on-primary font-label px-12 py-5 transition-transform"
          >
            Explore
          </motion.button>
        </div>
      </section>

      {/* New Arrivals Showcase */}
      <section className="py-24 md:py-[8.5rem] bg-[#0e0e0e] relative overflow-hidden">
        <div className="absolute -top-10 left-0 w-full pointer-events-none select-none overflow-hidden">
          <h2 className="font-serif text-[15rem] text-primary opacity-[0.03] whitespace-nowrap leading-none uppercase italic">
            Grit & Glory Grit & Glory
          </h2>
        </div>

        <div className="px-6 md:px-[8.5rem] mb-20 flex justify-between items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif italic text-5xl md:text-6xl text-on-surface mb-2 tracking-tight">New Arrivals</h2>
            <p className="font-label text-on-surface-variant">Forged for the Modern Architect</p>
          </motion.div>
          <div className="flex gap-4">
            <button className="p-3 border border-outline-variant/30 text-primary hover:bg-primary/10 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-3 border border-outline-variant/30 text-primary hover:bg-primary/10 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex overflow-x-auto hide-scrollbar gap-12 px-6 md:px-[8.5rem]">
          {products.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className={`flex-none w-[320px] md:w-[450px] group relative ${idx % 2 !== 0 ? "mt-12 md:mt-24" : ""}`}
            >
              <div className="bg-surface-container aspect-[3/4] overflow-hidden relative mb-8 border border-outline-variant/10 shadow-2xl">
                <img 
                  className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-110 group-hover:grayscale-0" 
                  src={product.image} 
                  alt={product.title} 
                />
                <div className="absolute bottom-4 left-4 font-serif italic text-4xl text-primary opacity-20 pointer-events-none">{product.id}</div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-label text-on-surface tracking-[0.2em]">{product.title}</h3>
                  <p className="font-label text-[0.6rem] text-on-surface-variant mt-1">{product.desc}</p>
                </div>
                <span className="font-label text-primary">{product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Editorial Section */}
      <section className="py-[8.5rem] px-6 md:px-[8.5rem] flex flex-col md:flex-row gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 overflow-hidden relative group"
        >
          <img 
            className="w-full h-auto grayscale filter brightness-75 transition-transform duration-[2s] group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDusL4Huvg_sknXLNcLm3r-cma77wgLo82wOF7Fnh-OYZlDEm_KarBcaSyyoVp0MVZYAwRcd_A2Y-_J6IqK8Vg7W5eLlfoiq0sazrXw16KtaYCtun79ANatFE9GrDPWAl-_soXIwbQ5R_MaLAIZskOQxBOCdC1yWyi3AHyDvA8R-3tMPvVUFGcyuoGDCqtIpjibOJP-hycdupKlMblwoGyvVw-zXeyPsjkmEi7b8U31NO86uHDEI2o3y1AufVLeQ6Xxb-kfd1cBkqk" 
            alt="Editorial shoot" 
          />
          <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
        </motion.div>
        
        <div className="w-full md:w-1/2">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-label text-primary mb-6 block"
          >
            Editorial Insight
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-serif italic text-5xl md:text-7xl leading-[1] mb-8 tracking-tighter"
          >
            Concrete <br />as a Second Skin.
          </motion.h2>
          <p className="text-on-surface-variant text-lg font-light leading-relaxed mb-10 max-w-lg">
            An exploration of textures that defy the digital age. We look at the interplay between raw architectural geometry and the fluid movement of the human form.
          </p>
          <a className="inline-block font-label text-primary border-b-2 border-primary pb-2 group" href="#">
            Read More
            <span className="inline-block translate-x-0 group-hover:translate-x-2 transition-transform duration-300 ml-3">→</span>
          </a>
        </div>
      </section>

      {/* Brand Credo / Large Quote */}
      <section className="py-40 px-6 text-center bg-surface-container/30 border-y border-outline-variant/5">
        <div className="max-w-4xl mx-auto">
          <Box className="w-12 h-12 text-primary mx-auto mb-10 stroke-[1px]" />
          <motion.blockquote 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="font-serif italic text-4xl md:text-6xl text-on-surface mb-12 tracking-tight leading-tight"
          >
            "Luxury is not the presence of ornament, but the absence of compromise."
          </motion.blockquote>
          <p className="font-label text-on-surface-variant tracking-[0.4rem]">THE GRIT & GLORY MANIFESTO</p>
        </div>
      </section>
    </main>
  );
}
