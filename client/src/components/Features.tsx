import { motion } from "framer-motion";
import { CheckSquare, ShieldCheck, PenTool, RefreshCcw } from "lucide-react";

export function Features() {
  const points = [
    {
      icon: ShieldCheck,
      title: "Garansi Bisa Service",
      desc: "Tidak bisa? Mengulang gratis seumur hidup. Tanpa syarat ribet."
    },
    {
      icon: PenTool,
      title: "1 Siswa 1 Set Alat",
      desc: "Tidak perlu gantian solder atau blower. Waktu belajar 100% efektif."
    },
    {
      icon: RefreshCcw,
      title: "Update Materi Gratis",
      desc: "Teknologi HP berubah? Alumni dapat akses materi baru selamanya."
    }
  ];

  return (
    <section className="py-0 relative z-20 bg-white">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-0 border-industrial border-b-0 lg:border-b-2">
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] lg:h-auto order-2 lg:order-1 border-r-0 lg:border-r-2 border-primary/10"
          >
             <div className="absolute inset-0 bg-primary/10 z-10 mix-blend-multiply" />
            <img 
              src="https://pqf3k4ltkkhtm2vl.public.blob.vercel-storage.com/ti.png" 
              alt="Suasana Belajar Kondusif" 
              className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-0 left-0 bg-white p-6 border-t-2 border-r-2 border-primary/10 max-w-xs z-20">
              <p className="text-4xl font-bold text-primary mb-1">0%</p>
              <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">RISIKO GAGAL BELAJAR</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center p-8 lg:p-16 order-1 lg:order-2"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              INVESTASI AMAN, HASIL NYATA
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Kami paham ketakutan Anda: "Takut uang hilang tapi tidak bisa apa-apa". Ini jaminan kami:
            </p>
            
            <ul className="space-y-8">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 text-secondary rounded-none shrink-0">
                    <point.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-1">{point.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{point.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
