import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import ExperienceSwitcher from "@/components/experience/ExperienceSwitcher";
import WorkspaceShell, { WorkspaceActionButton, WorkspaceHeader } from "@/components/workspace/WorkspaceShell";
import WorkspaceTabs from "@/components/workspace/WorkspaceTabs";
import ProfileReadme from "@/components/workspace/ProfileReadme";
import RepositoryCard from "@/components/workspace/RepositoryCard";
import ActivityGraph from "@/components/workspace/ActivityGraph";
import AchievementsPanel from "@/components/workspace/AchievementsPanel";
import TechStackTable from "@/components/workspace/TechStackTable";
import CapabilityAccordion from "@/components/workspace/CapabilityAccordion";
import CollaborationForm from "@/components/workspace/CollaborationForm";
import VideoModal from "@/components/workspace/VideoModal";
import LiveSiteModal from "@/components/workspace/LiveSiteModal";
import { getRepositoryRecords, type RepositoryRecord } from "@/lib/repository-utils";

export default function Index() {
  const { hash } = useLocation();
  const repositories = useMemo(getRepositoryRecords, []);
  const featured = repositories.filter((repository) => repository.featured);
  const [videoRepository, setVideoRepository] = useState<RepositoryRecord | null>(null);
  const [liveRepository, setLiveRepository] = useState<RepositoryRecord | null>(null);

  useEffect(() => {
    if (!hash) return;

    const target = document.getElementById(hash.slice(1));
    if (!target) return;

    const frame = window.requestAnimationFrame(() => {
      target.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "start",
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [hash]);

  return (
    <WorkspaceShell>
      <WorkspaceHeader path="README.md" action={<><Link to="/repositories" className="workspace-header-search"><Search aria-hidden="true" /> Find a repository... <kbd>/</kbd></Link><WorkspaceActionButton asChild><a href="#collaboration">Open a collaboration</a></WorkspaceActionButton></>} />
      <WorkspaceTabs />
      <ExperienceSwitcher />
      <div className="workspace-overview-stack">
        <ProfileReadme />
        <section id="repositories" aria-labelledby="pinned-title" className="workspace-section">
          <div className="workspace-section-heading"><div><p className="workspace-code-label">/repositories</p><h2 id="pinned-title">Pinned repositories</h2><p>Selected product work, presented as live project evidence.</p></div><Link to="/repositories" className="workspace-inline-link">View all repositories <ArrowUpRight aria-hidden="true" /></Link></div>
          <div className="workspace-pinned-grid">{featured.map((repository, index) => <RepositoryCard key={repository.id} repository={repository} layout={index === 0 ? "featured" : index === 1 ? "featured" : "compact"} previewMode="phone-pair" onWatchDemo={setVideoRepository} onOpenLiveSite={repository.title === "Robotics Club CMC" ? setLiveRepository : undefined} />)}</div>
        </section>
        <div className="workspace-dual-grid"><ActivityGraph /><AchievementsPanel /></div>
        <TechStackTable />
        <CapabilityAccordion repositories={repositories} />
        <CollaborationForm />
      </div>
      <VideoModal repository={videoRepository} open={Boolean(videoRepository)} onOpenChange={(open) => !open && setVideoRepository(null)} />
      <LiveSiteModal repository={liveRepository} open={Boolean(liveRepository)} onOpenChange={(open) => !open && setLiveRepository(null)} />
    </WorkspaceShell>
  );
}
