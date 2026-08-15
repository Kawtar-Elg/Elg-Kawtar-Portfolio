import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, Plus, Search } from "lucide-react";
import kawtarProfile from "@/assets/kawtar-profile.jpeg";
import Magnetic from "@/components/motion/Magnetic";
import ScrollProgress from "@/components/ScrollProgress";
import { Button } from "@/components/ui/button";
import { useGitHubProfile } from "@/hooks/use-github";
import { CONTACT_EMAIL, GITHUB_URL, GITHUB_USERNAME, LINKEDIN_URL } from "@/lib/github";
import { EASE_OUT, useMotionEnabled } from "@/lib/motion";
import { getSectionIds, NAVIGATION, type NavItem, type WorkspaceVariant } from "@/lib/workspace-nav";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

interface WorkspaceShellProps {
  children: React.ReactNode;
  variant?: WorkspaceVariant;
}

/**
 * Home link for the brand marks. The designer experience is rendered
 * outside the router, so there it scrolls to the top of the page instead
 * of navigating to a route that would not change what is displayed.
 */
function IdentityLink({
  isDesigner,
  className,
  label,
  children,
}: {
  isDesigner: boolean;
  className: string;
  label?: string;
  children: React.ReactNode;
}) {
  if (isDesigner) {
    return (
      <a href="#readme" className={className} aria-label={label}>
        {children}
      </a>
    );
  }

  return (
    <Link to="/" className={className} aria-label={label}>
      {children}
    </Link>
  );
}

/**
 * Link to the collaboration form. In the developer experience the form
 * lives on the overview route, so this routes client-side instead of
 * using a bare `/#collaboration` href, which would reload the whole app.
 */
export function CollaborationLink({
  isDesigner,
  className,
  children,
  ...props
}: {
  isDesigner: boolean;
  className?: string;
  children: React.ReactNode;
} & React.AriaAttributes) {
  if (isDesigner) {
    return (
      <a href="#collaboration" className={className} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link to="/#collaboration" className={className} {...props}>
      {children}
    </Link>
  );
}

/**
 * Resolves the highlighted entry: the route wins when it is not the
 * overview, otherwise the section currently scrolled into view.
 */
export const resolveActiveKey = (
  items: NavItem[],
  pathname: string,
  activeSection: string | null,
  fallbackKey: string
) => {
  if (pathname.startsWith("/repositories")) {
    const route = items.find((item) => item.to.startsWith("/repositories"));
    if (route) return route.key;
  }

  const bySection = activeSection && items.find((item) => item.section === activeSection);
  return bySection ? bySection.key : fallbackKey;
};

export default function WorkspaceShell({ children, variant = "developer" }: WorkspaceShellProps) {
  const { pathname } = useLocation();
  const navigation = NAVIGATION[variant];
  const activeSection = useActiveSection(getSectionIds(navigation));
  const activeKey = resolveActiveKey(navigation, pathname, activeSection, navigation[0].key);
  const { data: profile } = useGitHubProfile();
  const [avatarFailed, setAvatarFailed] = useState(false);
  const enabled = useMotionEnabled();
  const avatarSrc = avatarFailed ? kawtarProfile : profile.avatarUrl;

  const isDesigner = variant === "designer";
  const workspaceLabel = isDesigner ? "design" : "workspace";
  const railPath = isDesigner ? `${GITHUB_USERNAME.toLowerCase()} / design` : GITHUB_USERNAME.toLowerCase();

  return (
    <div
      className={cn(
        "workspace-app min-h-screen bg-background text-foreground",
        isDesigner && "workspace-app--designer"
      )}
    >
      <ScrollProgress />
      <div className="workspace-aurora" aria-hidden="true" />

      <aside className="workspace-rail">
        <div className="workspace-rail__top">
          <IdentityLink isDesigner={isDesigner} className="workspace-identity" label="Kawtar El Gaddi overview">
            <span className="workspace-avatar-wrap">
              <img
                src={avatarSrc}
                onError={() => setAvatarFailed(true)}
                alt="Kawtar El Gaddi"
                className="workspace-avatar"
              />
              <span className="workspace-status-dot" aria-label="Available for collaboration" />
            </span>
            <span className="workspace-path">&gt;_ {railPath}</span>
          </IdentityLink>

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
            I blend web &amp; mobile development, graphic design, and robotics passion into useful, powerful
            solutions.
          </p>
          <p className="workspace-rail__moon">🌚 based in {profile.location}</p>
        </div>

        <div className="workspace-rail__middle">
          <p className="workspace-eyebrow">{workspaceLabel}</p>
          <nav aria-label="Workspace navigation" className="workspace-nav">
            {navigation.map((item, index) => {
              const className = cn(
                "workspace-nav__item",
                activeKey === item.key && "workspace-nav__item--active"
              );
              const inner = (
                <>
                  <span className="workspace-nav__index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="workspace-nav__emoji" aria-hidden="true">
                    {item.emoji}
                  </span>
                  <span>{item.label}</span>
                </>
              );

              return (
                <motion.div
                  key={item.key}
                  initial={enabled ? { opacity: 0, x: -8 } : undefined}
                  animate={enabled ? { opacity: 1, x: 0 } : undefined}
                  transition={{ duration: 0.35, ease: EASE_OUT, delay: 0.05 * index }}
                >
                  {item.to.startsWith("#") ? (
                    <a href={item.to} className={className}>
                      {inner}
                    </a>
                  ) : (
                    <Link to={item.to} className={className}>
                      {inner}
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </nav>
        </div>

        <div className="workspace-rail__bottom">
          <p className="workspace-eyebrow">connect</p>
          <div className="workspace-links">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">
              <Github aria-hidden="true" /> github.com/{GITHUB_USERNAME}
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
              <Linkedin aria-hidden="true" /> LinkedIn
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`}>
              <Mail aria-hidden="true" /> {CONTACT_EMAIL}
            </a>
          </div>
          <a href="/CV_EL_GADDI__KAWTAR.pdf" download="CV_EL_GADDI_KAWTAR.pdf" className="workspace-cv-link">
            <span>CV_EL_GADDI.pdf</span>
            <Download aria-hidden="true" />
          </a>
        </div>
      </aside>

      <div className="workspace-mobile-bar">
        <IdentityLink isDesigner={isDesigner} className="workspace-mobile-bar__brand">
          <img src={avatarSrc} onError={() => setAvatarFailed(true)} alt="" className="workspace-mobile-bar__avatar" />
          <span>
            <strong>Kawtar El Gaddi</strong>
            <small>@{GITHUB_USERNAME}</small>
          </span>
        </IdentityLink>
        <div className="workspace-mobile-bar__actions">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Open GitHub profile"
            className="workspace-icon-button"
          >
            <Github aria-hidden="true" />
          </a>
          {!isDesigner && (
            <Link to="/repositories" aria-label="Search repositories" className="workspace-icon-button">
              <Search aria-hidden="true" />
            </Link>
          )}
          <CollaborationLink
            isDesigner={isDesigner}
            aria-label="Start a collaboration"
            className="workspace-icon-button workspace-icon-button--accent"
          >
            <Plus aria-hidden="true" />
          </CollaborationLink>
        </div>
      </div>

      <main className="workspace-main">
        <div className="workspace-main__inner">{children}</div>
      </main>

      <Magnetic className="workspace-floating-cta-wrap hidden sm:inline-flex">
        <CollaborationLink isDesigner={isDesigner} className="workspace-floating-cta">
          <Plus aria-hidden="true" /> Let&apos;s Build <ArrowRight aria-hidden="true" />
        </CollaborationLink>
      </Magnetic>
    </div>
  );
}

export function WorkspaceHeader({
  path,
  action,
  variant = "developer",
}: {
  path: string;
  action?: React.ReactNode;
  variant?: WorkspaceVariant;
}) {
  return (
    <header className="workspace-header">
      <div className="workspace-header__path">
        <span className="workspace-header__prompt">&gt;_</span>
        <span>{GITHUB_USERNAME.toLowerCase()}</span>
        {variant === "designer" && (
          <>
            <span className="workspace-header__slash">/</span>
            <span>design</span>
          </>
        )}
        <span className="workspace-header__slash">/</span>
        <span className="workspace-header__current">{path}</span>
      </div>
      <div className="workspace-header__actions">{action}</div>
    </header>
  );
}

export function WorkspaceActionButton({ children, ...props }: React.ComponentProps<typeof Button>) {
  return (
    <Button {...props} className={cn("workspace-button", props.className)}>
      {children}
    </Button>
  );
}
