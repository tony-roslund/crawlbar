import { ArrowRight, FolderOpen } from "lucide-react";

export function CrawlbarWordmark({ size = "base", tone = "dark" }) {
  const textSize =
    size === "hero"
      ? "text-5xl sm:text-7xl lg:text-8xl"
      : size === "display"
        ? "text-5xl sm:text-6xl"
        : "text-sm";
  const slashTone = tone === "dark" ? "text-emerald-700" : "text-emerald-300";
  const textTone = tone === "dark" ? "text-neutral-950" : "text-stone-50";

  return (
    <span className={`font-mono font-semibold tracking-tight ${textSize}`} aria-label="Crawlbar">
      <span className={slashTone}>/crawl</span>
      <span className={textTone}>bar</span>
    </span>
  );
}

export function VaultActionMark({ compact = false }) {
  return (
    <div className={`flex items-center ${compact ? "gap-3" : "gap-4"}`}>
      <div className={`${compact ? "text-3xl" : "text-4xl"} font-mono font-semibold tracking-tight text-emerald-300`}>
        /crawl
      </div>
      <ArrowRight className={`${compact ? "size-5" : "size-6"} shrink-0 stroke-stone-400`} aria-hidden="true" />
      <div className={`flex items-center gap-2 ${compact ? "text-3xl" : "text-4xl"} font-semibold tracking-tight text-stone-50`}>
        <FolderOpen className={`${compact ? "size-7" : "size-8"} shrink-0 stroke-amber-300`} aria-hidden="true" />
        <span>vault</span>
      </div>
    </div>
  );
}
