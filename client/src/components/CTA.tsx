import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container-wide text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          SIAP JADI TEKNISI?
        </h2>
        <p className="text-primary-foreground/80 text-xl max-w-2xl mx-auto mb-10">
          Slot terbatas. Kami hanya menerima siswa yang serius ingin bisa.
        </p>
        <Button 
          size="lg" 
          className="bg-secondary hover:bg-secondary/90 text-white rounded-none px-12 h-16 text-lg font-bold tracking-widest"
        >
          DAFTAR SEKARANG
        </Button>
      </div>
    </section>
  );
}
