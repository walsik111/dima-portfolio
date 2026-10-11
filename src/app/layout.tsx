import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export const metadata: Metadata = {
  title: "Дима Евгеньев — Fullstack-разработчик & AI-креатор",
  description:
    "Портфолио Димы Евгеньева: создание современных веб-приложений (Next.js, React), интеграция нейросетей, генерация AI-видео и разработка Telegram-ботов.",
  keywords: [
    "Дима Евгеньев",
    "Next.js",
    "React",
    "Telegram боты",
    "AI видео",
    "TypeScript",
    "Fullstack разработчик",
    "Портфолио",
  ],
  authors: [{ name: "Дима Евгеньев" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark scroll-smooth">
      <body className="min-h-screen bg-background text-ink-primary font-sans antialiased selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
