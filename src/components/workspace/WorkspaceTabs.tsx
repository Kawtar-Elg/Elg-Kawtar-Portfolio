import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { resolveActiveKey } from "@/components/workspace/WorkspaceShell";
import { useActiveSection } from "@/hooks/use-active-section";
import { useMotionEnabled } from "@/lib/motion";
import { getSectionIds, TABS, type WorkspaceVariant } from "@/lib/workspace-nav";
import { cn } from "@/lib/utils";

export default function WorkspaceTabs({ variant = "developer" }: { variant?: WorkspaceVariant }) {
  const { pathname } = useLocation();
  const enabled = useMotionEnabled();
  const tabs = TABS[variant];
  const activeSection = useActiveSection(getSectionIds(tabs));
  const activeKey = resolveActiveKey(tabs, pathname, activeSection, tabs[0].key);

  return (
    <nav className="workspace-tabs" aria-label="Portfolio sections">
      {tabs.map((tab) => {
        const isActive = activeKey === tab.key;
        const inner = (
          <>
            <span className="workspace-tab__emoji" aria-hidden="true">
              {tab.emoji}
            </span>
            {tab.label}
            {isActive &&
              (enabled ? (
                <motion.span
                  layoutId="workspace-tab-underline"
                  className="workspace-tab__underline"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              ) : (
                <span className="workspace-tab__underline" />
              ))}
          </>
        );

        const className = cn("workspace-tab", isActive && "workspace-tab--active");

        return tab.to.startsWith("#") ? (
          <a
            key={tab.label}
            href={tab.to}
            aria-current={isActive ? "page" : undefined}
            className={className}
          >
            {inner}
          </a>
        ) : (
          <Link
            key={tab.label}
            to={tab.to}
            aria-current={isActive ? "page" : undefined}
            className={className}
          >
            {inner}
          </Link>
        );
      })}
    </nav>
  );
}
