"use client";

import React from "react";
import { Send, ArrowUpRight } from "lucide-react";
import { TELEGRAM_URL } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Заголовок секции */}
        <div className="flex items-center justify-between mb-14">
          <span className="text-xs font-mono tracking-widest text-zinc-500">
            04 / Связь & контакты
          </span>
          <span className="text-xs font-mono text-zinc-700 hidden sm:block">
            [ CONTACT ]
          </span>
        </div>

        {/* Главный блок связи */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-200 leading-[1.1] mb-6">
            Есть проект?{" "}
            <span className="text-zinc-500">Давайте обсудим задачу.</span>
          </h2>
          <p className="text-base text-zinc-400 font-normal leading-relaxed">
            Открыт для интересных контрактов, разработки веб-сервисов, AI-видеопродакшна и Telegram-ботов под ключ. Напишите мне напрямую в Telegram — ссылка сразу откроет диалог с темой обращения.
          </p>
        </div>

        {/* Единственная выделенная карточка Telegram */}
        <div className="pt-6">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block w-full p-6 sm:p-10 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/80 hover:border-zinc-700 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-start sm:items-center gap-4 sm:gap-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border border-zinc-800 bg-zinc-950 flex items-center justify-center text-zinc-200 group-hover:text-white group-hover:border-zinc-600 transition-colors shrink-0">
                  <Send className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="text-lg sm:text-xl font-semibold text-zinc-100 group-hover:text-white transition-colors">
                      Telegram
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-emerald-400 bg-emerald-400/10 border border-emerald-400/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Online</span>
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed max-w-xl">
                    Быстрая связь без посредников. Нажмите, чтобы открыть диалог с готовым описанием задачи для начала обсуждения.
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-black bg-white group-hover:bg-zinc-100 transition-colors w-full sm:w-auto shrink-0">
                <span>Написать в Telegram</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
