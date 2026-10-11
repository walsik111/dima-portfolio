import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function About() {
  const { developer } = PORTFOLIO_DATA;

  const principles = [
    {
      index: "01",
      title: "Next.js & Frontend",
      desc: "Создание быстрых интерфейсов на App Router и React. Строгая типизация, чистая архитектура компонентов и мгновенный отклик UI.",
    },
    {
      index: "02",
      title: "AI-видео & Нейросети",
      desc: "Генерация медиаконтента, пайплайны на диффузионных моделях, промпт-инжиниринг и связка LLM со сценариями для бизнеса.",
    },
    {
      index: "03",
      title: "Telegram-боты & Бэкенд",
      desc: "Разработка многофункциональных ботов на Node.js (Telegraf) и Python, подключение платежных систем, баз данных и внешних API.",
    },
  ];

  return (
    <section id="about" className="py-28 border-b border-white/[0.07]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Заголовок секции */}
        <div className="flex items-center justify-between mb-14">
          <span className="text-xs font-mono tracking-widest text-zinc-500">
            01 / Бэкграунд & экспертиза
          </span>
          <span className="text-xs font-mono text-zinc-700 hidden sm:block">
            [ ARCHITECTURE ]
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start mb-20">
          <div className="lg:col-span-6">
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-zinc-200 leading-tight">
              Инженерия интерфейсов,{" "}
              <span className="text-zinc-500">
                AI-продакшн и автоматизация.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-4 text-base text-zinc-400 font-normal leading-relaxed">
            {developer.about.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Принципы работы */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-12 border-t border-white/[0.06]">
          {principles.map((item) => (
            <div
              key={item.index}
              className="p-7 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 hover:bg-zinc-900/60 transition-all duration-200"
            >
              <span className="block text-xs font-mono text-zinc-600 mb-5">
                //{item.index}
              </span>
              <h3 className="text-sm font-semibold tracking-tight text-zinc-200 mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
