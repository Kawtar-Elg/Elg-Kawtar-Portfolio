import { useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { RotateCw, TerminalSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMotionEnabled } from "@/lib/motion";

type LineTone = "ok" | "accent" | "muted" | "plain";

interface OutputLine {
  text: string;
  tone?: LineTone;
}

export interface TerminalCommand {
  id: string;
  command: string;
  output: OutputLine[];
}

interface TerminalCardProps {
  commands: TerminalCommand[];
  className?: string;
  title?: string;
  /** Milliseconds per typed character. */
  speed?: number;
}

const TYPED_OUTPUT_DELAY = 260;

/**
 * Decorative-but-real terminal. The typing animation is hidden from
 * assistive tech; the full transcript is exposed as static text instead.
 */
export default function TerminalCard({
  commands,
  className,
  title = "kawtar@portfolio: ~",
  speed = 38,
}: TerminalCardProps) {
  const [activeId, setActiveId] = useState(commands[0]?.id);
  const [runToken, setRunToken] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.3 });
  const animate = useMotionEnabled();

  const active = useMemo(
    () => commands.find((entry) => entry.id === activeId) ?? commands[0],
    [activeId, commands]
  );

  const [typed, setTyped] = useState(animate ? "" : active?.command ?? "");
  const [revealed, setRevealed] = useState(animate ? 0 : active?.output.length ?? 0);

  useEffect(() => {
    if (!active) return;

    if (!animate) {
      setTyped(active.command);
      setRevealed(active.output.length);
      return;
    }

    if (!inView) return;

    setTyped("");
    setRevealed(0);

    const timers: ReturnType<typeof setTimeout>[] = [];
    let index = 0;

    const typeNext = () => {
      index += 1;
      setTyped(active.command.slice(0, index));

      if (index < active.command.length) {
        timers.push(setTimeout(typeNext, speed));
        return;
      }

      active.output.forEach((_, outputIndex) => {
        timers.push(
          setTimeout(() => setRevealed(outputIndex + 1), TYPED_OUTPUT_DELAY * (outputIndex + 1))
        );
      });
    };

    timers.push(setTimeout(typeNext, 220));

    return () => timers.forEach(clearTimeout);
  }, [active, animate, inView, runToken, speed]);

  if (!active) return null;

  return (
    <div ref={containerRef} className={cn("workspace-terminal", className)}>
      <div className="workspace-terminal__bar">
        <span className="workspace-terminal__lights" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span className="workspace-terminal__title">
          <TerminalSquare aria-hidden="true" /> {title}
        </span>
        <button
          type="button"
          className="workspace-terminal__rerun"
          onClick={() => setRunToken((token) => token + 1)}
          aria-label="Re-run the terminal command"
        >
          <RotateCw aria-hidden="true" />
        </button>
      </div>

      <div className="workspace-terminal__tabs" role="tablist" aria-label="Terminal commands">
        {commands.map((entry) => (
          <button
            key={entry.id}
            type="button"
            role="tab"
            aria-selected={entry.id === active.id}
            className={cn(
              "workspace-terminal__tab",
              entry.id === active.id && "workspace-terminal__tab--active"
            )}
            onClick={() => {
              setActiveId(entry.id);
              setRunToken((token) => token + 1);
            }}
          >
            {entry.id}
          </button>
        ))}
      </div>

      <div className="workspace-terminal__body" aria-hidden="true">
        <p className="workspace-terminal__command">
          <span className="workspace-terminal__prompt">$</span>
          <span>{typed}</span>
          {animate && <span className="workspace-terminal__cursor" />}
        </p>
        {active.output.slice(0, revealed).map((line) => (
          <p
            key={line.text}
            className={cn("workspace-terminal__line", `workspace-terminal__line--${line.tone ?? "plain"}`)}
          >
            {line.text}
          </p>
        ))}
      </div>

      <p className="sr-only">
        Terminal transcript. Command: {active.command}. Output:{" "}
        {active.output.map((line) => line.text).join(". ")}
      </p>
    </div>
  );
}
