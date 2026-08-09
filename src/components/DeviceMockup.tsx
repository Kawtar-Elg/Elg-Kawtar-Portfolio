import { cn } from "@/lib/utils";

interface DeviceMockupProps {
  screen: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
  deviceType?: "iphone" | "android";
  className?: string;
}

const sizeMap = {
  sm: "workspace-device--sm",
  md: "workspace-device--md",
  lg: "workspace-device--lg",
};

export default function DeviceMockup({ screen, alt = "App screenshot", size = "md", deviceType = "iphone", className }: DeviceMockupProps) {
  return (
    <div className={cn("workspace-device", sizeMap[size], deviceType === "android" ? "workspace-device--android" : "workspace-device--iphone", className)}>
      <div className="workspace-device__speaker" aria-hidden="true" />
      <div className="workspace-device__screen">
        <img src={screen} alt={alt} loading="lazy" />
      </div>
      <div className="workspace-device__home-indicator" aria-hidden="true" />
    </div>
  );
}
