import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Download, Github, Linkedin, Mail, Plus, Search } from "lucide-react";
import kawtarProfile from "@/assets/kawtar-profile.jpeg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { label: "Overview", to: "/", key: "overview" },
  { label: "Repositories", to: "/repositories", key: "repositories" },
  { label: "Activity", to: "/#activity", key: "activity" },
  { label: "Achievements", to: "/#achievements", key: "achievements" },
  { label: "Skills", to: "/#skills", key: "skills" },
];

interface WorkspaceShellProps {
  children: React.ReactNode;
}

const getActiveKey = (pathname: string, hash: string) => {
  if (pathname.startsWith("/repositories")) return "repositories";
  if (hash === "#activity") return "activity";
  if (hash === "#achievements") return "achievements";
  if (hash === "#skills") return "skills";
  return "overview";
};

export default function WorkspaceShell({ children }: WorkspaceShellProps) {
  const { pathname, hash } = useLocation();
  const activeKey = getActiveKey(pathname, hash);

  return (
    <div className="workspace-app min-h-screen bg-background text-foreground">
      <aside className="workspace-rail hidden lg:flex">
        <div className="workspace-rail__top">
          <Link to="/" className="workspace-identity" aria-label="Kawtar El Gaddi overview">
            <span className="workspace-avatar-wrap">
              <img src={kawtarProfile} alt="Kawtar El Gaddi" className="workspace-avatar" />
              <span className="workspace-status-dot" aria-label="Available for collaboration" />
            </span>
            <span className="workspace-path">&gt;_ kawtar-elg</span>
          </Link>

          <div className="workspace-profile-copy">
            <h1>Kawtar El Gaddi</h1>
            <p>Mobile Application Developer · UI/UX Designer</p>
          </div>

          <div className="workspace-rule" />

          <div className="workspace-status" aria-label="Status available">
            <span className="workspace-status-dot workspace-status-dot--inline" />
            <span>status / available</span>
          </div>
          <p className="workspace-bio">
            I blend web &amp; mobile development, graphic design, and robotics passion into useful, powerful solutions.
          </p>
        </div>

        <div className="workspace-rail__middle">
          <p className="workspace-eyebrow">workspace</p>
          <nav aria-label="Workspace navigation" className="workspace-nav">
            {navigation.map((item, index) => (
              <Link
                key={item.key}
                to={item.to}
                className={cn("workspace-nav__item", activeKey === item.key && "workspace-nav__item--active")}
              >
                <span className="workspace-nav__index">{String(index + 1).padStart(2, "0")}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="workspace-rail__bottom">
          <p className="workspace-eyebrow">connect</p>
          <div className="workspace-links">
            <a href="https://github.com/Kawtar-Elg" target="_blank" rel="noreferrer">
              <Github aria-hidden="true" /> github.com/Kawtar-Elg
            </a>
            <a href="https://www.linkedin.com/in/kawtar-el-gaddi-b659a8286" target="_blank" rel="noreferrer">
              <Linkedin aria-hidden="true" /> LinkedIn
            </a>
            <a href="mailto:kawtar.elgaddi@gmail.com">
              <Mail aria-hidden="true" /> kawtar.elgaddi@gmail.com
            </a>
          </div>
          <a href="/CV_EL_GADDI__KAWTAR.pdf" download="CV_EL_GADDI_KAWTAR.pdf" className="workspace-cv-link">
            <span>CV_EL_GADDI.pdf</span><Download aria-hidden="true" />
          </a>
        </div>
      </aside>

      <div className="workspace-mobile-bar lg:hidden">
        <Link to="/" className="workspace-mobile-bar__brand">
          <img src={kawtarProfile} alt="" className="workspace-mobile-bar__avatar" />
          <span>
            <strong>Kawtar El Gaddi</strong>
            <small>@Kawtar-Elg</small>
          </span>
        </Link>
        <div className="workspace-mobile-bar__actions">
          <Link to="/repositories" aria-label="Search repositories" className="workspace-icon-button">
            <Search aria-hidden="true" />
          </Link>
          <a href="/#collaboration" aria-label="Start a collaboration" className="workspace-icon-button workspace-icon-button--accent">
            <Plus aria-hidden="true" />
          </a>
        </div>
      </div>

      <main className="workspace-main">
        <div className="workspace-main__inner">{children}</div>
      </main>

      <Link to="/#collaboration" className="workspace-floating-cta hidden sm:inline-flex">
        <Plus aria-hidden="true" /> Let&apos;s Build <ArrowRight aria-hidden="true" />
      </Link>
    </div>
  );
}

export function WorkspaceHeader({ path, action }: { path: string; action?: React.ReactNode }) {
  return (
    <header className="workspace-header">
      <div className="workspace-header__path">
        <span className="workspace-header__prompt">&gt;_</span>
        <span>kawtar-elg</span>
        <span className="workspace-header__slash">/</span>
        <span className="workspace-header__current">{path}</span>
      </div>
      <div className="workspace-header__actions">{action}</div>
    </header>
  );
}

export function WorkspaceActionButton({ children, ...props }: React.ComponentProps<typeof Button>) {
  return <Button {...props} className={cn("workspace-button", props.className)}>{children}</Button>;
}
