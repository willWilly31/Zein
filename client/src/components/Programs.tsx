import { motion } from "framer-motion";
import { ArrowRight, Wrench, Smartphone, Settings, User, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Programs() {
  const programs = [
    {
      title: "Teknisi Ponsel (Basic - Advanced)",
      target: "Pemula Total",
      goal: "Buka Konter Mandiri",
      description: "Diagnosis, soldering, reballing, dan flashing. Dari nol sampai bisa buka konter.",
      icon: Smartphone
    },
    {
      title: "Spesialis Hardware & CPU",
      target: "Teknisi Menengah",
      goal: "Terima Lemparan Servis",
      description: "Pendalaman skematik dan troubleshooting kasus berat (CPU, MMC, UFS).",
      icon: Settings
    },
    {
      title: "Manajemen Bisnis Servis",
      target: "Owner Konter",
      goal: "Scale Up & Auto-Pilot",
      description: "Bukan cuma teknis, tapi cara kelola pelanggan, stok, dan manajemen cashflow.",
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-0 relative bg-muted/30">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-0 border-industrial border-b-0 lg:border-b-2">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center p-8 lg:p-16 border-r-0 lg:border-r-2 border-primary/10"
          >
            <div className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                PILIH JALUR KARIR
              </h2>
              <p className="text-muted-foreground">
                Sesuaikan dengan posisi Anda saat ini. Jangan salah ambil kelas.
              </p>
            </div>
            
            <div className="space-y-0 divide-y-2 divide-primary/5 border-t-2 border-b-2 border-primary/5">
              {programs.map((program, index) => (
                <div key={index} className="py-6 group cursor-pointer hover:bg-white transition-colors px-4 -mx-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/5 text-primary rounded-none group-hover:bg-secondary group-hover:text-white transition-colors mt-1">
                      <program.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary px-2 py-1 rounded-sm">
                          Target: {program.target}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-secondary/10 text-secondary px-2 py-1 rounded-sm">
                          Goal: {program.goal}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                        {program.description}
                      </p>
                      <div className="flex items-center text-sm font-bold text-primary group-hover:text-secondary opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                        LIHAT SILABUS LENGKAP <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] lg:h-auto overflow-hidden bg-primary/5"
          >
             <div className="absolute inset-0 bg-primary/10 z-10 mix-blend-multiply" />
            <img 
              src="https://pqf3k4ltkkhtm2vl.public.blob.vercel-storage.com/rt.png" 
              alt="Fasilitas Lengkap Standar Industri" 
              className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute top-0 right-0 bg-secondary text-white p-4 z-20">
              <p className="font-bold text-sm">FASILITAS LENGKAP</p>
            </div>
            
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur p-6 border-l-4 border-secondary max-w-md">
              <p className="text-sm font-bold text-primary mb-1">REALITA LAPANGAN:</p>
              <p className="text-sm text-muted-foreground">
                "90% teknisi pemula gagal karena cuma belajar teori. Di sini, Anda belajar dengan membongkar kasus nyata."
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
