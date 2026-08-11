import type { RepositoryRecord } from "@/lib/repository-utils";
import DeviceMockup from "@/components/DeviceMockup";

export type RepositoryPreviewMode = "presentation" | "phone-pair";

interface RepositoryPreviewProps {
  repository: RepositoryRecord;
  compact?: boolean;
  previewMode?: RepositoryPreviewMode;
}

export default function RepositoryPreview({ repository, compact = false, previewMode = "presentation" }: RepositoryPreviewProps) {
  if (previewMode === "phone-pair" && repository.screens?.length) {
    return (
      <div className={compact ? "workspace-repository-preview workspace-repository-preview--devices workspace-repository-preview--devices-compact" : "workspace-repository-preview workspace-repository-preview--devices"}>
        <div className="workspace-device-pair" aria-label={`${repository.title} application screen previews`}>
          {repository.screens.slice(0, 2).map((screen, index) => (
            <DeviceMockup
              key={screen}
              screen={screen}
              alt={`${repository.title} application screen ${index + 1}`}
              size={compact ? "md" : "lg"}
              deviceType={repository.deviceType}
            />
          ))}
        </div>
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
