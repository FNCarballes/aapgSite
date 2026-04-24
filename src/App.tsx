import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ElChapter from "./pages/ElChapter";
import Biblioteca from "./pages/Biblioteca";
import Industria from "./pages/IBA";
import Eventos from "./pages/Eventos";
import Comunidad from "./pages/Comunidad";
import Noticias from "./pages/Noticias";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/el-chapter" element={<ElChapter />} />
          <Route path="/biblioteca" element={<Biblioteca />} />
          <Route path="/iba" element={<Industria />} />
          <Route path="/eventos" element={<Eventos />} />
          {/* <Route path="/comunidad" element={<Comunidad />} /> */}
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
