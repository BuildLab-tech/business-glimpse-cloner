
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import LocationPage from "./pages/LocationPage";
import BusinessInfoPage from "./pages/BusinessInfoPage";
import BusinessNamePage from "./pages/BusinessNamePage";
import WebsiteBuilderPage from "./pages/WebsiteBuilderPage";
import SuccessPage from "./pages/SuccessPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/register/business-info" replace />} />
          <Route path="/register/business-info" element={<BusinessInfoPage />} />
          <Route path="/register/location" element={<LocationPage />} />
          <Route path="/register/business-name" element={<BusinessNamePage />} />
          <Route path="/register/building" element={<WebsiteBuilderPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
