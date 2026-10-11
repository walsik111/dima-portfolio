import React from "react";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Projects() {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="py-28 border-b border-white/[0.07]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Заголовок секции */}
        <div className="flex items-center justify-between mb-14">
          <span className="text-xs font-mono tracking-widest text-zinc-500">
            03 / Избранные проекты
          </span>
          <span className="text-xs font-mono text-zinc-700 hidden sm:block">
            [ PORTFOLIO ]
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-zinc-200 leading-tight">
              Архитектура & продукты
            </h2>
            <p className="text-sm text-zinc-500 mt-3 font-normal max-w-xl">
              Реальные веб-приложения, пайплайны генерации AI-видео и Telegram-боты.
            </p>
          </div>
          <span className="text-xs font-mono text-zinc-700 tracking-wider">
            Итого: 04 // 2026
          </span>
        </div>

        {/* Сетка проектов */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const hasLiveDemo = project.demoUrl && project.demoUrl !== "#";
            const topLink = hasLiveDemo ? project.demoUrl : project.githubUrl;

            return (
              <article
                key={project.id}
                className="group flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900/60"
              >
                <div>
                  {/* Номер и категория */}
                  <div className="flex items-center justify-between mb-7 text-xs font-mono text-zinc-600">
                    <span className="font-medium text-zinc-400 tracking-widest">
                      /{project.number}
                    </span>
                    <span className="tracking-wider">{project.category}</span>
                  </div>

                  {/* Название */}
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-200 mb-3 flex items-start justify-between gap-3">
                    <span>{project.title}</span>
                    <a
                      href={topLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-600 group-hover:text-zinc-300 transition-colors shrink-0 mt-0.5"
                      aria-label={`Открыть ${project.title}`}
                    >
                      <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </h3>

                  {/* Описание */}
                  <p className="text-sm text-zinc-500 leading-relaxed font-normal mb-8">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Теги технологий */}
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-zinc-800 mb-7">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-3 py-1 rounded-lg text-[11px] font-mono border border-zinc-800 bg-zinc-900/50 text-zinc-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Ссылки на действия */}
                  <div className="flex items-center gap-3">
                    {hasLiveDemo && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-xs font-medium text-black bg-white hover:bg-zinc-100 transition-colors"
                      >
                        <span>
                          {project.category.includes("Telegram")
                            ? "Запустить бота"
                            : "Демо"}
                        </span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                          hasLiveDemo
                            ? "text-zinc-400 border border-zinc-800 hover:text-zinc-200 hover:border-zinc-600"
                            : "text-black bg-white hover:bg-zinc-100"
                        }`}
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Код</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
