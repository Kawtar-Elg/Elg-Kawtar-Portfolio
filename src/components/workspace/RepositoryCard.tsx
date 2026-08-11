import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, Globe2, Play, Smartphone, Store } from "lucide-react";
import { Link } from "react-router-dom";
import type { RepositoryRecord } from "@/lib/repository-utils";
import { cn } from "@/lib/utils";
import RepositoryPreview, { type RepositoryPreviewMode } from "./RepositoryPreview";

interface RepositoryCardProps {
  repository: RepositoryRecord;
  layout?: "featured" | "compact" | "list";
  previewMode?: RepositoryPreviewMode;
  onWatchDemo?: (repository: RepositoryRecord) => void;
  onOpenLiveSite?: (repository: RepositoryRecord) => void;
}

const ExternalAction = ({ href, children, icon }: { href: string; children: React.ReactNode; icon: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noreferrer" className="workspace-repository-action" onClick={(event) => event.stopPropagation()}>
    {icon}{children}
  </a>
);

export default function RepositoryCard({ repository, layout = "featured", previewMode = "presentation", onWatchDemo, onOpenLiveSite }: RepositoryCardProps) {
  const isCompact = layout === "compact";
  const isList = layout === "list";

  return (
    <motion.article
      layout
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className={cn("workspace-repository-card", {
        "workspace-repository-card--featured": layout === "featured",
        "workspace-repository-card--compact": isCompact,
        "workspace-repository-card--list": isList,
      })}
    >
      <div className="workspace-repository-card__content">
        <div className="workspace-repository-card__heading">
          <span className="workspace-repo-glyph" aria-hidden="true">{repository.category === "Mobile" ? <Smartphone /> : <Globe2 />}</span>
          <div>
            <Link to={`/repositories/${repository.slug}`} className="workspace-repository-name">
              {repository.title} <ArrowUpRight aria-hidden="true" />
            </Link>
            <div className="workspace-repository-meta"><span className="workspace-language-dot" /> {repository.category} · {repository.language}</div>
          </div>
        </div>
        <p className="workspace-repository-tagline">{repository.tagline}</p>
        <p className="workspace-repository-description">{repository.description}</p>
        <div className="workspace-topic-row" aria-label={`${repository.title} topics`}>
          {repository.topics.slice(0, isList ? 6 : 4).map((topic) => <span key={topic} className="workspace-topic">{topic}</span>)}
        </div>
        <div className="workspace-repository-footer">
          <Link to={`/repositories/${repository.slug}`} className="workspace-repository-action workspace-repository-action--primary">Open repository <ArrowUpRight aria-hidden="true" /></Link>
          {repository.githubUrl && <ExternalAction href={repository.githubUrl} icon={<Github aria-hidden="true" />}>Source</ExternalAction>}
          {repository.liveUrl && onOpenLiveSite ? (
            <button type="button" className="workspace-repository-action" onClick={() => onOpenLiveSite(repository)}>
              <Globe2 aria-hidden="true" /> Live site
            </button>
          ) : repository.liveUrl ? <ExternalAction href={repository.liveUrl} icon={<ExternalLink aria-hidden="true" />}>Live</ExternalAction> : null}
          {repository.storeUrl && <ExternalAction href={repository.storeUrl} icon={<Store aria-hidden="true" />}>Google Play</ExternalAction>}
          {repository.videoUrl && onWatchDemo && (
            <button type="button" className="workspace-repository-action" onClick={() => onWatchDemo(repository)}>
              <Play aria-hidden="true" /> Watch demo
            </button>
          )}
        </div>
      </div>
      <div className="workspace-repository-card__media"><RepositoryPreview repository={repository} compact={isCompact} previewMode={previewMode} /></div>
    </motion.article>
  );
}
