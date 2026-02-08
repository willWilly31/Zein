import { features } from "@/lib/data";
import { motion } from "framer-motion";

export function Features() {
  return (
    <section className="py-16 -mt-10 relative z-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-3xl shadow-xl border border-blue-50 p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center px-4 pt-8 md:pt-0"
              >
                <div className="bg-blue-50 p-4 rounded-2xl mb-6 text-primary">
                  <feature.icon size={32} />
                </div>
                <h3 className="font-bold text-xl mb-3 text-primary">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
