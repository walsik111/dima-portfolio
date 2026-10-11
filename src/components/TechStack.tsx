"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function TechStack() {
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    { id: "all",      label: "Все" },
    { id: "frontend", label: "Frontend" },
    { id: "ai",       label: "AI & API" },
    { id: "backend",  label: "Backend" },
  ];

  const filteredTech =
    filter === "all"
      ? PORTFOLIO_DATA.techStack
      : PORTFOLIO_DATA.techStack.filter((t) => t.category === filter);

  return (
    <section id="tech" className="py-28 border-b border-white/[0.07]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Заголовок секции */}
        <div className="flex items-center justify-between mb-14">
          <span className="text-xs font-mono tracking-widest text-zinc-500">
            02 / Технологический стек
          </span>
          <span className="text-xs font-mono text-zinc-700 hidden sm:block">
            [ TOOLS & LIBS ]
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-zinc-200 leading-tight">
              Стек & инструменты
            </h2>
            <p className="text-sm text-zinc-500 mt-3 font-normal max-w-md">
              Только проверенные технологии с долгосрочной поддержкой и высокой надёжностью.
            </p>
          </div>

          {/* Фильтр */}
          <div className="flex items-center gap-1 p-1 rounded-xl border border-zinc-800 bg-zinc-900/60 self-start md:self-auto max-w-full overflow-x-auto">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setFilter(c.id)}
                className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 ${
                  filter === c.id
                    ? "bg-white text-black"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Сетка технологий */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {filteredTech.map((tech, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:border-zinc-600 hover:bg-zinc-900/60 transition-all duration-200 flex items-center justify-between group"
            >
              <span className="text-sm font-normal text-zinc-400 group-hover:text-zinc-200 transition-colors">
                {tech.name}
              </span>
              {tech.highlight && (
                <span className="text-[10px] font-mono text-zinc-600 group-hover:text-zinc-400">
                  core
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
