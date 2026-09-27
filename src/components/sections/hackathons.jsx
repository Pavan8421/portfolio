"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { Expand } from "lucide-react";
import GithubIcon from "../icons/github";
import { TechBadge } from "@/lib/tech-icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const accentColor = {
  "1st Place": "text-yellow-500 dark:text-yellow-400",
  "National Winner": "text-yellow-500 dark:text-yellow-400",
  "2nd Place": "text-violet-500 dark:text-violet-300",
  "2nd Position": "text-violet-500 dark:text-violet-300",
  "3rd Place": "text-orange-500 dark:text-orange-400",
  "6th Place": "text-orange-500 dark:text-orange-400",
  "Bounty Winner": "text-emerald-500 dark:text-emerald-400",
  "Qualifier": "text-sky-500 dark:text-sky-400",
  "Finalist": "text-sky-500 dark:text-sky-400",
};

const accentLine = {
  "1st Place": "bg-yellow-500 dark:bg-yellow-400",
  "National Winner": "bg-yellow-500 dark:bg-yellow-400",
  "2nd Place": "bg-violet-500 dark:bg-violet-300",
  "2nd Position": "bg-violet-500 dark:bg-violet-300",
  "3rd Place": "bg-orange-500 dark:bg-orange-400",
  "6th Place": "bg-orange-500 dark:bg-orange-400",
  "Bounty Winner": "bg-emerald-500 dark:bg-emerald-400",
  "Qualifier": "bg-sky-500 dark:bg-sky-400",
  "Finalist": "bg-sky-500 dark:bg-sky-400",
};

const corners = [
  { position: "-top-[3px] -left-[3px]", border: "border-t border-l" },
  { position: "-top-[3px] -right-[3px]", border: "border-t border-r" },
  { position: "-bottom-[3px] -left-[3px]", border: "border-b border-l" },
  { position: "-bottom-[3px] -right-[3px]", border: "border-b border-r" },
];

const ProofImage = ({ src, caption, alt }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="group relative mt-5 block w-full max-w-2xl cursor-zoom-in text-left"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          aria-label="View full proof photo"
        >
          <AnimatePresence>
            {hovered && (
              <>
                <motion.span
                  className="pointer-events-none absolute -inset-[3px] z-10 border border-dashed border-black/50 dark:border-white/50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                {corners.map(({ position, border }) => (
                  <motion.span
                    key={position}
                    className={`pointer-events-none absolute ${position} z-10 h-[6px] w-[6px] ${border} border-black dark:border-white`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                ))}
              </>
            )}
          </AnimatePresence>

          <div className="overflow-hidden border border-black/[0.08] bg-white/90 p-1 shadow-[0_16px_34px_rgba(15,23,42,0.12),0_2px_8px_rgba(15,23,42,0.08)] transition-[border-color,box-shadow,transform] duration-500 group-hover:-translate-y-0.5 group-hover:border-black/[0.14] group-hover:shadow-[0_20px_42px_rgba(15,23,42,0.16),0_4px_12px_rgba(15,23,42,0.1)] dark:border-white/[0.1] dark:bg-zinc-950/90 dark:shadow-[0_18px_38px_rgba(0,0,0,0.48)] dark:group-hover:border-white/[0.18]">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-950">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, 672px"
                className={`object-cover object-center transition-[filter,transform] duration-500 ${hovered ? "scale-[1.02] grayscale-0" : "grayscale"}`}
              />
              <span className="absolute bottom-2 right-2 flex items-center gap-1 rounded border border-white/20 bg-black/55 px-1.5 py-0.5 text-[9px] font-medium text-white backdrop-blur-sm md:text-[10px]">
                <Expand className="h-2.5 w-2.5" />
                Expand
              </span>
            </div>
          </div>

          {caption && (
            <p className="mt-2 font-space-mono text-[10px] tracking-wide text-muted-foreground md:text-xs">
              {caption}
            </p>
          )}
        </button>
      </DialogTrigger>

      <DialogContent className="max-h-[92vh] w-[min(96vw,960px)] max-w-none overflow-hidden rounded-none border border-black/[0.08] bg-background p-2 dark:border-white/[0.1] sm:p-3">
        <DialogTitle className="sr-only">{alt}</DialogTitle>
        <DialogDescription className="sr-only">
          {caption || alt}
        </DialogDescription>
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="960px"
            className="object-contain"
            priority
          />
        </div>
        {caption && (
          <p className="px-1 pb-1 pt-2 font-space-mono text-xs text-muted-foreground">
            {caption}
          </p>
        )}
      </DialogContent>
    </Dialog>
  );
};

const HackathonEntry = ({
  title,
  event,
  year,
  placement,
  college,
  body,
  techstacks,
  link,
  proofImage,
  proofCaption,
  index,
}) => {
  const [hovered, setHovered] = useState(false);
  const color = accentColor[placement] ?? "text-foreground";
  const line = accentLine[placement] ?? "bg-foreground/20";

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p
        className={`font-doto text-xl cursor-cell font-bold uppercase leading-none md:text-3xl transition-colors duration-300 ${hovered ? color : "text-foreground"}`}
      >
        {placement}
      </p>

      <div
        className={`mt-2.5 h-px w-12 md:w-16 transition-colors duration-300 ${hovered ? line : "bg-foreground/20"}`}
      />

      <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground md:text-xs">
        {event} · {year}
        {college ? ` · ${college}` : ""}
      </p>

      <h2 className="mt-1.5 text-sm font-semibold md:text-base">{title}</h2>

      <p className="mt-2 font-space-mono text-xs leading-relaxed text-muted-foreground md:text-sm">
        {Array.isArray(body)
          ? body.map((seg, i) =>
              seg.bold ? (
                <strong key={i} className="font-semibold text-foreground">
                  {seg.text}
                </strong>
              ) : (
                <span key={i}>{seg.text}</span>
              ),
            )
          : body}
      </p>

      {proofImage && (
        <ProofImage
          src={proofImage}
          caption={proofCaption}
          alt={`${title} — ${placement}`}
        />
      )}

      {techstacks?.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {techstacks.map((tech, i) => (
            <TechBadge key={i} name={tech} />
          ))}
        </div>
      )}

      {link && (
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-xs text-foreground/60 underline underline-offset-[3px] decoration-foreground/20 transition-colors hover:text-foreground hover:decoration-foreground/50 md:text-sm"
        >
          <GithubIcon className="h-4 w-4" /> GitHub
        </Link>
      )}
    </motion.article>
  );
};

const HackathonList = ({ hackathons }) => (
  <div className="space-y-12 px-2 md:space-y-16 md:px-0">
    {hackathons.map((h, i) => (
      <HackathonEntry key={i} index={i} {...h} />
    ))}
  </div>
);

export default HackathonList;
