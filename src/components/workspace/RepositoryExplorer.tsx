import { useMemo, useState } from "react";
import { Info, Search, SearchX, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getAvailableTopics, getRepositoryRecords, repositoryMatches, sortRepositories, type RepositoryCategory, type RepositoryRecord, type RepositorySort } from "@/lib/repository-utils";
import RepositoryCard from "./RepositoryCard";
import VideoModal from "./VideoModal";
import LiveSiteModal from "./LiveSiteModal";

const fixedTopics = ["flutter", "dart", "kotlin", "android", "firebase", "ui-ux", "ai", "gemini", "mobile-development"];

export default function RepositoryExplorer() {
  const repositories = useMemo(getRepositoryRecords, []);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<RepositoryCategory>("All");
  const [topic, setTopic] = useState("All");
  const [sort, setSort] = useState<RepositorySort>("Featured");
  const [videoRepository, setVideoRepository] = useState<RepositoryRecord | null>(null);
  const [liveRepository, setLiveRepository] = useState<RepositoryRecord | null>(null);
  const allTopics = useMemo(() => [...new Set([...fixedTopics, ...getAvailableTopics(repositories)])], [repositories]);

  const filteredRepositories = useMemo(() => {
    const filtered = repositories.filter((repository) => {
      const matchesCategory = category === "All" || repository.category === category;
      const matchesTopic = topic === "All" || repository.topics.includes(topic);
      return matchesCategory && matchesTopic && repositoryMatches(repository, query);
    });
    return sortRepositories(filtered, sort);
  }, [category, query, repositories, sort, topic]);

  const clearFilters = () => { setQuery(""); setCategory("All"); setTopic("All"); setSort("Featured"); };

  return (
    <>
      <section className="workspace-explorer" aria-labelledby="repositories-title">
        <div className="workspace-page-heading"><div><p className="workspace-code-label">~/kawtar-elg/portfolio</p><h1 id="repositories-title">Repositories</h1><p>Projects I have designed, built, integrated, tested, and shipped.</p></div><div className="workspace-page-heading__actions"><span className="workspace-count">{filteredRepositories.length} repositories</span><Select value={sort} onValueChange={(value) => setSort(value as RepositorySort)}><SelectTrigger className="workspace-select"><SlidersHorizontal aria-hidden="true" /><SelectValue /></SelectTrigger><SelectContent><SelectItem value="Featured">Featured</SelectItem><SelectItem value="Recent">Recent</SelectItem><SelectItem value="Technology">Technology</SelectItem><SelectItem value="Category">Category</SelectItem></SelectContent></Select></div></div>
        <div className="workspace-explorer-toolbar"><div className="workspace-search"><Search aria-hidden="true" /><Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Find a repository..." aria-label="Find a repository" /></div><div className="workspace-filter-strip" aria-label="Repository filters"><button type="button" className={category === "All" ? "workspace-filter workspace-filter--active" : "workspace-filter"} onClick={() => setCategory("All")}>All</button>{["Mobile", "Web", "Other"].map((item) => <button type="button" key={item} className={category === item ? "workspace-filter workspace-filter--active" : "workspace-filter"} onClick={() => setCategory(item as RepositoryCategory)}>{item}</button>)}{allTopics.map((item) => <button type="button" key={item} className={topic === item ? "workspace-filter workspace-filter--topic workspace-filter--active" : "workspace-filter workspace-filter--topic"} onClick={() => setTopic(topic === item ? "All" : item)}>{item}</button>)}</div></div>
        <div className="workspace-explorer-layout"><div className="workspace-repository-list">{filteredRepositories.length ? filteredRepositories.map((repository, index) => <RepositoryCard key={repository.id} repository={repository} layout={index % 3 === 0 ? "featured" : "list"} onWatchDemo={setVideoRepository} onOpenLiveSite={repository.title === "Robotics Club CMC" ? setLiveRepository : undefined} />) : <div className="workspace-empty-state"><SearchX aria-hidden="true" /><p>No repositories match this filter.</p><button type="button" onClick={clearFilters}>Clear filters</button></div>}</div><aside className="workspace-explorer-sidebar"><div className="workspace-panel workspace-repo-map"><p className="workspace-code-label">repository map</p>{["Mobile", "Web", "Other"].map((item) => <div key={item}><span>{item}</span><strong>{repositories.filter((repository) => repository.category === item).length}</strong></div>)}<div><span>Primary language</span><strong className="workspace-text-green">Kotlin</strong></div></div><div className="workspace-panel"><p className="workspace-code-label">browse by topic</p><div className="workspace-topic-row">{allTopics.slice(0, 9).map((item) => <button type="button" key={item} className="workspace-topic" onClick={() => setTopic(item)}>{item}</button>)}</div></div><div className="workspace-panel workspace-explorer-note"><p><Info className="workspace-text-green" aria-hidden="true" /> Project popularity metrics are intentionally omitted. Browse the work through its real descriptions, technologies, screens, and links.</p></div></aside></div>
      </section>
      <VideoModal repository={videoRepository} open={Boolean(videoRepository)} onOpenChange={(open) => !open && setVideoRepository(null)} />
      <LiveSiteModal repository={liveRepository} open={Boolean(liveRepository)} onOpenChange={(open) => !open && setLiveRepository(null)} />
    </>
  );
}
