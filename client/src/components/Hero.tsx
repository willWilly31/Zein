import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-20 lg:pt-24 pb-0 overflow-hidden bg-background">
      <div className="container-wide px-0 lg:px-8">
        <div className="relative grid lg:grid-cols-12 gap-0 border-industrial border-x-0 lg:border-x-2 border-b-0 lg:border-b-2">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center px-6 py-12 lg:p-16 lg:pr-32 z-20 bg-background/90 lg:bg-transparent pointer-events-none lg:pointer-events-auto"
          >
            <div className="w-24 h-2 bg-secondary mb-10" />
            
            <h1 className="text-5xl lg:text-[5.5rem] font-bold text-primary leading-[0.9] tracking-tighter mb-8 lg:-mr-40 mix-blend-hard-light relative z-30">
              BINGUNG <br/>
              ARAH KERJA?
            </h1>
            
            <div className="lg:pl-2 border-l-4 border-primary/10 lg:border-none pl-6">
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-md leading-relaxed font-medium mb-10">
                Jangan buang waktu dengan teori. <br/>
                <span className="text-primary font-bold">Tangan kotor. Skill naik. Siap kerja.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 pointer-events-auto">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-none h-16 px-10 text-lg font-bold tracking-widest shadow-xl shadow-secondary/20">
                  LIHAT PROGRAM
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
                <div className="pt-2 sm:pt-0">
                  <Button size="lg" variant="ghost" className="rounded-none h-14 px-8 text-base font-bold tracking-wide text-primary hover:bg-primary/5 hover:text-primary underline underline-offset-8 decoration-2">
                    KONSULTASI DULU
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative h-[50vh] lg:h-auto min-h-[500px] border-l-0 lg:border-l-2 border-primary/10"
          >
            <div className="absolute inset-0 bg-primary/20 z-10 mix-blend-multiply" />
            <img 
              src="https://pqf3k4ltkkhtm2vl.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-09%20at%2008.15.02.jpeg" 
              alt="Teknisi Handphone Profesional" 
              className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-1000 ease-out"
            />
            
            <div className="absolute top-0 right-0 p-6 z-20">
              <div className="bg-white/90 backdrop-blur p-4 border border-primary/10 shadow-lg max-w-[200px]">
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">INTAKE</p>
                <p className="font-bold text-primary text-sm leading-tight">GELOMBANG 12 DIBUKA SAMPAI 30 MARET</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
