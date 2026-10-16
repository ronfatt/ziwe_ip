import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer, MobileBottomNav } from "@/components/layout/HeaderFooter";

export const metadata: Metadata = {
  title: "ZIWEI IP DNA™ | 探索事业天赋，定义个人品牌，规划未来方向",
  description: "Discover Your Nature. Define Your Position. Build Your Future. Combining Cultural Archetypes with Strategic Career & Personal Branding Intelligence.",
  keywords: ["ZIWEI IP DNA", "个人品牌定位", "职业发展规划", "紫微斗数事业原型", "轻资产创业", "个人IP定位公式", "商业变现模型"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <body className="min-h-screen bg-[#07080B] text-white antialiased flex flex-col justify-between selection:bg-amber-500/30 selection:text-amber-200">
        <Navbar />
        <main className="flex-1 pb-16 md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}
