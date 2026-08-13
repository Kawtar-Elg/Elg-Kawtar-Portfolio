import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ExperienceModeProvider, useExperienceMode } from "./context/ExperienceModeContext";
import Index from "./pages/Index";
import Repositories from "./pages/Repositories";
import RepositoryDetail from "./pages/RepositoryDetail";
import DesignerExperience from "./pages/DesignerExperience";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function ModeRouter() {
  const { mode } = useExperienceMode();

  if (mode === "designer") {
    return <DesignerExperience />;
  }

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/repositories" element={<Repositories />} />
      <Route path="/repositories/:repositoryId" element={<RepositoryDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
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