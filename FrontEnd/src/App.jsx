import { Route, Router } from "react-router";
import "./App.css";
import { Routes } from "react-router";
import Home from "./pages/Home";
import AppLayout from "./components/AppLayout";
import DashBoard from "./pages/DashBoard";
import Bookings from "./pages/Bookings";
import LandingPage from "./pages/LandingPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Cabins from "./pages/Cabins";
import { Toaster } from "react-hot-toast";
import Settings from "./pages/Settings";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/cabins" element={<Cabins />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
