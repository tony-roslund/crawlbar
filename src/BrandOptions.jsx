import { ArrowRight, FileText, FolderOpen } from "lucide-react";

const options = [
  {
    name: "Command wordmark",
    label: "/crawlbar",
    description: "Most direct nod to the Cloudflare command while still reading as the product name.",
    mark: <CommandMark />,
  },
  {
    name: "Slash note mark",
    label: "Crawlbar",
    description: "A durable app icon direction: the slash references /crawl, the note references Obsidian.",
    mark: <SlashNoteMark />,
  },
  {
    name: "Vault action lockup",
    label: "crawl to vault",
    description: "Best for marketing moments where the action matters more than the product name.",
    mark: <VaultActionMark />,
  },
];

function BrandOptions() {
  return (
    <main className="min-h-dvh isolate bg-stone-50 font-sans text-neutral-950 antialiased">
      <section className="bg-[#ece8df] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <p className="font-mono text-sm/6 font-medium tracking-wide text-emerald-800 uppercase">Brand directions</p>
          <h1 className="mt-4 max-w-[13ch] text-balance text-5xl font-semibold tracking-tight sm:text-7xl">
            Crawlbar marks.
          </h1>
          <p className="mt-6 max-w-[54ch] text-pretty text-xl/8 text-neutral-700 sm:text-lg/8">
            Three ways to reference Cloudflare's /crawl command without making the product feel like a generic crawler wrapper.
          </p>
        </div>
      </section>
      <section className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 lg:grid-cols-3 lg:px-10">
          {options.map((option) => (
            <article key={option.name} className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-neutral-950/8">
              <div className="flex aspect-[4/3] items-center justify-center rounded-lg bg-neutral-950 p-8 text-stone-50">
                {option.mark}
              </div>
              <div className="mt-6">
                <p className="text-xl font-semibold tracking-tight">{option.name}</p>
                <p className="mt-2 font-mono text-base/7 text-emerald-800 sm:text-sm/6">{option.label}</p>
                <p className="mt-4 text-base/7 text-neutral-700 sm:text-sm/6">{option.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-neutral-950 py-14 text-stone-100 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[4fr_8fr] lg:items-center">
            <div>
              <p className="font-mono text-sm/6 font-medium tracking-wide text-emerald-300 uppercase">Recommendation</p>
              <h2 className="mt-3 max-w-[12ch] text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Use both.
              </h2>
            </div>
            <div className="rounded-lg bg-white/6 p-6 ring-1 ring-white/10">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <SlashNoteMark compact />
                  <div>
                    <p className="text-2xl font-semibold tracking-tight">/crawlbar</p>
                    <p className="mt-1 text-base/7 text-stone-300 sm:text-sm/6">
                      Slash-note icon with the command wordmark in product surfaces.
                    </p>
                  </div>
                </div>
                <ArrowRight className="hidden size-6 shrink-0 stroke-emerald-300 sm:block" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function CommandMark() {
  return (
    <div className="font-mono text-5xl font-semibold tracking-tight sm:text-6xl">
      <span className="text-emerald-300">/crawl</span>
      <span className="text-stone-50">bar</span>
    </div>
  );
}

function SlashNoteMark({ compact = false }) {
  return (
    <div className={`flex items-center gap-4 ${compact ? "text-stone-50" : ""}`}>
      <div className={`${compact ? "size-14" : "size-24"} relative rounded-lg bg-stone-50 text-neutral-950`}>
        <FileText className={`${compact ? "size-8" : "size-14"} absolute right-3 bottom-3 stroke-neutral-950`} aria-hidden="true" />
        <div className={`${compact ? "left-3 top-2 text-4xl" : "left-5 top-3 text-7xl"} absolute font-mono font-semibold text-emerald-700`}>
          /
        </div>
      </div>
      {!compact ? (
        <div>
          <p className="text-5xl font-semibold tracking-tight">Crawlbar</p>
          <p className="mt-2 font-mono text-sm/6 text-emerald-300">websites to Obsidian</p>
        </div>
      ) : null}
    </div>
  );
}

function VaultActionMark() {
  return (
    <div className="flex items-center gap-4">
      <div className="font-mono text-4xl font-semibold tracking-tight text-emerald-300">/crawl</div>
      <ArrowRight className="size-6 shrink-0 stroke-stone-400" aria-hidden="true" />
      <div className="flex items-center gap-2 text-4xl font-semibold tracking-tight">
        <FolderOpen className="size-8 shrink-0 stroke-amber-300" aria-hidden="true" />
        <span>vault</span>
      </div>
    </div>
  );
}

export default BrandOptions;
