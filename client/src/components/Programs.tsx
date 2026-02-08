import { programs } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Programs() {
  return (
    <section id="programs" className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Program Pelatihan <span className="text-secondary">Unggulan</span> Kami
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pilih jalur karir yang sesuai dengan minat dan kebutuhan industri saat ini.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div 
              key={program.id} 
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className={`h-32 bg-gradient-to-r ${program.gradient} relative flex items-center justify-center`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                <program.icon className="text-white w-12 h-12 opacity-80 group-hover:scale-110 transition-transform duration-300" />
                
                {/* Background decorative number */}
                <span className="absolute -right-4 -bottom-8 text-9xl font-bold text-white opacity-5 select-none font-serif">
                  {program.id}
                </span>
              </div>
              
              <div className="p-8 space-y-4">
                <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                  {program.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed min-h-[80px]">
                  {program.description}
                </p>
                
                <div className="pt-4 flex justify-end">
                  <Button variant="ghost" size="sm" className="text-primary group-hover:text-secondary p-0 hover:bg-transparent flex gap-2 items-center">
                    Info Lengkap <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
