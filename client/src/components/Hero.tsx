import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 z-10"
          >
            <h1 className="text-4xl lg:text-6xl font-extrabold text-primary leading-tight text-balance">
              Latih Skill, Raih <br/>
              <span className="text-secondary">Karier Cemerlang</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Bergabunglah dengan program pelatihan kerja terkemuka yang siap mempersiapkan Anda untuk dunia kerja profesional.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 h-12 text-base shadow-lg shadow-orange-500/20">
                Lihat Program
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base border-primary/20 text-primary hover:bg-primary/5">
                Hubungi Kami
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-end justify-center lg:justify-end"
          >
            {/* Background blob/shape */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-transparent rounded-full blur-3xl opacity-50 transform translate-x-10 translate-y-10" />
            
            <img 
              src="/images/hero-team.png" 
              alt="Zein Training Instructors" 
              className="relative z-10 max-h-[500px] lg:max-h-full object-contain drop-shadow-2xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
