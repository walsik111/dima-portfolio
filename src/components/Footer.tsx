import React from "react";
import { ArrowUp, Send } from "lucide-react";
import { TELEGRAM_URL } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="py-10 border-t border-zinc-800/60 bg-[#030303]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-600">
        <div className="flex items-center gap-3">
          <span className="text-zinc-300 font-medium">© 2026 Дима Евгеньев</span>
          <span className="text-zinc-700">/</span>
          <span className="tracking-wider">Next.js · AI-видео · Telegram-боты</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-zinc-500 hover:text-zinc-200 transition-colors"
          >
            <Send className="w-3 h-3" />
            <span>Telegram</span>
          </a>
          <a
            href="#top"
            className="p-2 rounded-xl border border-zinc-800 hover:border-zinc-600 hover:text-zinc-300 transition-colors"
            aria-label="Наверх страницы"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
