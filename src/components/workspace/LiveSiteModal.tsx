import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, X } from "lucide-react";
import type { RepositoryRecord } from "@/lib/repository-utils";

interface LiveSiteModalProps {
  repository: RepositoryRecord | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function LiveSiteModal({ repository, open, onOpenChange }: LiveSiteModalProps) {
  const liveUrl = repository?.liveUrl;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="workspace-video-modal workspace-live-modal">
        <DialogHeader className="workspace-video-modal__header">
          <div className="workspace-video-modal__chrome" aria-hidden="true"><span /><span /><span /></div>
          <div>
            <DialogTitle>{repository?.title ?? "Live project"}</DialogTitle>
            <DialogDescription>Internal live-site viewer · {liveUrl ?? "No live URL"}</DialogDescription>
          </div>
          <button type="button" onClick={() => onOpenChange(false)} className="workspace-icon-button" aria-label="Close live site viewer"><X aria-hidden="true" /></button>
        </DialogHeader>
        <div className="workspace-video-frame">
          {liveUrl ? (
            <iframe
              src={liveUrl}
              title={`${repository?.title ?? "Project"} live website`}
              allow="fullscreen"
              loading="lazy"
            />
          ) : (
            <p>Live website unavailable for this repository.</p>
          )}
        </div>
        {liveUrl && (
          <div className="workspace-live-modal__fallback">
            <span>Embedded preview · the workspace stays open</span>
            <a href={liveUrl} target="_blank" rel="noreferrer">
              Open in new tab <ExternalLink aria-hidden="true" />
            </a>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
