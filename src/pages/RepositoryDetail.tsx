import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Check, ExternalLink, FileText, Github, GitBranch, Globe2, Play, Plus, Smartphone, Store } from "lucide-react";
import { useMemo, useState } from "react";
import WorkspaceShell, { WorkspaceActionButton, WorkspaceHeader } from "@/components/workspace/WorkspaceShell";
import WorkspaceTabs from "@/components/workspace/WorkspaceTabs";
import VideoModal from "@/components/workspace/VideoModal";
import LiveSiteModal from "@/components/workspace/LiveSiteModal";
import DeviceMockup from "@/components/DeviceMockup";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import PresentationGallery from "@/components/PresentationGallery";
import { useGitHubRepos } from "@/hooks/use-github";
import { findRepoByUrl, formatRelativeDate, getLanguageColor } from "@/lib/github";
import { getProjectSlug, getRepositoryRecords, type RepositoryRecord } from "@/lib/repository-utils";
import NotFound from "./NotFound";

export default function RepositoryDetail() {
  const { repositoryId } = useParams();
  const repositories = useMemo(getRepositoryRecords, []);
  const { data: githubRepos } = useGitHubRepos();
  const repository = repositories.find((item) => item.slug === repositoryId || getProjectSlug(item) === repositoryId);
  // Live GitHub record when the source link resolves to a real repository.
  const liveRepo = findRepoByUrl(githubRepos, repository?.githubUrl);
  const [videoOpen, setVideoOpen] = useState(false);
  const [liveOpen, setLiveOpen] = useState(false);
  const opensLiveSiteInternally = repository?.title === "Robotics Club CMC";

  if (!repository) return <NotFound />;

  // Built once so the table of contents can never link to a section that
  // this particular project does not render.
  const links = [
    repository.storeUrl && { icon: <Store aria-hidden="true" />, label: "Play Store", href: repository.storeUrl },
    repository.liveUrl && { icon: <Globe2 aria-hidden="true" />, label: "Live site", href: repository.liveUrl },
    repository.githubUrl && { icon: <Github aria-hidden="true" />, label: "GitHub", href: repository.githubUrl },
  ].filter(Boolean) as { icon: React.ReactNode; label: string; href: string }[];

  const sections = [
    { id: "overview", title: "Overview", content: <p>{repository.description}</p> },
    repository.presentationImages?.length && {
      id: "presentation",
      title: "Presentation",
      content: <PresentationGallery images={repository.presentationImages} projectTitle={repository.title} />,
    },
    repository.problem && { id: "problem", title: "Problem", content: <p>{repository.problem}</p> },
    repository.solution && { id: "solution", title: "Solution", content: <p>{repository.solution}</p> },
    repository.keyFeatures?.length && {
      id: "features",
      title: "Features",
      content: (
        <div className="workspace-feature-grid">
          {repository.keyFeatures.map((feature) => <div key={feature}><Check aria-hidden="true" /> {feature}</div>)}
        </div>
      ),
    },
    repository.role && { id: "role", title: "Role", content: <div className="workspace-role-note">{repository.role}</div> },
    {
      id: "technologies",
      title: "Technologies",
      content: (
        <div className="workspace-topic-row">
          {repository.technologies.map((technology) => <span className="workspace-topic" key={technology}>{technology}</span>)}
        </div>
      ),
    },
    repository.screens?.length && {
      id: "screens",
      title: "Screens",
      content: <ScreenshotGallery screens={repository.screens} projectTitle={repository.title} />,
    },
    repository.videoUrl && {
      id: "demo",
      title: "Demo",
      content: (
        <div className="workspace-inline-video">
          <div>
            <span className="workspace-video-status">internal viewer</span>
            <h3>{repository.title} demo · YouTube</h3>
            <p>Open the responsive demo viewer without leaving the portfolio.</p>
          </div>
          <button type="button" className="workspace-button" onClick={() => setVideoOpen(true)}><Play aria-hidden="true" /> Watch demo</button>
        </div>
      ),
    },
    links.length && {
      id: "links",
      title: "Links",
      content: (
        <div className="workspace-link-list">
          {links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              {link.icon} {link.label} <ExternalLink aria-hidden="true" /><span>{link.href}</span>
            </a>
          ))}
        </div>
      ),
    },
  ].filter(Boolean) as { id: string; title: string; content: React.ReactNode }[];

  return (
    <WorkspaceShell>
      <WorkspaceHeader
        path={`repositories / ${repository.slug}`}
        action={
          <>
            <span className="workspace-branch"><GitBranch aria-hidden="true" /> main</span>
            <WorkspaceActionButton asChild><Link to="/#collaboration">Open a collaboration</Link></WorkspaceActionButton>
          </>
        }
      />
      <WorkspaceTabs />
      <main className="workspace-detail">
        <div className="workspace-detail__toolbar">
          <Link to="/repositories" className="workspace-back-link"><ArrowLeft aria-hidden="true" /> Back to repositories</Link>
          <span className="workspace-detail__asset-state">asset: real</span>
        </div>

        <header className="workspace-detail__hero">
          <div className="workspace-detail__identity">
            {repository.logo ? <img src={repository.logo} alt={`${repository.title} logo`} /> : <span className="workspace-repo-glyph" aria-hidden="true">{repository.category === "Mobile" ? <Smartphone /> : <Globe2 />}</span>}
            <div>
              <div className="workspace-detail__title-row"><h1>{repository.title}</h1><span className="workspace-public">Public</span></div>
              <p>{repository.tagline}</p>
              <div className="workspace-detail__meta"><span className="workspace-language-dot" style={{ background: getLanguageColor(liveRepo?.language ?? repository.language) }} /> {repository.category} · {liveRepo?.language ?? repository.language} · {repository.topics.slice(0, 3).join(" / ")}</div>
            </div>
          </div>
          <div className="workspace-detail__actions">
            {repository.liveUrl && opensLiveSiteInternally ? <button type="button" className="workspace-button" onClick={() => setLiveOpen(true)}><Globe2 aria-hidden="true" /> Live site</button> : null}
            {repository.liveUrl && !opensLiveSiteInternally ? <a className="workspace-button" href={repository.liveUrl} target="_blank" rel="noreferrer"><Globe2 aria-hidden="true" /> Live site</a> : null}
            {repository.storeUrl && <a className="workspace-button" href={repository.storeUrl} target="_blank" rel="noreferrer"><Store aria-hidden="true" /> Google Play</a>}
            {repository.videoUrl && <button type="button" className="workspace-button workspace-button--ghost" onClick={() => setVideoOpen(true)}><Play aria-hidden="true" /> Watch demo</button>}
            {repository.githubUrl && <a className="workspace-button workspace-button--ghost" href={repository.githubUrl} target="_blank" rel="noreferrer"><Github aria-hidden="true" /> Source code</a>}
          </div>
        </header>

        <div className="workspace-filebar workspace-detail__filebar">
          <span className="workspace-filebar__label"><FileText aria-hidden="true" /> README.md</span>
          <span>/ {repository.title} case study</span>
        </div>

        <div className="workspace-detail__layout">
          <article className="workspace-detail__readme">
            <div className="workspace-toc">
              <p className="workspace-code-label">on this page</p>
              <div>{sections.map((section, index) => <a href={`#${section.id}`} key={section.id}>{String(index + 1).padStart(2, "0")} / {section.title}</a>)}</div>
            </div>
            {sections.map((section, index) => (
              <DetailSection key={section.id} id={section.id} index={String(index + 1).padStart(2, "0")} title={section.title}>
                {section.content}
              </DetailSection>
            ))}
            <div className="workspace-detail__footer"><div><strong>Have a product to build?</strong><span>Open a collaboration and start the next repository.</span></div><WorkspaceActionButton asChild><Link to="/#collaboration"><Plus aria-hidden="true" /> Open a collaboration</Link></WorkspaceActionButton></div>
          </article>

          <aside className="workspace-detail__media">
            <p className="workspace-code-label">product-preview / {repository.title.toLowerCase()}.png</p>
            <img className="workspace-detail__hero-image" src={repository.image} alt={`${repository.title} product presentation`} />
            {repository.screens?.length && <><div className="workspace-detail__media-heading"><span>screen preview</span><span>01—{String(Math.min(repository.screens.length, 4)).padStart(2, "0")}</span></div><div className="workspace-detail__screens">{repository.screens.slice(0, 4).map((screen, index) => <DeviceMockup key={screen} screen={screen} alt={`${repository.title} screen ${index + 1}`} size="sm" deviceType={repository.deviceType} />)}</div></>}
            <div className="workspace-detail__signals">
              <p className="workspace-code-label">repository signals</p>
              <div><span>type</span><strong>{repository.category} application</strong></div>
              <div><span>focus</span><strong>{repository.title === "AutoBrain" ? "AI diagnostics" : repository.tagline}</strong></div>
              {liveRepo && <div><span>github</span><strong className="workspace-text-green">{liveRepo.name}</strong></div>}
              {liveRepo && liveRepo.stars > 0 && <div><span>stars</span><strong>⭐ {liveRepo.stars}</strong></div>}
              {liveRepo && <div><span>last push</span><strong>{formatRelativeDate(liveRepo.pushedAt)}</strong></div>}
              <div><span>source</span><strong className="workspace-text-green">available</strong></div>
            </div>
          </aside>
        </div>
      </main>
      <VideoModal repository={repository as RepositoryRecord} open={videoOpen} onOpenChange={setVideoOpen} />
      <LiveSiteModal repository={repository as RepositoryRecord} open={liveOpen} onOpenChange={setLiveOpen} />
    </WorkspaceShell>
  );
}

function DetailSection({ id, index, title, children }: { id: string; index: string; title: string; children: React.ReactNode }) {
  return <section id={id} className="workspace-detail-section"><div className="workspace-detail-section__title"><span>{index}</span><h2>{title}</h2></div>{children}</section>;
}
