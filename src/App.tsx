import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Film,
  Gamepad2,
  ScanEye,
  ExternalLink,
  Maximize2,
  Minimize2,
  Menu,
  X,
  CheckCircle2,
  BookOpen,
  Play,
  ArrowUpRight,
  Compass,
  Wand2,
  Layers,
  AppWindow,
  Music,
  Image as ImageIcon,
  Briefcase,
  Joystick,
  Languages,
  Search,
  LayoutTemplate,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export type StudioCategory = "all" | "games" | "multimedia" | "teacher";

export interface StudioMenuItem {
  id: string;
  number: string;
  category: Exclude<StudioCategory, "all">;
  categoryLabel: string;
  menuTitle: string;
  englishSubtitle: string;
  badgeText: string;
  description: string;
  highlights: string[];
  coverImage: string;
  fallbackCoverImage: string;
  fileUrl: string;
  fileName: string;
  isExternal?: boolean;
  cannotEmbedInIframe?: boolean;
  icon: React.ElementType;
  accentTag: string;
  idealFor: string;
  examples?: {
    title: string;
    type: "html" | "video";
    url: string;
  }[];
}

const STUDIO_MENUS: StudioMenuItem[] = [
  {
    id: "motion-graphic",
    number: "01",
    category: "multimedia",
    categoryLabel: "สื่อมัลติมีเดีย ภาพ และเสียง",
    menuTitle: "สร้าง Motion Graphic",
    englishSubtitle: "Motion Prompt Studio",
    badgeText: "JS Animation & Kinetic Storytelling",
    description:
      "ออกแบบโครงเรื่องและสร้าง Prompt สำหรับผลิตแอนิเมชันและ Motion Graphic เพื่อการเรียนรู้ กำหนดฉาก ตัวละคร จังหวะเวลา และเอฟเฟกต์ภาพเคลื่อนไหวได้อย่างเป็นระบบ",
    highlights: [
      "มีรูปแบบตั้งต้น (Presets) สำหรับสื่อการสอนหลากหลายสไตล์",
      "กำหนด Scene, โทนสี, อัตราส่วนภาพ และความยาววิดีโอได้ละเอียด",
      "สร้างโค้ด HTML/JS Animation ไฟล์เดียวพร้อมนำเสนอในชั้นเรียนทันที",
    ],
    coverImage: "./public/images/cover-motion.jpg",
    fallbackCoverImage: "./images/cover-motion.jpg",
    fileUrl: "motion_prompt_studio.html",
    fileName: "motion_prompt_studio.html",
    icon: Film,
    accentTag: "MOTION GRAPHIC STUDIO",
    idealFor: "สื่อนำเข้าสู่บทเรียน • สรุปแนวคิดสำคัญ • แอนิเมชันอธิบายกระบวนการ",
    examples: [
      {
        title: "ตัวอย่างชิ้นงาน: การผันวรรณยุกต์ (Interactive HTML)",
        type: "html",
        url: "AI Motion Studio/วรรณยุกต์.html",
      },
      {
        title: "วิดีโอ: หลักการสร้าง Animation",
        type: "video",
        url: "AI Motion Studio/หลักการสร้าง Animation.mp4",
      },
      {
        title: "วิดีโอ: การผันวรรณยุกต์ (Opus)",
        type: "video",
        url: "AI Motion Studio/การผันวรรณยุกต์ Opus5.5.mp4",
      },
      {
        title: "วิดีโอ: Animation by ChatGPT Pro",
        type: "video",
        url: "AI Motion Studio/1 Animation by ChatGPT Pro.mp4",
      },
      {
        title: "วิดีโอ: Animation by Gemini Free",
        type: "video",
        url: "AI Motion Studio/2 Animation by Gemini Free.mp4",
      },
      {
        title: "วิดีโอ: Animation by Deepseek Free",
        type: "video",
        url: "AI Motion Studio/3 Animation by Deepseek Free.mp4",
      },
    ],
  },
  {
    id: "general-game",
    number: "02",
    category: "games",
    categoryLabel: "เกมการเรียนรู้ (Game-Based Learning)",
    menuTitle: "สร้างเกมการเรียนรู้ทั่วไป",
    englishSubtitle: "Primary & Classroom Game Creator",
    badgeText: "Interactive Classroom Games",
    description:
      "คลังแม่แบบและเครื่องมือสร้าง Prompt เกมการศึกษาสำหรับห้องเรียน เปลี่ยนเนื้อหาวิชาการให้กลายเป็นเกมฝึกทักษะ แข่งขันตอบคำถาม และผจญภัยที่นักเรียนมีส่วนร่วมได้ทันที",
    highlights: [
      "ครอบคลุมแม่แบบเกมหลากหลายแนว ทั้งจับคู่ ตอบคำถาม เขาวงกต และบอร์ดเกม",
      "ปรับระดับชั้น วิชา เนื้อหา และกติกาการให้คะแนนตามวัตถุประสงค์การเรียนรู้",
      "รองรับการเล่นบนคอมพิวเตอร์ แท็บเล็ต และสมาร์ตโฟนในห้องเรียน",
    ],
    coverImage: "./public/images/cover-game.jpg",
    fallbackCoverImage: "./images/cover-game.jpg",
    fileUrl: "ห้องสร้างเกมประถม.html",
    fileName: "ห้องสร้างเกมประถม.html",
    icon: Gamepad2,
    accentTag: "CLASSROOM GAME LAB",
    idealFor: "เกมทบทวนบทเรียน • กิจกรรมกลุ่มในชั้นเรียน • แบบฝึกหัดเชิงรุก (Active Learning)",
  },
  {
    id: "ar-game",
    number: "03",
    category: "games",
    categoryLabel: "เกมการเรียนรู้ (Game-Based Learning)",
    menuTitle: "สร้างเกมการเรียนรู้ด้วย AR",
    englishSubtitle: "Educational AR Game Prompt Generator",
    badgeText: "Augmented Reality & Camera Tracking",
    description:
      "ยกระดับห้องเรียนด้วยเกมเสมือนจริง (WebAR) และระบบตรวจจับการเคลื่อนไหวผ่านกล้องเว็บแคมหรือแท็บเล็ต ให้ผู้เรียนขยับร่างกาย หยิบจับวัตถุ และทดลองในโลกเสมือนจริง",
    highlights: [
      "รวมกรณีศึกษาเกม AR ระดับโลก พร้อมโครงสร้าง Prompt ที่พร้อมใช้งาน",
      "รองรับการโต้ตอบด้วยกล้อง (Hand Tracking, Face/Pose Detection, Object Sorting)",
      "สร้างเกมต้นแบบ WebAR ที่เปิดเล่นผ่านเบราว์เซอร์ได้ทันทีโดยไม่ต้องลงแอป",
    ],
    coverImage: "./public/images/cover-ar.jpg",
    fallbackCoverImage: "./images/cover-ar.jpg",
    fileUrl: "Educational AR Game Prompt Generator.html",
    fileName: "Educational AR Game Prompt Generator.html",
    icon: ScanEye,
    accentTag: "AUGMENTED REALITY STUDIO",
    idealFor: "การทดลองวิทยาศาสตร์เสมือนจริง • เกมคัดแยกด้วยท่าทาง • การเรียนรู้นอกสถานที่",
    examples: [
      {
        title: "ตัวอย่างเกม AR: Plant Lab (ChatGPT)",
        type: "html",
        url: "AI เกมใช้ AR/ตัวอย่างเกม plant-lab ChatGPT.html",
      },
      {
        title: "ตัวอย่างเกม AR: เกมแยกขยะ (Gemini)",
        type: "html",
        url: "AI เกมใช้ AR/ตัวอย่างเกมแยกขยะ Gemini.html",
      },
      {
        title: "ตัวอย่างเกม AR: เกมแยกขยะ (Deepseek)",
        type: "html",
        url: "AI เกมใช้ AR/ตัวอย่างเกมแยกขยะ Deepseek.html",
      },
    ],
  },
  {
    id: "game-prototypes",
    number: "04",
    category: "games",
    categoryLabel: "เกมการเรียนรู้ (Game-Based Learning)",
    menuTitle: "ต้นแบบเกมแบบต่าง ๆ",
    englishSubtitle: "Educational Game Prototypes Showcase",
    badgeText: "Playable Educational Game Templates",
    description:
      "สำรวจและทดลองเล่นต้นแบบเกมเพื่อการศึกษารูปแบบต่าง ๆ ที่พัฒนาสำเร็จพร้อมใช้งาน ช่วยจุดประกายไอเดียกลไกเกม (Game Mechanics) ก่อนนำไปออกแบบสื่อการสอนของตนเอง",
    highlights: [
      "รวบรวมตัวอย่างเกมหลากหลายแนวให้ทดลองเล่นจริงผ่านหน้าเว็บ",
      "เห็นภาพแนวทางการออกแบบ UI, ระบบคะแนน และความท้าทายสำหรับผู้เรียน",
      "ใช้เป็นต้นแบบอ้างอิงในการสั่ง AI สร้างเกมการเรียนรู้ในวิชาต่าง ๆ",
    ],
    coverImage: "./public/images/cover-game-prototypes.jpg",
    fallbackCoverImage: "./images/cover-game-prototypes.jpg",
    fileUrl: "https://pchanut-ship-it.github.io/myEducationalGame",
    fileName: "pchanut-ship-it.github.io/myEducationalGame",
    isExternal: true,
    icon: Joystick,
    accentTag: "GAME PROTOTYPES GALLERY",
    idealFor: "ศึกษาแนวทางกลไกเกม • ทดลองเล่นตัวอย่างเกมจริง • ค้นหาแรงบันดาลใจก่อนสร้างเกม",
  },
  {
    id: "thai-gbl-studio",
    number: "05",
    category: "games",
    categoryLabel: "เกมการเรียนรู้ (Game-Based Learning)",
    menuTitle: "สร้างเกมการเรียนรู้ สำหรับวิชาภาษาไทย",
    englishSubtitle: "Thai GBL Prompt Studio",
    badgeText: "Thai Language Game-Based Learning",
    description:
      "เครื่องมือออกแบบ Prompt เกมการเรียนรู้ที่ปรับแต่งมาเพื่อกลุ่มสาระการเรียนรู้ภาษาไทยโดยเฉพาะ รองรับทั้งเรื่องหลักภาษา การสะกดคำ วรรณยุกต์ คำราชาศัพท์ และวรรณคดีไทย",
    highlights: [
      "ออกแบบเนื้อหาสอดคล้องกับทักษะการอ่าน เขียน และหลักภาษาไทย",
      "มีโครงสร้างเกมที่ช่วยฝึกการจำแนกคำ การแต่งประโยค และการวิเคราะห์วรรณคดี",
      "สร้างเกมภาษาไทยที่สนุก เข้าใจง่าย และลดความน่าเบื่อในการท่องจำ",
    ],
    coverImage: "./public/images/cover-thai-game.jpg",
    fallbackCoverImage: "./images/cover-thai-game.jpg",
    fileUrl: "https://pchanut-ship-it.github.io/Thai-GBL-Prompt-Studio",
    fileName: "pchanut-ship-it.github.io/Thai-GBL-Prompt-Studio",
    isExternal: true,
    icon: Languages,
    accentTag: "THAI LANGUAGE GAME STUDIO",
    idealFor: "วิชาภาษาไทยทุกระดับชั้น • เกมฝึกสะกดคำและวรรณยุกต์ • เกมผจญภัยวรรณคดีไทย",
  },
  {
    id: "musical-prompt",
    number: "06",
    category: "multimedia",
    categoryLabel: "สื่อมัลติมีเดีย ภาพ และเสียง",
    menuTitle: "สร้างเพลงประกอบ",
    englishSubtitle: "Educational Musical Prompt Studio",
    badgeText: "AI Music & Classroom Song Generator",
    description:
      "สร้างสรรค์ Prompt สำหรับแต่งเพลงเพื่อการเรียนรู้ เพลงช่วยจำเนื้อหาบทเรียน และดนตรีบรรเลงประกอบสื่อการสอนหรือเกมห้องเรียน รองรับการใช้งานร่วมกับ Suno, Udio และ AI สร้างเสียงดนตรี",
    highlights: [
      "กำหนดแนวเพลง (Genre), จังหวะ (Tempo), อารมณ์เพลง และเครื่องดนตรีได้ตามต้องการ",
      "ช่วยร่างเนื้อร้องเพลงเพื่อการศึกษาที่คล้องจองและจดจำเนื้อหาสำคัญได้ง่าย",
      "เหมาะทั้งการสร้างเพลงเปิดชั้นเรียน เพลงสรุปบทเรียน และ BGM ประกอบเกม",
    ],
    coverImage: "./public/images/cover-music.jpg",
    fallbackCoverImage: "./images/cover-music.jpg",
    fileUrl: "https://pchanut-ship-it.github.io/MusicalPrompt",
    fileName: "pchanut-ship-it.github.io/MusicalPrompt",
    isExternal: true,
    icon: Music,
    accentTag: "AI MUSIC & SOUNDTRACK LAB",
    idealFor: "เพลงช่วยจำเนื้อหา • ดนตรีประกอบเกมและแอนิเมชัน • กิจกรรมจังหวะและดนตรีในห้องเรียน",
  },
  {
    id: "edu-image-gallery",
    number: "07",
    category: "multimedia",
    categoryLabel: "สื่อมัลติมีเดีย ภาพ และเสียง",
    menuTitle: "สร้างรูปภาพสื่อการสอน",
    englishSubtitle: "EduImage Prompt Gallery",
    badgeText: "Visual Media & Illustration Prompts",
    description:
      "คลัง Prompt สำหรับสร้างภาพประกอบสื่อการสอน แผนภาพอินโฟกราฟิก บัตรคำศัพท์ (Flashcards) ตัวละครการ์ตูน และฉากประกอบนิทานด้วย AI วาดภาพคุณภาพสูง",
    highlights: [
      "รวมสไตล์ภาพหลากหลายสำหรับการศึกษา เช่น ภาพวาดสีน้ำ เวกเตอร์ 3D และแผนภาพวิทย์",
      "คัดลอกโครงสร้าง Prompt พร้อมปรับเปลี่ยนหัวข้อบทเรียนได้ทันที",
      "ช่วยให้ครูสร้างภาพประกอบใบงาน สไลด์นำเสนอ และสื่อทำมือได้อย่างสวยงาม",
    ],
    coverImage: "./public/images/cover-image-gallery.jpg",
    fallbackCoverImage: "./images/cover-image-gallery.jpg",
    fileUrl: "https://pchanut-ship-it.github.io/EduImagePromptGallery",
    fileName: "pchanut-ship-it.github.io/EduImagePromptGallery",
    isExternal: true,
    icon: ImageIcon,
    accentTag: "VISUAL MEDIA PROMPT GALLERY",
    idealFor: "ภาพประกอบสไลด์และใบงาน • บัตรคำศัพท์ (Flashcards) • แผนภาพและอินโฟกราฟิก",
  },
  {
    id: "poster-toolkit",
    number: "08",
    category: "multimedia",
    categoryLabel: "สื่อมัลติมีเดีย ภาพ และเสียง",
    menuTitle: "สร้างโปสเตอร์สื่อการเรียนรู้",
    englishSubtitle: "Educational Poster Toolkit",
    badgeText: "Infographic & Learning Poster Studio",
    description:
      "เครื่องมือออกแบบและสร้าง Prompt สำหรับผลิตโปสเตอร์สื่อการเรียนรู้และอินโฟกราฟิกสรุปบทเรียน ช่วยจัดวางโครงสร้างเนื้อหา ลำดับความสำคัญของข้อมูล และสไตล์ภาพให้น่าสนใจเข้าใจง่าย",
    highlights: [
      "มีโครงสร้างการจัดวางเลย์เอาต์ (Layout) และองค์ประกอบโปสเตอร์เพื่อการศึกษา",
      "กำหนดโทนสี สไตล์กราฟิก และหัวข้อความรู้ให้เหมาะกับระดับชั้นของผู้เรียน",
      "ช่วยให้ครูสร้างโปสเตอร์สรุปความรู้ติดบอร์ดห้องเรียนหรือสไลด์ออนไลน์ได้อย่างมืออาชีพ",
    ],
    coverImage: "./public/images/cover-poster.jpg",
    fallbackCoverImage: "./images/cover-poster.jpg",
    fileUrl: "https://examintime.my.canva.site/poster-toolkit-v17-html",
    fileName: "examintime.my.canva.site/poster-toolkit-v17-html",
    isExternal: true,
    cannotEmbedInIframe: true,
    icon: LayoutTemplate,
    accentTag: "EDUCATIONAL POSTER TOOLKIT",
    idealFor: "โปสเตอร์สรุปบทเรียน • อินโฟกราฟิกความรู้ • สื่อติดบอร์ดห้องเรียนและออนไลน์",
  },
  {
    id: "edu-prompt-library",
    number: "09",
    category: "teacher",
    categoryLabel: "งานครูและแผนการสอน",
    menuTitle: "การเตรียมสอน/งานทั่วไปสำหรับครู",
    englishSubtitle: "EduPrompt Library for Teachers",
    badgeText: "Lesson Planning & Teacher Productivity",
    description:
      "คลัง Prompt ผู้ช่วยส่วนตัวสำหรับคุณครู ครอบคลุมการออกแบบแผนการจัดการเรียนรู้ การสร้างข้อสอบและเกณฑ์การประเมิน (Rubrics) การทำวิจัยในชั้นเรียน และงานเอกสารธุรการครู",
    highlights: [
      "ช่วยร่างแผนการสอนเชิงรุก (Active Learning) ที่สอดคล้องกับตัวชี้วัด",
      "ออกข้อสอบปรนัย-อัตนัย พร้อมเฉลยละเอียดและเกณฑ์ให้คะแนนอัตโนมัติ",
      "ลดเวลาการทำงานเอกสารและงานบริหารจัดการในชั้นเรียนได้อย่างมีประสิทธิภาพ",
    ],
    coverImage: "./public/images/cover-teacher-library.jpg",
    fallbackCoverImage: "./images/cover-teacher-library.jpg",
    fileUrl: "https://pchanut-ship-it.github.io/EduPromptLibrary",
    fileName: "pchanut-ship-it.github.io/EduPromptLibrary",
    isExternal: true,
    icon: Briefcase,
    accentTag: "TEACHER PRODUCTIVITY LIBRARY",
    idealFor: "ออกแบบแผนการจัดการเรียนรู้ • สร้างข้อสอบและ Rubrics • งานบริหารชั้นเรียนและธุรการครู",
  },
];

const CATEGORIES: { id: StudioCategory; label: string; count: number }[] = [
  { id: "all", label: "เมนูทั้งหมด (All Studios)", count: STUDIO_MENUS.length },
  {
    id: "games",
    label: "เกมการเรียนรู้ (Games)",
    count: STUDIO_MENUS.filter((m) => m.category === "games").length,
  },
  {
    id: "multimedia",
    label: "ภาพ แอนิเมชัน และเสียง (Multimedia)",
    count: STUDIO_MENUS.filter((m) => m.category === "multimedia").length,
  },
  {
    id: "teacher",
    label: "เตรียมสอนและงานครู (Teacher Prep)",
    count: STUDIO_MENUS.filter((m) => m.category === "teacher").length,
  },
];

export function App() {
  const [selectedStudio, setSelectedStudio] = useState<StudioMenuItem | null>(null);
  const [activeIframeUrl, setActiveIframeUrl] = useState<string>("");
  const [activeIframeTitle, setActiveIframeTitle] = useState<string>("");
  const [isFullscreenModal, setIsFullscreenModal] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<StudioCategory>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredStudios = useMemo(() => {
    return STUDIO_MENUS.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        item.menuTitle.toLowerCase().includes(q) ||
        item.englishSubtitle.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.idealFor.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleOpenStudioPopup = (studio: StudioMenuItem) => {
    setSelectedStudio(studio);
    setActiveIframeUrl(studio.fileUrl);
    setActiveIframeTitle(studio.menuTitle);
    setIsFullscreenModal(false);
    setMobileMenuOpen(false);
    if (studio.cannotEmbedInIframe) {
      handleOpenBrowserPopupWindow(studio.fileUrl, studio.menuTitle);
    }
  };

  const handleOpenBrowserPopupWindow = (
    url: string,
    title: string,
    e?: React.MouseEvent
  ) => {
    if (e) e.stopPropagation();
    const width = Math.min(1360, window.screen.availWidth - 60);
    const height = Math.min(880, window.screen.availHeight - 60);
    const left = Math.max(0, (window.screen.availWidth - width) / 2);
    const top = Math.max(0, (window.screen.availHeight - height) / 2);
    window.open(
      url,
      title,
      `width=${width},height=${height},left=${left},top=${top},menubar=no,toolbar=no,location=no,status=no,resizable=yes,scrollbars=yes`
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Sticky Navigation Bar */}
      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Header Row */}
          <div className="h-20 flex items-center justify-between gap-4">
            {/* Brand Logo */}
            <a
              href="#top"
              className="flex items-center gap-3.5 group focus:outline-none shrink-0"
            >
              <div className="w-11 h-11 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-md shadow-primary/20 group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5 text-accent" />
              </div>
              <div>
                <span className="label-eyebrow text-accent block">
                  EDUCATIONAL INNOVATION HUB • 9 STUDIOS
                </span>
                <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-foreground">
                  AI Prompt Generator{" "}
                  <em className="italic font-normal text-accent">
                    for Education
                  </em>
                </span>
              </div>
            </a>

            {/* Desktop Quick Action & Search */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="relative w-64">
                <Search className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="ค้นหาเครื่องมือสร้างสื่อการสอน..."
                  className="w-full h-10 pl-9 pr-4 rounded-xl border border-border bg-surface/50 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:bg-background transition-all"
                />
              </div>
              <a
                href="#studios"
                className="inline-flex items-center gap-2 h-10 px-4 rounded-xl bg-primary text-primary-foreground text-xs font-medium shadow-sm hover:opacity-95 transition-opacity"
              >
                <Compass className="w-3.5 h-3.5 text-accent" />
                <span>ดูทั้ง 9 เมนูหลัก</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl border border-border bg-surface/60 text-foreground hover:bg-surface focus:outline-none focus:ring-2 focus:ring-primary text-xs font-medium"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? (
                  <>
                    <X className="w-4 h-4" />
                    <span>ปิดเมนู</span>
                  </>
                ) : (
                  <>
                    <Menu className="w-4 h-4" />
                    <span>เมนูทั้งหมด (9)</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Navigation (All 9 Menus) */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-border bg-background/95 backdrop-blur-lg overflow-hidden"
            >
              <div className="px-4 py-4 space-y-2 max-h-[75vh] overflow-y-auto">
                <p className="label-eyebrow text-muted-foreground px-2 pb-1">
                  เลือกเครื่องมือสร้างสื่อการสอนทั้ง 9 เมนู (SELECT STUDIO)
                </p>
                {STUDIO_MENUS.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleOpenStudioPopup(item)}
                      className="w-full flex items-center justify-between p-3 rounded-xl bg-surface/60 hover:bg-surface border border-border/70 text-left transition-colors"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-9 h-9 rounded-lg bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                          <IconComponent className="w-4 h-4 text-accent" />
                        </div>
                        <div className="min-w-0">
                          <div className="font-medium text-sm text-foreground truncate">
                            {item.number}. {item.menuTitle}
                          </div>
                          <div className="text-xs text-muted-foreground truncate">
                            {item.englishSubtitle}
                          </div>
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-primary shrink-0 ml-2" />
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main id="top" className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-10 pb-12 md:pt-14 md:pb-16 border-b border-border/60">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[420px] rounded-full bg-gradient-to-tr from-primary/10 via-accent/15 to-transparent blur-3xl -z-10"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-5">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/40 bg-surface/80 shadow-sm"
              >
                <Wand2 className="w-3.5 h-3.5 text-accent" />
                <span className="label-eyebrow text-primary">
                  EMPOWERING EDUCATORS WITH GENERATIVE AI • 9 CREATIVE STUDIOS
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.15]"
              >
                AI Prompt Generator{" "}
                <span className="block sm:inline italic font-semibold text-accent">
                  for Education
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto"
              >
                ศูนย์รวมเครื่องมือสร้าง Prompt และต้นแบบสื่อการเรียนรู้ด้วย AI สำหรับครูยุคใหม่
                ครอบคลุมทั้ง{" "}
                <span className="text-foreground font-medium">
                  Motion Graphic, เกมการเรียนรู้ทั่วไป, เกม AR, เกมภาษาไทย, ต้นแบบเกม, เพลงประกอบ, รูปภาพสื่อการสอน, การเตรียมสอน
                </span>{" "}
                และ{" "}
                <span className="text-foreground font-medium">
                  โปสเตอร์สื่อการเรียนรู้
                </span>
              </motion.p>

              {/* Quick 8-Menu Pill Grid in Hero */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.24 }}
                className="pt-3 flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto"
              >
                {STUDIO_MENUS.map((studio, idx) => {
                  const IconComponent = studio.icon;
                  return (
                    <Button
                      key={studio.id}
                      onClick={() => handleOpenStudioPopup(studio)}
                      variant={idx === 0 ? "default" : "outline"}
                      size="sm"
                      className="group h-10 px-4 gap-2 rounded-xl border-border shadow-sm hover:border-primary/60 text-xs sm:text-sm"
                    >
                      <IconComponent className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span>{studio.menuTitle}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-75 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Button>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* 8 Menus — Interactive Cover Cards Section */}
        <section
          id="studios"
          className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="label-eyebrow text-accent block mb-2">
                SELECT YOUR CREATIVE STUDIO • 9 EDUCATIONAL MENUS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
                เลือกเครื่องมือสร้างสื่อการเรียนรู้{" "}
                <em className="italic font-normal text-accent">ที่คุณต้องการ</em>
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md font-light">
              คลิกที่เมนูการ์ดด้านล่างเพื่อเปิดหน้าต่าง{" "}
              <strong className="font-medium text-foreground">
                Popup Window
              </strong>{" "}
              สำหรับใช้งานเครื่องมือและคัดลอก Prompt ได้ทันที
            </p>
          </div>

          {/* Category Filter Tabs & Mobile Search */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 pb-4 border-b border-border/70">
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "bg-surface/70 text-foreground hover:bg-surface border border-border/70"
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`px-1.5 py-0.5 rounded-full text-[11px] ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-background text-muted-foreground"
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="relative w-full md:w-64 lg:hidden">
              <Search className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ค้นหาชื่อเมนูหรือคำสำคัญ..."
                className="w-full h-10 pl-9 pr-4 rounded-xl border border-border bg-white text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Responsive Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
            {filteredStudios.map((studio, index) => {
              const IconComponent = studio.icon;
              return (
                <motion.div
                  key={studio.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.06 * index }}
                  whileHover={{ y: -5 }}
                  className="flex"
                >
                  <Card
                    onClick={() => handleOpenStudioPopup(studio)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleOpenStudioPopup(studio);
                      }
                    }}
                    className="group cursor-pointer flex flex-col w-full overflow-hidden border-border/90 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 bg-white/95"
                  >
                    {/* Cover Image Container */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface border-b border-border/60">
                      <img
                        src={studio.coverImage}
                        alt={studio.menuTitle}
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (!target.dataset.fallback) {
                            target.dataset.fallback = "true";
                            target.src = studio.fallbackCoverImage;
                          }
                        }}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/15 to-transparent" />

                      {/* Top Badges on Cover */}
                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                        <span className="px-3 py-1 rounded-full bg-background/95 text-primary label-eyebrow shadow-sm backdrop-blur-md">
                          MENU {studio.number} • {studio.accentTag}
                        </span>
                        <span className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md group-hover:bg-accent transition-colors">
                          <IconComponent className="w-4 h-4" />
                        </span>
                      </div>

                      {/* Bottom Info on Cover */}
                      <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white">
                        <p className="text-xs font-medium text-white/90 truncate pr-2">
                          {studio.englishSubtitle}
                        </p>
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/25 shrink-0">
                          <AppWindow className="w-3.5 h-3.5 text-accent" />
                          เปิด Popup
                        </span>
                      </div>
                    </div>

                    {/* Card Header & Description */}
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <Badge variant="accent">{studio.badgeText}</Badge>
                      </div>
                      <CardTitle className="text-xl sm:text-2xl text-foreground group-hover:text-primary transition-colors flex items-start justify-between gap-2 pt-1">
                        <span>{studio.menuTitle}</span>
                        <ArrowUpRight className="w-5 h-5 text-accent shrink-0 mt-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </CardTitle>
                      <CardDescription className="text-sm text-muted-foreground pt-1.5 leading-relaxed">
                        {studio.description}
                      </CardDescription>
                    </CardHeader>

                    {/* Card Feature Highlights */}
                    <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                      <ul className="space-y-2 text-xs sm:text-sm text-foreground/85">
                        {studio.highlights.map((point, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-3 border-t border-border/60">
                        <span className="label-eyebrow text-muted-foreground block mb-1">
                          เหมาะสำหรับ (IDEAL FOR)
                        </span>
                        <p className="text-xs font-medium text-primary">
                          {studio.idealFor}
                        </p>
                      </div>
                    </CardContent>

                    {/* Card Action Footer */}
                    <CardFooter className="pt-2 pb-6 flex flex-col sm:flex-row gap-2.5">
                      <Button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenStudioPopup(studio);
                        }}
                        className="w-full sm:flex-1 gap-2 shadow-sm"
                      >
                        <Play className="w-3.5 h-3.5 fill-current shrink-0" />
                        <span className="truncate">เปิดเมนูนี้</span>
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={(e) =>
                          handleOpenBrowserPopupWindow(
                            studio.fileUrl,
                            studio.menuTitle,
                            e
                          )
                        }
                        title={`เปิดหน้าต่างแยก (${studio.fileName})`}
                        className="w-full sm:w-auto px-3.5 gap-1.5 text-xs shrink-0"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-accent" />
                        <span>หน้าต่างแยก</span>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-7 h-7 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
            </div>
            <span className="font-serif font-semibold text-foreground text-sm">
              AI Prompt Generator{" "}
              <em className="italic font-normal text-accent">for Education</em>
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            {STUDIO_MENUS.map((s) => (
              <button
                key={s.id}
                onClick={() => handleOpenStudioPopup(s)}
                className="hover:text-primary underline-offset-4 hover:underline transition-colors"
              >
                {s.menuTitle}
              </button>
            ))}
          </div>
        </div>
      </footer>

      {/* Interactive Popup Window Modal (Dialog) */}
      <Dialog
        open={!!selectedStudio}
        onOpenChange={(open) => {
          if (!open) setSelectedStudio(null);
        }}
      >
        <DialogContent
          className={
            isFullscreenModal
              ? "w-[99vw] max-w-[99vw] h-[96vh] flex flex-col p-0"
              : "w-[95vw] max-w-6xl h-[90vh] flex flex-col p-0"
          }
        >
          {selectedStudio && (
            <>
              {/* Popup Window Top Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 py-3.5 bg-surface border-b border-border pr-14">
                <DialogHeader className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="label-eyebrow text-accent">
                      MENU {selectedStudio.number} • POPUP STUDIO WINDOW
                    </span>
                    <span className="text-xs text-muted-foreground hidden md:inline">
                      ({selectedStudio.fileName})
                    </span>
                  </div>
                  <DialogTitle className="text-lg sm:text-xl text-foreground flex items-center gap-2">
                    <span>{selectedStudio.menuTitle}</span>
                    <span className="text-xs font-sans font-normal text-muted-foreground hidden sm:inline">
                      — {selectedStudio.englishSubtitle}
                    </span>
                  </DialogTitle>
                  <DialogDescription className="sr-only">
                    หน้าต่างสร้าง Prompt สำหรับ {selectedStudio.menuTitle}
                  </DialogDescription>
                </DialogHeader>

                {/* Popup Window Controls */}
                <div className="flex flex-wrap items-center gap-2">
                  {activeIframeUrl !== selectedStudio.fileUrl && (
                    <Button
                      size="sm"
                      variant="default"
                      onClick={() => {
                        setActiveIframeUrl(selectedStudio.fileUrl);
                        setActiveIframeTitle(selectedStudio.menuTitle);
                      }}
                      className="gap-1.5 text-xs"
                    >
                      <Wand2 className="w-3.5 h-3.5" />
                      <span>กลับหน้าเครื่องมือหลัก</span>
                    </Button>
                  )}

                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      handleOpenBrowserPopupWindow(
                        activeIframeUrl,
                        activeIframeTitle
                      )
                    }
                    className="gap-1.5 text-xs bg-background"
                  >
                    <AppWindow className="w-3.5 h-3.5 text-primary" />
                    <span>เปิดเป็นหน้าต่างแยก (Popup)</span>
                  </Button>

                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                    className="gap-1.5 text-xs bg-background"
                  >
                    <a
                      href={activeIframeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-accent" />
                      <span>เปิดในแท็บใหม่</span>
                    </a>
                  </Button>

                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setIsFullscreenModal((prev) => !prev)}
                    className="hidden sm:inline-flex gap-1.5 text-xs"
                    title={isFullscreenModal ? "ย่อขนาดหน้าต่าง" : "ขยายเต็มจอ"}
                  >
                    {isFullscreenModal ? (
                      <Minimize2 className="w-3.5 h-3.5" />
                    ) : (
                      <Maximize2 className="w-3.5 h-3.5" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Optional Quick Bar for Bonus Workshop Examples if available */}
              {selectedStudio.examples && selectedStudio.examples.length > 0 && (
                <div className="px-5 py-2 bg-background border-b border-border flex items-center gap-2 overflow-x-auto text-xs">
                  <span className="label-eyebrow text-primary shrink-0 flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-accent" />
                    สลับดูตัวอย่างในหมวดนี้:
                  </span>
                  <button
                    onClick={() => {
                      setActiveIframeUrl(selectedStudio.fileUrl);
                      setActiveIframeTitle(selectedStudio.menuTitle);
                    }}
                    className={`px-2.5 py-1 rounded-lg font-medium shrink-0 transition-colors ${
                      activeIframeUrl === selectedStudio.fileUrl
                        ? "bg-primary text-primary-foreground"
                        : "bg-surface text-foreground hover:bg-border/60"
                    }`}
                  >
                    ★ เครื่องมือสร้าง Prompt ({selectedStudio.fileName})
                  </button>
                  {selectedStudio.examples.map((ex, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setActiveIframeUrl(ex.url);
                        setActiveIframeTitle(ex.title);
                      }}
                      className={`px-2.5 py-1 rounded-lg font-medium shrink-0 transition-colors ${
                        activeIframeUrl === ex.url
                          ? "bg-accent text-white"
                          : "bg-surface/70 text-foreground hover:bg-surface"
                      }`}
                    >
                      {ex.title}
                    </button>
                  ))}
                </div>
              )}

              {/* Embedded Interactive Studio Iframe or External Popup Launch Card */}
              <div className="flex-1 w-full bg-white relative overflow-hidden">
                {selectedStudio.cannotEmbedInIframe ? (
                  <div className="w-full h-full bg-background flex items-center justify-center p-6 overflow-y-auto">
                    <div className="max-w-2xl w-full rounded-2xl border border-border bg-white shadow-lg overflow-hidden">
                      <div className="relative aspect-[16/9] w-full bg-surface border-b border-border overflow-hidden">
                        <img
                          src={selectedStudio.coverImage}
                          alt={selectedStudio.menuTitle}
                          onError={(e) => {
                            const target = e.currentTarget;
                            if (!target.dataset.fallback) {
                              target.dataset.fallback = "true";
                              target.src = selectedStudio.fallbackCoverImage;
                            }
                          }}
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                        <div className="absolute bottom-4 left-5 right-5 text-white">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-white label-eyebrow mb-2 shadow-sm">
                            <AppWindow className="w-3.5 h-3.5" />
                            EXTERNAL STUDIO POPUP WINDOW
                          </span>
                          <h3 className="font-serif text-2xl font-bold">
                            {selectedStudio.menuTitle}
                          </h3>
                          <p className="text-xs text-white/85">
                            {selectedStudio.englishSubtitle} • {selectedStudio.fileName}
                          </p>
                        </div>
                      </div>
                      <div className="p-6 space-y-5">
                        <div className="p-4 rounded-xl bg-surface/70 border border-border text-sm text-foreground leading-relaxed">
                          ระบบได้เปิดหน้าต่างแยก (Popup Window) สำหรับ{" "}
                          <strong className="text-primary font-semibold">
                            {selectedStudio.menuTitle}
                          </strong>{" "}
                          แล้ว (เนื่องจากเว็บไซต์ปลายทางไม่อนุญาตให้แสดงผลผ่านกรอบ Iframe ภายในหน้าเว็บโดยตรง) หากหน้าต่างไม่เด้งขึ้นมา สามารถคลิกปุ่มด้านล่างเพื่อเปิดใช้งานได้ทันทีครับ
                        </div>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {selectedStudio.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                          <Button
                            size="lg"
                            onClick={() =>
                              handleOpenBrowserPopupWindow(
                                selectedStudio.fileUrl,
                                selectedStudio.menuTitle
                              )
                            }
                            className="w-full sm:flex-1 gap-2 shadow-md"
                          >
                            <AppWindow className="w-4 h-4 text-accent" />
                            <span>เปิดหน้าต่าง Popup เครื่องมือนี้</span>
                          </Button>
                          <Button
                            size="lg"
                            variant="outline"
                            asChild
                            className="w-full sm:w-auto gap-2"
                          >
                            <a
                              href={selectedStudio.fileUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="w-4 h-4 text-accent" />
                              <span>เปิดในแท็บใหม่</span>
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <iframe
                    key={activeIframeUrl}
                    src={activeIframeUrl}
                    title={activeIframeTitle}
                    className="w-full h-full border-0"
                    allow="camera; microphone; fullscreen; clipboard-read; clipboard-write"
                  />
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;
