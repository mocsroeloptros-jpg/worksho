import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import WorkerDashboard from "./pages/WorkerDashboard";
import AdminReportsPage from "./pages/AdminReportsPage";
import AdminWorkersPage from "./pages/AdminWorkersPage";
import AdminServicesPage from "./pages/AdminServicesPage";
import AdminCalendarPage from "./pages/AdminCalendarPage";
import AdminSettingsPage from "./pages/AdminSettingsPage";
import WorkerSchedulePage from "./pages/WorkerSchedulePage"; // New import
import WorkerServicesPage from "./pages/WorkerServicesPage"; // New import
import WorkerEarningsPage from "./pages/WorkerEarningsPage"; // New import
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
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/worker" element={<WorkerDashboard />} />
          <Route path="/admin/reports" element={<AdminReportsPage />} />
          <Route path="/admin/workers" element={<AdminWorkersPage />} />
          <Route path="/admin/services" element={<AdminServicesPage />} />
          <Route path="/admin/calendar" element={<AdminCalendarPage />} />
          <Route path="/admin/settings" element={<AdminSettingsPage />} />
          <Route path="/worker/schedule" element={<WorkerSchedulePage />} /> {/* New route */}
          <Route path="/worker/services" element={<WorkerServicesPage />} /> {/* New route */}
          <Route path="/worker/earnings" element={<WorkerEarningsPage />} /> {/* New route */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;