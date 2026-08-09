import WorkspaceShell, { WorkspaceHeader, WorkspaceActionButton } from "@/components/workspace/WorkspaceShell";
import WorkspaceTabs from "@/components/workspace/WorkspaceTabs";
import RepositoryExplorer from "@/components/workspace/RepositoryExplorer";

export default function Repositories() {
  return <WorkspaceShell><WorkspaceHeader path="repositories" action={<WorkspaceActionButton asChild><a href="/#collaboration">Start a collaboration</a></WorkspaceActionButton>} /><WorkspaceTabs /><RepositoryExplorer /></WorkspaceShell>;
}
