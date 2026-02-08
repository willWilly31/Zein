import { GraduationCap, Monitor, Briefcase, Code, Megaphone, PenTool, Calendar, Clock, Users, BookOpen, User } from "lucide-react";

export const navLinks = [
  { label: "Home", href: "#" },
  { label: "Program", href: "#programs" },
  { label: "Fasilitas", href: "#facilities" },
  { label: "Tentang Kami", href: "#about" },
  { label: "Kontak", href: "#contact" },
];

export const features = [
  {
    icon: GraduationCap,
    title: "Instruktur Berpengalaman",
    description: "Pelatihan dipandu oleh praktisi ahli dengan pengalaman industri bertahun-tahun."
  },
  {
    icon: Monitor,
    title: "Program Terapan",
    description: "Kurikulum dirancang sesuai kebutuhan industri terkini dengan fokus praktik langsung."
  },
  {
    icon: Briefcase,
    title: "Siap Kerja",
    description: "Bimbingan karir intensif untuk mempersiapkan Anda bersaing di dunia profesional."
  }
];

export const programs = [
  {
    id: 1,
    title: "Teknisi Ponsel (Hardware & Software)",
    description: "Kuasai teknik perbaikan hardware dan software ponsel terkini, mulai dari troubleshooting dasar hingga teknik soldering tingkat lanjut.",
    icon: Monitor, // Using Monitor as a placeholder or could use a Smartphone icon if available, but Monitor works for technical
    gradient: "from-blue-600 to-blue-800"
  },
  {
    id: 2,
    title: "Web Development",
    description: "Kuasai HTML, CSS, JavaScript, hingga React dan Node.js untuk menjadi Fullstack Developer handal.",
    icon: Code,
    gradient: "from-blue-600 to-blue-800"
  },
  {
    id: 3,
    title: "Digital Marketing",
    description: "Pelajari strategi pemasaran digital, SEO, SEM, dan Social Media Management untuk bisnis modern.",
    icon: Megaphone,
    gradient: "from-orange-500 to-orange-600"
  }
];

export const comparisonData = [
  {
    label: "Durasi Belajar",
    private: "Maksimal 3 Bulan",
    regular: "1 Bulan Penuh"
  },
  {
    label: "Jadwal Masuk",
    private: "Fleksibel (Bebas Atur Jadwal)",
    regular: "Senin s/d Sabtu (10.00 – 16.00) (20 sesi)"
  },
  {
    label: "Jumlah Sesi Belajar",
    private: "30+ sesi",
    regular: "Belajar ramai-ramai dalam grup (maks 10-15 peserta)"
  },
  {
    label: "Fokus Pengajaran",
    private: "Belajar 1-on-1 fokus dengan mentor",
    regular: "Tool lengkap, ruangan kelas bersama lainnya"
  },
  {
    label: "Fasilitas Belajar",
    private: "Tool lengkap, ruangan private dan nyaman",
    regular: "10-15 peserta"
  },
  {
    label: "Jumlah Peserta",
    private: "1 peserta (1-on-1)",
    regular: "Belajar hardware level basic dengan batasan usia dan waktu latihan"
  },
  {
    label: "Materi Pembelajaran",
    private: "Materi Advanced & Customized", // Inferring from context
    regular: "Belajar hardware level basic dengan batasan usia dan waktu latihan"
  }
];
