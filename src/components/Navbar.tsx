"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { TELEGRAM_URL } from "@/data/portfolio";

const NAV_LINKS = [
  { label: "О себе", href: "#about" },
  { label: "Стек", href: "#tech" },
  { label: "Проекты", href: "#projects" },
  { label: "Контакты", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/90 backdrop-blur-md border-b border-zinc-800 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Бренд */}
        <a href="#top" className="flex items-center gap-2.5 group" aria-label="На главную">
          <span className="text-sm font-semibold tracking-tight text-zinc-200 group-hover:text-white transition-colors">
            Дима Евгеньев
          </span>
          <span className="text-zinc-700 font-mono text-xs">/</span>
          <span className="text-[11px] font-mono tracking-wider text-zinc-500">
            fullstack & ai creator
          </span>
        </a>

        {/* Десктоп-навигация */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider text-zinc-500">
          {NAV_LINKS.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="hover:text-zinc-200 transition-colors flex items-center gap-1.5"
            >
              <span className="text-zinc-700">0{i + 1}.</span>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium text-zinc-200 border border-zinc-800 bg-transparent hover:border-zinc-500 hover:text-white transition-all duration-200"
          >
            <span>Telegram</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Мобильное меню */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-white rounded-xl border border-zinc-800"
          aria-label="Меню"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Мобильное выдвижное меню */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-[#050505]/98 backdrop-blur-xl px-6 py-6">
          <nav className="flex flex-col gap-5 text-sm font-mono tracking-wider text-zinc-500">
            {NAV_LINKS.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-zinc-200 flex items-center gap-2"
              >
                <span className="text-zinc-700">0{i + 1}.</span>
                <span>{link.label}</span>
              </a>
            ))}
            <div className="pt-2">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-black bg-white hover:bg-zinc-100 transition-colors"
              >
                <span>Написать в Telegram</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
