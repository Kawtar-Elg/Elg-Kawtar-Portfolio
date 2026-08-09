import type { RepositoryRecord } from "@/lib/repository-utils";
import DeviceMockup from "@/components/DeviceMockup";

interface RepositoryPreviewProps {
  repository: RepositoryRecord;
  compact?: boolean;
}

export default function RepositoryPreview({ repository, compact = false }: RepositoryPreviewProps) {
  if (repository.screens?.length && compact) {
    return (
      <div className="workspace-repository-preview workspace-repository-preview--device">
        <DeviceMockup screen={repository.screens[0]} alt={`${repository.title} application screen`} size="sm" deviceType={repository.deviceType} />
      </div>
    );
  }

  return (
    <div className="workspace-repository-preview">
      <div className="workspace-preview-bar"><span>preview / {repository.slug}</span><span className="workspace-preview-dot" /></div>
      <img src={repository.image} alt={`${repository.title} project presentation`} loading="lazy" />
    </div>
  );
}
