"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ArchivePage() {
  return (
    <main className="pt-32 min-h-screen">
      {/* Hero Section */}
      <section className="px-6 md:px-10 mb-24 md:mb-40 flex flex-col md:flex-row justify-between items-end">
        <div className="max-w-3xl">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-label text-primary uppercase tracking-widest text-xs mb-4 block"
          >
            HISTORICAL PRESERVATION
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-6xl md:text-[5.5rem] leading-[1] tracking-tighter text-on-surface mb-8"
          >
            The Archive <br/> 
            <span className="italic font-light opacity-60 text-4xl md:text-6xl">Legacy Pieces 2018—2024</span>
          </motion.h1>
        </div>
        <div className="hidden md:block pb-4">
          <p className="font-label text-on-surface-variant uppercase tracking-widest text-[10px] text-right">VOLUME 04 / CURATED BY AUTHORITY</p>
        </div>
      </section>

      {/* Magazine Grid */}
      <section className="px-6 md:px-10 grid grid-cols-12 gap-8 pb-24">
        {/* Vault Jacket */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="col-span-12 md:col-span-8 group relative overflow-hidden bg-surface-container-lowest h-[70vh] hover:shadow-[0_0_40px_-10px_rgba(242,202,80,0.4)] border border-outline-variant/10 transition-all duration-700"
        >
          <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-10 transition-opacity duration-700">
            <img className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlILA6MmrcSFYL5I9vXqnbzELGyrK3h9wmkcvGFyGsba4077_kkfe7zmqsGQeuSkEpwU0QugwEAsWc3wIEii33GaRIryYNqIpjEL9bfk2CZ-2eiGT54pxk89KWtx_OeUgYq6FHzmxO5eev6T6XWfvz7s6Oiqvjrw4njy_7wUByDrh8NBbesAlhg6iYOndgm32SIW5J4qqiddxqPluUKNTCtRckWVGq6mfRXAQpgNlP1r58w3vI7VQPqZyN6ggii7acLVwANKVH8G0" alt="Vault Jacket" />
          </div>
          <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-60 transition-opacity duration-700">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAHConnzwwovO5IpzgZpuPgO9CU1xTSCLdlq9AGzSWTvANmcIRhsFpXjL1R60CT0o_dJERbIzBZTTAf7DU_UdPdaqIB9jsXuZT_gElkOtk-ntm2pkgieJOQLJiFBfx1FtAZiiv3S8MJAanfJqXA93U8VpKOU6pyWe4EKtqBjuhmh6V5FjU2AzcMb8IVl5wiAP6I8jWnrlxL25MxZatDJXI2NDiFS39X1OQsGL332iIGygoDilA58q24mbmaTEKaRTmbpazDR4ZdQA" alt="Vault Jacket Detail" />
          </div>
          <div className="absolute -top-10 -left-10 font-serif text-8xl text-primary opacity-10 pointer-events-none select-none italic">GRIT</div>
          <div className="absolute bottom-10 left-10 z-20">
            <h3 className="font-serif text-4xl mb-2 text-on-surface italic">Vault Jacket</h3>
            <p className="font-label text-primary tracking-widest text-[11px]">LEGACY / WINTER 2021</p>
          </div>
          <div className="absolute bottom-10 right-10 z-20 translate-y-20 group-hover:translate-y-0 transition-transform duration-700">
            <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary font-label px-8 py-4 text-[11px] tracking-widest flex items-center gap-4">
              REQUEST ACCESS <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Apex Runner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="col-span-12 md:col-span-4 group relative overflow-hidden bg-surface-container h-[70vh] flex flex-col justify-center px-12 border border-outline-variant/10 hover:shadow-[0_0_40px_-10px_rgba(242,202,80,0.4)] transition-all duration-700"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <img className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvibnjHh8TVTukkDTw92UY50vHui2ZsMmzRGQ0tWZWe3Bkxh3gjAw6XEMWJ_fs0B3MN5o3VN6xQPNejcLvoefF47a3erhLAyKKhArim22-gdm5DoLN4UD9ZGORrX80FXpfD3-gzXR1pvHAPO5SuwapH_uBQCIe5yVq85Ii1n73ggq45e2rIudmRoN6Ftvl3uoAuQ_U4nVFnnD_sotQEFv2GtJlSNOYoj3hctkKACV5vWnO9-B0P7YSDhZPR23jwokA9f_SFk9dGCg" alt="Apex Detail" />
          </div>
          <div className="relative z-10">
            <h3 className="font-serif text-3xl mb-4 text-on-surface italic">Apex Runner V.2</h3>
            <p className="font-sans text-on-surface-variant text-sm mb-8 leading-relaxed max-w-[200px] font-light">
              Architectural form meets high-performance propulsion. The pinnacle of our 2022 laboratory series.
            </p>
            <button className="border-b-2 border-primary text-primary font-label py-2 text-[10px] hover:text-on-surface hover:border-on-surface transition-all">
              VIEW SCHEMATICS
            </button>
          </div>
          <div className="absolute bottom-10 -right-10 font-serif text-7xl text-primary opacity-10 pointer-events-none italic">GLORY</div>
        </motion.div>

        {/* Obsidian Trousers */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="col-span-12 group relative overflow-hidden bg-surface-container-lowest h-[60vh] border border-outline-variant/10 hover:shadow-[0_0_40px_-10px_rgba(242,202,80,0.4)] transition-all duration-700"
        >
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 grayscale group-hover:grayscale-0 transition-all duration-1000">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUM23kjsCUE3gDIwUqfytRJCJnczAZJaVRP6rPAw8M2cu8AlavCJKBasJIec_8sko2QbedPT9lWBVZK0oj6j-ouhY70UNkVkVFj9nJzEqnciABvW7v5n64Fi9RDqvgIPZ9P1CoQALbdK8kpvZUd7twzO-9ue_-qjjgoZ29Pd84diTeOkPeN7eoU51Q2dQIUyh9aU79sj7BXdjCVewICTlvTdkDX_0oX09fLvgLt0dQwlCFIPlrNFz_Pu3jtEsVulus46rSP1NsA7o" alt="Obsidian Texture" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80" />
          <div className="absolute top-1/2 left-10 md:left-20 -translate-y-1/2 z-10">
            <h3 className="font-serif text-[4rem] md:text-[6rem] leading-none mb-2 text-on-surface italic tracking-tighter">Obsidian <br/> Trousers</h3>
            <p className="font-label text-on-surface-variant uppercase mb-8">CRAFTED FOR ENDURANCE / 2023</p>
            <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary font-label px-10 py-5 text-[11px] group-hover:scale-105 transition-transform duration-500">
              COLLECT PIECE
            </button>
          </div>
          <div className="absolute bottom-10 right-10 md:right-20 text-right opacity-40">
            <p className="font-label text-[10px] tracking-[0.3em]">MATERIALS: REINFORCED NYLON, LIQUID GOLD HARDWARE</p>
          </div>
        </motion.div>
      </section>

      {/* Signature Section */}
      <section className="py-40 flex flex-col items-center justify-center border-t border-outline-variant/10 mx-6 md:mx-10 relative overflow-hidden">
        <div className="font-serif text-[15rem] leading-none text-primary opacity-[0.03] select-none pointer-events-none uppercase italic">GLORY</div>
        <div className="-mt-40 text-center relative z-10 max-w-xl">
          <p className="font-label text-primary tracking-[0.5em] text-[12px] mb-6">ESTABLISHED MMXVIII</p>
          <p className="font-serif text-on-surface-variant italic text-xl md:text-2xl leading-relaxed">
            "Grit is the resolve to continue; Glory is the architectural evidence of that endurance."
          </p>
        </div>
      </section>
    </main>
  );
}
