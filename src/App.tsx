import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Homepage from "./pages/Homepage";
import Tarieven from "./pages/Tarieven";
import Over from "./pages/Over";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const SitemapRedirect = () => {
  useEffect(() => {
    window.location.href = '/sitemap.xml';
  }, []);
  return null;
};


const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/tarieven" element={<Tarieven />} />
            <Route path="/over" element={<Over />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sitemap.xml" element={<SitemapRedirect />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
