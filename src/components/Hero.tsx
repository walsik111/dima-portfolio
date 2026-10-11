import React from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA, TELEGRAM_URL } from "@/data/portfolio";

export function Hero() {
  const { developer } = PORTFOLIO_DATA;

  return (
    <section className="relative pt-36 pb-28 md:pt-52 md:pb-40 border-b border-white/[0.07]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Статус-строка */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider border border-white/10 bg-white/[0.04] text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span>{developer.status}</span>
          </div>
          <span className="text-zinc-600 font-mono text-xs">/</span>
          <span className="text-xs font-mono tracking-widest text-zinc-500">
            Next.js · AI-видео · Telegram-боты
          </span>
        </div>

        {/* Главный заголовок H1 */}
        <div className="max-w-4xl mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-zinc-200 leading-[1.1] sm:leading-[1.08]">
            Fullstack-разработчик.{" "}
            <span className="text-zinc-500 hover:text-zinc-300 transition-colors duration-500">
              Создаю веб-приложения, AI-видео
            </span>{" "}
            и Telegram-ботов.
          </h1>
        </div>

        {/* Био под H1 */}
        <div className="max-w-2xl mb-10 sm:mb-14">
          <p className="text-base sm:text-lg font-normal text-zinc-400 leading-relaxed">
            {developer.headline.bio}
          </p>
        </div>

        {/* Кнопки действий */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-20 sm:mb-24">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-medium text-black bg-white hover:bg-zinc-100 transition-all duration-200 w-full sm:w-auto"
          >
            <span>Смотреть проекты</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-medium text-zinc-300 border border-white/10 bg-transparent hover:border-white/30 hover:text-zinc-100 transition-all duration-200 w-full sm:w-auto"
          >
            <span>Написать в Telegram</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Технические спецификации */}
        <div className="pt-10 border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-8 text-[11px] font-mono tracking-wider">
          <div>
            <span className="block text-zinc-600 mb-1.5">01 / Web</span>
            <span className="text-zinc-300">Next.js & React</span>
          </div>
          <div>
            <span className="block text-zinc-600 mb-1.5">02 / AI Media</span>
            <span className="text-zinc-300">AI-видео & Diffusion</span>
          </div>
          <div>
            <span className="block text-zinc-600 mb-1.5">03 / Automation</span>
            <span className="text-zinc-300">Сложные Telegram-боты</span>
          </div>
          <div>
            <span className="block text-zinc-600 mb-1.5">04 / Формат</span>
            <span className="text-zinc-300">Удалённо · Весь мир</span>
          </div>
        </div>
      </div>
    </section>
  );
}
