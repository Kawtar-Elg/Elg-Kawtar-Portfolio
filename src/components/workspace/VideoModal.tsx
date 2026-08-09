import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import type { RepositoryRecord } from "@/lib/repository-utils";
import { getYouTubeId } from "@/lib/repository-utils";

interface VideoModalProps {
  repository: RepositoryRecord | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function VideoModal({ repository, open, onOpenChange }: VideoModalProps) {
  const videoId = getYouTubeId(repository?.videoUrl);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="workspace-video-modal">
        <DialogHeader className="workspace-video-modal__header">
          <div className="workspace-video-modal__chrome" aria-hidden="true"><span /><span /><span /></div>
          <div>
            <DialogTitle>{repository?.title ?? "Project demo"}</DialogTitle>
            <DialogDescription>Internal media viewer · YouTube</DialogDescription>
          </div>
          <button type="button" onClick={() => onOpenChange(false)} className="workspace-icon-button" aria-label="Close video viewer"><X aria-hidden="true" /></button>
        </DialogHeader>
        <div className="workspace-video-frame">
          {videoId ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}`}
              title={`${repository?.title ?? "Project"} demo video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          ) : (
            <p>Demo unavailable for this repository.</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
