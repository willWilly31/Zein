import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="font-bold text-2xl flex items-center gap-2">
              <span className="text-secondary text-3xl">L</span>
              <div className="flex flex-col leading-none">
                <span className="text-white tracking-wider">ZEIN</span>
                <span className="text-[10px] text-white/60 uppercase tracking-widest">Training Center</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Membangun kompetensi digital dan teknis untuk masa depan yang lebih cerah. Bergabunglah bersama ribuan alumni sukses kami.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Program Kursus</h4>
            <ul className="space-y-4 text-white/70 text-sm">
              <li><a href="#" className="hover:text-secondary transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Desain Grafis</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Office Administration</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Hardware Repair</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Bantuan</h4>
            <ul className="space-y-4 text-white/70 text-sm">
              <li><a href="#" className="hover:text-secondary transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Hubungi Kami</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Fasilitas</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Karir</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Kontak</h4>
            <ul className="space-y-4 text-white/70 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="text-secondary flex-shrink-0" />
                <span>Jl. Pendidikan No. 123, Jakarta Selatan, Indonesia</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-secondary flex-shrink-0" />
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-secondary flex-shrink-0" />
                <span>info@zeintraining.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© 2024 Zein Training Center. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
