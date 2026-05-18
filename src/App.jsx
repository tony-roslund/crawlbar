import {
  Archive,
  ArrowRight,
  BookOpenText,
  Check,
  Cloud,
  Code2,
  Download,
  FileText,
  FolderOpen,
  GitBranch,
  KeyRound,
  LockKeyhole,
  Menu,
  RefreshCcw,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const crawlPages = [
  "Company overview",
  "Pricing notes",
  "Product changelog",
  "Support docs",
  "Open questions",
];

const features = [
  {
    icon: FolderOpen,
    title: "Choose a vault folder",
    text: "Send each capture to a project, client, or research folder instead of a generic export directory.",
  },
  {
    icon: FileText,
    title: "Create useful notes",
    text: "Write one Markdown note per page, plus an index note with source URLs, crawl metadata, and backlinks.",
  },
  {
    icon: RefreshCcw,
    title: "Refresh the research",
    text: "Recrawl a source later and keep a trail of what changed without leaving your local knowledge system.",
  },
];

const positioning = [
  {
    icon: BookOpenText,
    title: "A capture layer",
    text: "Crawlbar is for saving a website into the place where you already think and write.",
  },
  {
    icon: Search,
    title: "A review surface",
    text: "Preview discovered pages, skip the noise, and keep the notes that belong in the vault.",
  },
  {
    icon: Archive,
    title: "A source archive",
    text: "Keep source links, dates, titles, and optional HTML so future-you knows where every note came from.",
  },
];

const principles = [
  "Bring your own Cloudflare account",
  "Token stored locally in Keychain",
  "No hosted backend required",
  "Markdown stays on your Mac",
];

const useCases = [
  "Docs saved beside a project",
  "Client site research folders",
  "Competitive positioning notes",
  "Changelog watchlists",
  "Course and tutorial libraries",
  "AI context packs from your vault",
];

function App() {
  return (
    <main className="min-h-dvh isolate overflow-hidden bg-stone-50 font-sans text-neutral-950 antialiased">
      <Hero />
      <PositioningSection />
      <Workflow />
      <ObsidianSection />
      <TrustSection />
      <UseCases />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <a href="#" className="flex items-center gap-2 text-base sm:text-sm">
          <span className="flex size-7 items-center justify-center rounded-md bg-neutral-950 text-sm font-medium text-stone-50">
            C
          </span>
          <span className="font-medium">Crawlbar</span>
        </a>
        <div className="hidden items-center gap-7 text-sm font-medium text-neutral-700 sm:flex">
          <a className="hover:text-neutral-950" href="#obsidian">
            Obsidian
          </a>
          <a className="hover:text-neutral-950" href="#positioning">
            Why
          </a>
          <a className="hover:text-neutral-950" href="#privacy">
            BYOC
          </a>
          <a className="hover:text-neutral-950" href="#use-cases">
            Use cases
          </a>
        </div>
        <button
          type="button"
          className="relative rounded-md p-2 text-neutral-700 hover:text-neutral-950 sm:hidden"
          aria-label="Open navigation"
        >
          <span className="pointer-fine:hidden absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2" aria-hidden="true" />
          <Menu className="size-5" aria-hidden="true" />
        </button>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[92dvh] overflow-hidden bg-[#ece8df] pt-24 sm:pt-28">
      <Header />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(250,250,249,0.9)_0%,rgba(250,250,249,0.72)_36%,rgba(250,250,249,0)_66%)]" />
      <div className="absolute right-[-4rem] bottom-[-2rem] w-[58rem] max-w-none opacity-95 sm:right-[-2rem] lg:right-8">
        <ProductScene />
      </div>
      <div className="relative z-10 mx-auto flex min-h-[calc(92dvh-6rem)] max-w-7xl items-center px-5 pb-20 sm:px-8 lg:px-10">
        <div className="max-w-[58ch] pb-16">
          <p className="font-mono text-sm/6 font-medium tracking-wide text-emerald-800 uppercase">
            Obsidian web capture
          </p>
          <h1 className="mt-5 max-w-[10ch] text-balance text-6xl font-semibold tracking-tight text-neutral-950 sm:text-7xl lg:text-8xl">
            Crawlbar
          </h1>
          <p className="mt-6 max-w-[39ch] text-pretty text-xl/8 text-neutral-700 sm:text-lg/8">
            Turn websites into structured Obsidian research folders you can search, annotate, link, and reuse.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#obsidian"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-neutral-950 px-4 py-3 text-base font-medium text-white ring-1 ring-neutral-950 transition hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 sm:text-sm"
            >
              See the vault workflow
              <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
            </a>
            <a
              href="#privacy"
              className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-3 text-base font-medium text-neutral-800 transition hover:text-neutral-950 sm:text-sm"
            >
              Local files, your Cloudflare
            </a>
          </div>
          <div className="mt-10 sm:hidden">
            <MobileProductScene />
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-10 h-14 bg-stone-50" />
    </section>
  );
}

function MobileProductScene() {
  return (
    <div className="rounded-lg bg-neutral-950 p-4 text-stone-100 shadow-xl ring-1 ring-black/10" aria-hidden="true">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <span className="text-base font-medium">Project Research</span>
        <span className="rounded-md bg-emerald-400 px-2 py-1 font-mono text-sm font-medium text-neutral-950">
          saved
        </span>
      </div>
      <div className="pt-4">
        <p className="font-mono text-sm/6 text-emerald-300">source: example.com</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-balance">Client website notes</h2>
        <div className="mt-4 space-y-2 text-base/7 text-stone-300">
          <div className="flex items-baseline gap-2">
            <FileText className="size-4 h-lh shrink-0 stroke-amber-300" />
            <span>Company overview.md</span>
          </div>
          <div className="flex items-baseline gap-2">
            <FileText className="size-4 h-lh shrink-0 stroke-amber-300" />
            <span>Pricing notes.md</span>
          </div>
          <div className="flex items-baseline gap-2">
            <FileText className="size-4 h-lh shrink-0 stroke-amber-300" />
            <span>Source index.md</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductScene() {
  return (
    <div className="relative hidden aspect-[1.2] w-full sm:block" aria-hidden="true">
      <div className="absolute top-8 right-24 left-16 rounded-t-lg bg-neutral-950 px-5 py-2 text-stone-200 shadow-2xl ring-1 ring-black/10">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-5">
            <span className="font-medium">Crawlbar</span>
            <span className="text-stone-400">File</span>
            <span className="text-stone-400">Crawls</span>
            <span className="text-stone-400">Vault</span>
          </div>
          <span className="font-mono text-stone-400">18:44</span>
        </div>
      </div>
      <div className="absolute top-20 right-0 w-[26rem] rounded-lg bg-neutral-950 p-4 text-stone-100 shadow-2xl ring-1 ring-white/10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-base font-medium sm:text-sm">New capture</p>
            <p className="text-base/7 text-stone-400 sm:text-sm/6">Website to vault folder</p>
          </div>
          <div className="rounded-md bg-emerald-400 px-2.5 py-1 font-mono text-sm font-medium text-neutral-950">
            ready
          </div>
        </div>
        <div className="mt-5 rounded-md bg-stone-100 p-3 text-neutral-950">
          <p className="text-base/7 sm:text-sm/6">https://example.com/resources/</p>
        </div>
        <div className="mt-4 grid grid-cols-[1fr_auto] items-center gap-3">
          <div className="rounded-md bg-neutral-900 p-3 ring-1 ring-white/10">
            <p className="text-base/7 text-stone-300 sm:text-sm/6">Vault</p>
            <p className="mt-1 text-base font-medium sm:text-sm">Projects / Client Research</p>
          </div>
          <div className="rounded-md bg-amber-300 px-3 py-2 text-sm font-medium text-neutral-950">
            Capture
          </div>
        </div>
      </div>
      <div className="absolute top-44 right-52 w-[32rem] rounded-lg bg-[#1e1d27] p-5 text-stone-100 shadow-2xl ring-1 ring-white/10">
        <div className="flex items-center gap-2 border-b border-white/10 pb-4">
          <span className="size-3 rounded-full bg-red-400" />
          <span className="size-3 rounded-full bg-amber-300" />
          <span className="size-3 rounded-full bg-emerald-400" />
          <span className="ml-3 text-base font-medium sm:text-sm">Obsidian</span>
        </div>
        <div className="grid grid-cols-[11rem_1fr] gap-5 pt-5">
          <div className="space-y-2 text-base/7 text-stone-400 sm:text-sm/6">
            <div className="flex items-center gap-2 text-stone-100">
              <FolderOpen className="size-4 shrink-0" />
              Client Research
            </div>
            {crawlPages.map((page) => (
              <div key={page} className="pl-6">
                {page}
              </div>
            ))}
          </div>
          <div>
            <p className="font-mono text-sm/6 text-emerald-300">source: example.com</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-balance">Client website notes</h2>
            <div className="mt-5 space-y-3 text-base/7 text-stone-300 sm:text-sm/6">
              <p>Captured as editable Markdown with source URLs, titles, and useful frontmatter.</p>
              <p>Ready to link into project notes, meeting prep, and AI context.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PositioningSection() {
  return (
    <section id="positioning" className="bg-stone-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[5fr_7fr] lg:items-start">
          <div>
            <p className="font-mono text-sm/6 font-medium tracking-wide text-emerald-800 uppercase">Why it exists</p>
            <h2 className="mt-3 max-w-[15ch] text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Not web scraping infrastructure.
            </h2>
            <p className="mt-5 max-w-[54ch] text-pretty text-base/7 text-neutral-700 sm:text-sm/6">
              Crawlbar is not trying to be an API for extracting the whole web. It is a local capture tool for turning a useful site into working notes inside your Obsidian vault.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {positioning.map((item) => (
              <div key={item.title} className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-neutral-950/8">
                <item.icon className="size-6 stroke-emerald-700" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-balance">{item.title}</h3>
                <p className="mt-3 text-base/7 text-neutral-700 sm:text-sm/6">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Workflow() {
  return (
    <section className="bg-[#f5f1e8] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-[58ch]">
          <p className="font-mono text-sm/6 font-medium tracking-wide text-emerald-800 uppercase">The workflow</p>
          <h2 className="mt-3 max-w-[14ch] text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            From source to notes
          </h2>
          <p className="mt-5 max-w-[54ch] text-pretty text-base/7 text-neutral-700 sm:text-sm/6">
            Crawlbar is for people who already use Obsidian as their working memory. The crawl is only the first step; the real job is creating files you can use.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-neutral-950/8">
              <feature.icon className="size-6 stroke-emerald-700" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-balance">{feature.title}</h3>
              <p className="mt-3 text-base/7 text-neutral-700 sm:text-sm/6">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ObsidianSection() {
  return (
    <section id="obsidian" className="bg-stone-50 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[7fr_5fr] lg:items-center lg:px-10">
        <div>
          <p className="font-mono text-sm/6 font-medium tracking-wide text-emerald-800 uppercase">Obsidian first</p>
          <h2 className="mt-3 max-w-[16ch] text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            A folder, not a dump.
          </h2>
          <p className="mt-5 max-w-[60ch] text-pretty text-base/7 text-neutral-700 sm:text-sm/6">
            Every capture creates an index note, one Markdown file per page, and metadata that makes the source usable months later.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Obsidian-ready backlinks",
              "Original source URLs",
              "Project-friendly frontmatter",
              "Optional source HTML",
            ].map((item) => (
              <div key={item} className="flex items-baseline gap-2 text-base/7 text-neutral-800 sm:text-sm/6">
                <Check className="size-4 h-lh shrink-0 stroke-emerald-700" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg bg-neutral-950 p-4 text-stone-100 shadow-xl ring-1 ring-black/10">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2 text-base font-medium sm:text-sm">
              <BookOpenText className="size-4 shrink-0 stroke-amber-300" aria-hidden="true" />
              Crawl Index
            </div>
            <span className="font-mono text-sm/6 text-stone-500">2026-05-18</span>
          </div>
          <pre className="overflow-hidden pt-5 font-mono text-sm/6 text-stone-300">
{`---
source: https://example.com/resources
domain: example.com
crawled: 2026-05-18
pages: 42
project: Client Research
---

# Client Research Source Index

- [[Company overview]]
- [[Pricing notes]]
- [[Product changelog]]
- [[Support docs]]
`}
          </pre>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section id="privacy" className="bg-neutral-950 py-20 text-stone-100 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[5fr_7fr] lg:items-start lg:px-10">
        <div>
          <p className="font-mono text-sm/6 font-medium tracking-wide text-emerald-300 uppercase">BYOC</p>
          <h2 className="mt-3 max-w-[14ch] text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Your engine. Your vault.
          </h2>
          <p className="mt-5 max-w-[52ch] text-pretty text-base/7 text-stone-300 sm:text-sm/6">
            Crawlbar uses Cloudflare Browser Run with credentials you provide. Cloudflare handles the crawl; Crawlbar handles the local knowledge workflow.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-white/6 p-6 ring-1 ring-white/10">
            <KeyRound className="size-6 stroke-amber-300" aria-hidden="true" />
            <h3 className="mt-5 text-xl font-semibold tracking-tight">Local credentials</h3>
            <p className="mt-3 text-base/7 text-stone-300 sm:text-sm/6">
              Paste your Cloudflare account ID and API token once. Crawlbar stores the token in Keychain.
            </p>
          </div>
          <div className="rounded-lg bg-white/6 p-6 ring-1 ring-white/10">
            <Cloud className="size-6 stroke-sky-300" aria-hidden="true" />
            <h3 className="mt-5 text-xl font-semibold tracking-tight">Cloudflare engine</h3>
            <p className="mt-3 text-base/7 text-stone-300 sm:text-sm/6">
              Use Cloudflare's crawl and Markdown extraction directly from your own Workers plan.
            </p>
          </div>
          <div className="rounded-lg bg-white/6 p-6 ring-1 ring-white/10">
            <LockKeyhole className="size-6 stroke-emerald-300" aria-hidden="true" />
            <h3 className="mt-5 text-xl font-semibold tracking-tight">No shared backend</h3>
            <p className="mt-3 text-base/7 text-stone-300 sm:text-sm/6">
              No app account, no proxy account, and no hidden crawl quota controlled by Crawlbar.
            </p>
          </div>
          <div className="rounded-lg bg-white/6 p-6 ring-1 ring-white/10">
            <GitBranch className="size-6 stroke-violet-300" aria-hidden="true" />
            <h3 className="mt-5 text-xl font-semibold tracking-tight">Open source</h3>
            <p className="mt-3 text-base/7 text-stone-300 sm:text-sm/6">
              Built for users who want a transparent desktop utility, not another hosted research silo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  return (
    <section id="use-cases" className="bg-stone-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[5fr_7fr] lg:items-start">
          <div>
            <p className="font-mono text-sm/6 font-medium tracking-wide text-emerald-800 uppercase">Use cases</p>
            <h2 className="mt-3 max-w-[14ch] text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Make sources usable
            </h2>
            <p className="mt-5 max-w-[52ch] text-pretty text-base/7 text-neutral-700 sm:text-sm/6">
              The point is not collecting pages. The point is making external information part of the notes, projects, and AI context you already use.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {useCases.map((item) => (
              <div key={item} className="flex items-baseline gap-3 rounded-lg bg-white p-4 shadow-sm ring-1 ring-neutral-950/8">
                <Archive className="size-4 h-lh shrink-0 stroke-emerald-700" aria-hidden="true" />
                <span className="text-base/7 font-medium text-neutral-800 sm:text-sm/6">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 rounded-lg bg-white p-6 shadow-sm ring-1 ring-neutral-950/8 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[4fr_8fr] lg:items-center">
            <div>
              <Sparkles className="size-6 stroke-amber-500" aria-hidden="true" />
              <h3 className="mt-4 max-w-[16ch] text-2xl font-semibold tracking-tight text-balance">
                Narrow on purpose
              </h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {principles.map((item) => (
                <div key={item} className="flex items-baseline gap-2 text-base/7 text-neutral-700 sm:text-sm/6">
                  <ShieldCheck className="size-4 h-lh shrink-0 stroke-emerald-700" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-neutral-950 px-5 py-10 text-stone-300 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-base font-medium text-white sm:text-sm">Crawlbar</p>
          <p className="mt-1 text-base/7 text-stone-400 sm:text-sm/6">
            Websites to Obsidian, from your menu bar.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-stone-200 ring-1 ring-white/20 transition hover:text-white hover:ring-white/35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 sm:text-sm"
          >
            <Download className="size-4 shrink-0" aria-hidden="true" />
            Coming soon
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-stone-300 transition hover:text-white sm:text-sm"
          >
            <Code2 className="size-4 shrink-0" aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default App;
