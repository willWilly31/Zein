import { comparisonData } from "@/lib/data";
import { Check, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Comparison() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/20 text-primary">
            Pilihan Kelas
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Masih Bingung Pilih Kursus?
          </h2>
          <p className="text-muted-foreground text-lg">
            Bandingkan Kelas <span className="text-secondary font-bold">Private</span> vs <span className="text-accent font-bold">Reguler</span> dengan Mudah!
          </p>
        </div>

        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden border border-gray-200 shadow-xl bg-white">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_2fr]">
            {/* Header Row for Mobile hidden, handled in grid */}
            
            {/* Column Headers */}
            <div className="hidden md:flex flex-col justify-center p-6 bg-slate-50 font-bold text-slate-700 border-b border-r border-gray-200">
              Durasi & Fasilitas
            </div>
            <div className="p-6 bg-secondary/10 border-b md:border-r border-white/50 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-10">
                <Badge className="bg-secondary scale-150">PRIVATE</Badge>
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-2">Kelas PRIVATE</h3>
              <p className="text-sm text-secondary/80">Fokus Personal & Intensif</p>
            </div>
            <div className="p-6 bg-accent/10 border-b border-gray-200 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-10">
                <Badge className="bg-accent scale-150">REGULER</Badge>
              </div>
              <h3 className="text-2xl font-bold text-accent mb-2">Kelas REGULER</h3>
              <p className="text-sm text-accent/80">Belajar Komunitas & Hemat</p>
            </div>

            {/* Data Rows */}
            {comparisonData.map((item, index) => (
              <div key={index} className="contents group">
                {/* Label Column */}
                <div className="p-4 md:p-6 flex items-center font-semibold text-slate-700 bg-slate-50/50 border-b border-r border-gray-100 group-last:border-b-0">
                  {item.label}
                </div>
                
                {/* Private Column */}
                <div className="p-4 md:p-6 flex items-center gap-3 bg-secondary/5 border-b md:border-r border-orange-100 group-last:border-b-0 group-hover:bg-secondary/10 transition-colors">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-sm md:text-base font-medium text-slate-800">{item.private}</span>
                </div>
                
                {/* Regular Column */}
                <div className="p-4 md:p-6 flex items-center gap-3 bg-accent/5 border-b border-gray-100 group-last:border-b-0 group-hover:bg-accent/10 transition-colors">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                    <CheckCircle2 size={14} strokeWidth={3} />
                  </div>
                  <span className="text-sm md:text-base font-medium text-slate-800">{item.regular}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Price / Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_2fr] bg-slate-900 text-white">
            <div className="p-6 flex items-center justify-center md:justify-start font-bold border-r border-slate-800">
              Investasi Belajar
            </div>
            <div className="p-6 border-b md:border-b-0 md:border-r border-slate-800 bg-secondary text-white flex flex-col items-center justify-center text-center">
              <span className="text-sm opacity-90 mb-1">Mulai Dari</span>
              <span className="text-2xl font-bold">Rp 10.000.000</span>
              <span className="text-xs mt-2 opacity-80">*Harga dapat berubah</span>
            </div>
            <div className="p-6 bg-accent text-white flex flex-col items-center justify-center text-center">
               <span className="text-sm opacity-90 mb-1">Paket Hemat</span>
              <span className="text-2xl font-bold">Terjangkau</span>
               <span className="text-xs mt-2 opacity-80">Hubungi CS untuk detail</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
