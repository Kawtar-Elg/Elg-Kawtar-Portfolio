import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const tabs = [
  { label: "Overview", to: "/" },
  { label: "Repositories", to: "/repositories" },
  { label: "Activity", to: "/#activity" },
  { label: "Achievements", to: "/#achievements" },
  { label: "Skills", to: "/#skills" },
];

export default function WorkspaceTabs() {
  const { pathname, hash } = useLocation();
  const activeLabel = pathname.startsWith("/repositories")
    ? "Repositories"
    : tabs.find((tab) => tab.to === `/${hash}`)?.label ?? "Overview";

  return (
    <nav className="workspace-tabs" aria-label="Portfolio sections">
      {tabs.map((tab) => (
        <Link
          key={tab.label}
          to={tab.to}
          aria-current={activeLabel === tab.label ? "page" : undefined}
          className={cn("workspace-tab", activeLabel === tab.label && "workspace-tab--active")}
        >
          {tab.label}
        </Link>
      ))}
    </nav>
  );
}
