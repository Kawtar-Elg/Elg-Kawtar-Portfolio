import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ExperienceModeProvider, useExperienceMode } from "./context/ExperienceModeContext";
import Index from "./pages/Index";

// The secondary routes and the whole designer experience are split out of the
// initial bundle — the overview is what visitors land on.
const Repositories = lazy(() => import("./pages/Repositories"));
const RepositoryDetail = lazy(() => import("./pages/RepositoryDetail"));
const DesignerExperience = lazy(() => import("./pages/DesignerExperience"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

function RouteFallback() {
  return (
    <div className="workspace-route-fallback" role="status" aria-live="polite">
      <span className="workspace-route-fallback__prompt">&gt;_</span> loading workspace…
    </div>
  );
}

function ModeRouter() {
  const { mode } = useExperienceMode();

  if (mode === "designer") {
    return (
      <Suspense fallback={<RouteFallback />}>
        <DesignerExperience />
      </Suspense>
    );
  }

  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/repositories" element={<Repositories />} />
        <Route path="/repositories/:repositoryId" element={<RepositoryDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ExperienceModeProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ModeRouter />
        </BrowserRouter>
      </ExperienceModeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
