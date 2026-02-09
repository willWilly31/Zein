import { comparisonData } from "@/lib/data";
import { Check, X, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Comparison() {
  return (
    <section className="py-24 bg-background">
      <div className="container-wide">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            HITUNG INVESTASI ANDA
          </h2>
          <div className="p-6 bg-muted/30 border-l-4 border-secondary text-base text-muted-foreground leading-relaxed">
            <strong className="text-primary block mb-2">Panduan Memilih:</strong>
            <ul className="list-disc pl-5 space-y-1">
              <li>Pilih <strong className="text-primary">REGULER</strong> jika Anda punya waktu luang, suka diskusi komunitas, dan budget terbatas.</li>
              <li>Pilih <strong className="text-primary">PRIVATE</strong> jika Anda sibuk, butuh fokus intensif 1-on-1, dan ingin cepat balik modal.</li>
            </ul>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-primary">
                <th className="py-6 px-4 font-bold text-primary w-1/3">PARAMETER</th>
                <th className="py-6 px-4 font-bold text-primary bg-muted/30 w-1/3">REGULER (Community)</th>
                <th className="py-6 px-4 font-bold text-white bg-primary w-1/3">PRIVATE (Fast Track)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/10">
              {comparisonData.map((item, i) => (
                <tr key={i} className="hover:bg-muted/10 transition-colors">
                  <td className="py-4 px-4 font-medium text-primary flex items-center gap-2">
                    {item.label}
                    {/* Tooltip hint could go here */}
                  </td>
                  <td className="py-4 px-4 bg-muted/10 text-muted-foreground">{item.regular}</td>
                  <td className="py-4 px-4 bg-primary/5 font-bold text-primary border-l-2 border-primary/10">{item.private}</td>
                </tr>
              ))}
              <tr className="bg-muted/20">
                <td className="py-4 px-4 font-bold text-primary">COCOK UNTUK</td>
                <td className="py-4 px-4 text-muted-foreground italic">"Saya ingin belajar santai & hemat."</td>
                <td className="py-4 px-4 font-bold text-primary border-l-2 border-primary/10 italic">"Saya ingin cepat buka usaha."</td>
              </tr>
              <tr>
                <td className="py-8 px-4"></td>
                <td className="py-8 px-4 bg-muted/10">
                  <Button variant="outline" className="w-full border-2 border-primary/20 hover:bg-primary/5 rounded-none font-bold h-12">
                    AMBIL REGULER
                  </Button>
                </td>
                <td className="py-8 px-4 bg-primary/5 border-l-2 border-primary/10">
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white rounded-none font-bold h-12">
                    AMBIL PRIVATE
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
