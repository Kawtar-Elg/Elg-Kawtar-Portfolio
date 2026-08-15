import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, FileQuestion, Github } from "lucide-react";
import { GITHUB_URL } from "@/lib/github";

export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <main className="workspace-app workspace-404">
      <div className="workspace-404__inner">
        <span className="workspace-404__glyph" aria-hidden="true">
          <FileQuestion />
        </span>
        <p className="workspace-code-label">404 / not found</p>
        <h1>🚧 This path doesn&apos;t exist yet</h1>
        <p className="workspace-404__path">
          <span className="workspace-header__prompt">&gt;_</span> kawtar-elg{pathname}
        </p>
        <p className="workspace-404__hint">
          The page you were looking for isn&apos;t in this workspace. Head back to the overview or browse the
          repositories.
        </p>
        <div className="workspace-404__actions">
          <Link to="/" className="workspace-button">
            <ArrowLeft aria-hidden="true" /> Back to overview
          </Link>
          <Link to="/repositories" className="workspace-button workspace-button--ghost">
            📦 Repositories
          </Link>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="workspace-button workspace-button--ghost">
            <Github aria-hidden="true" /> GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
