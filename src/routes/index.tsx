import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { Moon, Sun } from "lucide-react";
import featuredImage from "@/assets/featured-project.jpg";
import portraitImage from "@/assets/portrait.jpg";
import projZapRepurpose from "@/assets/project-zapier-repurposing.png";
import projZapLeads from "@/assets/project-zapier-leads.jpg";
import projMakeXero from "@/assets/project-make-xero.png";
import projMakeGmail from "@/assets/project-make-gmail.png";
import projN8nFb from "@/assets/project-n8n-fb.png";
import projN8nAsmr from "@/assets/project-n8n-asmr.png";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mariah Maico — Workflow and AI Automation Specialist" },
      {
        name: "description",
        content:
          "Workflow and AI Automation Specialist building intelligent systems with Zapier, Make.com, and n8n — streamlining operations and automating content for growing teams.",
      },
      { property: "og:title", content: "Mariah Maico — Workflow and AI Automation Specialist" },
      {
        property: "og:description",
        content:
          "Designing AI-powered automations with Zapier, Make.com, and n8n. 12+ years across BPO, customer support, and content moderation.",
      },
    ],
  }),
  component: Portfolio,
});

const services = [
  {
    swatch: "bg-accent",
    title: "AI Workflow Automation",
    body: "Designing end-to-end automations in Zapier, Make.com, and n8n — connecting CRMs, inboxes, and AI agents to eliminate repetitive manual work.",
  },
  {
    swatch: "bg-deep",
    title: "API & System Integration",
    body: "Wiring up Google Workspace, Asana, Xero, Gmail, GoHighLevel, and ChatGPT through Google Apps Script and no-code platforms for clean, reliable data flow.",
  },
  {
    swatch: "bg-accent/40",
    title: "Customer Support & Moderation",
    body: "12 years across Salesforce, Zendesk, and policy-driven content review. Sustained 98%+ compliance for US-based platforms at high volume.",
  },
];

const experience = [
  {
    period: "Sep 2022 — Apr 2023",
    role: "Email Support Advocate",
    company: "Wonolo (via Upwork) · US-Based",
    blurb:
      "Managed inbound Salesforce tickets for US users — reducing escalations and lifting platform experience for customers and workers alike.",
  },
  {
    period: "Dec 2017 — Sep 2022",
    role: "Content Moderator",
    company: "Wipro",
    blurb:
      "Moderated high-volume child-safety video content at 98% policy compliance, escalating high-risk material and protecting US users daily.",
  },
];

const projects = [
  {
    image: projZapRepurpose,
    tools: ["Zapier", "OpenAI", "Google Sheets"],
    title: "AI Content Repurposing Pipeline",
    body: "File-upload trigger generates a transcript, drafts two unique blog articles, and produces LinkedIn and Instagram posts — with keyword-based routing and Google Sheets logging.",
  },
  {
    image: projZapLeads,
    tools: ["Zapier", "Asana", "Gmail"],
    title: "Lead Management & Follow-Up Engine",
    body: "Asana, Google Drive, and email/SMS integrations automate folder creation, recurring follow-ups for quoted leads, welcome emails, and conditional service recommendation campaigns.",
  },
  {
    image: projMakeXero,
    tools: ["Make.com", "Asana", "Xero"],
    title: "Automated Financial Reporting",
    body: "Asana task completion triggers a Make scenario that pulls Xero transactions, generates a structured CSV matching the native export, and attaches it back to the originating task.",
  },
  {
    image: projMakeGmail,
    tools: ["Make.com", "Gmail", "ChatGPT"],
    title: "AI Document Processing & Filing",
    body: "Gmail attachments are analyzed by ChatGPT, renamed descriptively, uploaded to Google Drive, logged in Sheets, and summarized via optional email digest.",
  },
  {
    image: projN8nFb,
    tools: ["n8n", "Facebook", "AI"],
    title: "Facebook Support AI Agent",
    body: "Conversational AI agent answers customer inquiries on a Facebook page using a curated knowledge base — cutting response time and automating routine queries.",
  },
  {
    image: projN8nAsmr,
    tools: ["n8n", "YouTube", "CapCut"],
    title: "Short-Form Video Content Engine",
    body: "Automated workflow for YouTube Shorts and Facebook Reels — AI content generation, caption creation, media processing, and cross-platform publishing in one pipeline.",
  },
];

const testimonials = [
  {
    swatch: "bg-deep",
    quote:
      "Mariah re-engineered how our support team handled tickets. Response times dropped and our agents stopped drowning in repetitive work.",
    name: "Operations Lead",
    role: "US SaaS Client (via Upwork)",
  },
  {
    swatch: "bg-accent",
    quote:
      "Detail-oriented, dependable, and a systems thinker. Her automations quietly run our content pipeline every single day.",
    name: "Marketing Manager",
    role: "Content Agency Client",
  },
];

const techStack = [
  { label: "Productivity", items: "Google Workspace · Microsoft 365 · Airtable · Zendesk" },
  { label: "AI & Automation", items: "ChatGPT · Zapier · Make.com · n8n · Google Apps Script" },
  { label: "CRM & Marketing", items: "GoHighLevel · Slack · Loom" },
  { label: "Design & PM", items: "Canva · CapCut · Asana · Grammarly" },
];

function useTheme() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("theme")) as
      | "dark"
      | "light"
      | null;
    const initial = stored ?? "dark";
    setTheme(initial);
    document.documentElement.classList.toggle("light", initial === "light");
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("light", next === "light");
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  return { theme, toggle };
}

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function rippleHandler(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--ripple-x", `${e.clientX - rect.left}px`);
  el.style.setProperty("--ripple-y", `${e.clientY - rect.top}px`);
  el.classList.remove("is-rippling");
  // force reflow
  void el.offsetWidth;
  el.classList.add("is-rippling");
  window.setTimeout(() => el.classList.remove("is-rippling"), 600);
}

function ThemeToggle({ theme, toggle }: { theme: "dark" | "light"; toggle: () => void }) {
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="press ripple flex size-9 items-center justify-center rounded-sm border border-hairline bg-surface text-foreground transition-colors hover:border-accent hover:text-accent"
      onMouseDown={rippleHandler}
    >
      {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}

function Portfolio() {
  const { theme, toggle } = useTheme();
  useScrollReveal();

  // Parallax for hero
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current) return;
      const y = window.scrollY;
      heroRef.current.style.transform = `translateY(${y * 0.15}px)`;
      heroRef.current.style.opacity = `${Math.max(0, 1 - y / 600)}`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-background text-foreground font-body selection:bg-accent/30 selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-hairline bg-background/80 backdrop-blur-md">
        <div className="mx-auto grid h-16 max-w-7xl grid-cols-2 items-center px-6 md:grid-cols-3">
          <a href="#top" className="font-heading text-xl font-semibold uppercase tracking-tight transition-colors hover:text-accent">
            <span className="text-accent">M</span>ariah <span className="text-accent">M</span>aico
          </a>
          <div className="hidden items-center justify-center gap-7 md:flex">
            <a href="#top" className="text-sm font-medium text-accent transition-colors">Home</a>
            <a href="#services" className="text-sm text-muted-ink transition-colors hover:text-accent">Services</a>
            <a href="#experience" className="text-sm text-muted-ink transition-colors hover:text-accent">Experience</a>
            <a href="#projects" className="text-sm text-muted-ink transition-colors hover:text-accent">Portfolio</a>
            <a href="#contact" className="text-sm text-muted-ink transition-colors hover:text-accent">Contact</a>
          </div>
          <div className="flex items-center justify-end gap-3">
            <a
              href="#contact"
              onMouseDown={rippleHandler}
              className="ripple press hidden items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground shadow-lg shadow-accent/30 transition-colors hover:bg-accent/90 md:inline-flex"
            >
              Let's Talk
            </a>
            <ThemeToggle theme={theme} toggle={toggle} />
          </div>
        </div>
      </nav>


      {/* Hero */}
      <section id="top" className="hero-bg border-b border-hairline py-24">
        <div className="relative mx-auto max-w-7xl px-6">
          <div ref={heroRef} className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent">
                <span className="size-1.5 animate-pulse rounded-full bg-accent" />
                Workflow and AI Automation Specialist
              </div>
              <h1 className="reveal mb-6 text-balance font-heading text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
                Providing The Best{" "}
                <span className="relative inline-block">
                  AI Automation
                  <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-accent/70" />
                </span>{" "}
                Solutions
              </h1>
              <p className="reveal mb-8 max-w-[58ch] text-pretty text-base leading-relaxed text-muted-ink md:text-lg">
                Designing intelligent systems with Make.com, Zapier, and n8n. I build AI-powered
                automations that streamline operations, automate content creation, and quietly
                remove the manual work from growing teams.
              </p>
              <div className="reveal flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  onMouseDown={rippleHandler}
                  className="ripple press inline-flex items-center gap-3 rounded-full border border-accent/60 bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent/10"
                >
                  View Work
                </a>
                <a
                  href="#contact"
                  onMouseDown={rippleHandler}
                  className="ripple press inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground shadow-lg shadow-accent/30 hover:bg-accent/90"
                >
                  Let's Talk
                  <span className="grid size-6 place-items-center rounded-full bg-white/20">→</span>
                </a>
              </div>
            </div>
            <div className="reveal lg:col-span-5">
              <div className="relative mx-auto aspect-square w-full max-w-md">
                <div className="absolute inset-0 animate-pulse rounded-full bg-accent/20 blur-3xl" />
                <div className="portrait-glow relative size-full overflow-hidden rounded-full border-2 border-accent/40 bg-white">
                  <img
                    src={portraitImage}
                    alt="Portrait of Mariah Maico"
                    className="size-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 rounded-full border border-hairline bg-background/80 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-accent backdrop-blur-md">
                  Makati · PH
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Services */}
      <section id="services" className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal mb-16 flex items-end justify-between">
            <h2 className="font-heading text-3xl font-medium tracking-tight">Operational Core</h2>
            <span className="font-mono text-sm italic text-faint-ink">[01] Services</span>
          </div>
          <div className="grid gap-px bg-hairline ring-1 ring-hairline md:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="reveal lift bg-surface p-8 hover:bg-background">
                <div className={`mb-6 size-4 shrink-0 ${s.swatch}`} />
                <h3 className="mb-4 font-heading text-xl font-medium">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-ink">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section id="work" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <img
              src={featuredImage}
              alt="Node-based automation dashboard visualization"
              width={1024}
              height={1024}
              loading="lazy"
              className="reveal lift aspect-square w-full rounded-md object-cover outline outline-1 -outline-offset-1 outline-white/5"
            />
            <div className="space-y-8">
              <div className="reveal flex gap-3">
                {["Zapier", "OpenAI", "Sheets"].map((t) => (
                  <span key={t} className="bg-deep px-2 py-1 text-[10px] font-semibold uppercase tracking-wider">{t}</span>
                ))}
              </div>
              <h2 className="reveal text-balance font-heading text-4xl font-medium leading-tight">
                AI Content Repurposing &amp; Distribution Engine
              </h2>
              <p className="reveal max-w-[52ch] text-pretty text-muted-ink">
                A Zapier workflow that fires the moment a file is uploaded — generates a transcript,
                drafts two unique blog articles, and ships LinkedIn and Instagram copy for each post.
                Conditional paths on keyword detection plus Sheets logging keep distribution tracked
                end-to-end.
              </p>
              <a
                href="#projects"
                onMouseDown={rippleHandler}
                className="reveal ripple press inline-flex items-center gap-2 rounded-sm border border-hairline bg-surface py-2 pl-2 pr-3 text-sm font-medium text-foreground transition-colors hover:border-accent"
              >
                <span className="size-4 shrink-0 rounded-sm bg-accent" />
                See more projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="border-y border-hairline py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="reveal sticky top-24 font-heading text-3xl font-medium">
                Professional Chronology
              </h2>
              <p className="reveal mt-4 max-w-xs text-sm text-muted-ink">
                12 years across BPO, content moderation, and customer support — now applied to AI workflow design.
              </p>
            </div>
            <div className="space-y-px bg-hairline lg:col-span-8">
              {experience.map((e) => (
                <div
                  key={e.role}
                  className="reveal flex flex-col justify-between gap-4 bg-background py-8 md:flex-row md:items-center"
                >
                  <div>
                    <div className="mb-1 font-mono text-xs uppercase tracking-widest text-accent">{e.period}</div>
                    <h4 className="font-heading text-xl font-medium">{e.role}</h4>
                    <p className="text-sm text-faint-ink">{e.company}</p>
                  </div>
                  <p className="text-sm text-muted-ink md:max-w-[40ch]">{e.blurb}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal mb-16 flex items-end justify-between">
            <h2 className="font-heading text-3xl font-medium tracking-tight">Tech Stack</h2>
            <span className="font-mono text-sm italic text-faint-ink">[02] Tools</span>
          </div>
          <div className="grid gap-px bg-hairline ring-1 ring-hairline md:grid-cols-2 lg:grid-cols-4">
            {techStack.map((t) => (
              <div key={t.label} className="reveal lift bg-surface p-8 hover:bg-background">
                <div className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">{t.label}</div>
                <p className="text-sm leading-relaxed text-muted-ink">{t.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal mb-16 flex items-end justify-between">
            <h2 className="font-heading text-3xl font-medium tracking-tight">Selected Projects</h2>
            <span className="font-mono text-sm italic text-faint-ink">[03] Work</span>
          </div>
          <div className="grid gap-px bg-hairline ring-1 ring-hairline md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <article key={p.title} className="reveal lift group flex flex-col bg-background hover:bg-surface">
                <div className="aspect-[16/10] w-full overflow-hidden border-b border-hairline bg-surface">
                  <img
                    src={p.image}
                    alt={`${p.title} workflow diagram`}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <div className="mb-6 flex flex-wrap gap-2">
                    {p.tools.map((t) => (
                      <span key={t} className="bg-deep px-2 py-1 text-[10px] font-semibold uppercase tracking-wider">{t}</span>
                    ))}
                  </div>
                  <h3 className="mb-4 font-heading text-2xl font-medium leading-snug">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-ink">{p.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal mb-16 flex items-end justify-between">
            <h2 className="font-heading text-3xl font-medium tracking-tight">What clients say</h2>
            <span className="font-mono text-sm italic text-faint-ink">[04] Testimonials</span>
          </div>
          <div className="grid gap-px bg-hairline ring-1 ring-hairline md:grid-cols-2">
            {testimonials.map((t) => (
              <div key={t.name} className="reveal lift bg-background p-12">
                <p className="mb-8 text-xl italic leading-relaxed text-foreground/90">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className={`size-10 rounded-full ${t.swatch}`} />
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-faint-ink">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="bg-deep py-32">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="reveal mb-6 font-heading text-5xl font-medium uppercase tracking-tighter md:text-7xl">
            Ready to scale?
          </h2>
          <p className="reveal mx-auto mb-12 max-w-xl text-muted-ink">
            Let's talk about the manual work draining your team — and the AI automation that quietly
            removes it.
          </p>
          <div className="reveal flex flex-col items-center justify-center gap-6 md:flex-row">
            <a
              href="mailto:mariahlmaico@gmail.com"
              onMouseDown={rippleHandler}
              className="ripple press rounded-sm bg-accent px-8 py-3 text-base font-medium text-accent-foreground shadow-2xl shadow-accent/20 ring-1 ring-accent transition-colors hover:bg-accent/90"
            >
              mariahlmaico@gmail.com
            </a>
            <a
              href="tel:+639957653426"
              onMouseDown={rippleHandler}
              className="ripple press border border-hairline px-8 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
            >
              +63 995 765 3426
            </a>
          </div>

          <div className="mt-32 flex flex-col justify-between gap-4 border-t border-hairline pt-12 text-[10px] uppercase tracking-widest text-muted-ink md:flex-row">
            <div>© 2026 Mariah Maico · Makati City, Philippines</div>
            <div className="flex justify-center gap-8">
              <a href="https://www.linkedin.com/in/mariah-maico-64748b185/" target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">LinkedIn</a>
              <a href="https://www.upwork.com/freelancers/~01249d59524865ced1" target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">Upwork</a>
              <a href="https://v2.onlinejobs.ph/jobseekers/info/390576" target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">OnlineJobs</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
