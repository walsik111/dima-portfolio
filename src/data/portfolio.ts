export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  featured?: boolean;
}

export interface TechItem {
  name: string;
  category: "frontend" | "backend" | "ai" | "tools";
  highlight?: boolean;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  iconName: "Send";
}

export const TELEGRAM_URL =
  "https://t.me/Chad_Coder?text=Привет!%20Пишу%20с%20твоего%20сайта.%20У%20меня%20намечается%20проект%20(веб%20/%20боты%20/%20AI),%20и%20мне%20нужен%20технический%20специалист.%20Готов%20поделиться%20подробностями.%20Когда%20у%20тебя%20будет%20свободное%20окно%20для%20небольшого%20обсуждения?";

export const PORTFOLIO_DATA = {
  developer: {
    name: "Дима Евгеньев",
    handle: "dima.dev",
    role: "Fullstack-разработчик & AI-креатор",
    status: "Открыт для новых проектов",
    location: "Удалённо · Весь мир",
    telegramUrl: TELEGRAM_URL,
    headline: {
      h1: "Fullstack-разработчик. Создаю веб-приложения, AI-видео и Telegram-ботов.",
      bio: "Я Дима Евгеньев — разработчик и AI-креатор. Специализируюсь на создании современных веб-приложений (Next.js, React), интеграции нейросетей, генерации AI-видеоконтента и разработке сложных Telegram-ботов. Фокусируюсь на чистой архитектуре, быстром UI и решении бизнес-задач без лишнего визуального шума.",
    },
    about: [
      "Я Дима Евгеньев — разработчик и AI-креатор. Специализируюсь на создании современных веб-приложений (Next.js, React), интеграции нейросетей, генерации AI-видеоконтента и разработке сложных Telegram-ботов. Фокусируюсь на чистой архитектуре, быстром UI и решении бизнес-задач без лишнего визуального шума.",
      "Создаю законченные цифровые продукты: от интерактивных интерфейсов и сложных интеграций бэкенда до автоматизированных контентных пайплайнов с генеративными моделями.",
    ],
  },
  techStack: [
    { name: "Next.js 14/15", category: "frontend", highlight: true },
    { name: "React 18/19", category: "frontend", highlight: true },
    { name: "TypeScript", category: "frontend", highlight: true },
    { name: "Tailwind CSS", category: "frontend", highlight: true },
    { name: "Node.js", category: "backend", highlight: true },
    { name: "Python / FastAPI", category: "backend", highlight: true },
    { name: "Telegraf / Bot API", category: "backend", highlight: true },
    { name: "AI Video & Diffusion", category: "ai", highlight: true },
    { name: "OpenAI / Gemini API", category: "ai", highlight: true },
    { name: "PostgreSQL", category: "backend", highlight: false },
    { name: "Docker", category: "tools", highlight: false },
    { name: "Git / CI/CD", category: "tools", highlight: false },
  ] as TechItem[],
  projects: [
    {
      id: "agent-craft",
      number: "01",
      title: "AgentCraft AI Studio",
      category: "Next.js / React",
      description:
        "Интерфейс для проектирования и запуска автономных AI-агентов со стримингом ответов в реальном времени.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "AI SDK"],
      demoUrl: "#",
      githubUrl: "https://github.com/walsik111/ai-agent-studio",
      featured: true,
    },
    {
      id: "ai-video-pipeline",
      number: "02",
      title: "AI Video Generator Pipeline",
      category: "AI Video Generation",
      description:
        "Система автоматизированной генерации видеоконтента с использованием диффузионных моделей и LLM для написания сценариев.",
      tags: ["Python", "FastAPI", "MoviePy", "GenAI"],
      demoUrl: "#",
      githubUrl: "https://github.com/walsik111/AI-Video-Generation",
      featured: true,
    },
    {
      id: "smart-assistant-bot",
      number: "03",
      title: "Smart Assistant Bot",
      category: "Telegram Bot",
      description:
        "Многофункциональный Telegram-бот для автоматизации клиентской поддержки с интеграцией OpenAI API и генерацией ответов.",
      tags: ["Node.js", "Telegraf", "OpenAI API"],
      demoUrl: "https://t.me/Chad_Coder",
      githubUrl: "https://github.com/walsik111/telegram-bot",
      featured: true,
    },
    {
      id: "nexus-admin-dashboard",
      number: "04",
      title: "Nexus Admin Dashboard",
      category: "Web App / Dashboard",
      description:
        "Аналитический дашборд с ультрабыстрым SSR, современным UI и преднастроенными компонентами визуализации данных.",
      tags: ["Next.js", "Tailwind CSS", "ShadCN"],
      demoUrl: "#",
      githubUrl: "https://github.com/walsik111/analytics-dashboard",
      featured: false,
    },
  ] as Project[],
  contacts: [
    {
      label: "Telegram",
      value: "Прямая связь",
      href: TELEGRAM_URL,
      iconName: "Send",
    },
  ] as ContactLink[],
};
