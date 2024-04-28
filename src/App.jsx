import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Applayout from "./ui/Applayout";
import Earth from "./pages/Earth";
import Home from "./pages/Home";
import { AstronomyContextProvider } from "./Context";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 100 * (60 * 100),
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <AstronomyContextProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route element={<Applayout />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/earth" element={<Earth />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AstronomyContextProvider>
    </QueryClientProvider>
  );
}

export default App;
