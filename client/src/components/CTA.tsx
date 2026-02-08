import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-secondary">
          {/* Background Image Overlay */}
          <div className="absolute inset-0">
            <img 
              src="/images/office-bg.png" 
              alt="Background" 
              className="w-full h-full object-cover opacity-20 mix-blend-multiply"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 to-orange-500/80" />
          </div>

          <div className="relative z-10 p-10 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Bangun Masa Depan Anda <br/>
                bersama Zein Training Center
              </h2>
              <p className="text-orange-50 text-lg opacity-90">
                Jangan tunda kesuksesan Anda. Mulai langkah pertama hari ini.
              </p>
            </div>
            
            <div className="flex-shrink-0">
              <Button 
                size="lg" 
                className="bg-white text-secondary hover:bg-gray-100 rounded-full px-10 h-14 text-lg font-bold shadow-2xl"
              >
                Daftar Sekarang
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
