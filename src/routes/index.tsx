import { createFileRoute } from "@tanstack/react-router";
import featuredImage from "@/assets/featured-project.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mariah Maico — AI Automation & BPO Specialist" },
      {
        name: "description",
        content:
          "Portfolio of Mariah Maico, BPO professional and AI automation specialist building workflows with Zapier, Make.com, and n8n.",
      },
      { property: "og:title", content: "Mariah Maico — AI Automation & BPO Specialist" },
      {
        property: "og:description",
        content:
          "12+ years in BPO, content moderation, and customer support. Building AI-powered automations with Zapier, Make.com, and n8n.",
      },
    ],
  }),
  component: Portfolio,
});

const services = [
  {
    swatch: "bg-accent",
    title: "AI Workflow Automation",
    body: "Designing end-to-end automations in Zapier, Make.com, and n8n that connect CRMs, inboxes, and AI agents to eliminate manual, repetitive work.",
  },
  {
    swatch: "bg-deep",
    title: "Customer & Email Support",
    body: "Managing high-volume inbound tickets through Salesforce, Zendesk, and GoHighLevel with a focus on fast resolution and lower escalations.",
  },
  {
    swatch: "bg-accent/40",
    title: "Content Moderation & QA",
    body: "Policy-driven review of sensitive content at scale, sustaining 98%+ compliance while protecting users on US-based digital platforms.",
  },
];

const experience = [
  {
    period: "Sep 2022 — Apr 2023",
    role: "Email Support Advocate",
    company: "Wonolo (via Upwork) · US-Based",
    blurb:
      "Resolved Salesforce support tickets for US users with a focus on reducing escalations and lifting platform experience.",
  },
  {
    period: "Dec 2017 — Sep 2022",
    role: "Content Moderator",
    company: "Wipro",
    blurb:
      "Moderated high-volume child-safety video content at 98% policy compliance, escalating high-risk content and protecting US users.",
  },
];

const projects = [
  {
    tools: ["Zapier", "OpenAI", "Google Sheets"],
    title: "AI Content Repurposing Pipeline",
    body: "File-upload trigger generates a transcript, drafts two unique blog articles, and produces LinkedIn and Instagram posts — with keyword-based routing and Google Sheets logging.",
  },
  {
    tools: ["Make.com", "Asana", "Xero"],
    title: "Automated Financial Reporting",
    body: "Asana task completion triggers a Make scenario that pulls Xero transactions, generates a structured CSV matching the native export, and attaches it back to the originating task.",
  },
  {
    tools: ["Make.com", "Gmail", "ChatGPT"],
    title: "AI Document Processing & Filing",
    body: "Gmail attachments are analyzed by ChatGPT, renamed descriptively, uploaded to Google Drive, logged in Sheets, and summarized via optional email digest.",
  },
  {
    tools: ["n8n", "Facebook", "AI"],
    title: "Facebook Support AI Agent",
    body: "Conversational AI agent that answers customer inquiries on a Facebook page using a curated knowledge base — cutting response time and automating routine queries.",
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

function Portfolio() {
  return (
    <div className="bg-background text-foreground font-body selection:bg-accent/30 selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-hairline bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a href="#top" className="font-heading text-xl font-semibold uppercase tracking-tight">
            Mariah Maico
          </a>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#services" className="text-sm text-muted-ink transition-colors hover:text-accent">
              Services
            </a>
            <a href="#experience" className="text-sm text-muted-ink transition-colors hover:text-accent">
              Experience
            </a>
            <a href="#work" className="text-sm text-muted-ink transition-colors hover:text-accent">
              Work
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-sm bg-accent py-2 pl-2 pr-3 text-sm font-medium text-accent-foreground ring-1 ring-accent transition-colors hover:bg-accent/90"
            >
              <span className="size-4 shrink-0 rounded-full bg-white/20" />
              Let's Talk
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="top" className="border-b border-hairline py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h1 className="mb-8 text-balance font-heading text-6xl font-semibold uppercase leading-none tracking-tighter md:text-8xl lg:text-9xl">
                Mariah
                <br />
                Maico
              </h1>
              <p className="max-w-[52ch] text-pretty text-lg text-muted-ink md:text-xl">
                BPO professional with 12 years of experience in content moderation, customer support, and
                process optimization — now building AI automations that quietly remove the manual work
                from growing teams.
              </p>
            </div>
            <div className="flex flex-col justify-end border-l border-hairline pl-8 lg:col-span-4">
              <div className="space-y-4">
                <div className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Currently</div>
                <p className="text-sm leading-relaxed text-muted-ink">
                  Building AI-powered workflows in Zapier, Make.com, and n8n for high-growth teams.
                  Based in Makati City, working with US-based clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex items-end justify-between">
            <h2 className="font-heading text-3xl font-medium tracking-tight">Operational Core</h2>
            <span className="font-mono text-sm italic text-faint-ink">[01] Services</span>
          </div>
          <div className="grid gap-px bg-hairline ring-1 ring-hairline md:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="bg-surface p-8">
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
              className="aspect-square w-full rounded-md object-cover outline outline-1 -outline-offset-1 outline-white/5"
            />
            <div className="space-y-8">
              <div className="flex gap-3">
                {["Zapier", "OpenAI", "Sheets"].map((t) => (
                  <span
                    key={t}
                    className="bg-deep px-2 py-1 text-[10px] font-semibold uppercase tracking-wider"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h2 className="text-balance font-heading text-4xl font-medium leading-tight">
                AI Content Repurposing &amp; Distribution Engine
              </h2>
              <p className="max-w-[52ch] text-pretty text-muted-ink">
                A Zapier workflow that fires the moment a file is uploaded — generates a transcript,
                drafts two unique blog articles, and ships LinkedIn and Instagram copy for each post.
                Conditional paths on keyword detection plus Sheets logging keep distribution tracked
                end-to-end.
              </p>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-sm border border-hairline bg-surface py-2 pl-2 pr-3 text-sm font-medium text-foreground ring-1 ring-black/5 transition-colors hover:border-accent"
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
              <h2 className="sticky top-24 font-heading text-3xl font-medium">
                Professional Chronology
              </h2>
              <p className="mt-4 max-w-xs text-sm text-muted-ink">
                12 years across three companies in BPO, content moderation, and customer support.
              </p>
            </div>
            <div className="space-y-px bg-hairline lg:col-span-8">
              {experience.map((e) => (
                <div
                  key={e.role}
                  className="flex flex-col justify-between gap-4 bg-background py-8 md:flex-row md:items-center"
                >
                  <div>
                    <div className="mb-1 font-mono text-xs uppercase tracking-widest text-accent">
                      {e.period}
                    </div>
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

      {/* Projects Grid */}
      <section id="projects" className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex items-end justify-between">
            <h2 className="font-heading text-3xl font-medium tracking-tight">Selected Projects</h2>
            <span className="font-mono text-sm italic text-faint-ink">[02] Work</span>
          </div>
          <div className="grid gap-px bg-hairline ring-1 ring-hairline md:grid-cols-2">
            {projects.map((p) => (
              <article key={p.title} className="bg-surface p-8">
                <div className="mb-6 flex flex-wrap gap-2">
                  {p.tools.map((t) => (
                    <span
                      key={t}
                      className="bg-deep px-2 py-1 text-[10px] font-semibold uppercase tracking-wider"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="mb-4 font-heading text-2xl font-medium leading-snug">{p.title}</h3>
                <p className="text-sm leading-relaxed text-muted-ink">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex items-end justify-between">
            <h2 className="font-heading text-3xl font-medium tracking-tight">What clients say</h2>
            <span className="font-mono text-sm italic text-faint-ink">[03] Testimonials</span>
          </div>
          <div className="grid gap-px bg-hairline ring-1 ring-hairline md:grid-cols-2">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-background p-12">
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
          <h2 className="mb-6 font-heading text-5xl font-medium uppercase tracking-tighter md:text-7xl">
            Ready to scale?
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-muted-ink">
            Let's talk about the manual work draining your team — and the automation that quietly
            removes it.
          </p>
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
            <a
              href="mailto:mariahlmaico@gmail.com"
              className="rounded-sm bg-accent px-8 py-3 text-base font-medium text-accent-foreground shadow-2xl shadow-accent/20 ring-1 ring-accent transition-colors hover:bg-accent/90"
            >
              mariahlmaico@gmail.com
            </a>
            <a
              href="tel:+639957653426"
              className="border border-white/20 px-8 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/5"
            >
              +63 995 765 3426
            </a>
          </div>

          <div className="mt-32 flex flex-col justify-between gap-4 border-t border-white/10 pt-12 text-[10px] uppercase tracking-widest text-muted-ink md:flex-row">
            <div>© 2026 Mariah Maico · Makati City, Philippines</div>
            <div className="flex justify-center gap-8">
              <a
                href="https://www.linkedin.com/in/mariah-maico-64748b185/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground"
              >
                LinkedIn
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01249d59524865ced1"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground"
              >
                Upwork
              </a>
              <a
                href="https://v2.onlinejobs.ph/jobseekers/info/390576"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground"
              >
                OnlineJobs
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
